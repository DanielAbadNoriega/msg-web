import React, { useState, useEffect } from "react";
import Product from "../product/Product";
import ProductsFilter from "../products-filter/ProductsFilter";
import productsService from "../../../services/products-service";

function ProductsList() {
  const [products, setProducts] = useState(null);
  const [tag, setTag] = useState("");

  useEffect(() => {
    productsService
      .list()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const filter = (tag) => {
    setTag(tag);
  };

  return (
    <div className="container mt-5">
      <div className="row col-12">
        <h3 className="text-white">Products</h3>
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
