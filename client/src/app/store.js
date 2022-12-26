import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import logger from "redux-logger";
import productSlice from "../features/product/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
