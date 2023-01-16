import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./Account-slice";
import darkSlice from "./dark-slice";
import ProductsSlice from "./product-slice";

const store = configureStore({
  reducer: {
    dark: darkSlice.reducer,
    allProducts: ProductsSlice.reducer,
    accounts: AccountSlice.reducer,
  },
});

export default store;
