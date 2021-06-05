import React, { useState, useEffect } from 'react';
import { css } from '../../assets/css/cssRegister';
import config from '../../config/config';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Alert,
  HelperText,
} from 'react-native';

export default function Register() {
  const [name, setName] = useState(null);
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [rePassword, setRePassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [check2, setCheck2] = useState(true);
  const [displayLogin, setDisplayLogin] = useState('none');
  const [displayRepassword, setDisplayRepassword] = useState('none');

  function check() {
    setCheck2(true);
    checkIsEmpty();
    checkLogin();
    checkPassword();
    console.log("aqui");
    if (check2) {
      sendForm();
    }
  }

  function checkIsEmpty() {
    if (name === null) {
      Alert.alert('Nome é obrigatório!');
      setCheck2(false);
    } else if (login === null) {
      Alert.alert('Login é obrigatório!');
      setCheck2(false);
    } else if (password === null) {
      Alert.alert('Senha é obrigatória!');
      setCheck2(false);
    } else if (rePassword === null) {
      Alert.alert('Confirmação de senha é obrigatório!');
      setCheck2(false);
    } else if (email === null) {
      Alert.alert('E-mail é obrigatório!');
      setCheck2(false);
    }
  }

  async function checkLogin() {
    let response = await fetch(`${config.urlRoot}findByLogin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login,
      }),
    });

    let json = await response.json();

    if (json === 'error') {
      setDisplayLogin('flex');
      setTimeout(() => {
        setDisplayLogin('none');
      }, 2500);
      setCheck2(false);
    }
  }

  function checkPassword() {
    if (password !== rePassword) {
      setDisplayRepassword('flex');
      setTimeout(() => {
        setDisplayRepassword('none');
      }, 2500);
      setCheck2(false);
    }
  }

  //Envio do formulário
  async function sendForm() {
    let response = await fetch(`${config.urlRoot}create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        login: login,
        password: password,
        email: email,
      }),
    });

    let json = await response.json();
    //console.log(json);
    Alert.alert('Cadastro realizado com sucesso!');
  }

  return (
    <SafeAreaView style={css.container}>
      {/* <View style={css.containerLogo}>
          <Image source={require('../assets/images/cafeIcon.png')}/>
        </View> */}
      <View style={css.containerLogo}>
        {/* <Image source={require('../../assets/images/icon.png')}/> */}
        {/* <Text>{name} | {login} | {password} | {email}</Text> */}
      </View>

      <View style={css.login__form}>
        <TextInput
          style={css.login__input}
          placeholder="Nome"
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={css.login__input}
          placeholder="Login"
          onChangeText={(text) => setLogin(text)}
        />
        <Text style={css.login__msg(displayLogin)}>
          Esse login já está sendo utilizado!
        </Text>

        <TextInput
          style={css.login__input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <TextInput
          style={css.login__input}
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          onChangeText={(text) => setRePassword(text)}
        />
        <Text style={css.rePassword__msg(displayRepassword)}>
          As senhas não batem!
        </Text>

        <TextInput
          style={css.login__input}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
        />
        {/* <HelperText type="error" visible={true}>
          Email address is invalid!
        </HelperText> */}

        <TouchableOpacity style={css.login__btnLogar} onPress={() => check()}>
          <Text style={css.login__buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
