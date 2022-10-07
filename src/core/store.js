import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import stateReducer from "../features/reducers/stateReducer";
import dbReducer from "../features/reducers/stateReducer";
import bookReducer from "../features/reducers/bookReducer";
import userReducer from "../features/reducers/userReducer";
export const store = configureStore({
  reducer: {
    stateReducer: stateReducer,
    dbReducer: dbReducer,
    bookReducer: bookReducer,
    userReducer: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
