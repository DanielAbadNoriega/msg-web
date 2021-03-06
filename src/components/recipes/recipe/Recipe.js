import { Link } from "react-router-dom";
import Rating from "../../rating/Rating";
import "./Recipe.css";

function Recipe({ name, image, id, steps, onDelete, ...recipe }) {
  return (
    <div
      className="Recipe card mb-3 mt-4 shadow-lg p-1"
      style={{ maxwidth: "700px", opacity:"0.8" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid rounded-start shadow-lg p-1 mb-2"
            alt={image}
          />
        </div>
        <div className="col-md-8">
          <div
            className="card-body shadow-lg p-1 w-100 h-100"
            style={{ color: "#37265F" }}
          >
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{steps}</p>
            <p className="card-text">
              <small className="text-muted">Rating: </small>
            </p>
            <Rating />
            <Link to={`/recipes/${id}`} className="stretched-link" />
            <p className="card-text">
              <small className="text-muted">Click to more information. </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
