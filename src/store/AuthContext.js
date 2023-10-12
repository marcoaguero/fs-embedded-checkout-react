import React, { createContext, useEffect, useReducer, useState } from "react";

const AuthContext = createContext();

const initialState = {
  isLogged: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogged: true };
    case "LOGOUT":
      return { ...state, isLogged: false };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  // Retrieve the initial state from local storage or use the default state
  const [state, dispatch] = useReducer(authReducer, initialState, (initial) => {
    const storedState = JSON.parse(localStorage.getItem("authState"));
    return storedState || initial;
  });

  // Update local storage when state changes
  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
