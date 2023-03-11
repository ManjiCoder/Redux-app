import { createSlice } from "@reduxjs/toolkit";

const NoteSlice = createSlice({
  name: "note",
  initialState: 0,
  reducers: {
    selectNote(state, actions) {
      return (state = actions.payload);
    },
  },
});
const { selectNote } = NoteSlice.actions;
export default NoteSlice.reducer;
export { selectNote };
