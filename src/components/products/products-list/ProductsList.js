import React from "react";
import productsData from "../../../data/products.json";
import Product from "../product/Product";

function ProductsList() {
  const products = productsData;

  return (
    <div className="container">
      <h3>Products List</h3>
      <div className="row">
        {products.map(product => (
          <Product 
            {...product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
