import React, { useState, useEffect } from 'react';
import config from '../../config/config';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function userRecipes(props) {
  const [recipes, setRecipes] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [userId, setUserId] = useState(null);

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>Nome: {item.title}</Text>
      <Text style={[styles.title, textColor]}>
        Modo de preparo: {item.recipe}
      </Text>
      <Text style={[styles.title, textColor]}>{item.note}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#000' : '#FFF';
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

      <TouchableOpacity
        onPress={() => props.navigation.navigate('CreateRecipe')}>
        <Text>Criar Receita</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}