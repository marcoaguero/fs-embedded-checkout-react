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

  // Function to load the embedded SBL script for checkout
  const loadCheckoutScript = () => {
    const scriptId = "fsc-api-second";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.type = "text/javascript";
      script.id = scriptId;
      script.setAttribute("data-continuous", "true");
      script.src =
        "https://sbl.onfastspring.com/sbl/0.9.5/fastspring-builder.min.js";
      script.dataset.storefront =
        "assignmentse.test.onfastspring.com/embedded-test";
      document.body.appendChild(script);
    }
    return script;
  };

  // Function to remove the embedded SBL script
  const removeCheckoutScript = () => {
    const scriptId = "fsc-api-second";
    const scriptToRemove = document.getElementById(scriptId);
    if (scriptToRemove) {
      scriptToRemove.remove();
    }
  };

  // Function to reload the embedded SBL script
  const reloadCheckoutScript = () => {
    removeCheckoutScript();
    loadCheckoutScript();
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

    window.fastSpringCallBack = fastSpringCallBack;

    const addSBL = () => {
      const scriptId = "fsc-api";
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement("script");
        script.type = "text/javascript";
        script.id = scriptId;
        script.setAttribute("data-continuous", "true");
        script.src =
          "https://sbl.onfastspring.com/sbl/0.9.5/fastspring-builder.min.js";
        script.dataset.storefront =
          "assignmentse.test.onfastspring.com/embedded-test";
        script.setAttribute("data-data-callback", "fastSpringCallBack");
        script.setAttribute(
          "data-popup-webhook-received",
          "dataPopupWebhookReceived"
        );
        document.body.appendChild(script);
      }
    };

    // Load SBL consistently
    addSBL();

    if (location.pathname === "/checkout") {
      // Load EmbeddedSBL only on the checkout page
      const checkoutScript = loadCheckoutScript();
      checkoutScript.onload = () => {
        // Set opacity to 0 for elements with the same ID after a 3-second delay
        setTimeout(() => {
          setOpacityToZero();
        }, 1500);
      };
    } else {
      // Remove EmbeddedSBL on pages other than checkout
      removeCheckoutScript();
    }

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      const scriptToCleanUp = document.getElementById("fsc-api");
      if (scriptToCleanUp) {
        scriptToCleanUp.remove();
      }
      removeCheckoutScript();
    };
  }, [location]);

  return (
    <FastSpringContext.Provider
      value={{ products, data, reloadCheckoutScript }}
    >
      {children}
    </FastSpringContext.Provider>
  );
};
