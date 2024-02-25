import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppSelector';

import styles from './ItemStyles';
import { HomeStackParamList } from '../../navigation/native-stack';
import { RootState } from '../../store';
import { CartItem, addItemToCart, removeAllItemFromCart, removeItemFromCart } from '../../store/basket/basketSlice';
import { addItemToFavorites, removeItemFromFavorites } from '../../store/favorites/favoritesSlice';
import { CustomPressable } from '../CustomPressable/CustomPressable';

const basketImage = require('../../../assets/basket.png');

interface ItemData {
  id: string;
  title: string;
  isNew: boolean;
  image: string;
  newPrice: string;
  oldPrice: string;
  description: string;
}

interface ItemPropss {
  itemData: ItemData;
  numberOfLines?: number;
  styles?: object;
  isInBasket: boolean;
  isInFavorites: boolean;
}

const Item: React.FC<ItemPropss> = ({
  itemData: { id, title, isNew, image, newPrice, oldPrice, description },
  numberOfLines = 1,
  styles: itemDetails,
  isInBasket,
  isInFavorites,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.basket.cartItems);
  const favorites = useAppSelector((state: RootState) => state.favorites.cartItems);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handlePressShowDetails = () => {
    navigation.navigate('Product', {
      item: { id, title, isNew, image, newPrice, oldPrice, description },
    });
  };

  const handleAddToCart = (item: ItemData) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      dispatch(addItemToCart(existingItem));
      Toast.show({
        type: 'success',
        text1: 'Кiлькiсть одиниць оновлено',
        visibilityTime: 2000,
      });
    } else {
      dispatch(addItemToCart({ ...item, quantity: 1 } as CartItem));
      Toast.show({
        type: 'success',
        text1: 'Товар додано до кошику',
        visibilityTime: 2000,
      });
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(id));
    Toast.show({
      type: 'info',
      text1: 'Кiлькiсть одиниць зменшено',
      visibilityTime: 2000,
    });
  };

  const handleRemoveAllFromCart = () => {
    dispatch(removeAllItemFromCart(id));
    Toast.show({
      type: 'error',
      text1: 'Товар видалено з кошику',
      visibilityTime: 2000,
    });
  };

  const handleToggleFavorite = (item: ItemData) => {
    const existingItem = favorites.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      dispatch(removeItemFromFavorites(id));
      setIsFavorite(false);
      Toast.show({
        type: 'success',
        text1: 'Товар видаленно з обраних',
        visibilityTime: 2000,
      });
    } else {
      dispatch(addItemToFavorites(item));
      setIsFavorite(true);
      Toast.show({
        type: 'success',
        text1: 'Товар додано до обраних',
        visibilityTime: 2000,
      });
    }
  };

  return (
    <CustomPressable style={[styles.item, itemDetails]} onPress={handlePressShowDetails}>
      <CustomPressable
        style={styles.likeBox}
        onPress={() => {
          handleToggleFavorite({
            id,
            title,
            isNew,
            image,
            newPrice,
            oldPrice,
            description,
          });
        }}>
        <Ionicons name="heart" size={20} color={isFavorite || isInFavorites ? 'red' : '#fff'} />
      </CustomPressable>
      <View style={styles.itemImageBox}>
        <Image
          style={styles.itemProduct}
          source={{
            uri: image,
          }}
        />
        {isNew ? <Text style={styles.labelNew}>New</Text> : null}
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.title}>{title}</Text>
        <View>
          {isNew ? (
            <Text style={styles.newPrice}>
              {newPrice} <Text style={styles.oldPrice}>{oldPrice}</Text>
            </Text>
          ) : (
            <Text style={styles.newPrice}>{newPrice}</Text>
          )}
        </View>
        <View style={styles.itemInfoBottom}>
          <Text style={styles.description} numberOfLines={numberOfLines}>
            {description}
          </Text>
          {!isInBasket ? (
            <CustomPressable
              style={styles.basketBox}
              onPress={() => {
                handleAddToCart({ id, title, isNew, image, newPrice, oldPrice, description });
              }}>
              <Image style={styles.basketImage} source={basketImage} />
              <Text style={styles.basketText}>Buy</Text>
            </CustomPressable>
          ) : (
            <View style={styles.counter}>
              <CustomPressable style={styles.counterBtn} onPress={handleRemoveFromCart}>
                <Text>-</Text>
              </CustomPressable>
              <Text style={styles.counterNumber}>{cartItems.find((item) => item.id === id)?.quantity || ''}</Text>
              <CustomPressable
                style={styles.counterBtn}
                onPress={() => {
                  handleAddToCart({ id, title, isNew, image, newPrice, oldPrice, description });
                }}>
                <Text>+</Text>
              </CustomPressable>
              <CustomPressable style={styles.counterBtnRemove} onPress={handleRemoveAllFromCart}>
                <Ionicons name="trash" size={15} color="#fff" />
              </CustomPressable>
            </View>
          )}
        </View>
      </View>
    </CustomPressable>
  );
};

export { Item };
