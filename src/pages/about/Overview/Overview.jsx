  import { useTranslation } from "react-i18next";
  import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
  import "./Overview.css";
  import axios from "axios";
  import { useEffect, useState } from "react";

  export function Overview() {
    const [t, i18n] = useTranslation("global");
    return (
      <>
        <GlobalContainer
          t={t}
          text={t("aboutMinistryPage.pageTitle")}
          header={t("aboutMinistryPage.breadcrumb")}
        />
        <OverviewDetalis t={t} />
      </>
    );
  }

  function OverviewDetalis({ t }) {
    const [about, setAbout] = useState({});
    const [loading, setLoading] = useState(true);
    const { i18n } = useTranslation("global");

    // get about data
    useEffect(() => {
      const getAbout = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/app_settings/about`,
            {
              headers: {
                "Content-Type": "application/json",
                lang: i18n.language,
              },
            }
          );
          if (response.status === 200) {
            setAbout(response.data.result);
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
      getAbout();
    }, [i18n.language]);

    const aboutList =
    i18n.language === "ar"
      ? about.about
        ? about.about
            .replace(/<\/p>/g, "\n")
            .replace(/<[^>]+>/g, "")
            .replace(/&nbsp;/g, " ")
            .replace(/&ndash;/g, "–")
            .split(/\d+\s*[\-–]\s*/) // تقسيم النص بناءً على الأرقام (1 –، 2 – ...)
            .filter((item) => item.trim() !== "") // إزالة الفراغات
            .map((item, index) => (
              <p key={index}>
                {`${index + 1} – ${item.trim()}`}
              </p>
            ))
        : null
      : i18n.language === "en" && about.about_en
      ? about.about_en
          .replace(/<\/p>/g, "\n")
          .replace(/<[^>]+>/g, "")
          .replace(/&nbsp;/g, " ")
          .replace(/&ndash;/g, "–")
          .split(/\d+\s*[\-–]\s*/)
          .filter((item) => item.trim() !== "")
          .map((item, index) => (
            <p key={index}>
              {`${index + 1} – ${item.trim()}`}
            </p>
          ))
      : null;
  

    return (
      <section className="overviewDetails my-5">
        <div className="container">
          {loading ? (
            // Skeleton loader أثناء تحميل البيانات
            <div className="row justify-content-center my-3">
              <div className="col-lg-12">
                <div className="skeleton-wrapper">
                  <div className="skeleton-image mb-3"></div>
                  <div className="skeleton-text mb-2"></div>
                  <div className="skeleton-text mb-2"></div>
                  <div className="skeleton-text short mb-2"></div>
                </div>
              </div>
            </div>
          ) : (
            <ul>{aboutList && aboutList}</ul>
          )}
          {aboutList?.length === 0 && <p>{t('noData')}</p>}
        </div>
      </section>
    );
  }
