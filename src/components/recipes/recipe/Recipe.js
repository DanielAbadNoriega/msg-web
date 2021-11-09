import Rating from "../../rating/Rating";
/* import RecipeDetails from "../recipe-details/RecipeDetails"; */
import "./Recipe.css";

function Recipe({ name, image, id, steps, onDelete, ...recipe }) {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-4 col-lg-12">
          <img
            src={image}
            className="img-fluid rounded-start shadow-sm p-3 mb-2"
            alt={image}
          />
        </div>
        <div className="col-md-8 col-lg-12">
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">
              <b>Steps: </b>
              <small className="text-muted">{steps}</small>
            </p>
            <Rating />
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
