import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '..';

interface OrderState {
  order: any;
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  order: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrderRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    placeOrderSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.order = action.payload;
      state.error = null;
    },
    placeOrderFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { placeOrderRequest, placeOrderSuccess, placeOrderFailure } = orderSlice.actions;

export default orderSlice.reducer;

export const placeOrder = (orderData: any) => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch(placeOrderRequest());
    const order = orderData;
    dispatch(placeOrderSuccess(order));
  } catch (error: any) {
    dispatch(placeOrderFailure(error.message));
  }
};
