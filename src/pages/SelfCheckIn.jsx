import React from "react";
import { useNavigate } from "react-router-dom";

import { useLanguage } from "../contexts/LanguageContext";
import PageLayout from "../layouts/PageLayout";
import Button from "../components/Button";

const SelfCheckIn = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();

  return (
    <PageLayout title={translations["self_check_in_title"]}>
      <Button
        text={translations["self_check_in"]}
        onClick={() => navigate("/reservation-number")}
      />
    </PageLayout>
  );
};

export default SelfCheckIn;
