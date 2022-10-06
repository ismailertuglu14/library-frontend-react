import axios from "axios";
export async function getBooksByPagination(page, setBooks) {
  const response = await axios.get(
    `http://localhost:3300/api/book?page=${page}`
  );
  console.log(response.data);
  setBooks(response.data);
  return response.data;
}
