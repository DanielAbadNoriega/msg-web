import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import restaurantsService from "../../../services/restaurants-service";
import Rating from "../../rating/Rating";

function RestaurantDetails() {
  const [restaurant, setRestaurant] = useState({});

  const { title, description, address, image } = restaurant;

  const { id } = useParams();

  useEffect(() => {
    restaurantsService
      .detail(id)
      .then((data) => setRestaurant(data))
      .catch((error) => console.error(error));
  }, [id]);

  console.log(restaurant);

  if (restaurant !== undefined) {
    return (
      <div
        className="card mb-3 container mt-4 shadow-lg p-1"
        style={{ maxwidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start shadow-lg p-1"
              alt={image}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><b>Address: </b> {address}</p>
              <p className="card-text">
                <small className="text-muted">Rating: </small>
              </p>
              <Rating />
              <Link to="/restaurants" className="btn btn-danger col-2 mb-2 mt-2"> Back </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container"> Loading </div>;
  }
}

export default RestaurantDetails;
