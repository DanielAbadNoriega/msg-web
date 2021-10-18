import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/">
          Mejor Sin Gluten
        </NavLink>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
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
              Home
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              exact
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
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
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
