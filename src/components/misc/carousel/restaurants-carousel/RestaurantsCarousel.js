import { useEffect, useState } from "react";
import restaurantsService from "../../../../services/restaurants-service";

function RestaurantsCarousel() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    restaurantsService
      .list()
      .then((data) => setRestaurants(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-2 lg-col-12">
      {restaurants && (
        <>
          <h2 className="text-center">Restaurants</h2>
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {/* Button down images */}
              {restaurants &&
                restaurants.map((restaurant, index) => (
                  <button
                    key={restaurant.id}
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    className="active"
                    aria-current="true"
                    data-bs-slide-to={index}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
            </div>
            {/* Sliders */}
            <div className="carousel-inner container">
              {/* --------------------------------------- */}
              {restaurants?.map((restaurant, index) => (
                <div
                  key={restaurant.id}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval={`${(index *= 1000)}`}
                >
                  <img
                    src={restaurant.image}
                    className="rounded d-block mx-auto shadow-lg p-1 mt-2"
                    alt={restaurant.image}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4 className="text-white">{restaurant.title}</h4>
                    <p className="text-white lh-sm text-truncate text-center">
                      {restaurant.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Button next */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
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

export default RestaurantsCarousel;
