function ProfesionalRegist() {
  return (
    <>
      {/* Form */}
      <form
        style={{
          opacity:"0.8",
        }}
        className="container col-6"
      >
        {/* Name */}
        <div className="container col-8 p-2">
          <label
            htmlFor="validationTooltipUsername"
            className="form-label "
            aria-hidden="true"
          >
            Profesional`s name
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              <i className="fa fa-id-card fa-fw" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="Name & lastname"
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
            className="form-label  "
          >
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

        {/* Phone */}
        <div className="container col-8 p-2">
          <label
            htmlFor="validationTooltipUsername"
            className="form-label  "
          >
            Phone
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              <i className="fa fa-phone-square fa-fw" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="xxx-xxx-xxx"
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
            className="form-label  "
          >
            Avatar
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              <i className="fa fa-user-circle" aria-hidden="true" />
            </span>
            <input
              type="text"
              className="form-control"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="Image here"
              required
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
            className="form-label   col-1"
          >
            Address
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              aria-hidden="true"
              id="validationTooltipUsernamePrepend"
            >
              <i className="fa fa-map-marker fa-fw" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="form-control col-4"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="C/Example..."
              required
            />
            <div className="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="container col-8 p-2">
          <label
            htmlFor="validationTooltipUsername"
            className="form-label   col-1"
          >
            Company
          </label>
          <div className="input-group has-validation">
            <span
              className="input-group-text"
              aria-hidden="true"
              id="validationTooltipUsernamePrepend"
            >
              <i className="fa fa-map-marker fa-fw" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="form-control col-4"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
              placeholder="Company name"
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
            className="form-label "
          >
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
        <div className="container col-5 p-2">
          <button
            type="submit"
            className="btn btn-success  ms-5 mb-3 mt-3 col-5"
          >
            Regist
          </button>
        </div>
      </form>
    </>
  );
}

export default ProfesionalRegist;
