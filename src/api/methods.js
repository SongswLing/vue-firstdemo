import axios from "./index";
export function loginUser(userinfo1) {
  return axios.post("/api/login/hint", userinfo1);
}
