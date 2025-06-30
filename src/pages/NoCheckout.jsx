import React from "react";

import { useLanguage } from "../contexts/LanguageContext";
import PageLayout from "../layouts/PageLayout";

const NoCheckout = () => {
  const { translations } = useLanguage();
  return (
    <PageLayout title={translations["no_checkout_title"]}>
      <div className="notice-box">
        <p
          className="notice-title"
          dangerouslySetInnerHTML={{ __html: translations["no_checkout_desk"] }}
        />
        <div className="storage-info">
          <p>{translations["storage_title"]}</p>
          <span
            dangerouslySetInnerHTML={{ __html: translations["storage_desk"] }}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default NoCheckout;
