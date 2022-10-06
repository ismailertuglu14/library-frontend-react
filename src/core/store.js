import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../features/reducers/stateReducer";
export const store = configureStore({
  reducer: {
    stateReducer: stateReducer,
  },
});
