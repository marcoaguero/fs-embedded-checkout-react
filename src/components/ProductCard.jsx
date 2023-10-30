import React from "react";
import Button from "./Button";

const ProductCard = (props) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <a href={`/${props.path}`}>
          <img className="card-img-top" src={props.image} alt={props.path} />
        </a>
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.display}</h5>
            <span>{props.price}</span>
          </div>
        </div>
        <Button title="Add to cart" path={props.path} />
      </div>
    </div>
  );
};
export default ProductCard;
