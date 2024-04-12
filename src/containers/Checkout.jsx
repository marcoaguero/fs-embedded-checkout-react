import React, { useEffect, useState } from "react";
import { useFastSpring } from "../store/FastSpringContext";

const Checkout = () => {
  const { products } = useFastSpring();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [crossSale, setCrossSale] = useState(null);
  // const [loadCheckout, setLoadCheckout] = useState(true);

  useEffect(() => {
    // Filter the products and set the selectedProducts state
    const filteredProducts = products.filter(
      (product) => product.selected === true
    );
    setSelectedProducts(filteredProducts);
  }, [products]);

  useEffect(() => {
    // Filter the products and set the crossSale state if the product exists
    const fxlabSub = products.find(
      (product) => product.path === "fxlab-subscription"
    );
    setCrossSale(fxlabSub);
  }, [products]);

  useEffect(() => {
    // Function to reload the embedded checkout
    // const reloadCheckout = () => {
    //   setLoadCheckout(false);
    //   // Ensure the DOM has updated before remounting the checkout
    //   setTimeout(() => setLoadCheckout(true), 200);
    // };

    // Define the dataPopupWebhookReceived function and bind it to the window object
    const dataPopupWebhookReceived = (orderReference) => {
      if (orderReference) {
        console.log(orderReference.id);
        // Assuming fastspring.builder.reset() is a valid method you need to call
        window.fastspring.builder.reset();
        // Trigger the checkout to reload
        // reloadCheckout();
        // Set a timer to reload the page 5 seconds after a successful operation
        setTimeout(() => {
          window.location.reload();
        }, 5000); // Adjust time as needed
      } else {
        console.log("No order ID");
      }
    };

    // Bind the function to the window object
    window.dataPopupWebhookReceived = dataPopupWebhookReceived;

    // Cleanup function to remove the reference when the component unmounts
    return () => {
      delete window.dataPopupWebhookReceived;
    };
  }, []); // The empty array ensures this effect runs once on mount and cleanup on unmount

  // Function to remove a product by its path
  const removeProduct = (path) => {
    window.fastspring.builder.remove(path);
  };

  // Check if "fxlab-subscription" is not in selected products
  const isCrossSaleEligible = !selectedProducts.some(
    (product) => product.path === "fxlab-subscription"
  );

  return (
    <section className="py-5 flex-grow-1">
      <div className="container px-4 px-lg-5 my-5 d-flex">
        <div className="col-6 p-5">
          <h2>Your cart</h2>
          <div className="p-3">
            {selectedProducts.length > 0 ? (
              selectedProducts.map((product) => (
                <div className="card mb-3 border-0" key={product.path}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src={product.image}
                            alt={product.path}
                            className="img-fluid rounded-3"
                            style={{ width: "65px" }}
                          />
                        </div>
                        <div className="ms-3">
                          <h4>{product.display}</h4>
                          <h5 className="small mb-0">Price: {product.price}</h5>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <button
                          className="btn btn-link text-decoration-none me-3"
                          onClick={(e) => {
                            e.preventDefault();
                            removeProduct(product.path);
                          }}
                          aria-label="Remove product"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>

          {isCrossSaleEligible &&
            crossSale && ( // Conditionally render crossSale if it exists and is eligible
              <div className="p-3 mt-5 text-end">
                <p className="fs-6 fw-bold">
                  you might also be interested in...
                </p>
                <div>
                  <div className="card" key={crossSale.path}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <img
                              src={crossSale.image}
                              alt={crossSale.path}
                              className="img-fluid rounded-3"
                              style={{ width: "65px" }}
                            />
                          </div>
                          <div className="ms-3">
                            <p className="fs-5 fw-bold mb-1">
                              {crossSale.display}
                            </p>
                            <p className="fs-6 small mb-0">
                              Price: {crossSale.price}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <button
                            className="btn btn-outline-dark"
                            onClick={() =>
                              window.fastspring.builder.add(crossSale.path)
                            }
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
        {/* {loadCheckout ? ( */}
        <div
          className="col-6"
          id="fsc-embedded-checkout-container"
          style={{
            maxWidth: "500px",
            position: "relative",
          }}
        ></div>
        {/* ) : null} */}
      </div>
    </section>
  );
};

export default Checkout;
