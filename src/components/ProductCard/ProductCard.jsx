import "./ProductCard.scss";
import {Link} from "react-router-dom";

import {useCart} from "../../hooks/useCart";
import {formatter, urlFormatter} from "../../helpers/utils";

const ProductCard = ({product}) => {
  const {add, increment, cartItems} = useCart();
  const addProduct = () => add(product);
  const incrementProduct = () => increment(product);

  const isInCart = (product) => cartItems.find((item) => item.id === product.id);

  return (
    <div className="card">
      <div className="image">
        <img alt={product.model} src={product.images[0]} />
      </div>
      <div className="details">
        <div className="card-header">
          <h4 className="details-card-model">{product.model}</h4>
          <div className="price-container">
            <div className="row-price">
              <p className="details-card-currentPrice">{formatter(product.price)}</p>
              <p className="details-card-off">{product.off + "%"}</p>
            </div>
            <p className="details-card-oldPrice">{formatter(product.oldPrice)}</p>
          </div>
        </div>
        <div className="buttons">
          <button className="see-more">
            <Link to={urlFormatter(`/product/${product.id}`)}>Details</Link>
          </button>
          <button
            className="add-to-cart"
            onClick={isInCart(product) ? incrementProduct : addProduct}
          >
            {isInCart(product) ? "Add more" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
