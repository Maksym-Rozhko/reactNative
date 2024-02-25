import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import basketReducer from '../store/basket/basketSlice';
import imagesReducer from '../store/carousel/carouselSlice';
import favoritesReducer from '../store/favorites/favoritesSlice';
import orderReducer from '../store/order/orderSlice';
import productsReducer from '../store/products/productsSlice';
import uiReducer from '../store/theme/themeSlice';
import userReducer from '../store/user/userSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    carouselImages: imagesReducer,
    products: productsReducer,
    basket: basketReducer,
    favorites: favoritesReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
