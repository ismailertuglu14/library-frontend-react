import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../core/constants/network_constants";
import Books from "../../view/home/books/Books";
import { getBooksByPagination } from "../services/book_service";

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
export const bookReducer = createSlice({
  name: "book",
  initialState: initialState,

  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
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
  },
});

export const { setBooks, setSearch, setLoading, setError } =
  bookReducer.actions;

export default bookReducer.reducer;
