import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoardScreen from './screens/OnBoardScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SignInScreen from './screens/SignInScreen'
import AllPostsScreen from './screens/AllPostsScreen';
import Appointment from './screens/Appointment';
import Marking from './screens/Marking';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="AllPostsScreen" component={AllPostsScreen} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Marking" component={Marking}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;