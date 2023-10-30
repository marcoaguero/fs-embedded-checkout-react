import React from "react";

const Button = (props) => {
  const buyProduct = () => {
    const newProduct = {
      path: props.path,
      quantity: 1,
    };

    // Create a payload with the new product
    const payload = {
      products: [newProduct],
    };

    // Push the payload to add the product
    window.fastspring.builder.push(payload);
  };

  return (
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        <a className="btn btn-outline-dark mt-auto" onClick={buyProduct}>
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default Button;
