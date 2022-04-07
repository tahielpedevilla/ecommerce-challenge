import "./Cart.scss";

import CartItem from "@components/CartItem/CartItem";

import {useCart} from "@/hooks/useCart";
import {formatter} from "@/helpers/utils";

const Cart = () => {
  const {cartItems, handleCheckout, total} = useCart();

  const handleCheckoutClick = () => {
    handleCheckout();
  };

  return (
    <>
      <div className="container">
        <div className="cart">
          <p className="title">Cart</p>
          <div className="divider" />
          {cartItems.length > 0 && (
            <>
              <div className="cart-items-wrapper">
                {cartItems.map((product, i) => (
                  <CartItem key={i} product={product} />
                ))}
              </div>
              <p className="summary">Total: {formatter(total)}</p>
              <div className="checkout">
                <button className="btn-checkout" onClick={handleCheckoutClick}>
                  Checkout
                </button>
              </div>
            </>
          )}
          {cartItems.length === 0 && (
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
