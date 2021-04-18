import React, {useState, useEffect} from 'react';
import {css} from '../../assets/css/cssRegister';
import config from '../../config/config';
import {
View,
Text,
TouchableOpacity,
TextInput,
SafeAreaView,
Image,
Alert,
} from 'react-native';

export default function Register() {
    const [name, setName] = useState(null);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [rePassword, setRePassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [displayLogin, setDisplayLogin] = useState('none');
    const [displayRepassword, setDisplayRepassword] = useState('none');
    
    function check(){
      checkLogin();
      checkPassword();
      sendForm();
    }

    async function checkLogin(){
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
        setDisplayLogin('flex');
        setTimeout(()=>{
          setDisplayLogin('none');
        }, 2500);
      }
    }      

    function checkPassword(){
      if(password !== rePassword){
        setDisplayRepassword('flex');
        setTimeout(()=>{
          setDisplayRepassword('none');
        }, 2500);
      }     
    };


    //Envio do formulário
    async function sendForm(){
      let response = await fetch(`${config.urlRoot}create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          name : name,
          login: login,
          password: password,
          email: email
        })
      });
      
      let json = await response.json();
      //console.log(json);
      //Alert.alert(json);
    }

    return (
      <SafeAreaView style={css.container}>
        {/* <View style={css.containerLogo}>
          <Image source={require('../assets/images/cafeIcon.png')}/>
        </View> */}
        <View style={css.containerLogo}>
          {/* <Image source={require('../../assets/images/icon.png')}/> */}
          <Text>{name} | {login} | {password} | {email}</Text>
        </View>

        <View style={css.login__form}>

          <TextInput 
          style={css.login__input} 
          placeholder='Nome'
          onChangeText={text=>setName(text)}
          />

          <TextInput 
          style={css.login__input} 
          placeholder='Login' 
          onChangeText={text=>setLogin(text)}
          />
          <Text style={css.login__msg(displayLogin)}>Esse login já está sendo utilizado!</Text>

          <TextInput 
          style={css.login__input} 
          placeholder='Senha' 
          secureTextEntry={true}
          onChangeText={text=>setPassword(text)}
          />

          <TextInput 
          style={css.login__input} 
          placeholder='Confirme sua senha' 
          secureTextEntry={true}
          onChangeText={text=>setRePassword(text)}
          />
          <Text style={css.rePassword__msg(displayRepassword)}>As senhas não batem!</Text>


          <TextInput 
          style={css.login__input} 
          placeholder='E-mail' 
          onChangeText={text=>setEmail(text)}
          />

          <TouchableOpacity 
          style={css.login__btnLogar}
          onPress={()=>check()}
          >
            <Text style={css.login__buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }