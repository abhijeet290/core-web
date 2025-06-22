import { createSlice } from "@reduxjs/toolkit";

const reactSlice = createSlice({
  name: "slice1",
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => {
      state.count = state.count + 1;
    },
    Decrement: (state) => {
      state.count = state.count - 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
    CustomValue: (state, action) => {
      state.count += action.payload;
    },
  },
});

// before Immer
// Increment:(state)=>{...state,state.count=state.count+1}

export { reactSlice };

export const { Increment, Decrement, Reset, CustomValue } = reactSlice.actions;
export default reactSlice.reducer;
