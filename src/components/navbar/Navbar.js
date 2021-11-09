import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid col-12">
        <NavLink className="navbar-brand col-1 me-5" exact to="/">
          Mejor Sin Gluten
        </NavLink>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Home */}
          <li className="nav-item col-4 me-4">
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
          {/* Dropdown */}
          <li className="nav-item dropdown col-2 me-4">
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
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
