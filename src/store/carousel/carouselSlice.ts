import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageSourcePropType } from 'react-native';

export interface CarouselData {
  id: string;
  image: ImageSourcePropType;
  shareUrl: string;
}

const initialState: CarouselData[] = [
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
const carouselSlice = createSlice({
  name: 'carouselImages',
  initialState,
  reducers: {
    setImages(state, action: PayloadAction<CarouselData[]>) {
      return action.payload;
    },
  },
});

export const { setImages } = carouselSlice.actions;
export default carouselSlice.reducer;
