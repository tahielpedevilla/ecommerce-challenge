import "./Men.scss";

import ProductCard from "@components/ProductCard/ProductCard";

import {useProducts} from "@/hooks/useProducts";

const Men = () => {
  const {products} = useProducts();

  const filteredProducts = products.filter((product) => product.category === "Men");

  return (
    <>
      <section className="products">
        <div className="title">
          <h1>Men</h1>
          <p>Only for men or not</p>
        </div>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Men;
