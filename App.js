import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoardScreen from './screens/OnBoardScreen';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen'
import AllPostsScreen from './screens/AllPostsScreen';
import Appointment from './screens/Appointment';
import Marking from './screens/Marking';
import PersonalInformation from './screens/PersonalInformation';
import PriorityScreen from './screens/PriorityScreen';
import ChooseLocation from './screens/ChooseLocation';
import Posting from './screens/Posting';
import SearchLocation from './screens/SearchLocation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AllPostsScreen" component={AllPostsScreen} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Marking" component={Marking}/>
        <Stack.Screen name="PersonalInformation" component={PersonalInformation}/>
        <Stack.Screen name="PriorityScreen" component={PriorityScreen}/>
        <Stack.Screen name="Posting" component={Posting}/>
        <Stack.Screen name="ChooseLocation" component={ChooseLocation}/>
        <Stack.Screen name="SearchLocation" component={SearchLocation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;