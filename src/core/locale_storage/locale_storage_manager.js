import { userToken } from "../constants/locale_constants";

export function setUserToLocale(token) {
  localStorage.setItem(userToken, token);
}
