import { useState, useEffect } from "react";
import recipesService from "../../../services/recipes-service";

function RecipeDetails(recipeId) {
  
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    recipesService
      .detail(recipeId.recipeId)
      .then((recipe) => setRecipe(recipe))
      .catch((error) => console.error(error));
  },[recipeId.recipeId]);

  
  return (
    <div>
      {/* Prueba Modal */}
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#recipeDetails"
      >
        Detail
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="recipeDetails"
        tabIndex="-1"
        aria-labelledby="recipeDetailsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="recipeDetailsLabel">
                Ingredients
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">MODAL BODY
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
