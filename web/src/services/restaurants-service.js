import http from "./base-api-service";

const list = () => http.get("/restaurants");

const detail = (id) => http.get(`/restaurants/${id}`);

const remove = (id) => http.delete(`/restaurants/${id}`);

const service = {
  list,
  detail,
  remove,
};

export default service;
