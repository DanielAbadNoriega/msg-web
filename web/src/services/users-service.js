import http from "./base-api-service";

const create = (user) => http.post("/users", user);

const login = (email, password) => http.post("/login", { email, password });

const logout = () => http.post("/logout");

const service = {
  create,
  login,
  logout
};

export default service;
