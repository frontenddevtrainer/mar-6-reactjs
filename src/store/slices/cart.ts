import { createSlice } from "@reduxjs/toolkit";
import { Album } from "../../interfaces/Album";
import { placeOrder } from "../async-actions/cart";

export interface CartSliceState {
  items: Album[];
  order: { loading: boolean; details: any; error: any };
}

const initialState: CartSliceState = {
  items: [],
  order: {
    loading: false,
    details: null,
    error: null,
  },
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => {
        return item.id !== payload.id;
      });
    },
  },
  extraReducers(builder) {
    
    builder.addCase(placeOrder.pending, (state) => {
      state.order.loading = true;
      state.order.error = null;
    });

    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.order.loading = false;
      state.order.details = action.payload;
      state.order.error = null;
      state.items = []
    });

    builder.addCase(placeOrder.rejected, (state, action) => {
      state.order.loading = false;
      state.order.details = null;
      state.order.error = action.payload;
    });
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export const CartReducer = CartSlice.reducer;
