import React from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

const Grid = (props) => {
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
          <ProductCard
            productId="demo-product-1"
            actions="Add"
            buttonTitle="Add to cart"
          />
          <ProductCard
            productId="demo-product-2"
            actions="Add"
            buttonTitle="Add to cart"
          />
        </div>
      </div>
    </section>
  );
};
export default Grid;
