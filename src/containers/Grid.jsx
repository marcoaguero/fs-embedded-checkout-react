import React from "react";
import ProductCard from "../components/ProductCard";

const Grid = (props) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div
          className="
            row
            gx-4 gx-lg-5
            row-cols-2 row-cols-md-3 row-cols-xl-4
            justify-content-center
          "
        >
          <ProductCard
            productId="fxlab-subscription"
            actions="Add"
            buttonTitle="Subscribe monthly"
          />
          <ProductCard
            productId="distorsion-60s"
            actions="Add"
            buttonTitle="Add to cart"
          />
          <ProductCard
            productId="echo-80s"
            actions="Add"
            buttonTitle="Add to cart"
          />
          <ProductCard
            productId="reverb-70s"
            actions="Add"
            buttonTitle="Add to cart"
          />
          <ProductCard
            productId="the-all-in-one-pack"
            actions="Add"
            buttonTitle="Add to cart"
          />
        </div>
      </div>
    </section>
  );
};
export default Grid;