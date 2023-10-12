import React, { useState } from "react";
import Button from "../components/Button";

const OneClickTest = () => {
  const [firstName, setFirstName] = useState("marco");
  const [lastName, setLastName] = useState("aguero");
  const [email, setEmail] = useState("");

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
          product: "distorsion-60s",
          quantity: 1,
        },
      ],
    });

    window.fastspring.builder.checkout();
    console.log(customerData);
  };

  return (
    <section className="py-5 flex-grow-1">
      <div className="col-5 px-4 px-lg-5 mt-5 m-auto">
        <div className="col text-left">
          <h3 className="card-title text-uppercase">Initial purchase</h3>
          <p>
            <b>Card No.:</b> 4242 4242 4242 4242
          </p>
          <p>
            <b>CVV:</b> *N9FD
          </p>

          <Button
            actions="Add, Checkout"
            title="Add to cart"
            productId="distorsion-60s"
          />
          <h3 className="card-title text-uppercase">Repeat purchase</h3>
          <form className="mb-3">
            <div className="form-group">
              <label htmlFor="fname">First name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={firstName}
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last name:</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={lastName}
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a
                className="btn btn-outline-dark mt-auto"
                onClick={handleRepeatPurchase}
              >
                One Click Payment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneClickTest;
