import React from "react";
import { useNavigate } from "react-router-dom";

import { useLanguage } from "../contexts/LanguageContext";

const PageLayout = ({ title, isNav = true, isFaqPage = false, children }) => {
  const navigate = useNavigate();
  const { translations } = useLanguage();
  return (
    <div className="page-layout">
      <div className="header">
        <h3 className="title">{title}</h3>
      </div>
      <div className="container">{children}</div>
      {isNav && (
        <div className="navigation">
          <button type="button" onClick={() => navigate("/")}>
            {translations["home"]}
          </button>
          {!isFaqPage && (
            <button type="button" onClick={() => navigate("/faq")}>
              {translations["faq"]}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PageLayout;
