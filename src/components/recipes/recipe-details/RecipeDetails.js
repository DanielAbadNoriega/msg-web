import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import recipesServices from "../../../services/recipes-service";
import Rating from "../../rating/Rating";

function RecipeDetails() {
  const [recipe, setRecipe] = useState([]);
  const { name, image, steps } = recipe;

  const { id } = useParams();

  useEffect(() => {
    recipesServices
      .detail(id)
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (recipe !== undefined) {
    return (
      <div
        className="card mb-3 container mt-4 shadow-lg p-1"
        style={{
          maxwidth: " 540px",
          opacity:"0.8",
          color: "#37265F",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4 mt-4 col-lg-4">
            <img
              src={image}
              className="img-fluid rounded-start shadow-lg p-1 mb-2 w-100"
              alt={image}
            />
          </div>
          <div className="col-md-8 col-lg-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{steps}</p>
              <p className="card-text col-8">
                <b>Ingredients:</b>
              </p>
              {recipe.ingredients?.map((ingredient, index) => (
                <p key={index} className="card-text">
                  {index + 1})<b> Name: </b>
                  {ingredient.name}.<br /> <b>-Quantity: </b>
                  {ingredient.quantity}. <br /> <b>-Type: </b>
                  {ingredient.type}.
                </p>
              ))}
            </div>
            <Rating />
            <Link to="/recipes" className="btn btn-danger mb-2">
              {" "}
              Back{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
}

export default RecipeDetails;
