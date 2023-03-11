import { configureStore } from "@reduxjs/toolkit";
import MoneySlices from "./slices/MoneySlices";

const store = configureStore({
  reducer: {
    money: MoneySlices,
  },
});

export default store;
