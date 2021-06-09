import React, { useState, useEffect } from 'react';
import config from '../../config/config';
import { css } from '../../assets/css/cssUserRecipes';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Icon,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default function userRecipes(props) {
  const [recipes, setRecipes] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [userId, setUserId] = useState(null);

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[css.item, backgroundColor]}>
      <Text style={[css.title, textColor]}>{item.title}</Text>
      <Text style={[css.recipeFixo, textColor]}>Modo de preparo</Text>
      <Text style={[css.recipe, textColor]}>{item.recipe}</Text>
      <Text style={[css.note, textColor]}>{item.note}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#ffc45e' : '#d39d38';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        refreshing={true}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);

      setUserId(json.id);

      readRecipes();
    }
    //console.log(userId);
    getUser();

    async function readRecipes() {
      let read = await fetch(`${config.urlRoot}readRecipes`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
        }),
      });
      let jsonRecipes = await read.json();
      console.log(jsonRecipes);
      setRecipes(jsonRecipes);
    }
  }, []);

  return (
    <SafeAreaView style={css.container}>
      <View style={css.containerLista}>
        <FlatList
          data={recipes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        <FAB
          style={css.fab}
          icon="plus"
          onPress={() => props.navigation.navigate('CreateRecipe')}
        />
      </View>
    </SafeAreaView>
  );
}
