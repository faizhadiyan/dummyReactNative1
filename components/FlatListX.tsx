import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const items = [
  {
    id: '1',
    title: 'Item Pertama',
  },
  {
    id: '2',
    title: 'Item Kedua',
  },
  {
    id: '3',
    title: 'Item Ketiga',
  },
  {
    id: '4',
    title: 'Item Keempat',
  },
  {
    id: '5',
    title: 'Item Kelima',
  },
  {
    id: '6',
    title: 'Item Keenam',
  },
  {
    id: '7',
    title: 'Item Ketujuh',
  },
  {
    id: '8',
    title: 'Item Kedelapan',
  },
  {
    id: '9',
    title: 'Item Kesembilan',
  },
  {
    id: '10',
    title: 'Item Kesepuluh',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatListX = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListX;
