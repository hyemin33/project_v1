import React from "react";
import "./Button.css";

const Button = ({ text, onClick }) => {
  return (
    <button type="button" className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
