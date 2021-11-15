import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profesionalsService from "../../../../services/profesionals-service";

function ProfesionalsCarousel() {
  const [profesionals, setProfesionals] = useState([]);

  useEffect(() => {
    profesionalsService
      .list()
      .then((data) => setProfesionals(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-4 lg-col-12">
      {profesionals && (
        <>
          <h2 className="text-center text-white">Profesionals</h2>
          <div
            id="carouselProfesionals"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            {/* Sliders */}
            <div className="carousel-inner container">
              {/* --------------------------------------- */}
              {profesionals?.map((profesional, index) => (
                <div
                  key={profesional.id}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval={`${(index *= 1000)}`}
                >
                  <img
                    src={profesional.avatar}
                    className="rounded d-block mx-auto shadow-lg p-1 w-25 h-25 mt-2"
                    alt={profesional.avatar}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4 className="text-white">{profesional.company.name}</h4>
                    <p className="text-white lh-sm text-truncate text-center">
                      {profesional.company.catchPhrase}
                    </p>
                  </div>
                  <Link
                    to={`/profesionals/${profesional.id}`}
                    className="stretched-link"
                  />
                </div>
              ))}
            </div>

            {/* Button down images */}
            <div className="carousel-indicators position-relative">
              {profesionals &&
                profesionals.map((profesional, index) => (
                  <button
                    key={profesional.id}
                    type="button"
                    data-bs-target="#carouselProfesionals"
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
              data-bs-target="#carouselProfesionals"
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
              data-bs-target="#carouselProfesionals"
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

export default ProfesionalsCarousel;
