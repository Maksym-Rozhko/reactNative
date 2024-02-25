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

export interface BasketState {
  cartItems: CartItem[];
  totalItems: number;
}

const initialState: BasketState = {
  cartItems: [],
  totalItems: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ItemData>) {
      const existingItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems++;
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const itemToRemoveIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      if (itemToRemoveIndex !== -1) {
        if (state.cartItems[itemToRemoveIndex].quantity > 1) {
          state.cartItems[itemToRemoveIndex].quantity--;
        } else {
          state.cartItems.splice(itemToRemoveIndex, 1);
        }
        state.totalItems--;
      }
    },
    removeAllItemFromCart(state, action: PayloadAction<string>) {
      const itemToRemove = state.cartItems.find((item) => item.id === action.payload);
      if (itemToRemove) {
        state.totalItems -= itemToRemove.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalItems = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, removeAllItemFromCart, clearCart } = basketSlice.actions;
export default basketSlice.reducer;
