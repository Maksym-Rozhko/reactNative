import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ItemData {
  id: string;
  title: string;
  isNew: boolean;
  image: string;
  newPrice: string;
  oldPrice: string;
  description: string;
}

const initialState: ItemData[] = [
  {
    id: '141793-2158',
    title: 'Pizza 1',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    newPrice: '250$',
    oldPrice: '150$',
    description:
      'Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2159',
    title: 'Pizza 2',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2159.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    description:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2157',
    title: 'Pizza 3',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2157.jpg',
    newPrice: '135$',
    oldPrice: '100$',
    description:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2156',
    title: 'Pizza 4',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2156.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    description:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2155',
    title: 'Pizza 2',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2155.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    description:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2154',
    title: 'Pizza 6',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2154.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    description:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2153',
    title: 'Pizza 7',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2153.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    description:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2152',
    title: 'Pizza 8',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2152.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    description:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2151',
    title: 'Pizza 9',
    isNew: false,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2151.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    description:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2150',
    title: 'Pizza 10',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2150.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    description:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
  {
    id: '141793-2160',
    title: 'Pizza 11',
    isNew: true,
    image:
      'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2160.jpg',
    newPrice: '145$',
    oldPrice: '100$',
    description:
      'Long2 title2 long2 title2 long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title Long title long title long title',
  },
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ItemData[]>) {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
