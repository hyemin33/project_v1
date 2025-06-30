import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

import { useLanguage } from "../contexts/LanguageContext";
import Button from "../components/Button";
import PageLayout from "../layouts/PageLayout";
import getTimeBasedData from "../utils/getTimeBasedData";

const Home = () => {
  const { changeLanguage } = useLanguage();
  const navigate = useNavigate();
  const timeData = useMemo(getTimeBasedData, []);

  const handleClick = (lang) => {
    changeLanguage(lang);
    navigate(timeData.page);
  };

  return (
    <PageLayout title={timeData.headline} isNav={false}>
      <div className="btn-area">
        {[
          { lang: "en", label: "English" },
          { lang: "zh", label: "中文" },
          { lang: "jp", label: "日本語" },
          { lang: "ko", label: "한국어" },
        ].map(({ lang, label }) => (
          <Button key={lang} text={label} onClick={() => handleClick(lang)} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Home;
