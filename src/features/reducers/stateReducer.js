import { createSlice } from "@reduxjs/toolkit";
import Books from "../../view/home/books/Books";

const initialState = {
  open: false,
  selectedPage: <Books />,
};

export const stateReducer = createSlice({
  name: "state",
  initialState: initialState,

  reducers: {
    setOpen: (state) => {
      state.open = !state.open;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  },
});

export const { setOpen, setSelectedPage } = stateReducer.actions;
export default stateReducer.reducer;
