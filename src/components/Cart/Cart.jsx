import "./Cart.scss";

import CartItem from "../CartItem/CartItem";
import {useCart} from "../../hooks/useCart";

const Cart = () => {
  const {cartItems} = useCart();

  return (
    <>
      <div className="container">
        <div className="cart">
          <p className="title">Cart</p>
          <div className="divider" />

          {cartItems.length > 0 ? (
            <>
              {cartItems.map((product, i) => (
                <CartItem key={i} product={product} />
              ))}
              <div className="checkout">
                <button className="btn-checkout">Checkout</button>
              </div>
            </>
          ) : (
            <div className="empty">
              <p>Your cart is empty</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
