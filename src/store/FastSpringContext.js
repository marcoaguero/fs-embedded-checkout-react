import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FastSpringContext = createContext();

export const useFastSpring = () => {
  return useContext(FastSpringContext);
};

export const FastSpringProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({});
  const location = useLocation();

  // Function to set opacity to 0 for elements with the same ID
  const setOpacityToZero = () => {
    const elements = document.querySelectorAll(
      "#fsc-embedded-checkout-skeleton"
    );

    elements.forEach((element) => {
      if (element.style.opacity !== "0") {
        element.style.opacity = "0";
        element.style.transition = "opacity 0.1s";
      }
    });
  };

  // Fills up products array when SBL loads
  useEffect(() => {
    const fastSpringCallBack = (data) => {
      setData(data);
      console.log(data);
      if (data && data.groups) {
        const newProducts = [];
        data.groups.forEach((group) => {
          if (group.items && Array.isArray(group.items)) {
            group.items.forEach((item) => {
              newProducts.push(item);
            });
          }
        });
        setProducts(newProducts);
      }
    };

    const addSBL = () => {
      const scriptId = "fsc-api";
      const existingScript = document.getElementById(scriptId);
      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.id = scriptId;
        script.setAttribute("data-continuous", "true");
        script.src =
          "https://sbl.onfastspring.com/sbl/0.9.5/fastspring-builder.min.js";
        script.dataset.storefront =
          "assignmentse.test.onfastspring.com/embedded-test";
        window.fastSpringCallBack = fastSpringCallBack;
        script.setAttribute("data-data-callback", "fastSpringCallBack");

        document.body.appendChild(script);
      }
    };

    const addEmbeddedSBL = () => {
      const scriptId = "fsc-api-second";
      const existingScript = document.getElementById(scriptId);
      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.id = scriptId;
        script.setAttribute("data-continuous", "true");
        script.src =
          "https://sbl.onfastspring.com/sbl/0.9.5/fastspring-builder.min.js";
        script.dataset.storefront =
          "assignmentse.test.onfastspring.com/embedded-test";

        document.body.appendChild(script);
      }
    };

    // Load SBL consistently
    addSBL();

    if (location.pathname === "/checkout") {
      // Load EmbeddedSBL only on the checkout page
      addEmbeddedSBL();
      // Set opacity to 0 for elements with the same ID after a 3-second delay
      setTimeout(() => {
        setOpacityToZero();
      }, 1500);
    } else {
      // Remove EmbeddedSBL on pages other than checkout
      const scriptToRemove = document.getElementById("fsc-api-second");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    }
  }, [location]);

  return (
    <FastSpringContext.Provider value={{ products, data }}>
      {children}
    </FastSpringContext.Provider>
  );
};
