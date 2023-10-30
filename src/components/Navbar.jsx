import React, { useContext } from "react";
import iconImage from "../assets/logo.png"; // Import the icon image
import { AuthContext } from "../store/AuthContext";
import { Link } from "react-router-dom";
import { useFastSpring } from "../store/FastSpringContext";

const Navbar = (props) => {
  const { state, dispatch } = useContext(AuthContext);
  const { data } = useFastSpring();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  let loggingButton;
  if (!state.isLogged) {
    loggingButton = (
      <Link to="/login" className="nav-link active" aria-current="page">
        <b>Log in</b>
      </Link>
    );
  }
  if (state.isLogged) {
    loggingButton = (
      <Link to="#" className="nav-link active" onClick={handleLogout}>
        <b>Log out</b>
      </Link>
    );
  }

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
        <Link to="/" className="navbar-brand">
          <img
            src={iconImage} // Use the imported icon image as the source
            alt="FXLab"
            width="50" // Adjust the width to your desired size
            className="d-inline-block align-top"
          />
        </Link>

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 d-flex">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="ms-auto">{loggingButton}</li>
          </ul>
          <form className="d-flex">
            <Link
              to="/checkout"
              className="btn btn-outline-dark"
              aria-current="page"
            >
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="ms-1" id="order-total">
                {data.originalTotal}
              </span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
