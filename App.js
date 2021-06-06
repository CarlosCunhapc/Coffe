import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/General/home';
import Login from './views/General/login';
import Register from './views/General/register';

import userHome from './views/User/userHome';
import Profile from './views/User/profile';
import UserRecipes from './views/User/recipes';
import CreateRecipe from './views/User/createRecipe';
import UserCuriosities from './views/User/curiosities';

import HomeVisitor from './views/Visitor/homeVisitor';
import VisitorRecipes from './views/Visitor/recipes';
import VisitorCuriosities from './views/Visitor/curiosities';

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
      <Stack.Navigator initialRouteName={"Login"}>
        {/* //Telas gerais */}
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
          name="Register" 
          component={Register}
        />

        {/* //Telas Usuário */}
        <Stack.Screen
          name="userHome" 
          component={userHome}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name="Profile" 
          component={Profile}
        />

        <Stack.Screen
          name="Recipes" 
          component={UserRecipes}
        />

        <Stack.Screen
          name="CreateRecipe" 
          component={CreateRecipe}
        />

        <Stack.Screen
          name="Curiosities" 
          component={UserCuriosities}
        />

        {/* //Telas Visitante */}
        <Stack.Screen 
          name="HomeVisitor" 
          component={HomeVisitor}
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="VisitorRecipes" 
          component={VisitorRecipes}
        />

        <Stack.Screen 
          name="VisitorCuriosities" 
          component={VisitorCuriosities}
        />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;