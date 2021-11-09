import http from "./base-api-service";

const list = () => http.get("/recipes");

const detail = (id) => http.get(`/recipes/${id}`);

const remove = (id) => http.delete(`/recipes/${id}`);

const service = {
  list,
  detail,
  remove,
};

export default service;
