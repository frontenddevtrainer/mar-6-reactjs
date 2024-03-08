import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export const CartReducer = CartSlice.reducer;
