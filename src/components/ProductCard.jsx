import React from "react";
import Button from "./Button";

const ProductCard = (props) => {
  const imageName = `${props.productId}.png`;
  const imagePath = require(`../assets/${imageName}`);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <a href={`/${props.productId}`}>
          <img className="card-img-top" src={imagePath} alt={props.productId} />
        </a>
        <div className="card-body p-4">
          <div className="text-center">
            <h5
              className="fw-bolder"
              data-fsc-item-path={props.productId}
              data-fsc-item-display
            ></h5>
            <span
              data-fsc-item-path={props.productId}
              data-fsc-item-price
            ></span>
          </div>
        </div>
        <Button
          actions={props.actions}
          title={props.buttonTitle}
          productId={props.productId}
        />
      </div>
    </div>
  );
};
export default ProductCard;
