import React, {useState, useEffect} from 'react';
import {css} from '../assets/css/cssLogin';
import {
View,
Text,
TouchableOpacity,
TextInput,
SafeAreaView,
Image,
} from 'react-native';

export default function Register() {

    return (
      <SafeAreaView style={css.container}>
        {/* <View style={css.containerLogo}>
          <Image source={require('../assets/images/cafeIcon.png')}/>
        </View> */}

        <View style={css.login__form}>

          <TextInput 
          style={css.login__input} 
          placeholder='Nome' 
          
          />

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
          <TextInput 
          style={css.login__input} 
          placeholder='E-mail' 
          />

          <TouchableOpacity 
          style={css.login__btnLogar}
          >
            <Text style={css.login__buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }