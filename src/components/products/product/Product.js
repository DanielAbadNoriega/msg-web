import React from "react";

function Product({ name, nutritionPerHundred, tags, id }) {
  const {
    energy,
    protein,
    fat,
    saturatedFat,
    carbohydrate,
    sugars,
    dietaryFibre,
    sodium,
    potassium,
    transFat,
    polyunsaturatedFat,
    calcium,
    monounsaturatedFat,
    magnesium,
  } = nutritionPerHundred;
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
          quam malesuada, malesuada est id, aliquam odio. Pellentesque ornare
          urna fringilla magna molestie varius. Nunc bibendum sapien consectetur
          rhoncus tempor.
        </p>

        <h5 className="card-title">Nutrition per hundred:</h5>
        {energy && (
          <p className="card-text">
            <b>Energy: </b> {energy}
          </p>
        )}
        {protein && (
          <p className="card-text">
            <b>Protein: </b> {protein}
          </p>
        )}
        {fat && (
          <p className="card-text">
            <b>Fat: </b> {fat}
          </p>
        )}
        {saturatedFat && (
          <p className="card-text">
            <b>SaturatedFat: </b> {saturatedFat}
          </p>
        )}
        {carbohydrate && (
          <p className="card-text">
            <b>Carbohydrate: </b> {carbohydrate}
          </p>
        )}
        {sugars && (
          <p className="card-text">
            <b>Sugars: </b> {sugars}
          </p>
        )}
        {dietaryFibre && (
          <p className="card-text">
            <b>Dietary fibre: </b> {dietaryFibre}
          </p>
        )}
        {sodium && (
          <p className="card-text">
            <b>Sodium: </b> {sodium}
          </p>
        )}
        {potassium && (
          <p className="card-text">
            <b>Potassium: </b> {potassium}
          </p>
        )}
        {transFat && (
          <p className="card-text">
            <b>Trans fat: </b> {transFat}
          </p>
        )}
        {polyunsaturatedFat && (
          <p className="card-text">
            <b>Polyunsaturated fat: </b> {polyunsaturatedFat}
          </p>
        )}
        {calcium && (
          <p className="card-text">
            <b>Calcium: </b> {calcium}
          </p>
        )}
        {monounsaturatedFat && (
          <p className="card-text">
            <b>Monounsaturated fat: </b> {monounsaturatedFat}
          </p>
        )}
        {magnesium && (
          <p className="card-text">
            <b>Magnesium: </b> {magnesium}
          </p>
        )}

        {/* <h5 className="card-title">Tags: </h5>
        {tags && tags.map((tag) => <ul className="card-text mt-1">- {tag}</ul>)} */}
        <a href="/" className="card-link">
          Deteail
        </a>
        <a href="/" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export default Product;
