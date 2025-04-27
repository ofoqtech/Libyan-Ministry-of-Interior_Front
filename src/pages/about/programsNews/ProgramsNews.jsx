import { Link } from "react-router-dom";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import React, { use, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import "./programsNews.css";
import "react-toastify/dist/ReactToastify.css";

export default function ProgramsNews() {
  const [t] = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t("programsNewsPage.pageTitle")}
        header={t("programsNewsPage.breadcrumb")}
      />
      <Programs t={t} />
    </>
  );
}

function Programs({ t }) {
  const [programs, setPrograms] = useState([]);
  const { i18n } = useTranslation("global");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPrograms = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/programs/get_all`,
          {
            headers: {
              "Content-Type": "application/json",
              'lang': i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setPrograms(response.data.result);
          }
      } catch (err) {
        toast.error(
          err?.response?.data?.message || t("noData") || "Something went wrong"
        )
       

      }finally {
        setLoading(false);
      }
    }
    getPrograms();
  }, [i18n.language]);


  return (
    <section className="programsNews my-5">
      <div className="container">
        <div className="row justify-content-center my-3">
         {loading ? <p>{t('loading')}</p> : (programs.map((program) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-2" key={program?.id}>
              <div className="card px-4 pt-4 pb-1 text-center h-100 mb-2">
                <img src={program?.image_url || '/assets/placeholder.jpg'} className="rounded" alt={program?.name} />
                <h5 className="mt-3 mb-2">{program?.name}</h5>
                <p className="mb-3 mt-1" style={{ fontSize: '14px', fontWeight: '400' }}>
                  {t("programsNewsPage.lorem")}
                </p>
                <Link to={`/about/programDetails/${program?.id}`}>
                  <span className="type mx-auto d-block">{t("programsNewsPage.view")}</span>
                </Link>
              </div>
            </div>
          )))}

        </div>
        </div>
    </section>
  );
}
