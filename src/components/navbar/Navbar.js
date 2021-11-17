import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Logout from "../misc/logout/Logout";

function Navbar() {

  const auth = useContext(AuthContext)

  return (
    <nav
      className="navbar navbar-expand-lg bg-light navbar-light text-center"
      style={{ opacity: "0.8", color: "#E0A500" }}
    >
      <div className="container-fluid col-12 text-center">
        <ul className="navbar-nav me-auto ms-2 mb-2 mb-lg-0 col-2 text-center">
          {/* Dropdown */}
          <li className="nav-item dropdown col-1 me-4">
            <NavLink
              className="nav-link dropdown-toggle"
              exact
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-bars fa-fw" aria-hidden="true"></i>
            </NavLink>
            <ul
              className="dropdown-menu"
              style={{ color: "#E0A500" }}
              aria-labelledby="navbarDropdown"
            >
              <li>
                <NavLink className="dropdown-item" exact to="/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" exact to="/profesionals">
                  Profesionals
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" exact to="/recipes">
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" exact to="/restaurants">
                  Restaurants
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" exact to="/shops">
                  Shops
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <NavLink className="dropdown-item" exact to="/login">
                  Login
                </NavLink>
              </li>
              {/* Logout */}
              <li className="text-center">
                <Logout />
              </li>
            </ul>
          </li>
          {/* Home */}
          <li className="nav-item col-2 ms-4">
            <NavLink
              className="nav-link"
              aria-current="page"
              exact
              to="/home"
              activeStyle={{
                fontWeight: "bold",
                color: "black",
              }}
            >
              <i className="fa fa-home fa-fw" aria-hidden="true"></i>
            </NavLink>
          </li>
          {auth.user?.email && <li className="nav-item col-auto ms-4 text-center mt-2">Hi {auth.user?.name}!</li>}
        </ul>
        <NavLink className="navbar-brand lg-col-1 me-5 " exact to="/home">
          Mejor Sin Gluten
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
