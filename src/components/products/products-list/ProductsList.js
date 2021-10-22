import React, { useState } from "react";
import productsData from "../../../data/products.json";
import Product from "../product/Product";
import ProductsFilter from "../products-filter/ProductsFilter";

function ProductsList() {
  const products = productsData;

  const [tag, setTag] = useState("");

  const filter = (tag) => {
    setTag(tag);
  };

  return (
    <div className="container mt-5">
      <h3>Products List</h3>
      <ProductsFilter onFilter={filter} />
      <div className="row col-12">
        {products &&
          products
            .filter((product) => (tag ? product.tags === tag : product))
            .map((product) => <Product {...product} key={product.id} />)}
      </div>
    </div>
  );
}

export default ProductsList;
