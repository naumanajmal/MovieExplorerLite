// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import SearchScreen from './src/Screens/SearchScreen';
import OnBoardingScreen from './src/Screens/OnBoardingScreen';
const Stack = createNativeStackNavigator();
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoardingScreen'>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="search" component={SearchScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;