import {createContext, useState} from "react";

import mock from "../mock";

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [products] = useState(mock);

  return <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
