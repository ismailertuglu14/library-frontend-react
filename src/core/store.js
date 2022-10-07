import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../features/reducers/stateReducer";
import dbReducer from "../features/reducers/stateReducer";
import bookReducer from "../features/reducers/bookReducer";
export const store = configureStore({
  reducer: {
    stateReducer: stateReducer,
    dbReducer: dbReducer,
    bookReducer: bookReducer,
  },
});
