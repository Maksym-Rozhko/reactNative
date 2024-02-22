import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import imagesReducer from '../store/carousel/carouselSlice';
import productsReducer from '../store/products/productsSlice';
import uiReducer from '../store/theme/themeSlice';
import userReducer from '../store/user/userSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    carouselImages: imagesReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
