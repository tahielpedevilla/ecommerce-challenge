import {createContext, useState} from "react";

import data from "../products";

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [products] = useState(data);

  return <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
