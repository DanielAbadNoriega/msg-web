import React, { useEffect, useState } from "react";
import productsService from "../services/products-service";

export const ProductContext = React.createContext();

export function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsService
      .list()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const value = {
    products: products,
  };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
}
