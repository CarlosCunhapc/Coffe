import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
View,
Text,
TouchableOpacity
} from 'react-native';
import Profile from './profile';
import Recipes from './recipes';
import CreateRecipe from './createRecipe';
import Curiosities from './curiosities';



export default function userHome(props) {

    const Drawer = createDrawerNavigator();  
    const [user,setUser] = useState(null);
    

    useEffect(()=>{
      async function getUser(){
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        setUser(json.name);
      }
      getUser();
    },[])
    
    return (
      <Drawer.Navigator >
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Recipes" component={Recipes} />
        <Drawer.Screen name="CreateRecipe" component={CreateRecipe} />
        <Drawer.Screen name="Curiosities" component={Curiosities} /> 
      </Drawer.Navigator>
    );
  }