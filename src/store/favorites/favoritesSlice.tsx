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

export interface CartItem extends ItemData {
  quantity: number;
}

export interface FavoritesState {
  cartItems: CartItem[];
  totalItems: number;
}

const initialState: FavoritesState = {
  cartItems: [],
  totalItems: 0,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItemToFavorites(state, action: PayloadAction<ItemData>) {
      const existingItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems++;
    },
    removeItemFromFavorites(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      state.totalItems--;
    },
    clearFavorites(state) {
      state.cartItems = [];
      state.totalItems = 0;
    },
  },
});

export const { addItemToFavorites, removeItemFromFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
