import "./Women.scss";

import ProductCard from "@components/ProductCard/ProductCard";

import {useProducts} from "@/hooks/useProducts";

const Women = () => {
  const {products} = useProducts();
  const filteredProducts = products.filter((product) => product.category === "Women");

  return (
    <>
      <section className="products">
        <div className="title">
          <h1>Women</h1>
          <p>Only for women or not</p>
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

export default Women;
