import { useTranslation } from "react-i18next";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import "./Overview.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DOMPurify from 'dompurify';

export function Overview() {
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    window.scrollTo(0, 0);
  }
    , []);
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
          `${process.env.REACT_APP_API_URL}/app_settings/about?isMobile=0`,
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
      } finally {
        setLoading(false);
      }
    };
    getAbout();
  }, [i18n.language]);

  const renderListFromText = (text) => {
    const lines = text.replace(/<\/p>/g, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&ndash;/g, "–")
      .split(/\d+\s*[\-–]\s*/) // تقسيم النص بناءً على الأرقام (1 –، 2 – ...)
      .filter((item) => item.trim() !== "") // إزالة الفراغات

    return (
      <div className="overview-content">
        <div className="overview-header">
          <div className="overview-icon">
            <i className="uil uil-building"></i>
          </div>
          <h2 className="overview-title">
            {t("overview.ministry_name") || "وزارة الداخلية بالحكومة الليبية"}
          </h2>
          <p className="overview-subtitle">
            {t("overview.ministry_description") || "تتولى وزارة الداخلية بالحكومة الليبية تنفيذ التشريعات والقوانين واللوائح والقرارات وما يلزم من التدابير والإجراءات التي تكفل أمن البلاد وحماية الأرواح والأعراض والممتلكات وتنفيذ السياسات والخطط والبرامج اللازمة لتنفيذ التشريعات في مجال الأمن والشرطة."}
          </p>
        </div>

        <div className="overview-tasks">
          <h3 className="tasks-title">
            <i className="uil uil-clipboard-notes"></i>
            {t("overview.core_tasks_title") || "المهام الأساسية والاختصاصات"}
          </h3>
          
          <div className="tasks-grid">
            {lines.map((item, index) => {
              const content = `${index + 1} – ${item.trim()}`;
              return (
                <div key={index} className="task-card">
                  <div className="task-number">
                    <span>{index + 1}</span>
                  </div>
                  <div className="task-content">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content.replace(/^\d+\s*[\-–]\s*/, '')),
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="overview-section">
      <div className="container">
        {loading ? (
          <div className="overview-loading">
            <div className="loading-header">
              <div className="loading-icon"></div>
              <div className="loading-title"></div>
              <div className="loading-subtitle"></div>
            </div>
            <div className="loading-tasks">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="loading-task">
                  <div className="loading-number"></div>
                  <div className="loading-content"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {renderListFromText(about.about || '')}
          </>
        )}
      </div>
    </section>
  );
}
