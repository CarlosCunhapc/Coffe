import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import Profile from './profile';
import Recipes from './recipes';
import CreateRecipe from './createRecipe';
import userRecipes from './userRecipes';
import Curiosities from './curiosities';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function userHome(props) {
   const Tab = createMaterialBottomTabNavigator();
   const Drawer = createDrawerNavigator();
   const [user, setUser] = useState(null);

   useEffect(() => {
      async function getUser() {
         let response = await AsyncStorage.getItem('userData');
         let json = JSON.parse(response);
         setUser(json.name);
      }
      getUser();
   }, []);

   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
               let iconName;

               if (route.name === 'Profile') {
                  iconName = focused ? 'book' : 'book-outline';
               } else if (route.name === 'Recipes') {
                  iconName = focused ? 'book' : 'book-outline';
               } else if (route.name === 'User Recipes') {
                  iconName = focused ? 'book' : 'book-outline';
               } else if (route.name === 'Curiosities') {
                  iconName = focused ? 'book' : 'book-outline';
               }

               // You can return any component that you like here!
               return <Ionicons name={iconName} size={size} color={color} />;
               
            },
         })}
         tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
         }}
      >
         <Tab.Screen name="Recipes" component={Recipes} />
         <Tab.Screen name="User Recipes" component={userRecipes} />
         <Tab.Screen name="Curiosities" component={Curiosities} />
         <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
   );
}
