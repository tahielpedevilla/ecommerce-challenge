import "./ProductCard.scss";
import {useCart} from "../../hooks/useCart";

const formatPrice = (price) => {
  return price.toLocaleString("en-AR", {
    style: "currency",
    currency: "ARS",
  });
};

const ProductCard = ({product}) => {
  const {add} = useCart();

  return (
    <div className="card">
      <div className="image">
        <img alt={product.model} src={product.images[1]} />
      </div>
      <div className="details">
        <h4 className="details-card-model">{product.model}</h4>
        <div className="price-container">
          <div className="row-price">
            <p className="details-card-currentPrice">{formatPrice(product.price)}</p>
            <p className="details-card-off">{product.off + "%"}</p>
          </div>
          <p className="details-card-oldPrice">{formatPrice(product.oldPrice)}</p>
        </div>
        <div className="buttons">
          <button className="see-more">Details</button>
          <button className="add-to-cart" onClick={() => add(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
