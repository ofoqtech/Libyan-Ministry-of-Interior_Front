import { Link } from "react-router-dom";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import MainTitle from "../../../components/MainTitle/MainTitle";
import "./developmentGoals.css";
import { useTranslation } from "react-i18next";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import striptags from 'striptags';


export default function DevelopmentGoals() {
  const { t } = useTranslation("global");
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GlobalContainer
        text={t("developmentGoals.title")}
        header={t("developmentGoals.breadcrumb")}
      />
      <MainDevelopmentGoals />
    </>
  );
}

function MainDevelopmentGoals() {
  const { t, i18n } = useTranslation("global");
  const [developmentGoals, setDevelopmentGoals] = useState({});
  const [loading, setLoading] = useState(true); // renamed for clarity

  useEffect(() => {
    const getDevelopmentGoals = async () => {
      try {
        setLoading(true); // show skeleton
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/app_settings/get_incubations?isMobile=false`,
          {
            headers: {
              "Content-Type": "application/json",
              'lang': i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setDevelopmentGoals(response.data.result);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // hide skeleton
      }
    }

    getDevelopmentGoals();
  }, [i18n.language]);
  const plainIncubations = striptags(developmentGoals.incubations);

  return (
    <section className="MainDevelopmentGoals my-5">
      <div className="container">
        {loading ? (
          // Skeleton
          <div className="row justify-content-center my-3">
            <div className="col-lg-4">
              <div className="skeleton-wrapper">
                <div className="skeleton-image mb-3"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text short mb-2"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center my-3">
            <div className="col-lg-4 card p-3 text-center">
              <img
                style={{ maxWidth: "100%" }}
                src={developmentGoals.incubations_img_url}
                className="mb-3"
                width="100%"
                alt={t("developmentGoals.imageAlt")}
              />
              <div className="col-lg-12 mx-auto">
                <div style={{ fontSize: 18, fontWeight: 400, marginBottom : "10px" }} dangerouslySetInnerHTML={{ __html: plainIncubations }} />

                <div className="d-flex justify-content-between align-items-center">
                  <span className="desicionstime mx-auto">
                    <i className="uil uil-calendar-alt ms-1"></i>{" "}
                    {`${developmentGoals?.update_at?.slice(0, 10)}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}