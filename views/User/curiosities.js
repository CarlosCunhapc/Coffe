import React, { useState } from 'react';
import { css } from '../../assets/css/cssCuriosities';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function curiosities() {
  const DATA = [
    {
      id: '1',
      name: 'Curiosidade 1',
      description: 'bla bla top',
    },
    {
      id: '2',
      name: 'Curiosidade 2',
      description: 'bla bla top',
    },
    {
      id: '3',
      name: 'Curiosidade 3',
      description: 'bla bla top',
    },
  ];

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[css.item, backgroundColor]}>
      <Text style={[css.title, textColor]}>{item.name}</Text>
      <Text style={[css.recipe, textColor]}>{item.description}</Text>
    </TouchableOpacity>
  );

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#000' : '#FFF';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={css.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}
