import { createSlice } from "@reduxjs/toolkit";
import { Album } from "../../interfaces/Album";

const initialState: { items: Album[] } = {
  items: []
}

export const CartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFromCart: (state, { payload }) => {
        state.items = state.items.filter((item)=>{
            return item.id !== payload.id
        });
    },
    
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export const CartReducer = CartSlice.reducer;
