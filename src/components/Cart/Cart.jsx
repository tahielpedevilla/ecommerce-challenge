import "./Cart.scss";

import CartItem from "@components/CartItem/CartItem";

import {useCart} from "@/hooks/useCart";

const Cart = () => {
  const {cartItems, handleCheckout, total, itemCount} = useCart();

  const handleCheckoutClick = () => {
    handleCheckout();
  };

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
                <button className="btn-checkout" onClick={handleCheckoutClick}>
                  Checkout
                </button>
                <p>Total: {total}</p>
                <p>Items: {itemCount}</p>
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
