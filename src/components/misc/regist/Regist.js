function Regist() {
  return (
    <div style={{background: "linear-gradient(to bottom left, #01f4dd, #009688)"}} className="container  border-1  mt-5">
      <div className="row justify-content-center">
        {/* Image Logo */}
        <div className="container col-5 me-4"></div>

        {/* Form */}
        <form className="container col-5">
          {/* Name */}
          <div className="container col-8 p-2">
            <label
              for="validationTooltipUsername"
              className="form-label"
              aria-hidden="true"
            >
              Name
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                <i class="fa fa-id-card fa-fw" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>

          {/* LastName */}
          <div className="container col-8 p-2">
            <label for="validationTooltipUsername" className="form-label">
              LastName
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                <i class="fa fa-id-card fa-fw" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="container col-8 p-2">
            <label for="validationTooltipUsername" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                <i class="fa fa-envelope fa-fw" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="container col-8 p-2">
            <label for="validationTooltipUsername" className="form-label">
              Phone
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                <i class="fa fa-phone-square fa-fw" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="container col-8 p-2">
            <label for="validationTooltipUsername" className="form-label">
              Avatar
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                <i class="fa fa-user-circle" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="container col-8 p-2">
            <label for="validationTooltipUsername" className="form-label col-1">
              Address
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                aria-hidden="true"
                id="validationTooltipUsernamePrepend"
              >
                <i class="fa fa-map-marker fa-fw" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="form-control col-4"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="container col-8 p-2">
            <label for="validationTooltipUsername" className="form-label">
              Password
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                <i class="fa fa-lock fa-fw" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Regist;
