import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Books from "../../view/home/books/Books";
import { login } from "../services/auth_service";

const initialState = {
  user: null,
  loading: false,
  error: "",
};
export const userLogin = createAsyncThunk("userLogin", async (formData) => {
  return login(formData);
});
export const userReducer = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error Fetch User!";
    });
  },
});

export const { setUser } = userReducer.actions;
export default userReducer.reducer;
