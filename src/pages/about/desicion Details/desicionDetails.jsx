import React, { useEffect } from "react";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import { useTranslation } from "react-i18next";
import "./desicionDetails.css";

export default function DesicionDetails() {
  const [t] = useTranslation("global");
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GlobalContainer
        text={t("decisionDetailsPage.pageTitle")}
        header={t("decisionDetailsPage.breadcrumb")}
      />
      <DesicionsInformationsDetalis t={t} />
    </>
  );
}

function DesicionsInformationsDetalis({ t }) {
  return (
    <section className="desicionsinformationsdetalis my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              style={{ maxWidth: "100%" }}
              src="/assets/FB_IMG_1729184293617 2.png"
              className="mb-3"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <h2 style={{ lineHeight: "40px", fontSize: "25px" }}>
              {t("decisionDetailsPage.mainHeading")}
            </h2>
            <span className="desicionstime">
              <i className="uil uil-calendar-alt mx-2"></i>
              {t("decisionDetailsPage.timeAgo")}
            </span>
          </div>
        </div>

        <div className="my-3">
          <p className="titledetalis">{t("decisionDetailsPage.paragraph")}</p>
        </div>

        <div className="mt-5">
          <div className="row g-3">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="col-md-3 col-sm-6 col-12 image-container"
              >
                <img src="/assets/FB_IMG_1729184305839 5.png" alt="صورة" />
              </div>
            ))}
          </div>
        </div>

        <div className="my-5">
          <span className="type mb-4">{t("decisionDetailsPage.relatedArticles")}</span>
          <div className="row">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="col-lg-4">
                <div className="card mb-4">
                  <img
                    src="/assets/FB_IMG_1740637952084 2.png"
                    alt="صورة"
                  />
                  <h5 className="my-2">{t("decisionDetailsPage.mainHeading")}</h5>
                  <span className="desicionstime">
                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                    {t("decisionDetailsPage.timeAgo")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
