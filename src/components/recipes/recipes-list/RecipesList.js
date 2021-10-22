import React from "react";
import Recipe from "../recipe/Recipe";
import recipesData from "../../../data/recipes.json";

function RecipesList() {
  const recipes = recipesData;
  return (
    <div className="container mt-5 col-12">
      <h3 className="text-white">Recipes List</h3>
      <div className="row justify-content-center col-12">
        <div className="card col-6 border-0 bg-transparent">
          {recipes &&
            recipes.map((recipe) => <Recipe {...recipe} key={recipe.id} />)}
        </div>
      </div>
    </div>
  );
}

export default RecipesList;
