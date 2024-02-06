import React, { useState } from 'react';
import { View, Text, Image, Animated } from 'react-native';

import styles from './ItemStyles';
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
  const [isHovered, setIsHovered] = useState(false);
  const scaleValue = new Animated.Value(1);

  const handleTouchStart = () => {
    setIsHovered(true);
    Animated.timing(scaleValue, {
      toValue: 1.1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[styles.item, isHovered && styles.itemHovered, { transform: [{ scale: scaleValue }] }, itemDetails]}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
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
    </Animated.View>
  );
};

export { Item };
