import { Link } from "react-router-dom";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import "./desicions.css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const { i18n } = useTranslation("global");

  useEffect(() => {
    const getDesicions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/decisions/all_decisions?page=${currentPage}`,
          {
            headers: {
              "Content-Type": "application/json",
              "lang": i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setDesicions(response.data.result.data);
          setLastPage(response.data.result.pagination.last_page);
        }
      } catch (err) {
        const errorMsg =
          err.response?.data?.message ||
          err.message ||
          t("somethingWentWrong");
        toast.error(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    getDesicions();
  }, [currentPage, i18n.language]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="desicionsinformations my-5">
      <div className="container">
        {loading ? (
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
            <div className="row justify-content-center my-3">
              {desicions.map((desicion, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                  <div className="card p-4 text-center h-100">
                    <span className="type mx-auto d-block">
                      {t("decisions.category_1")}
                    </span>
                    <p className="desicionstitle mt-2">{desicion.text}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="desicionstime mx-auto d-block">
                        <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                        {desicion?.created_at?.slice(0, 10)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {lastPage > 1 && (
              <div className="pagination-controls d-flex justify-content-center mt-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="btn btn-outline-primary mx-2"
                >
                  {t("pagination.previous")}
                </button>
                {[...Array(lastPage)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`btn mx-1 ${
                      currentPage === index + 1
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === lastPage}
                  className="btn btn-outline-primary mx-2"
                >
                  {t("pagination.next")}
                </button>
              </div>
            )}

            {desicions.length === 0 && <p>{t("noData")}</p>}
          </>
        )}
      </div>
    </section>
  );
}
