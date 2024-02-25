import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '@/navigation/native-stack';

import styles from './BasketStyles';
import { CustomPressable } from '../../components/CustomPressable/CustomPressable';
import { Item } from '../../components/Item/Item';
import { RootState } from '../../store';
import { clearCart } from '../../store/basket/basketSlice';

const BasketScreen = () => {
  const basketItems = useAppSelector((state: RootState) => state.basket.cartItems);
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const dispatch = useAppDispatch();

  const totalAmount = basketItems
    .reduce((total, item) => {
      return total + parseFloat(item.newPrice) * item.quantity;
    }, 0)
    .toFixed(2);

  const handleClearBasket = () => {
    dispatch(clearCart());
    Toast.show({
      type: 'error',
      text1: 'Кошик очищено',
      visibilityTime: 2000,
    });
  };

  return (
    <View style={styles.container}>
      {basketItems.length === 0 ? (
        <Text style={styles.screenTitle}>Ваш кошик порожнiй</Text>
      ) : (
        <View style={styles.flatlistParent}>
          <FlatList
            data={basketItems}
            renderItem={({ item }) => <Item itemData={item} isInBasket isInFavorites={false} />}
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
            <CustomPressable onPress={() => navigation.navigate('CheckoutScreen')} style={styles.basketToCheckout}>
              <Text style={styles.basketToCheckoutText}>Оформити замовлення</Text>
            </CustomPressable>
          </View>
        </View>
      )}
    </View>
  );
};

export { BasketScreen };
