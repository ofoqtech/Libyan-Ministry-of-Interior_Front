import { Link } from "react-router-dom";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import "./programsNews.css";
import "react-toastify/dist/ReactToastify.css";

export default function ProgramsNews() {
  const [t] = useTranslation("global");
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
  const { i18n } = useTranslation("global");
  const [programs, setPrograms] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrograms = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/programs/get_all`,
          {
            headers: {
              "Content-Type": "application/json",
              lang: i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setPrograms(response.data.result);
          setFiltered(response.data.result);
        }
      } catch (err) {
        toast.error(
          err?.response?.data?.message || t("noData") || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };
    getPrograms();
  }, [i18n.language, t]);

  const handleSearchChange = (e) => {
    const q = e.target.value.toLowerCase();
    setSearchQuery(q);
    setFiltered(
      programs.filter((p) => p.name.toLowerCase().includes(q))
    );
  };

  return (
    <section className="programsNews my-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12">
            <input
              type="text"
              className="form-control"
              placeholder={t("programsNewsPage.searchPlaceholder") || "ابحث في البرامج..."}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="row justify-content-center my-3">
          {loading ? (
            <p>{t("loading") || "جاري التحميل..."}</p>
          ) : filtered.length === 0 ? (
            <p>{t("noData") || "لا توجد بيانات"}</p>
          ) : (
            filtered.map((program) => (
              <Link to={`/about/programDetails/${program.id}`}    className="col-lg-4 d-block col-md-6 col-sm-12 mb-2">
                    <div
              
                key={program.id}
              >
                <div className="card px-4 pt-4 pb-1 text-center h-100 mb-2">
                  <img
                    src={program.image_url || "/assets/placeholder.jpg"}
                    className="rounded"
                    alt={program.name}
                  />
                  <h5 className="mt-3 mb-2">{program.name}</h5>
                  <p
                    className="mb-2"
                    style={{ fontSize: 14, fontWeight: 400 }}
                  >
                  </p>
                  <Link to={`/about/programDetails/${program.id}`} style={{marginBottom : "18px"}}>
                    <span className="type mx-auto d-block">
                      {t("programsNewsPage.view")}
                    </span>
                  </Link>
                </div>
              </div>
              </Link>
          
            ))
          )}
        </div>
      </div>
    </section>
  );
}
