import React, { useState, useEffect } from "react";
import Recipe from "../recipe/Recipe";
import recipesService from "../../../services/recipes-service";

function RecipesList() {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  function showErrors(error) {
    setLoading(true);
    const { errors, message } = error.response?.data || error;
    setErrors({ errors, message });
    console.error(error);
    console.error(`Errors recipes: ${errors}, message: ${message}`);
  }

  function fetchRecipes() {
    recipesService
      .list()
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => showErrors(error)); //aqui crear incluso página de errores
  }

  useEffect(() => {
    recipesService
      .list()
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => showErrors(error));
  }, []);

  function handleDeleteRecipe(id) {
    recipesService
      .remove(id)
      .then(() => fetchRecipes())
      .catch((error) => showErrors(error));
  }

  return errors ? (
    <div className="alert alert-danger d-flex container col-5" role="alert">
      <div className="row">
        <div className="col-5">
          <i
            className="fa fa-exclamation-triangle fa-fw col-12 row"
            aria-hidden="true"
          >
            {errors.errors && <p>{errors.errors}</p>}
            {errors.message && <p>{errors.message}</p>}
          </i>
        </div>
      </div>
    </div>
  ) : (
    recipes && (
      <div className="container mt-5 col-12">
        <h3 className="text-black">Recipes</h3>
        <div className="row justify-content-center col-12">
          <div className="card col-4 border-0 bg-transparent">
            {loading ? (
              <i className="fa fa-gear fa-spin"></i>
            ) : (
              recipes.length !== 0 &&
              recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="card mb-3 shadow p-3 mb-5"
                >
                  <Recipe
                    {...recipe}
                    onDelete={() => handleDeleteRecipe(recipe.id)} //Aquí modificar para usuarios ADMIN
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default RecipesList;
