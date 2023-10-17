import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch({ type: "LOGIN" });
    window.location.href = "/";
  };

  return (
    <section className="py-5 flex-grow-1">
      <div className="container col-4 px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group pb-4">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-outline-dark mt-auto">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
