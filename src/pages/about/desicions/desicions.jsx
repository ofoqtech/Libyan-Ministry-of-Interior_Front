import { Link } from "react-router-dom";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import "./desicions.css";
import React from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Desicions() {
  const [t] = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t("decisionsPage.pageTitle")}
        header={t("decisionsPage.breadcrumb")}
      />
      <DesicionsInformations t={t} />
    </>
  );
}

function DesicionsInformations({ t }) {
  const [desicions, setDesicions] = useState([]);
  const { i18n } = useTranslation("global");
  const [loading, setLoading] = useState(true);
  // get desicions
  useEffect(() => {
    const getDesicions = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/decisions/all_decisions`,
          {
            headers: {
              "Content-Type": "application/json",
              lang: i18n.language,
            },
          }
        );
        if (response.status === 200) {
          console.log(response.data.result.data);
          setDesicions(response.data.result.data);
        }
      } catch (err) {
        console.log(err);
      }
      finally { setLoading(false); }
    };
    getDesicions();
  }, [i18n.language]);
  return (
    <section className="desicionsinformations my-5">
      <div className="container">
        {loading ? (
          // Skeleton
          <div className="row justify-content-center my-3">
            <div className="col-lg-6">
              <div className="skeleton-wrapper">
                <div className="skeleton-image mb-3"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text short mb-2"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="container">
              <div className="row justify-content-center my-3">
                {desicions?.map((desicion, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                    <div className="card p-4 text-center h-100">
                      <span className="type mx-auto d-block">
                        {t("decisions.category_1")}
                      </span>
                      <p className="desicionstitle mt-2">{desicion.text}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="desicionstime mx-auto d-block">
                          <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                          {`${desicion?.created_at?.slice(0, 10)}`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {desicions.length === 0 && (<p>{t('noData')}</p>)}
          </>
        )}
      </div>
    </section>
  );
}
