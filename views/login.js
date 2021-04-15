import React, {useState, useEffect} from 'react';
import {css} from '../assets/css/cssLogin';
import AsyncStorage from '@react-native-community/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';
import {
View,
Text,
TouchableOpacity,
TextInput,
KeyboardAvoidingView,
Image,
Animated,
} from 'react-native';

export default function Login({navigation}) {
    const [display, setDisplay] = useState('none');
    const [user, setUser] = useState(null);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [offset] = useState(new Animated.ValueXY({x:0, y:80}));

    //Chama a função para verificar o login
    useEffect(()=>{
      verifyLogin();
    },[]);

    //Chama a função biometria
    useEffect(()=>{
      if(isLogin === true){
        biometric();
      }
    },[isLogin])

    //Verifica se o usuário ja fez login
    async function verifyLogin(){
      let response = await AsyncStorage.getItem('userData');
      let json = await JSON.parse(response);
      if(json !== null){
        setUser(json.name);
        setLogin(json.login);
        setPassword(json.password);
        setIsLogin(true);
      }
    }

    //Biometria
    async function biometric(){
      let compatible = await LocalAuthentication.hasHardwareAsync();
      if(compatible){
        let biometricRecords = await LocalAuthentication.isEnrolledAsync();
        if(!biometricRecords){
          alert('Biometria não cadastrada');
        }else{
          let result = await LocalAuthentication.authenticateAsync();
          if(result.success){
            sendForm();
          }else{
            setUser(null);
            setLogin(null);
            setPassword(null);
          }
        }
      }
    }

    //envio do formulário de login
    async function sendForm(){
      let response=await fetch('http://192.168.0.10:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          login: login,
          password: password
        })
      });

      let json=await response.json();

      //Teste login e senha
      if(json === 'error'){
        setDisplay('flex');
        setTimeout(()=>{
          setDisplay('none');
        }, 2500);
        await AsyncStorage.clear();
      }else{
        //salvando dados na cache
        await AsyncStorage.setItem('userData', JSON.stringify(json));
        navigation.navigate('userHome');
      }
    }
    //efeito de animação
    useEffect(()=> {
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
        useNativeDriver: true,
      }).start();

    }, []);

    return (
      <KeyboardAvoidingView 
      //behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={css.container}>
        <View style={css.containerLogo}>
          <Image source={require('../assets/images/cafeIcon.png')}/>
        </View>

        <View>
          <Text style={css.login__msg(display)}>Usuário ou senha errados!</Text>
        </View>

        <Animated.View 
        style={[
          css.login__form,
          {
            transform: [
              { translateY: offset.y}
            ]
          }
          ]}
          >

          <TextInput 
          style={css.login__input} 
          placeholder='Login' 
          onChangeText={text=>setLogin(text)}
          />

          <TextInput 
          style={css.login__input} 
          placeholder='Senha' 
          secureTextEntry={true}
          onChangeText={text=>setPassword(text)}
          />

          <TouchableOpacity 
          style={css.login__btnLogar}
          onPress={()=>sendForm()}
          >
            <Text style={css.login__buttonText}>Logar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={css.login__btnCadastrar}
            onPress={()=>navigation.navigate('Register')}
          >
            <Text style={css.login__buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    );
  }