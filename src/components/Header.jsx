import React from "react";
import hero from "../assets/hero.jpg";

const Header = () => {
  const heroStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const resetCart = () => {
    // Reset the cart
    window.fastspring.builder.reset();
  };

  return (
    <header className="bg-dark bg-opacity-75 py-5" style={heroStyle}>
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">
            Effect plugins for music production
          </h1>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button className="btn btn-light mt-auto" onClick={resetCart}>
                Reset the cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
