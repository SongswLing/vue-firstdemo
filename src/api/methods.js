import axios from "./index";
export function loginUser(userinfo) {
  return axios.post("/api/login/hint", userinfo);
}
export function signUser(userinfosign) {
  return axios.post("/api/login/sign", userinfosign);
}
