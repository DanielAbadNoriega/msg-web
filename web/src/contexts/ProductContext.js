import React, { useState } from "react";

export const ProductContext = React.createContext();

export function ProductContextProvider(props) {
  const [products, setProducts] = useState([]);

  function addProducts(product) {
    setProducts(prev => [...prev, product])
  }

  const value = {
    products: products,
    addProducts: addProducts,
  };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
}