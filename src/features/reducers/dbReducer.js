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

export const { setDbData } = stateReducer.actions;
export default stateReducer.reducer;
