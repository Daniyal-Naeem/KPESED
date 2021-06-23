import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
import {GOOGLE_MAP_KEY} from '../consts/googleMapKey';
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../consts/imagePath';
import {locationPermission, getCurrentLocation} from '../helper/helperFunction';

const screen = Dimensions.get('screen');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const ChooseLocation = () => {
  const mapRef = useRef();

  const [state, setState] = useState({
    curLoc: {
      latitude: 34.0151,
      longitude: 71.5249,
    },
    destinationCords: {},
    coordinate: new AnimatedRegion({
      latitude: 34.0151,
      longitude: 71.5249,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  });

  const {curLoc, destinationCords, coordinate} = state;

  useEffect(() => {
    getLiveLocation();
  }, []);

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude} = await getCurrentLocation();
      console.log('get live location after 4 second');
      animate(latitude, longitude);
      setState({
        ...state,
        curLoc: {latitude, longitude},
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      });
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
        getLiveLocation()
    }, 4000);
    return () => clearInterval(interval)
})
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            ...curLoc,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <Marker.Animated
            coordinate={coordinate}
            image={imagePath.icCurLoc}
          />

          {Object.keys(destinationCords).length > 0 && (
            <Marker
              coordinate={destinationCords}
              image={imagePath.icGreenMarker}
            />
          )}
          {Object.keys(destinationCords).length > 0 && (
            <MapViewDirections
              origin={curLoc}
              destination={destinationCords}
              apikey={GOOGLE_MAP_KEY}
              strokeWidth={6}
              strokeColor="red"
              optimizeWaypoints={true}
              onStart={params => {
                console.log(
                  `Started routing between "${params.origin}" and "${params.destination}"`,
                );
              }}
              onReady={result => {
                console.log(`Distance: ${result.distance} km`);
                console.log(`Duration: ${result.duration} min.`);

                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 30,
                    bottom: 300,
                    left: 30,
                    top: 100,
                  },
                });
              }}
              onError={errorMessage => {
                // console.log('GOT AN ERROR');
              }}
            />
          )}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
});

export default ChooseLocation;
