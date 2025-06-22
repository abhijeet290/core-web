import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "slice2",
  initialState: { count: 0 },
  reducers: {
    addItems: (state) => {
      state.count++;
    },
    removeItems: (state) => {
      state.count--;
    },
  },
});

export default foodSlice.reducer;
export const { addItems, removeItems } = foodSlice.actions;
