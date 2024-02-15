import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './ItemStyles';
import { CustomPressable } from '../CustomPressable/CustomPressable';

import { HomeStackParamList } from '@/navigation/native-stack';

const basketImage = require('../../../assets/basket.png');
const likeImage = require('../../../assets/like.png');

interface ItemData {
  id: string;
  title: string;
  isNew: boolean;
  image: string;
  newPrice: string;
  oldPrice: string;
  descriotion: string;
}

interface ItemPropss {
  itemData: ItemData;
  numberOfLines?: number;
  styles?: object;
}

const Item: React.FC<ItemPropss> = ({
  itemData: { title, isNew, image, newPrice, oldPrice, descriotion },
  numberOfLines = 1,
  styles: itemDetails,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const handlePressShowDetails = () => {
    navigation.navigate('Product', {
      item: { id: 'testId', title, isNew, image, newPrice, oldPrice, descriotion },
    });
  };

  return (
    <CustomPressable style={[styles.item, itemDetails]} onPress={handlePressShowDetails}>
      <CustomPressable
        style={styles.likeBox}
        onPress={() => {
          console.warn('Add to favorite');
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
            {descriotion}
          </Text>
          <CustomPressable
            style={styles.basketBox}
            onPress={() => {
              console.warn('Add to basket');
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
