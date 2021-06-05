import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Recipes() {
  const DATA = [
    {
      id: '1',
      name: 'Café preto',
      description: 'Ferva a água, coloque a açucar o pó, e ta top',
      note: 'Cuidado para não queimar o pó',
    },
    {
      id: '2',
      name: 'Café preto 2',
      description: 'Ferva a água, coloque a açucar o pó, e ta top',
      note: 'Cuidado para não queimar o pó',
    },
    {
      id: '3',
      name: 'Café preto 3',
      description: 'Ferva a água, coloque a açucar o pó, e ta top',
      note: 'Cuidado para não queimar o pó',
    },
  ];

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.id}</Text>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
      <Text style={[styles.title, textColor]}>{item.description}</Text>
      <Text style={[styles.title, textColor]}>{item.note}</Text>
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
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}
