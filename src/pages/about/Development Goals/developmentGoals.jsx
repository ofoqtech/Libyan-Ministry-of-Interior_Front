import { Link } from "react-router-dom";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import MainTitle from "../../../components/MainTitle/MainTitle";
import "./developmentGoals.css";
import { useTranslation } from "react-i18next";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import striptags from 'striptags';
import { Modal, Button } from "react-bootstrap";
import DOMPurify from 'dompurify';


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
          `${process.env.REACT_APP_API_URL}/app_settings/get_incubations?isMobile=0`,
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
      } finally {
        setLoading(false); // hide skeleton
      }
    }

    getDevelopmentGoals();
  }, [i18n.language]);
  const plainIncubations = striptags(developmentGoals.incubations);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [showFullText, setShowFullText] = useState(false);

    const wordLimit = 20;

    const getPreviewText = (text) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) {
            return text;
        } else {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
    };

    const handleReadMore = (article) => {
        setSelectedArticle(article);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedArticle(null);
        setShowModal(false);
    };
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
                <div style={{ fontSize: 18, fontWeight: 400, marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: plainIncubations.slice(0, 100) }} />
                <span
                  className="btn type my-3 mx-auto text-center d-flex justify-content-center"
                  style={{ width: "160px", borderRadius: "5px" }}
                  onClick={() => handleReadMore(plainIncubations)}

                >
                  {t("ReadMore")}
                </span>
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
           <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title style={{fontSize : "16px"}}>{t('form.description')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(selectedArticle || '')
                            }}
                            style={{lineHeight : '1.7'}}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            {t('Close')}
                        </Button>
                    </Modal.Footer>
                </Modal>
      </div>
    </section>
  );
}