import "./Cart.scss";

import iconDelete from "../../assets/icon-delete.svg";
import {useCart} from "../../hooks/useCart";

const formatPrice = (price) => {
  return price.toLocaleString("en-AR", {
    style: "currency",
    currency: "ARS",
  });
};

const ProductCart = ({product}) => {
  const {removeProduct} = useCart();
  const total = product.quantitySelected * formatPrice(product.price);

  return (
    <div className="product-cart">
      <div className="left">
        <img alt={product.model} className="thumbnail-img" src={product.imageThumbnail} />
        <div className="product-description">
          <p className="model">{product.model}</p>
          <div className="price-container">
            <div className="price">
              <p className="actual">{formatPrice(product.price)}</p>
              <p className="quantity">{"x" + product.quantitySelected}</p>
            </div>
            <p className="total">{total}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img alt="Icon Delete" src={iconDelete} onClick={() => removeProduct(product)} />
      </div>
    </div>
  );
};

const Cart = ({quantitySelected}) => {
  const {cartItems} = useCart();

  return (
    <>
      <div className="container">
        <div className="cart">
          <p className="title">Cart</p>
          <div className="divider" />

          {quantitySelected > 0 ? (
            <>
              {cartItems.map((product) => (
                <ProductCart key={product.id} product={product} />
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
