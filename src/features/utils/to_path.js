import { baseUrl } from "../../product/constants/network_constants";

export function toPath(path, query) {
  return `${baseUrl}${path}${
    query != null ? `?${query.name}=${query.value}` : ""
  }`;
}
