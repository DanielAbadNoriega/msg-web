import { useState } from "react";
import { useHistory } from "react-router";
import userService from "../../../services/users-service";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);

  const history = useHistory();

  const handleChange = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    userService
      .login(data.email, data.password)
      .then(() => {
        history.push("/");
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {/* Form */}
      <form
        style={{
          opacity: "0.8",
        }}
        className="container col-6 bg-light"
        onSubmit={handleSubmit}
      >
        {/* Email */}
        <div className="container col-8 p-2">
          <label htmlFor="validationTooltipUsername" className="form-label ">
            Email
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              <i className="fa fa-envelope fa-fw" aria-hidden="true"></i>
            </span>
            <input
              name="email"
              type="text"
              className="form-control"
              id="validationTooltipEmail"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="e-mail@example.com"
              onChange={handleChange}
              value={data.email}
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid email.
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="container col-8 p-2">
          <label htmlFor="validationTooltipUsername" className="form-label ">
            Password
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              <i className="fa fa-lock fa-fw" aria-hidden="true"></i>
            </span>
            <input
              name="password"
              type="password"
              className="form-control"
              id="validationTooltipPassword"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="********"
              onChange={handleChange}
              value={data.password}
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid password.
            </div>
          </div>
        </div>
        <div className="container col-5 p-2">
          <button
            type="submit"
            className="btn btn-success  ms-5 mb-3 mt-3 col-5"
          >
            Regist
          </button>
        </div>
        {errors && (
          <div className="alert alert-danger text-center" role="alert">
            <i
              className="fa fa-exclamation-triangle fa-fw"
              aria-hidden="true"
            />
            {errors.message}
            {errors.error}
            {errors.email}
            {console.log(errors)}
          </div>
        )}
      </form>
    </>
  );
}

export default Login;
