import React from "react";
import "./FaqItem.css";

const FaqItem = ({ question, answer, index, isOpen, toggleAnswer }) => {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={() => toggleAnswer(index)}>
        <h4>{question}</h4>
        <span className={`icon ${isOpen ? "rotate" : ""}`}>&#9660;</span>
      </button>
      <div className="faq-answer" style={{ maxHeight: isOpen ? "150px" : "0px" }}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
