import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import Toast from 'react-native-toast-message';

import styles from './CheckoutStyles';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { HomeStackParamList } from '../../navigation/native-stack';
import { RootState } from '../../store';
import { clearCart } from '../../store/basket/basketSlice';
import { placeOrder } from '../../store/order/orderSlice';
import { CustomPressable } from '../CustomPressable/CustomPressable';

const deliveryImage = require('../../../assets/delivery.png');

type Props = NativeStackScreenProps<HomeStackParamList, 'CheckoutScreen'>;

const CheckoutScreen = ({ navigation }: Props) => {
  const basketItems = useAppSelector((state: RootState) => state.basket.cartItems);
  const dispatch = useAppDispatch();
  const [deliveryType, setDeliveryType] = useState('standard');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [comment, setComment] = useState('');

  const totalAmount = basketItems
    .reduce((total, item) => {
      return total + parseFloat(item.newPrice) * item.quantity;
    }, 0)
    .toFixed(2);

  const handlePlaceOrder = () => {
    const orderData = {
      deliveryType,
      address,
      name,
      surname,
      paymentMethod,
      comment,
      basketItems,
      totalAmount,
      status: 'Processing',
    };

    dispatch(placeOrder(orderData));
    dispatch(clearCart());
    setAddress('');
    setName('');
    setSurname('');
    setComment('');

    const timeout = setTimeout(() => {
      Toast.show({
        type: 'success',
        text1: 'Замовлення оформленно',
        visibilityTime: 2000,
      });
    }, 2000);

    navigation.reset({
      index: 0,
      routes: [{ name: 'Profile' }],
    });

    return () => clearTimeout(timeout);
  };

  return (
    <View style={styles.container}>
      <CustomPressable style={styles.closeButton} onPress={navigation.goBack}>
        <Ionicons name="close-circle" size={20} color="#000" />
      </CustomPressable>
      <Text style={styles.screenTitle}>Оформлення замовлення</Text>
      <Text>Имя:</Text>
      <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder="Введiть iмя" />

      <Text>Фамилия:</Text>
      <TextInput
        style={styles.input}
        value={surname}
        onChangeText={(text) => setSurname(text)}
        placeholder="Введiть фамiлiю"
      />
      <Text>Адрес доставки:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="Введiть адресу"
      />
      <Text>Комментарий:</Text>
      <TextInput
        style={styles.textarea}
        value={comment}
        onChangeText={(text) => setComment(text)}
        placeholder="Введiть комментарiй"
      />

      <View style={styles.delivery}>
        <Image style={styles.deliveryImage} source={deliveryImage} />
        <Text style={styles.deliveryText}>Estimated time of delivery to your address: 1ч 30 мин.</Text>
      </View>

      <View style={styles.basketTotal}>
        <Text style={styles.basketTotalPriceText}>
          <Text>Общая сумма заказа:</Text>
          <Text style={styles.basketTotalPrice}> ${totalAmount}</Text>
        </Text>
        <CustomPressable onPress={handlePlaceOrder} style={styles.basketToCheckout}>
          <Text style={styles.basketToCheckoutText}>Оформить заказ</Text>
        </CustomPressable>
      </View>
    </View>
  );
};

export { CheckoutScreen };
