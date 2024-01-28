import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Item } from '../Item/Item';
import styles from './HomeScreenStyles';

interface ItemData {
  title: string;
  isNew: boolean;
  image: string;
  newPrice: string;
  oldPrice: string;
  descriotion: string;
}

const mockItemData: { [key: string]: ItemData } = {
  pizza1: {
    title: 'Pizza 1',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    newPrice: '250$',
    oldPrice: '150$',
    descriotion:
      'Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  pizza2: {
    title: 'Pizza 2',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2159.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    descriotion:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {Object.keys(mockItemData).map((key) => (
          <Item key={key} itemData={mockItemData[key]} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export { HomeScreen };
