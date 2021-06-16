import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import COLORS from '../consts/colors';
import places from '../consts/places';
import {Surface} from 'react-native-paper';
import AntIcon from 'react-native-vector-icons/AntDesign';
const width = Dimensions.get('window').width / 2 - 30;
const HomeScreen = ({navigation}) => {
  const Card = ({place}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', place)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
          </View>

          <View
            style={{
              height: 40,
              alignItems: 'center',
            }}>
            <Image
              source={place.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntIcon name="setting" size={50} />
            </View>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {place.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.green} />
      <View style={style.header}>
        <Text
          style={{color: COLORS.white, marginLeft: 5}}
          onpress={() => navigation.navigate('AllPostsScreen', place)}>
          eTransfer
        </Text>
        <Text style={{color: COLORS.white, marginLeft: 5}}>Sign In</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.green,
            height: 120,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={style.headerTitle}>KPESED</Text>
            <Text style={style.headerTitle}>Tranfer with us</Text>
          </View>
        </View>
        <Surface style={style.surface}>
          <View>
            <Text style={style.bodyTitle}>KPESED - eTransfer</Text>
          </View>
          <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 10,
              marginLeft: 15,
              marginRight: 15,
              paddingBottom: 50,
            }}
            numColumns={2}
            data={places}
            renderItem={({item}) => {
              return <Card place={item} />;
            }}
          />
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.green,
  },
  headerTitle: {
    color: COLORS.orange,
    fontWeight: 'bold',
    fontSize: 23,
  },
  bodyTitle: {
    marginLeft: 30,
    color: COLORS.green,
    fontWeight: 'bold',
    fontSize: 23,
  },
  card: {
    height: 200,
    backgroundColor: COLORS.secondary,
    width,
    marginHorizontal: 2,
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
  },
  surface: {
    borderRadius: 30,
    paddingTop: 10,
    height: '85%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,
  },
});
export default HomeScreen;
