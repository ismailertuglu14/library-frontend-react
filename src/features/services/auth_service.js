import { loginPath } from "../../core/constants/network_constants";
import axios from "../../core/init/axios";

export async function login(data) {
  const { username, password } = data;
  const response = await axios.post(loginPath, {
    username,
    password,
  });
  console.log(response.data);
  return response.data;
}
