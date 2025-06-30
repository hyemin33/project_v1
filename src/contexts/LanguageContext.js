import React, { createContext, useContext, useState } from "react";
import ko from "../lang/ko.json";
import en from "../lang/en.json";
import zh from "../lang/zh.json";
import jp from "../lang/jp.json";

const languages = {
  ko: ko,
  en: en,
  zh: zh,
  jp: jp,
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ko");
  const [translations, setTranslations] = useState(languages[language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTranslations(languages[lang]);
  };

  return (
    <LanguageContext.Provider value={{ translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
