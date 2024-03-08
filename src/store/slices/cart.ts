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
    // payload id = 1
    removeFromCart: (state, { payload }) => {
        state.items = state.items.filter((item)=>{
            return item.id !== payload.id
        });
    },
    
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export const CartReducer = CartSlice.reducer;
