import http from "./base-api-service";

const list = () => http.get("/profesionals");

const detail = (id) => http.get(`/profesionals/${id}`);

const remove = (id) => http.delete(`/profesionals/${id}`);

const service = {
  list,
  detail,
  remove,
};

export default service;