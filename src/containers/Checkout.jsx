import React from "react";

const Checkout = () => {
  return (
    <section className="py-5 flex-grow-1">
      <div className="container px-4 px-lg-5 my-5">
        <div
          id="fsc-embedded-checkout-container"
          style={{
            maxHeight: "660px", // Adjust the maximum height as needed
            position: "relative", // Center the checkout container horizontally
          }}
        ></div>
      </div>
    </section>
  );
};

export default Checkout;
