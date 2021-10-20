import React from "react";
import Recipe from "../recipe/Recipe";
import recipesData from "../../../data/recipes.json";

function RecipesList() {
  const recipes = recipesData;
  return (
    <div className="container">
      <h3 >Recipes List</h3>
      <div className="card-group col-12">
        {recipes &&
          recipes.map((recipe) => <Recipe {...recipe} key={recipe.id} />)}
      </div>
    </div>
  );
}

export default RecipesList;
