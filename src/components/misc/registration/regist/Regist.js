import { useState } from "react";
import Login from "../../login/Login";
import ProfesionalRegist from "../profesional-regist/ProfesionalRegist";
import RestaurantRegist from "../restaurant-regist/RestaurantRegist";
import ShopRegist from "../shop-regist/ShopRegist";
import UserRegist from "../user-regist/UserRegist";

function Regist() {
  const [formLogin, setFormLogin] = useState(true);
  const [formUser, setFormUser] = useState(false);
  const [formProfesional, setFormProfesional] = useState(false);
  const [formRestaurant, setFormRestaurant] = useState(false);
  const [formShop, setFormShop] = useState(false);

  function handleLoginChange() {
    setFormLogin(true);
    setFormUser(false);
    setFormProfesional(false);
    setFormRestaurant(false);
    setFormShop(false);
  }

  function handleUserChange() {
    setFormLogin(false);
    setFormUser(true);
    setFormProfesional(false);
    setFormRestaurant(false);
    setFormShop(false);
  }

  function handleProfesionalChange() {
    setFormLogin(false);
    setFormUser(false);
    setFormProfesional(true);
    setFormRestaurant(false);
    setFormShop(false);
  }

  function handleRestaurantChange() {
    setFormLogin(false);
    setFormUser(false);
    setFormProfesional(false);
    setFormRestaurant(true);
    setFormShop(false);
  }

  function handleShopChange() {
    setFormLogin(false);
    setFormUser(false);
    setFormProfesional(false);
    setFormRestaurant(false);
    setFormShop(true);
  }

  return (
    <div
      className="container border-1 mt-5 bg-light"
      style={{ opacity: "0.9", color: "#E0A500" }}
    >
      {/*Nav Tab */}
      <ul className="nav nav-tabs" style={{ color: "#E0A500" }}>
        {/* Login */}
        <li className="nav-item">
          <button
            name="User"
            className="btn"
            style={{ color: "#E0A500" }}
            onClick={() => handleLoginChange()}
          >
            Login
          </button>
        </li>

        {/* User */}
        <li className="nav-item">
          <button
            name="User"
            className="btn"
            style={{ color: "#E0A500" }}
            onClick={() => handleUserChange()}
          >
            User
          </button>
        </li>

        {/* Profesional */}
        <li className="nav-item">
          <button
            name="User"
            className="btn"
            style={{ color: "#E0A500" }}
            onClick={() => handleProfesionalChange()}
          >
            Profesional
          </button>
        </li>

        {/* Restaurant */}
        <li className="nav-item">
          <button
            name="User"
            className="btn"
            style={{ color: "#E0A500" }}
            onClick={() => handleRestaurantChange()}
          >
            Restaurant
          </button>
        </li>

        {/* Shop */}
        <li className="nav-item">
          <button
            name="User"
            className="btn"
            style={{ color: "#E0A500" }}
            onClick={() => handleShopChange()}
          >
            Shop
          </button>
        </li>
      </ul>

      <div className="row justify-content-center col-12">
        {/* Image Logo */}
        <div className="container col-5 me-4 bg-light"></div>

        {/* Form */}
        {formLogin && <Login />}
        {formUser && <UserRegist />}
        {formProfesional && <ProfesionalRegist />}
        {formRestaurant && <RestaurantRegist />}
        {formShop && <ShopRegist />}
      </div>
    </div>
  );
}

export default Regist;
