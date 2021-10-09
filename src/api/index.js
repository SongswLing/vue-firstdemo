import $axios from "axios";
$axios.interceptors.request.use(
  (config) => {
    // config.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
$axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default $axios;
