import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import userService from "../../../services/users-service";

function Login() {
  const history = useHistory();
  const auth = useContext(AuthContext)
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [warning, setWarning] = useState(null);



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
      .then((user) => {
        history.push("/");
        auth.login(user)
      })
      .catch((error) => {
        const { errors, message } = error.response?.data || error;

        setWarning({
          errors: errors,
          message: message,
          ...warning,
        });
      });
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
        {warning && (
          <div className="alert alert-danger text-center" role="alert">
            <i
              className="fa fa-exclamation-triangle fa-fw"
              aria-hidden="true"
            />
            {warning.errors?.email}
            <br />
            {warning.message}
          </div>
        )}
      </form>
    </>
  );
}

export default Login;
