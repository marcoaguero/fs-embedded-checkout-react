import React from "react";
import hero from "../assets/thank-you.jpg";

const PurchaseSuccess = () => {
  const heroStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className="py-5">
      <header className="bg-dark py-5" style={heroStyle}>
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">
              Thanks and make sure to rock on!
            </h1>
          </div>
        </div>
      </header>
    </section>
  );
};
export default PurchaseSuccess;
