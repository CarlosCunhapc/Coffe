import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
View,
Text,
} from 'react-native';


export default function userHome(props) {

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
      <View>
        <Text>Bem vindo {user}</Text>
      </View>
    );
  }