import React from "react";

const Button = (props) => {
  return (
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        <a
          className="btn btn-outline-dark mt-auto"
          href="#"
          data-fsc-item-path-value={props.productId}
          data-fsc-action={props.actions}
        >
          {props.title}
        </a>
      </div>
    </div>
  );
};
export default Button;
