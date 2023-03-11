import { createSlice } from "@reduxjs/toolkit";

const MoneySlice = createSlice({
  name: "money",
  initialState: 0,
  reducers: {
    depositNote(state, action) {
      return state + action.payload;
    },
    withdrawNote(state, action) {
      return state - action.payload;
    },
  },
});
const { depositNote, withdrawNote } = MoneySlice.actions;

export default MoneySlice.reducer;
export { depositNote, withdrawNote };
