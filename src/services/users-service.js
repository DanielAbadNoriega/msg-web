import http from "./base-api-service";

const create = (user) => http.post("/users", user);

const service = {
  create
};

export default service;
