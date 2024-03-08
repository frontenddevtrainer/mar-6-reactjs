import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./slices/cart";

export const store = configureStore({
  reducer: {
    cart: CartReducer
  },
});
