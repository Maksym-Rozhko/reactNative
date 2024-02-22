import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, Image, Share, Alert, TouchableOpacity, Dimensions } from 'react-native';

import styles from './CarouselStyles';
import DotIndicator from '../../components/DotIndicator/DotIndicator';
import { useAppSelector } from '../../hooks/useAppSelector';
import { CarouselData } from '../../store/carousel/carouselSlice';

const { width: screenWidth } = Dimensions.get('window');

const onShare = async (url: string) => {
  try {
    await Share.share({
      message: url,
    });
  } catch (error: any) {
    Alert.alert(error.message);
  }
};

const Item = ({ id, image, shareUrl }: CarouselData) => (
  <TouchableOpacity style={styles.imageWrapper} onPress={() => onShare(shareUrl)}>
    <Image style={styles.image} source={image} />
  </TouchableOpacity>
);

const Carousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const flatListRef = useRef<FlatList>(null);

  const carouselData = useAppSelector((state) => state.carouselImages);

  useEffect(() => {
    const handleScroll = () => {
      if (autoScrollEnabled) {
        const nextIndex = (currentSlideIndex + 1) % carouselData.length;
        setCurrentSlideIndex(nextIndex);
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      }
    };

    const timer = setInterval(handleScroll, 5000);

    return () => clearInterval(timer);
  }, [currentSlideIndex, autoScrollEnabled]);

  const handleSlideChange = (index: number) => {
    setCurrentSlideIndex(index);
    setAutoScrollEnabled(false);
  };

  const handleDotPress = (index: number) => {
    setCurrentSlideIndex(index);
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={carouselData}
        renderItem={({ item }) => <Item id={item.id} image={item.image} shareUrl={item.shareUrl} />}
        onMomentumScrollEnd={(event) => {
          const slideIndex = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
          handleSlideChange(slideIndex);
          setAutoScrollEnabled(true);
        }}
      />
      <DotIndicator slides={carouselData.length} currentIndex={currentSlideIndex} onPress={handleDotPress} />
    </View>
  );
};

export { Carousel };
