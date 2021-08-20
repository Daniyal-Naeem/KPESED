import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {GOOGLE_MAP_KEY} from '../consts/googleMapKey';
import MapViewDirections from 'react-native-maps-directions';
import {locationPermission, getCurrentLocation} from '../helper/helperFunction'

const ChooseLocation = () => {
  const mapRef = useRef();
  const [state, setState] = useState({
    pickupCords: {
      latitude: 34.007141,
      longitude: 71.535967,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropCords: {
      latitude: 34.014647,
      longitude: 71.566089,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude} = await getCurrentLocation();
      console.log('get live location after 4 second');
      setState({
        ...state,
        curLoc: {latitude, longitude},
      });
      console.log('source', pickupCords, 'destination', dropCords);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation();
    }, 4000);
    return () => clearInterval(interval);
  });

  const {pickupCords, dropCords} = state;
  
  const locationArray=[
    {
      latitude: 34.007141,
      longitude: 71.535967,
    },
    {
      latitude:34.008246,
      longitude: 71.536918
    },
    {
      latitude: 34.013635, 
      longitude: 71.541328
    },
    {
      latitude: 34.014660,
      longitude: 71.553116,
    },
    {
      latitude: 34.014647, 
      longitude:71.564062
    },
    {
      latitude: 34.014647,
      longitude: 71.566089,
    },
  ]
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <MapView ref={mapRef} style={styles.map} initialRegion={pickupCords}>
          <Marker coordinate={pickupCords} />
          <Marker coordinate={dropCords} />
          <MapViewDirections
            origin={pickupCords}
            destination={dropCords}
            waypoints={locationArray}
            apikey={GOOGLE_MAP_KEY}
            strokeWidth={6}
            strokeColor="hotpink"
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
  bottomCard: {
    backgroundColor: 'white',
    width: '100%',
    padding: 30,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
  inpuStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    marginTop: 16,
  },
});

export default ChooseLocation;