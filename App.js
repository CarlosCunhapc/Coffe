import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Home from './views/home';
import Login from './views/login';
import HomeVisitor from './views/homeVisitor';
import userHome from './views/userHome';
import Register from './views/register';
import {
View,
Text,
Button,
Alert,
} from 'react-native';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{headerShown:false}}
        />
       
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="HomeVisitor" 
          component={HomeVisitor}
        />

        <Stack.Screen
          name="userHome" 
          component={userHome}
        />

        <Stack.Screen
          name="Register" 
          component={Register}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;