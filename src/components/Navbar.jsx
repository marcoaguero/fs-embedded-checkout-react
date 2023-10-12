import React from "react";
import iconImage from "../assets/logo.png"; // Import the icon image

const Navbar = (props) => {
  return (
    <nav
      className="
        navbar navbar-expand-lg navbar-light
        border-bottom
        fixed-top
        bg-light
      "
    >
      <div className="container px-4 px-lg-5">
        <a href="/" className="navbar-brand">
          <img
            src={iconImage} // Use the imported icon image as the source
            alt="FXLab"
            width="50" // Adjust the width to your desired size
            className="d-inline-block align-top"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/one_click_test">
                One Click Demo
              </a>
            </li> */}
          </ul>
          <form className="d-flex">
            <a
              className="btn btn-outline-dark"
              href="#"
              data-fsc-action="ViewCart"
            >
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span
                className="ms-1"
                id="order-total"
                data-fsc-order-total
              ></span>
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
