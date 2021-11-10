import { useState } from "react";
import { useHistory } from "react-router";
import restaurantsService from "../../../../services/restaurants-service"

function RestaurantRegist() {
  const [restaurant, setRestaurant] = useState(null);
  const [errors, setErrors] = useState(null);

  const history = useHistory();

  const handleInputChange = (event) => {
    setRestaurant({
      ...restaurant,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    restaurantsService.create(restaurant)
    .then(() => history.push("/login"))
    .catch((error) => {
      const { errors, message } = error.response?.data || error;
      console.error("Error message: ", message);

      setErrors({
        title: errors ? undefined : message,
        description: errors ? undefined : message,
        address: errors ? undefined : message,
        email: errors ? undefined : message,
        avatar: errors ? undefined : message,
        ...errors
      })

      console.error("Errors: ", errors);
    })
  }

  if(errors) {
    console.error("Errors: ", errors)
  }

  return (
    <>
      {" "}
      {/* Form */}
      <form
        style={{
          background: "linear-gradient(to bottom left, #01f4dd, #009688)",
        }}
        className="container col-6"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <div className="container col-8 p-2">
          <label
            htmlFor="validationTooltipUsername"
            className="form-label text-white"
            aria-hidden="true"
          >
            Restaurant`s name
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="fa fa-id-card fa-fw" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              name="title"
              className="form-control"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="Tittle"
              onChange={handleInputChange}
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="container col-8 p-2">
          <label
            htmlFor="validationTooltipUsername"
            className="form-label text-white"
          >
            Description
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="fa fa-id-card fa-fw" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              name="description"
              className="form-control"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="description"
              onChange={handleInputChange}
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="container col-8 p-2">
          <label
            htmlFor="validationTooltipUsername"
            className="form-label text-white"
          >
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="fa fa-envelope fa-fw" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              name="email"
              className="form-control"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="e-mail@example.com"
              onChange={handleInputChange}
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div className="container col-8 p-2">
          <label
            htmlFor="validationTooltipUsername"
            className="form-label text-white"
          >
            Avatar
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="fa fa-user-circle" aria-hidden="true" />
            </span>
            <input
              type="text"
              name="avatar"
              className="form-control"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="Image here"
              onChange={handleInputChange}
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="container col-8 p-2">
          <label
            htmlFor="validationTooltipUsername"
            className="form-label text-white col-1"
          >
            Address
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" aria-hidden="true">
              <i className="fa fa-map-marker fa-fw" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              name="address"
              className="form-control col-4"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="C/Example..."
              onChange={handleInputChange}
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="container col-8 p-2">
          <label
            htmlFor="validationTooltipUsername"
            className="form-label text-white"
          >
            Password
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text">
              <i className="fa fa-lock fa-fw" aria-hidden="true"></i>
            </span>
            <input
              type="password"
              name="password"
              className="form-control"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="********"
              onChange={handleInputChange}
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>
        <div className="container col-5 p-2">
          <button
            type="submit"
            className="btn btn-success text-white ms-5 mb-3 mt-3 col-5"
          >
            Regist
          </button>
        </div>
      </form>{" "}
    </>
  );
}

export default RestaurantRegist;
