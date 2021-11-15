import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesService from "../../../../services/recipes-service";

function RecipesCarousel() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipesService
      .list()
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-4 lg-col-12">
      {recipes && (
        <>
          <h2 className="text-center text-white">Recipes</h2>
          <div
            id="carouselRecipes"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            {/* Sliders */}
            <div className="carousel-inner container">
              {/* --------------------------------------- */}
              {recipes?.map((recipe, index) => (
                <div
                  key={recipe.id}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval={`${(index *= 1000)}`}
                >
                  <img
                    src={recipe.image}
                    className="rounded d-block mx-auto shadow-lg p-1 w-50 h-75 mt-2"
                    alt={recipe.image}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4 className="text-white">{recipe.name}</h4>
                    <p className="text-white lh-sm text-truncate text-center">
                      {recipe.steps}
                    </p>
                  </div>
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="stretched-link"
                  />
                </div>
              ))}
            </div>

            {/* Button down images */}
            <div className="carousel-indicators position-relative">
              {recipes &&
                recipes.map((recipe, index) => (
                  <button
                    key={recipe.id}
                    type="button"
                    data-bs-target="#carouselRecipes"
                    className="active bg-light"
                    aria-current="true"
                    data-bs-slide-to={index}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
            </div>

            {/* Button prev/next */}
            {/* Button prev */}
            <button
              className="carousel-control-prev bg-light"
              type="button"
              data-bs-target="#carouselRecipes"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            {/* Button next */}
            <button
              className="carousel-control-next bg-light"
              type="button"
              data-bs-target="#carouselRecipes"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default RecipesCarousel;
