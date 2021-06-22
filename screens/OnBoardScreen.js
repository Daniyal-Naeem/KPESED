import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import COLORS from '../consts/colors';

const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/background.jpg')}>
        <View style={style.details}>
            <Image
              style={{width: 150, height:150}}
              source={require('../assets/kplogo.jpg')}
            />
          <Text style={{color: COLORS.green, fontSize: 35, fontWeight: 'bold'}}>
            KPESED
          </Text>
          <Text style={{color: COLORS.green, fontSize: 30, fontWeight: 'bold'}}>
            transfer with us
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignInScreen')}>
            <View style={style.btn}>
              <Text style={{fontWeight: 'bold',color:'white'}}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '70%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.green,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnBoardScreen;
