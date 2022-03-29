import "./ProductDetails.scss";
import {useState} from "react";

import Carrousel from "../../components/Carrousel/Carrousel";
import iconCart from "../../assets/icon-cart-white.svg";
import {useCart} from "../../hooks/useCart";
import {formatter} from "../../helpers/utils";

const ProductDetails = ({product}) => {
  const {add, increment, decrement} = useCart();
  const initialState = product.quantity;
  const [quantity, setQuantity] = useState(initialState);

  const handleAdd = () => {
    add(product);
    increment(product.id);
    setQuantity(quantity + 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    increment(product);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
    decrement(product);
  };

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
        <div className="quantity">
          <button onClick={handleDecrement}>-</button>
          <p>{quantity}</p>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAdd}>
          <img alt="Icon Cart" src={iconCart} />
          <span>Add to cart</span>
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
