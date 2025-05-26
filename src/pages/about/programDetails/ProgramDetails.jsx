import { Link, useParams } from "react-router-dom";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProgramsNews() {
  const [t] = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t("programsNewsPage.pageTitle")}
        header={t("programsNewsPage.breadcrumb1")}
      />
      <Programs t={t} />
    </>
  );
}


function Programs() {
  const { t, i18n } = useTranslation("global");
  const [showFullText, setShowFullText] = useState(false);

  const { id } = useParams();


  const [newsDetails, setNewsDetails] = useState(null);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/programs/program_news/${id}`, {
          headers: {
            'lang': i18n.language,
            'Content-Type': 'application/json',
          },
        });

        if (response.data.status === 'success') {
          setNewsDetails(response.data.result.data);
        }
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };

    fetchNewsDetails();
  }, [id, i18n.language]);

  if (!newsDetails) return <p className="text-center my-5">{t('loading')}...</p>;




  return (
    <section className="MainNewsDetalis my-5">
      <div className="container">
        <div className="row align-items-center">
          {newsDetails?.map((news, index) => (
            <React.Fragment key={index}>
              <div className="col-lg-6">
                <img
                  style={{ maxWidth: "100%", width: "700px", height: "400px", objectFit: "cover" }}
                  src={news?.image_url || '/assets/placeholder.jpg'}
                  className="mb-3"
                  alt={news?.title}
                />
              </div>
              <div className="col-lg-6">
                <h2 style={{ lineHeight: "40px", fontSize: "25px" }}>
                  {news?.title}
                </h2>
                <span className="desicionstime">
                  <i className="uil uil-calendar-alt mx-1"></i>
                  {new Date(news?.created_at).toLocaleDateString(i18n.language)}
                </span>
              </div>


              <div className="titledetalis my-3" dangerouslySetInnerHTML={{ __html: news?.description }} />

              {newsDetails?.youtube_link && <div className="my-5 mx-auto text-center d-flex justify-content-center">
                <Link className="titledetalis type" to={newsDetails?.youtube_link}>{t('showVideo')}</Link>
              </div>}

              {news?.youtube_link && <div className="my-3">
                <Link className="titledetalis text-center mx-auto d-flex justify-content-center type" style={{ borderRadius: "10px" }} to={news?.youtube_link} clas>{t('showVideo')}</Link>
              </div>}
            </React.Fragment>
          ))}
          {newsDetails.length === 0 && <p className="text-center">{t('noData')}</p>}
        </div>


      </div>
    </section>
  );
}