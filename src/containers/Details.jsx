import React from "react";
import { useParams } from "react-router";
import Button from "../components/Button";

const Details = (props) => {
  const { productId } = useParams();
  const imageName = `${productId}.jpg`;
  const imagePath = require(`../assets/${imageName}`);
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="d-flex flex-wrap">
          <div className="card m-auto mt-sm-3" style={{ border: "none" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={imagePath} className="card-img-top" alt={imagePath} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2
                    className="card-title text-uppercase"
                    data-fsc-item-path={productId}
                    data-fsc-item-display
                  ></h2>
                  <p
                    className="card-text col-4 m-auto mb-3"
                    data-fsc-item-path={productId}
                    data-fsc-item-description-summary
                  ></p>
                  <Button
                    actions="Add,Checkout"
                    title="Buy now"
                    productId={productId}
                  />
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
