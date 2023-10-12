import { React, useState } from "react";
import { useParams } from "react-router";

const Details = (props) => {
  const { productId } = useParams();
  const imageName = `${productId}.png`;
  const imagePath = require(`../assets/${imageName}`);
  const [firstName, setFirstName] = useState("marco");
  const [lastName, setLastName] = useState("aguero");
  const [email, setEmail] = useState("test-0qegpnpib@srv1.mail-tester.com");

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
          product: productId,
          quantity: 1,
        },
      ],
    });

    window.fastspring.builder.checkout();
    console.log(customerData);
  };
  return (
    <section className="py-5 flex-grow-1">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="d-flex flex-wrap">
          <div className="card m-auto mt-sm-3" style={{ border: "none" }}>
            <div className="row g-0 justify-content-center">
              <div className="col-md-3 me-sm-5">
                <img src={imagePath} className="card-img-top" alt={imagePath} />
              </div>
              <div className="col-md-3 text-center my-auto">
                <div className="align-items-center">
                  <h3
                    className="text-uppercase"
                    data-fsc-item-path={productId}
                    data-fsc-item-display
                  ></h3>
                  <p
                    className="col m-auto mb-3"
                    data-fsc-item-path={productId}
                    data-fsc-item-description-summary
                  ></p>
                  <div className="pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a
                        className="btn btn-outline-dark mt-auto"
                        onClick={handleRepeatPurchase}
                      >
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
