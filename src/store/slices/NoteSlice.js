import { createSlice } from "@reduxjs/toolkit";

const NoteSlice = createSlice({
  name: "note",
  initialState: 0,
  reducers: {
    oneHundred(state, action) {
      return (state = action.payload);
    },
    twoHundred(state, action) {
      return (state = action.payload);
    },
    fiveHundred(state, action) {
      return (state = action.payload);
    },
    twoThousand(state, action) {
      return (state = action.payload);
    },
  },
});
const { oneHundred, twoHundred, fiveHundred, twoThousand } = NoteSlice.actions;
export default NoteSlice.reducer;
export { oneHundred, twoHundred, fiveHundred, twoThousand };
