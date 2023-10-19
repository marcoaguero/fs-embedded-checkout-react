import { React, useState } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

const Grid = (props) => {
  const [firstName, setFirstName] = useState("marco");
  const [lastName, setLastName] = useState("aguero");
  const [email, setEmail] = useState("maguero@fastspring.com");
  const imagePath = require(`../assets/demo-product-2.png`);

  const handleRepeatPurchase = () => {
    const customerData = {
      email: email,
      firstName: firstName,
      lastName: lastName,
    };

    window.fastspring.builder.secure({
      reset: true,
      contact: customerData,
      language: "EN",
      items: [
        {
          product: "demo-product-2",
          quantity: 1,
        },
      ],
    });

    window.fastspring.builder.checkout();
    console.log(customerData);
  };
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
          <div className="col mb-5">
            <div className="card h-100">
              <a href={`/demo-product-2`}>
                <img
                  className="card-img-top"
                  src={imagePath}
                  alt="demo-product-2"
                />
              </a>
              <div className="card-body p-4">
                <div className="text-center">
                  <h5
                    className="fw-bolder"
                    data-fsc-item-path="demo-product-2"
                    data-fsc-item-display
                  ></h5>
                  <span
                    data-fsc-item-path="demo-product-2"
                    data-fsc-item-price
                  ></span>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a
                    className="btn btn-outline-dark mt-auto"
                    onClick={handleRepeatPurchase}
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Grid;
