import http from "./base-api-service";

const create = (user) => http.post("/users", user);

const login = (email, password) => http.post("/login", {email, password})

const logout = () => http.post("/logout")

const getUser = (id) => http.get(`/profile/${id}`)

const service = {
  create,
  login,
  logout,
  getUser
};

export default service;
