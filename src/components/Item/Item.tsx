import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ItemStyles';
import { HomeStackParamList } from '../../navigation/native-stack';
import { RootState } from '../../store';
import { CartItem, addItemToCart } from '../../store/basket/basketSlice';
import { addItemToFavorites, removeItemFromFavorites } from '../../store/favorites/favoritesSlice';
import { CustomPressable } from '../CustomPressable/CustomPressable';

const basketImage = require('../../../assets/basket.png');
const likeImage = require('../../../assets/like.png');

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
}

const Item: React.FC<ItemPropss> = ({
  itemData: { id, title, isNew, image, newPrice, oldPrice, description },
  numberOfLines = 1,
  styles: itemDetails,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.basket.cartItems);
  const favorites = useSelector((state: RootState) => state.favorites.cartItems);

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

  const handleToggleFavorite = (item: ItemData) => {
    const existingItem = favorites.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      dispatch(removeItemFromFavorites(id));
      Toast.show({
        type: 'success',
        text1: 'Товар видаленно з обраних',
        visibilityTime: 2000,
      });
    } else {
      dispatch(addItemToFavorites(item));
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
        <Image style={styles.likeImage} source={likeImage} />
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
          <CustomPressable
            style={styles.basketBox}
            onPress={() => {
              handleAddToCart({
                id,
                title,
                isNew,
                image,
                newPrice,
                oldPrice,
                description,
              });
            }}>
            <Image style={styles.basketImage} source={basketImage} />
            <Text style={styles.basketText}>Buy</Text>
          </CustomPressable>
        </View>
      </View>
    </CustomPressable>
  );
};

export { Item };
