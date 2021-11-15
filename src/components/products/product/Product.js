import React from "react";
import Rating from "../../rating/Rating";
import ProductDetail from "../product-detail/ProductDetail";


function Product({ name, nutritionPerHundred }) {
  return (
    <div className="card mt-2 shadow p-3 mb-2 col-12 border-light border-2"
    style={{opacity:"0.9", color: "#37265F"}}>
      <div className="card-body col-12" style={{fontWeight:"bold"}}>
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
          quam malesuada, malesuada est id, aliquam odio. Pellentesque ornare
          urna fringilla magna molestie varius. Nunc bibendum sapien consectetur
          rhoncus tempor.
        </p>
        <div className="col-6 mb-3">
          <Rating />
        </div>
        <ProductDetail {...nutritionPerHundred} />
      </div>
    </div>
  );
}

export default Product