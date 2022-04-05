import "./CartItem.scss";

import iconDelete from "../../public/assets/icon-delete-cart.svg";
import iconMinus from "../../public/assets/icon-minus-cart.svg";
import iconPlus from "../../public/assets/icon-plus-cart.svg";
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
        <img alt={product.model} className="thumbnail-img" src={product.thumbnails[1]} />
        <div className="product-description">
          <p className="model">{product.model}</p>
          <div className="price-container">
            <div className="price">
              <p className="actual">{formatter(product.price)}</p>
              <p className="quantity">{"x" + product.quantity}</p>
            </div>
            <p>|</p>
            <p className="total">{formatter(totalItem)}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          alt="Decrement"
          src={product.quantity >= 2 ? iconMinus : iconDelete}
          onClick={product.quantity > 1 ? decrementProduct : removeProduct}
        />
        <span className="quantity">{product.quantity}</span>
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
