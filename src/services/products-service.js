import http from "./base-api-service";

const list = () => http.get("/products");

const detail = (id) => http.get(`/products/${id}`);

const remove = (id) => http.delete(`/products/${id}`);

const service = {
  list,
  detail,
  remove,
};

export default service;