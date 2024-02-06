import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, Image, ImageSourcePropType, Share, Alert, TouchableOpacity, Dimensions } from 'react-native';

import styles from './CarouselStyles';
import DotIndicator from '../DotIndicator/DotIndicator';

const { width: screenWidth } = Dimensions.get('window');

const mockCarouselData: CarouselData[] = [
  {
    id: '141793-2151',
    image: require('../../../assets/carousel/01.jpg'),
    shareUrl: 'https://pixabay.com/',
  },
  {
    id: '141793-2152',
    image: require('../../../assets/carousel/02.jpg'),
    shareUrl: 'https://pixabay.com/',
  },
  {
    id: '141793-2153',
    image: require('../../../assets/carousel/03.jpg'),
    shareUrl: 'https://pixabay.com/',
  },
  {
    id: '141793-2154',
    image: require('../../../assets/carousel/04.jpg'),
    shareUrl: 'https://pixabay.com/',
  },
  {
    id: '141793-2155',
    image: require('../../../assets/carousel/05.jpg'),
    shareUrl: 'https://pixabay.com/',
  },
  {
    id: '141793-2156',
    image: require('../../../assets/carousel/06.jpg'),
    shareUrl: 'https://pixabay.com/',
  },
  {
    id: '141793-2157',
    image: require('../../../assets/carousel/07.jpg'),
    shareUrl: 'https://pixabay.com/',
  },
  {
    id: '141793-2158',
    image: require('../../../assets/carousel/08.jpg'),
    shareUrl: 'https://pixabay.com/',
  },
  {
    id: '141793-2159',
    image: require('../../../assets/carousel/09.jpg'),
    shareUrl: 'https://pixabay.com/',
  },
  {
    id: '141793-2110',
    image: require('../../../assets/carousel/10.jpg'),
    shareUrl: 'https://pixabay.com/',
  },
];

interface CarouselData {
  id: string;
  image: ImageSourcePropType;
  shareUrl: string;
}

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

  useEffect(() => {
    const handleScroll = () => {
      if (autoScrollEnabled) {
        const nextIndex = (currentSlideIndex + 1) % mockCarouselData.length;
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
        data={mockCarouselData}
        renderItem={({ item }) => <Item id={item.id} image={item.image} shareUrl={item.shareUrl} />}
        onMomentumScrollEnd={(event) => {
          const slideIndex = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
          handleSlideChange(slideIndex);
          setAutoScrollEnabled(true);
        }}
      />
      <DotIndicator slides={mockCarouselData.length} currentIndex={currentSlideIndex} onPress={handleDotPress} />
    </View>
  );
};

export { Carousel };
