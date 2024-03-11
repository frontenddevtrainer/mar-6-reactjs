import { createAsyncThunk } from "@reduxjs/toolkit";
import { responseHandler } from "../../model/utils";

export const placeOrder = createAsyncThunk(
  "cart/placeorder",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        body: JSON.stringify(args),
      });
      const data = responseHandler(response);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
