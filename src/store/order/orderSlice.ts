import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '..';

interface OrderState {
  order: any;
  loading: boolean;
  error: string | null;
  orderHistory: any[];
}
const initialState: OrderState = {
  order: null,
  loading: false,
  error: null,
  orderHistory: [
    {
      id: '1357393-2158',
      deliveryType: 'standard',
      address: 'Lviv',
      name: 'Max',
      surname: 'Rozhko',
      paymentMethod: 'cash',
      comment: 'Test cancel order',
      totalAmount: '490',
      status: 'Canceled',
    },
    {
      id: '136393-2158',
      deliveryType: 'standard',
      address: 'Odesa',
      name: 'Max',
      surname: 'Rozhko',
      paymentMethod: 'cash',
      comment: 'Test order',
      totalAmount: '1050',
      status: 'Done',
    },
  ],
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
    saveOrderHistory: (state, action: PayloadAction<any[]>) => {
      state.orderHistory = action.payload;
    },
  },
});

export const { placeOrderRequest, placeOrderSuccess, placeOrderFailure, saveOrderHistory } = orderSlice.actions;

export default orderSlice.reducer;

export const placeOrder = (orderData: any) => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch(placeOrderRequest());
    const order = orderData;
    dispatch(placeOrderSuccess(order));
    dispatch(saveOrderHistory([...getState().order.orderHistory, orderData]));
  } catch (error: any) {
    dispatch(placeOrderFailure(error.message));
  }
};

export const selectOrderHistory = (state: RootState) => state.order.orderHistory;
