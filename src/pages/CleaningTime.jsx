import React from "react";

import { useLanguage } from "../contexts/LanguageContext";
import PageLayout from "../layouts/PageLayout";

const CleaningTime = () => {
  const { translations } = useLanguage();

  return (
    <PageLayout title={translations["cleaning_time_title"]}>
      <div className="notice-box">
        <p
          className="notice-desc"
          dangerouslySetInnerHTML={{
            __html: translations["cleaning_time_desk"],
          }}
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

export default CleaningTime;
