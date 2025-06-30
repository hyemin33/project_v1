import React, { useState } from "react";

import PageLayout from "../layouts/PageLayout";
import FaqItem from "../components/FaqItem";
import { useLanguage } from "../contexts/LanguageContext";

const Faq = () => {
  const { translations } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout title={translations["faq_title"]} isFaqPage={true}>
      <div className="inner-container">
        {translations["faq_list"].map((item, index) => (
          <FaqItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggleAnswer={toggleAnswer}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default Faq;
