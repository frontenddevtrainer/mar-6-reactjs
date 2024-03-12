import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./slices/cart";
import createSagaMiddleware from "redux-saga"
import { saga } from "./saga";
import { todosReducer } from "./reducers/todo";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    todos : todosReducer
  },
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(sagaMiddleware);
  }
});

sagaMiddleware.run(saga);
