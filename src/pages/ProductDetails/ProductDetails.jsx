import "./ProductDetails.scss";
import Carrousel from "../../components/Carrousel/Carrousel";
import iconCart from "../../assets/icon-cart-white.svg";
import {useCart} from "../../hooks/useCart";

const formatPrice = (price) => {
  return price.toLocaleString("en-AR", {
    style: "currency",
    currency: "ARS",
  });
};

const ProductDetails = ({product}) => {
  const {add, increment, decrement} = useCart();
  const [quantity, setQuantity] = useState(product.quantity);

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
            <p className="current-price">{formatPrice(product.price)}</p>
            <p className="off">{product.off + "%"}</p>
          </div>
          <p className="old-price">{formatPrice(product.oldPrice)}</p>
        </div>
        <div className="quantity">
          <button onClick={handleDecrement}>-</button>
          <p>{quantity}</p>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="add-to-cart" onClick={() => add(product)}>
          <img alt="Icon Cart" src={iconCart} />
          <span>Add to cart</span>
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
