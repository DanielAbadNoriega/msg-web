import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom"
import Rating from "../../rating/Rating";
import shopsServices from "../../../services/shops-service";

function ShopDetails() {
  const [shop, setShop] = useState({});
  const { title, description, address, image } = shop;

  const { id } = useParams();

  useEffect(() => {
    shopsServices
      .detail(id)
      .then((data) => setShop(data))
      .catch((error) => console.error(error));
  }, [id]);
  console.log(shop);

  if (shop !== undefined) {
    return (
      <div
        className="card mb-3 container shadow-lg mt-4 p-1"
        style={{ maxwidth: "540px;" }}
      >
        <div className="row g-0">
          <div className="col-md-4 shadow-lg p-0">
            <img
              src={image}
              className="img-fluid rounded-start shadow-lg p-1 h-100"
              alt={image}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                {" "}
                <b>Address :</b>
                {address}
              </p>
              <p className="card-text">
                <small className="text-muted">Rating: </small>
              </p>
              <Rating />
              <Link
                to="/shops"
                className="btn btn-danger col-2 mb-2 mt-2"
              >
                {" "}
                Back{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container"> Loading </div>;
  }
}

export default ShopDetails;
