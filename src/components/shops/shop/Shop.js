import Rating from "../../rating/Rating";
import { Link } from "react-router-dom";

function Shop({ title, address, image, description, id }) {
  return (
    <div className="card mb-3 shadow-sm p-3 mb-2">
      <div className="row g-0">
        <div className="col-md-4 shadow-lg p-0">
          <img
            src={image}
            className="img-fluid rounded-start shadow-lg p-1 mb-2 h-100"
            alt={image}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text text-truncate">
              <b>Description: </b>
              {description.trim()}
            </p>
            <p className="card-text">
              <b>Adress:</b> {address}
            </p>
            <p className="card-text">
              <small className="text-muted">Rating: </small>
            </p>
            <Rating />
            <Link to={`/shops/${id}`} className="stretched-link" />
            <p className="card-text">
              <small className="text-muted">Click to more information. </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
