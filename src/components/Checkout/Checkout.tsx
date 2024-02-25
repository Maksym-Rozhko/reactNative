import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, TextInput } from 'react-native';

import styles from './CheckoutStyles';
import { CustomPressable } from '../CustomPressable/CustomPressable';

import { HomeStackParamList } from '@/navigation/native-stack';

type Props = NativeStackScreenProps<HomeStackParamList, 'CheckoutScreen'>;

const CheckoutScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <CustomPressable style={styles.closeButton} onPress={navigation.goBack}>
        <Ionicons name="close-circle" size={20} color={'#000'} />
      </CustomPressable>
      <Text style={styles.screenTitle}>Оформлення замовлення</Text>
    </View>
  );
};

export { CheckoutScreen };
