import React from "react";
import { useLocation } from "react-router";

const BookDetail = () => {
  const { state } = useLocation();
  const { Book } = state;
  return <div>BookDetail BookDetail {Book.Id} </div>;
};

export default BookDetail;
