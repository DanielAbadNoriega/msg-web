import { Link } from "react-router-dom";
import Rating from "../../rating/Rating";

function Profesional({ email, phone, avatar, company, id }) {
  //const { street, suite, city, zipcode } = address;
  return (
    <div className="card mb-3 shadow p-3 mb-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={avatar}
            className="img-fluid rounded-start shadow-lg p-1 mb-2 h-100"
            alt={avatar}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title mb-4">{company.name}</h3>
            <p className="card-text text-truncate">
              <b>Description: </b>
              {company.catchPhrase.trim()}
            </p>
            <p className="card-text">
              <b>About us: </b>
              {company.bs}
            </p>
            <p className="card-text">
              <b>Phone: </b>
              {phone}
            </p>
            <p className="card-text">
              <b>Email: </b>
              <small className="text-muted">{email}</small>
            </p>
            <p className="card-text">
              <small className="text-muted">Rating: </small>
            </p>
            <Rating />
            <Link to={`/profesionals/${id}`} className="stretched-link" />
            <p className="card-text">
              <small className="text-muted">Click to more information. </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profesional;
