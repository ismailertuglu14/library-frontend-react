import React from "react";
import { useNavigate } from "react-router";

const BookContainer = ({ book, index }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative flex lg:h-72 md:h-44  bg-red-500 w-[60%] cursor-pointer"
      key={index}
      onClick={() =>
        navigate(`/book/${book.Id}`, {
          state: {
            Book: book,
          },
        })
      }
    >
      <img src={book.Image} alt="_" className="w-[100%]" />
      <div className="absolute flex flex-col h-full w-full z-[-10] group-hover:z-10 bg-blue-800/90  justify-center">
        <h1 className="text-red-500 text-2xl text-center ">{book.Name}</h1>
        <h1 className="text-black text-xl text-center ">J. K. Rowling</h1>
        <h1 className="text-green-500 text-xl text-center mt-2 ">
          {`Quantity: ${book.Quantity}`}
        </h1>
      </div>
    </div>
  );
};

export default BookContainer;
