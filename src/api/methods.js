import axios from "./index";
export function loginUser(userinfo) {
  return axios.post("/api/login/hint", userinfo);
}
