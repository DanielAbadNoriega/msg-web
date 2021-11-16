import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesService from "../../../../services/recipes-service";
import "./RecipesCarousel.css"

function RecipesCarousel() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipesService
      .list()
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="RecipesCarousel container border-dark border-4 mt-5 lg-col-12">
      {recipes && (
        <>
          <h2 className="text-center"  style={{ color: "#E0A500" }}>Recipes</h2>
          <div
            id="carouselRecipes"
            className="carousel carousel-dark slide mt-5 mb-4"
            data-bs-ride="carousel"
          >
            {/* Sliders */}
            <div className="carousel-inner container">
              {/* --------------------------------------- */}
              {recipes?.map((recipe, index) => (
                <div
                  key={recipe.id}
                  className={`carousel-item ${index === 0 ? "active" : ""} text-center`}
                  data-bs-interval={`${(index *= 1000)}`}
                >
                  <img
                    src={recipe.image}
                    className="rounded d-block mx-auto shadow-lg p-1 mt-2"
                    alt={recipe.image}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4 style={{ color: "#E0A500" }}>{recipe.name}</h4>
                    <p className="text-white lh-sm text-truncate">
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
                    className="active"
                    style={{ backgroundColor: "#B88700" }}
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
