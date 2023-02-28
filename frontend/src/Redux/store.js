import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { oneproductsApi, productsApi } from "./productsApi";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    //  "carttt" ======>  useSelector
    carttt: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [oneproductsApi.reducerPath]: oneproductsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(oneproductsApi.middleware),
});

setupListeners(store.dispatch);
