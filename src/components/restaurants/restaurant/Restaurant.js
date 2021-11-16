import { Link } from "react-router-dom";
import Rating from "../../rating/Rating";

function Restaurant({ title, address, image, description, id }) {
  return (
    <div className="card mb-3 shadow-sm p-3 mb-2 mt-4" style={{opacity:"0.8"}}>
      <div className="row g-0">
        <div className="col-md-4 shadow-lg p-0">
          <img src={image} className="img-fluid rounded-start h-100" alt={image} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text text-truncate">
              <b>Description: </b>
              {description}
            </p>
            <p className="card-text">
              <b>Adress:</b> {address}
            </p>
            <p className="card-text">
              <small className="text-muted">Rating: </small>
            </p>
            <Rating />
            <Link to={`/restaurants/${id}`} className="stretched-link" />
            <p className="card-text">
              <small className="text-muted">Click to more information. </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
