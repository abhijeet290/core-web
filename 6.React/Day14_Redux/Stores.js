import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slice1";
const stores = configureStore({
  reducer: {
    slice1: slice1Reducer,
  },
});

export default stores;
