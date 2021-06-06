import React, { useState, useEffect } from 'react';
import {
  Button,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Curiosities from '../Visitor/curiosities';
import Recipes from '../Visitor/recipes';
import { css } from '../../assets/css/cssProfile';
import config from '../../config/config';

export default function Profile() {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [newName, setNewName] = useState(null);
  const [login, setLogin] = useState(null);
  const [newLogin, setNewLogin] = useState(null);
  const [email, setEmail] = useState(null);
  const [newEmail, setNewEmail] = useState(null);

  // Chamada de funções
  async function functionsUpdate(text) {
    if (checkIsEmpty()) {
      if (checkIsEmpty2()) {
        sendForm();
        att();
      }
    } else {
      Alert.alert('Nada a ser alterado!');
    }
  }

  // Verificando se teve alteração no Login
  function checkLoginIsEmpty() {
    if (newLogin === null) {
      return true;
    } else {
      return false;
    }
  }

  // Verificando disponibilidade de login
  async function checkLogin(text) {
    let response = await fetch(`${config.urlRoot}findByLogin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: newLogin,
      }),
    });

    let json = await response.json();

    if (json === 'error') {
      Alert.alert('Login não disponivel');
    } else {
      return true;
    }
  }

  function checkIsEmpty() {
    if (newName === null && newLogin === null && newEmail === null) {
      return false;
    } else if (newName === name && newLogin === login && newEmail === email) {
      return false;
    } 
    return true;
  }

  function checkIsEmpty2() {
    if (newName === null) {
      console.log('Entrou aqui1');
      setNewName(name);
    }
    if (newLogin === null) {
      console.log('Entrou aqui2');
      setNewLogin(login);
    }
    if (newEmail === null || newEmail === '') {
      console.log('Entrou aqui3');
      console.log(newEmail);
      console.log(email);
      setNewEmail(email);
      console.log(newEmail);
      console.log(email);
    }
    return true;
  }

  //Envio do formulário
  async function sendForm() {
    let response = await fetch(`${config.urlRoot}update`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: newName,
        login: newLogin,
        email: newEmail,
      }),
    });
    let json = await response.json();
    console.log(json);
    if (json === 'error') {
      Alert.alert('Erro!');
    } else {
      Alert.alert('Dados alterados com sucesso!');
    }
  }

  function att() {
    setName(newName);
    setLogin(newLogin);
    setEmail(newEmail);
  }

  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setId(json.id);
      setName(json.name);
      setLogin(json.login);
      setEmail(json.email);
    }
    getUser();
  }, []);

  return (
    <KeyboardAvoidingView style={css.container}>
      <View>
        <Text>Sinta-se a vontade para alterar os seus dados {name}</Text>
        <Text>
          {'novo'} {' - '} {newName} {' - '} {newLogin} {' - '} {newEmail}
          {'\n'}
          {'Antigo'} {' - '} {name} {' - '} {login} {' - '} {email}{' '}
        </Text>
      </View>

      <View style={css.login__form}>
        <TextInput
          style={css.login__input}
          placeholder={name}
          onChangeText={(text) => setNewName(text)}
        />

        <TextInput
          style={css.login__input}
          placeholder={login}
          onChangeText={(text) => setNewLogin(text)}
        />
        {/* <Text style={css.login__msg(displayLogin)}>Usuário ou senha errados!</Text> */}

        {/* <TextInput 
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
          <Text style={css.rePassword__msg(displayRepassword)}>Usuário ou senha errados!</Text> */}

        <TextInput
          style={css.login__input}
          placeholder={email}
          onChangeText={(text) => setNewEmail(text)}
        />

        <TouchableOpacity
          style={css.login__btnLogar}
          onPress={() => functionsUpdate()}
        >
          <Text style={css.login__buttonText}>Alterar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.login__btnLogar}>
          <Text style={css.login__buttonText}>Alterar senha</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
