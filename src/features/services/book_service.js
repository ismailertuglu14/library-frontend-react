import axios from "axios";
import { baseUrl } from "../../core/constants/network_constants";
import { toPath } from "../utils/to_path";

export async function getBooksByPagination(page) {
  let paginationQuery = { name: "page", value: page };

  const response = await axios.get(toPath("/book", paginationQuery));

  return response.data;
}
