import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dbData: {},
};

export const stateReducer = createSlice({
  name: "db",
  initialState: initialState,

  reducers: {
    setDbData: (state, action) => {
      state.dbData = action.payload;
    },
  },
});

export const { setDbData } = dbReducer.actions;
export default dbReducer.reducer;
