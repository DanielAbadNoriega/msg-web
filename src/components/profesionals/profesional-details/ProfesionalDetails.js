import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Rating from "../../rating/Rating";
import profesionalsServices from "../../../services/profesionals-service";

function ProfesionalDetails() {
  const [profesional, setProfesional] = useState({});
  const { name, email, phone, avatar, address, company } = profesional;
  
  const { id } = useParams();

  useEffect(() => {
    profesionalsServices
      .detail(id)
      .then((data) => setProfesional(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (profesional !== undefined) {
    return (
      <div
        className="card mb-3 container mt-4 shadow-lg p-1"
        style={{ maxwidth: " 540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4 mt-4 col-lg-4">
            <img
              src={avatar}
              className="img-fluid rounded-start shadow-lg p-1 mb-2 w-100"
              alt={avatar}
            />
          </div>
          <div className="col-md-8 col-lg-8">
            <div className="card-body">
              <h5 className="card-title mt-2">{name}</h5>

              <p className="card-text mt-2">
                <b>Email: </b>
                {email}
              </p>
              <p className="card-text">
                <b>Phone: </b>
                {phone}
              </p>
              {/* Company */}
              {company && <p className="card-text col-8">
                <b>Company:</b> <br />
                <b>-Name: </b>
                {company?.name}. <br />
                <b>-Catch phrase: </b>
                {company?.catchPhrase}. <br />
                <b>-Logan: </b> {company?.bs}.
              </p>}

              {/* Address */}
              {address && 
                <p className="card-text col-8">
                  <b>Address:</b> <br />
                  <b>-City: </b>
                  {address.city}. <br />
                  <b>-Street: </b>
                  {address.street}, {address.suite}, zipcode {address.zipcode}{" "}
                  <br />
                </p> 
              }
            </div>
            <Rating />
            <Link to="/profesionals" className="btn btn-danger mt-2 mb-2">
              {" "}
              Back{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default ProfesionalDetails;
