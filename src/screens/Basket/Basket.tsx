import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import styles from './BasketStyles';
import { CustomPressable } from '../../components/CustomPressable/CustomPressable';
import { Item } from '../../components/Item/Item';
import { RootState } from '../../store';
import { clearCart } from '../../store/basket/basketSlice';

const BasketScreen = () => {
  const basketItems = useSelector((state: RootState) => state.basket.cartItems);
  const dispatch = useDispatch();

  const totalAmount = basketItems
    .reduce((total, item) => {
      return total + parseFloat(item.newPrice) * item.quantity;
    }, 0)
    .toFixed(2);

  const handleClearBasket = () => {
    dispatch(clearCart());
  };

  return (
    <View style={styles.container}>
      {basketItems.length === 0 ? (
        <Text style={styles.screenTitle}>Ваша корзина пуста</Text>
      ) : (
        <View style={styles.flatlistParent}>
          <FlatList
            data={basketItems}
            renderItem={({ item }) => <Item itemData={item} isInBasket />}
            nestedScrollEnabled
            maxToRenderPerBatch={3}
            initialNumToRender={3}
          />
          <View style={styles.basketTotal}>
            <Text style={styles.basketTotalPriceText}>
              Общая сумма заказа: <Text style={styles.basketTotalPrice}>${totalAmount}</Text>
            </Text>
            <CustomPressable onPress={handleClearBasket} style={styles.basketClearBtn}>
              <Text style={styles.basketClearBtnText}>Очистити кошик</Text>
            </CustomPressable>
            <CustomPressable onPress={handleClearBasket} style={styles.basketToCheckout}>
              <Text style={styles.basketToCheckoutText}>Оформити замовлення</Text>
            </CustomPressable>
          </View>
        </View>
      )}
    </View>
  );
};

export { BasketScreen };
