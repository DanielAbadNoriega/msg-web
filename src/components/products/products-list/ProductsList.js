import React, { useState, useContext } from "react";
import Product from "../product/Product";
import ProductsFilter from "../products-filter/ProductsFilter";
import { ProductContext } from '../../../contexts/ProductContext'


function ProductsList() {
  const [tag, setTag] = useState("");

  const productsContext = useContext(ProductContext)

  const { products } = productsContext;

  const filter = (tag) => {
    setTag(tag);
  };

  return (
    <div className="container mt-5">
      <div className="row col-12">
        <h3 className="text-white">Products List</h3>
        <ProductsFilter onFilter={filter} />
      </div>
      <div className="row col-12">
        {products &&
          products
            .filter((product) => (tag ? product.tags === tag : product))
            .map((product) => <Product key={product.id} {...product} />)}
      </div>
    </div>
  );
}

export default ProductsList;
