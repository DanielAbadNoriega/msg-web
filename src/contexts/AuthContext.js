import React, { useEffect, useState } from "react";
import userService from "../services/users-service";

export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    const userId = localStorage.getItem("user");
    if (userId) {
      userService
        .getUser(userId)
        .then((user) => setUser(user))
        .catch((error) => console.error(error));
    }
  }, []);

  function login(user) {
    localStorage.setItem("user", user.id);
    setUser(user);
  }

  function logout() {
    localStorage.clear();
    setUser(undefined);
  }
  console.log(user)
  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
