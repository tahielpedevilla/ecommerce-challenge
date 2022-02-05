import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";

import "./index.scss";
import App from "./app";
import CartProvider from "./context/CartContext";
import ProductsProvider from "./context/ProductsContext";

ReactDOM.render(
  <ProductsProvider>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </ProductsProvider>,
  document.getElementById("root"),
);
