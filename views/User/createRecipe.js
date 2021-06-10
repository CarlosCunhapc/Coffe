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
  Input,
  Slider,
  CheckBox,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function createRecipe() {
  const [title, setTitle] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [note, setNote] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [dose, setDose] = useState(1);
  const [agua, setAgua] = useState(1);
  const [method, setMethod] = useState(null);

  //Recuperando dados usuário
  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setUserName(json.name);
      setUserId(json.id);
    }
    getUser();
  }, []);

  function check() {
    if (checkIsEmpty()) {
      sendForm();
    }
  }

  function checkIsEmpty() {
    if (title === null) {
      Alert.alert('Nome é obrigatório!');
      return false;
    }
    if (recipe === null) {
      Alert.alert(
        'É necessário nos contar a receita para que possamos compartilhar a receita!'
      );
      return false;
    }
    return true;
  }

  //Envio do formulário
  async function sendForm() {
    let response = await fetch(`${config.urlRoot}createRecipe`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        recipe: recipe,
        note: note,
        userName: userName,
        userId: userId,
      }),
    });

    let json = await response.json();
    //console.log(json);
    Alert.alert('Receita cadastrada com sucesso!');
  }

  return (
    <SafeAreaView style={css.container}>
      <View style={css.login__form}>
        <View style={css.radio}>
          <TouchableOpacity
            style={css.radio2}
            onPress={() => setMethod('Expresso')}
          >
            <CheckBox
              title="Expresso"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              value={method === 'Expresso'}
              onValueChange={() => setMethod('Expresso')}
            />
            <Text>Expresso</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={css.radio2}
            onPress={() => setMethod('Filtro')}
          >
            <CheckBox
              title="Filtro"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              value={method === 'Filtro'}
              onValueChange={() => setMethod('Filtro')}
            />
            <Text>Filtro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={css.radio2}
            onPress={() => setMethod('Aeropress')}
          >
            <CheckBox
              title="Aeropress"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              value={method === 'Aeropress'}
              onValueChange={() => setMethod('Aeropress')}
            />
            <Text>Aeropress</Text>
          </TouchableOpacity>
        </View>

        <View style={css.sliderContainer}>
          <Slider
            style={css.slider}
            value={dose}
            minimumValue={0}
            maximumValue={80}
            onValueChange={(value) => setDose(value)}
            step={1}
          ></Slider>
          <Text>
            {dose} {'grama(s)'}
          </Text>
        </View>

        <View style={css.sliderContainer}>
          <Slider
            style={css.slider}
            value={agua}
            minimumValue={0}
            maximumValue={2}
            onValueChange={(value) => setAgua(value)}
            step={0.1}
          ></Slider>
          <Text>
            {agua} {'litro(s)'}
          </Text>
        </View>

        <TextInput
          style={css.login__input}
          placeholder="Nomeie sua receita!"
          onChangeText={(text) => setTitle(text)}
        />

        <TextInput
          style={css.login__input}
          placeholder={'Digite aqui a sua receita'}
          onChangeText={(text) => setRecipe(text)}
        />

        <TextInput
          style={css.login__input}
          placeholder="Alguma observação a ser passada?"
          onChangeText={(text) => setNote(text)}
        />
        <TouchableOpacity style={css.login__btnLogar} onPress={() => check()}>
          <Text style={css.login__buttonText}>Salvar receita</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
