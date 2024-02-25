import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import styles from './BasketStyles';
import { Item } from '../../components/Item/Item';
import { RootState } from '../../store';

const BasketScreen = () => {
  const basketItems = useSelector((state: RootState) => state.basket.cartItems);

  return (
    <View style={styles.container}>
      {basketItems.length === 0 ? (
        <Text style={styles.screenTitle}>Ваша корзина пуста</Text>
      ) : (
        <View>
          <FlatList data={basketItems} renderItem={({ item }) => <Item itemData={item} isInBasket />} />
        </View>
      )}
    </View>
  );
};

export { BasketScreen };
