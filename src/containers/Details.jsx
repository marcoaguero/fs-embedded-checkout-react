import React from "react";
import { useParams } from "react-router";

const Details = (props) => {
  const { productId } = useParams();
  const imageName = `${productId}.png`;
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
                    className="card-text"
                    data-fsc-item-path={productId}
                    data-fsc-item-description-summary
                  ></p>
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
