import React, {useState, useEffect} from 'react';
import { Button, View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Curiosities from '../Visitor/curiosities';
import Recipes from '../Visitor/recipes';
import {css} from '../../assets/css/cssProfile';
import config from '../../config/config';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         //onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button  title="Go back home" />
//     </View>
//   );
// }



export default function App() {

    const [name, setName] = useState(null);
    const [newName, setNewName] = useState(null);
    const [login, setLogin] = useState(null);
    const [oldPassword, setOldPassword] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [rePassword, setRePassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [displayLogin, setDisplayLogin] = useState(null);
    const [displayOldPassword, setDisplayOldPassword] = useState(null);
    const [displayPassword, setDisplayPassword] = useState(null);
    const [displayRepassword, setDisplayRepassword] = useState(null);
    const [displayEmail, setDisplayEmail] = useState(null);




    
    //Envio do formulário
    async function sendForm(){
        let response = await fetch(`${config.urlRoot}update`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            name : name,
            login: login,
            password: newPassword,
            email: email
          })
        });
      let json = await response.json();
      console.log(json);
      //Alert.alert(json);
    }

    async function functionsUpdate(text){
    // checkLogin();
    // // checkOldPassword();
    // // checkPassword();
    // // checkRePassword();
    // sendForm();
    };

    async function checkLogin2(text){
      let response = await fetch(`${config.urlRoot}findByLogin`, {
        method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
              login: login,
            })
      });

      let json = await response.json();
      
      if(json === 'error'){
        Alert.alert('Login não disponivel');
      }else{
        //setName(response);
      }
    }

    useEffect(()=>{
        async function getUser(){
          let response = await AsyncStorage.getItem('userData');
          let json = JSON.parse(response);
          setName(json.name);
          //setLogin(json.login);
          setOldPassword(json.password);
          setEmail(json.email);
        }
        getUser();
      },[])


  return (
    <KeyboardAvoidingView style={css.container}>
        <View >
          <Text>Sinta-se a vontade para alterar os seus dados {name}</Text>
        </View>

        <View style={css.login__form}>
          <TextInput 
          style={css.login__input} 
          placeholder={login}
          onChangeText={text=>setNewName(text)}
          />

          <TextInput
          style={css.login__input}
          placeholder='Login'
          onChangeText={text=>setLogin(text)}
          />
          <Text style={css.login__msg(displayLogin)}>Usuário ou senha errados!</Text>

          <TextInput 
          style={css.login__input} 
          placeholder='Senha Antiga'
          secureTextEntry={true}
          onChangeText={text=>setOldPassword(text)}
          />
          <Text style={css.oldPassword__msg(displayOldPassword)}>Usuário ou senha errados!</Text>

          <TextInput 
            style={css.login__input} 
            placeholder='Nova senha' 
            secureTextEntry={true}
            onChangeText={text=>setNewPassword(text)}
          />
          <Text style={css.password__msg(displayPassword)}>Usuário ou senha errados!</Text>

          <TextInput 
          style={css.login__input} 
          placeholder='Confirme sua nova senha' 
          secureTextEntry={true}
          onChangeText={text=>setRePassword(text)}
          />
          <Text style={css.rePassword__msg(displayRepassword)}>Usuário ou senha errados!</Text>

          <TextInput
          style={css.login__input} 
          placeholder='E-mail'
          onChangeText={text=>setEmail(text)}
          />
          <Text style={css.email__msg(displayEmail)}>Usuário ou senha errados!</Text>

          <TouchableOpacity 
          style={css.login__btnLogar}
          onPress={()=>functionsUpdate()}
          >
          <Text style={css.login__buttonText}>Alterar dados</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
  );
}