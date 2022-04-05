import "./ProductDetails.scss";

import {useParams} from "react-router-dom";

import Carrousel from "../../components/Carrousel/Carrousel";
import iconCart from "../../public/assets/icon-cart-white.svg";
import {useCart} from "../../hooks/useCart";
import {formatter} from "../../helpers/utils";
import {useProducts} from "../../hooks/useProducts";

const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useProducts();
  const product = products.find((product) => product.id === Number(id));

  const {add, increment, cartItems} = useCart();
  const addProduct = () => add(product);
  const incrementProduct = () => {
    increment(product);
  };

  const isInCart = (product) => cartItems.find((item) => item.id === product.id);

  return (
    <>
      <Carrousel product={product} />
      <div className="product-details">
        <p className="brand">{product.brand}</p>
        <h2 className="model">{product.model}</h2>
        <p className="description">{product.description}</p>
        <div className="price">
          <div>
            <p className="current-price">{formatter(product.price)}</p>
            <p className="off">{product.off + "%"}</p>
          </div>
          <p className="old-price">{formatter(product.oldPrice)}</p>
        </div>
        <button className="add-to-cart" onClick={isInCart(product) ? incrementProduct : addProduct}>
          <img alt="Icon Cart" src={iconCart} />
          <span>{isInCart(product) ? "Add more" : "Add to cart"}</span>
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
