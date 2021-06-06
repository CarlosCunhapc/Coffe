import React, { useState } from 'react';
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
      note: 'blah',
    },
    {
      id: '2',
      name: 'Curiosidade 2',
      description: 'bla bla top',
      note: 'blah',
    },
    {
      id: '3',
      name: 'Curiosidade 3',
      description: 'bla bla top',
      note: 'blah',
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
