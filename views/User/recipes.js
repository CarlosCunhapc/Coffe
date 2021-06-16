import React, { useState, useEffect } from 'react';
import config from '../../config/config';
import { css } from '../../assets/css/cssRecipes';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Recipes() {
  const [recipes, setRecipes] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[css.item, backgroundColor]}>
      <Text style={[css.title, textColor]}>{item.title}</Text>
      <Text style={[css.creator, textColor]}>Criado por 
        <Text style={[css.creatorName, textColor]}> {item.userName}{'\n'}</Text>
      </Text>
      {/* <Text style={[css.creatorName, textColor]}>{item.userName}</Text> */}
      <Text style={[css.recipeFixo, textColor]}>Modo de preparo</Text>
      <Text style={[css.recipe, textColor]}>{item.recipe}{'\n'}</Text>
      <Text style={[css.noteFixo, textColor]}>Obs.: </Text>
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

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     marginTop: StatusBar.currentHeight || 0,
  //   },
  //   item: {
  //     padding: 20,
  //     marginVertical: 8,
  //     marginHorizontal: 16,
  //   },
  //   title: {
  //     fontSize: 32,
  //   },
  // });

  useEffect(() => {
    async function readRecipes() {
      let read = await fetch(`${config.urlRoot}readAllRecipes`);
      let json = await read.json();
      console.log(json);
      console.log(json[0].id);
      setRecipes(json);
    }
    readRecipes();
  }, []);

  return (
    <SafeAreaView style={css.container}>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={selectedId}
      />

      {/* <TouchableOpacity  onPress={() => find()}>
        <Text >Find</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
