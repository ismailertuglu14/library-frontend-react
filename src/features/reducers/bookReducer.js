import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../core/constants/network_constants";
import Books from "../../view/home/books/Books";
import { getBooksByName, getBooksByPagination } from "../services/book_service";

const initialState = {
  books: [],
  currentPage: 1,
  search: "",
  loading: false,
  error: "",
};

export const fetchBooks = createAsyncThunk(
  "fetchBooks",
  async (currentPage) => {
    return getBooksByPagination(currentPage);
  }
);
export const fetchBooksByName = createAsyncThunk(
  "fetchBooksByName",
  async (name) => {
    return getBooksByName(name);
  }
);
export const bookReducer = createSlice({
  name: "book",
  initialState: initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching books data";
    });
    builder.addCase(fetchBooksByName.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchBooksByName.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchBooksByName.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching books data";
    });
  },
});

export const {} = bookReducer.actions;

export default bookReducer.reducer;
