import React, { useState } from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';

import styles from './ItemStyles';

const basketImage = require('../../../assets/basket.png');
const likeImage = require('../../../assets/like.png');

interface ItemData {
  title: string;
  isNew: boolean;
  image: string;
  newPrice: string;
  oldPrice: string;
  descriotion: string;
}

interface ItemPropss {
  itemData: ItemData;
}

const Item: React.FC<ItemPropss> = ({ itemData: { title, isNew, image, newPrice, oldPrice, descriotion } }) => {
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
      style={[styles.item, isHovered && styles.itemHovered, { transform: [{ scale: scaleValue }] }]}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      <TouchableOpacity style={styles.likeBox}>
        <Image style={styles.likeImage} source={likeImage} />
      </TouchableOpacity>
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
          <Text style={styles.description} numberOfLines={1}>
            {descriotion}
          </Text>
          <TouchableOpacity style={styles.basketBox}>
            <Image style={styles.basketImage} source={basketImage} />
            <Text style={styles.basketText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export { Item };
