import React from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { useFastSpring } from "../store/FastSpringContext";

const Grid = (props) => {
  const { products } = useFastSpring();

  return (
    <section className="py-5 flex-grow-1">
      <Header />
      <div className="container px-4 px-lg-5 mt-5">
        <div
          className="
            row
            gx-4 gx-lg-5
            row-cols-2 row-cols-md-4 row-cols-xl-4
            justify-content-center
          "
        >
          {products ? ( // Check if products is defined
            products.map((product) => (
              <ProductCard
                display={product.display}
                path={product.path}
                image={product.image}
                price={product.price}
                key={product.path}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Grid;
