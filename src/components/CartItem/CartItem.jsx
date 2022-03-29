import "./CartItem.scss";

import iconMinus from "../../assets/icon-minus.svg";
import iconPlus from "../../assets/icon-plus.svg";
import {useCart} from "../../hooks/useCart";
import {formatter} from "../../helpers/utils";

const CartItem = ({product}) => {
  const {remove, increment, decrement} = useCart();
  const removeProduct = () => remove(product);
  const incrementProduct = () => increment(product);
  const decrementProduct = () => decrement(product);

  const totalItem = product.price * product.quantity;

  return (
    <div className="cart-item">
      <div className="left">
        <img alt={product.model} className="thumbnail-img" src={product.images[3]} />
        <div className="product-description">
          <p className="model">{product.model}</p>
          <div className="price-container">
            <div className="price">
              <p className="actual">{formatter(product.price)}</p>
              <p className="quantity">{"x" + product.quantity}</p>
            </div>
            <p className="total">{totalItem}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          alt="Delete"
          src={iconMinus}
          onClick={product.quantity > 1 ? decrementProduct : removeProduct}
        />
        <img
          alt="Increase"
          className="cart-increase-icon"
          src={iconPlus}
          onClick={incrementProduct}
        />
      </div>
    </div>
  );
};

export default CartItem;
