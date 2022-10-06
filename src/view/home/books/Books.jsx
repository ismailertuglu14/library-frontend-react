import React, { useState } from "react";
import { useEffect } from "react";
import { getBooksByPagination } from "../../../features/services/book_service";
import BookContainer from "./__components__/BookContainer";
import Topbar from "./__components__/Topbar";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooksByPagination(1, setBooks);
  }, []);
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Topbar />
      </div>
      <div className=" grid  gap-y-4 grid-cols-3  ml-12  ">
        {books.map((book, index) => (
          <BookContainer key={index} book={book} />
        ))}
      </div>
      <div className="  text-center cursor-pointer">1 2 3 4 5 6 7 8 Son</div>
    </div>
  );
};

export default Books;
