import { configureStore } from "@reduxjs/toolkit";
import MoneySlices from "./slices/MoneySlices";
import NoteSlice from "./slices/NoteSlice";

const store = configureStore({
  reducer: {
    money: MoneySlices,
    note: NoteSlice,
  },
});

export default store;
