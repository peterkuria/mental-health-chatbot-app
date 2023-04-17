import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './src/BottomNavigation';
import Feedback from './src/Feedback';
import Knowledge from './src/Knowledge';
import Splash from './src/Splash';
import Exercises from './src/Exercises';
import { StatusBar } from 'react-native';
import { AppRegistry } from 'react-native';
//import App from './App';

//AppRegistry.registerComponent('MyApp', () => App);

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen 
            name="Splash" 
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Feedback"
            component={Feedback}
            options={{
              title: 'Feedback',
            }}
          />
          <Stack.Screen
            name="Knowledge"
            component={Knowledge}
            options={{
              title: 'Knowledge',
            }}
          />
          <Stack.Screen
            name="Exercises"
            component={Exercises}
            options={{
              title: 'Exercises',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
