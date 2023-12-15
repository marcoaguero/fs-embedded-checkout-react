import React, { useEffect, useState } from "react";
import { useFastSpring } from "../store/FastSpringContext";
import Button from "../components/Button";

const Checkout = () => {
  const { products } = useFastSpring();

  // Initialize selectedProducts state with an empty array
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    // Filter the products and set the selectedProducts state
    const filteredProducts = products.filter(
      (product) => product.selected === true
    );
    setSelectedProducts(filteredProducts);
  }, [products]);

  const [crossSale, setCrossSale] = useState(null);

  useEffect(() => {
    // Filter the products and set the crossSale state if the product exists
    const fxlabSub = products.find(
      (product) => product.path === "fxlab-subscription"
    );
    setCrossSale(fxlabSub);
  }, [products]);

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
                        <a
                          className="text-decoration-none me-3"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            removeProduct(product.path);
                          }}
                        >
                          🗑️
                        </a>
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
                <h5>you might also be interested in...</h5>
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
                            <h4>{crossSale.display}</h4>
                            <h5 className="small mb-0">
                              Price: {crossSale.price}
                            </h5>
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
        <div
          className="col-6"
          id="fsc-embedded-checkout-container"
          style={{
            maxWidth: "500px",
            position: "relative",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Checkout;
