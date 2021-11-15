import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shopsService from "../../../../services/shops-service";

function ShopsCarousel() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    shopsService
      .list()
      .then((data) => setShops(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-4 lg-col-12">
      {shops && (
        <>
          <h2 className="text-center text-white">Shops</h2>
          <div
            id="carouselShops"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            {/* Sliders */}
            <div className="carousel-inner container">
              {/* --------------------------------------- */}
              {shops?.map((shop, index) => (
                <div
                  key={shop.id}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval={`${(index *= 1000)}`}
                >
                  <img
                    src={shop.image}
                    className="rounded d-block mx-auto shadow-lg p-1 mt-2"
                    alt={shop.image}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4 className="text-white">{shop.title}</h4>
                    <p className="text-white lh-sm text-truncate text-center">
                      {shop.description}
                    </p>
                  </div>
                  <Link to={`/shops/${shop.id}`} className="stretched-link" />
                </div>
              ))}
            </div>

            {/* Button down images */}
            <div className="carousel-indicators position-relative">
              {shops &&
                shops.map((shop, index) => (
                  <button
                    key={shop.id}
                    type="button"
                    data-bs-target="#carouselShops"
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
              data-bs-target="#carouselShops"
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
              data-bs-target="#carouselShops"
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

export default ShopsCarousel;
