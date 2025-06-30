import React from "react";
import { useNavigate } from "react-router-dom";

import "./ReceptionClosed.css";

import { useLanguage } from "../contexts/LanguageContext";
import PageLayout from "../layouts/PageLayout";
import Button from "../components/Button";

const ReceptionClosed = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();

  return (
    <PageLayout title={translations["reception_closed_title"]}>
      <div className="reception-container">
        <div className="notice-box">
          <p className="notice-title">
            {translations["reception_closed_notice"]}
          </p>
          <div className="storage-info">
            <p
              className="message-description"
              dangerouslySetInnerHTML={{ __html: translations["help_notice"] }}
            />
          </div>
        </div>
        <Button text={translations["self_check_in"]} onClick={()=> navigate('/self-check-in')} />
      </div>
    </PageLayout>
  );
};

export default ReceptionClosed;
