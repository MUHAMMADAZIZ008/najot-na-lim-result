import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Token";
    config.headers["Accept-Language"] = "uz";
    return config;
  },
  (err) => {
    console.log(err);
    return err;
  }
);

axios.interceptors.response.use(
  (config) => config,
  (err) => err
);

export function cancellationFn(time) {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, time || 0);

  return controller.signal;
}

export default axios;
