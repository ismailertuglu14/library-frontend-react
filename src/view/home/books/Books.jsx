import React, { useState } from "react";
import { useEffect } from "react";
import { getBooksByPagination } from "../../../features/services/book_service";
import BookContainer from "./__components__/BookContainer";
import Topbar from "./__components__/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../features/reducers/bookReducer";
import { toPath } from "../../../features/utils/to_path";

const Books = () => {
  const bookReducer = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(bookReducer.currentPage));
  }, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Topbar />
      </div>
      <div className=" grid  gap-y-4 grid-cols-3  ml-12  ">
        {bookReducer.loading && "Loading..."}
        {bookReducer.error && bookReducer.error}
        {bookReducer.books &&
          bookReducer.books.map((book, index) => (
            <BookContainer key={index} book={book} />
          ))}
      </div>
      <div className="  text-center cursor-pointer">1 2 3 4 5 6 7 8 Son</div>
    </div>
  );
};

export default Books;
