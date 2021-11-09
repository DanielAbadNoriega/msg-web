function Login() {
  return(
    <>
      {/* Form */}
      <form
        style={{
          background: "linear-gradient(to bottom left, #01f4dd, #009688)",
        }}
        className="container col-6"
      >
        {/* Email */}
        <div className="container col-8 p-2">
          <label htmlFor="validationTooltipUsername" className="form-label text-white" >
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
              type="text"
              className="form-control"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="e-mail@example.com"
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="container col-8 p-2">
          <label htmlFor="validationTooltipUsername" className="form-label text-white">
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
              type="text"
              className="form-control"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="********"
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login;