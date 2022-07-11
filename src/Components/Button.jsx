import React from "react";
import "./Button.css";

export const Button = ({ children, colorScheme, variant, size }) => {
  return (
    <button
      className={`button ${colorScheme || "white"} ${variant} ${size || "md"}`}
    >
      {children}
    </button>
  );
};
