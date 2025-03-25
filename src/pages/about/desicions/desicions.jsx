import { Link } from 'react-router-dom';
import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import './desicions.css';
import React from 'react'
import { useTranslation } from 'react-i18next';


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
    return (
      <section className="desicionsinformations my-5">
        <div className="container">
          {[...Array(6)].map((_, index) => (
            <div className="row my-3" key={index}>
              <div className="col-lg-4">
                <img
                  style={{ maxWidth: "100%" }}
                  src="/assets/FB_IMG_1729184293617 1.png"
                  className="mb-3"
                  alt=""
                />
              </div>
              <div className="col-lg-8">
                <h5>{t("decisionsPage.mainHeading")}</h5>
                <p className="desicionstitle mt-2">{t("decisionsPage.paragraph")}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="desicionstime">
                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                    {t("decisionsPage.timeAgo")}
                  </span>
                  <Link to="/about/desicions-details" className="type">
                    {t("decisionsPage.readMore")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-5">
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <button className="page-link">{t("decisionsPage.pagination.previous")}</button>
                </li>
                <li className="page-item active">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link">3</button>
                </li>
                <li className="page-item">
                  <button className="page-link">{t("decisionsPage.pagination.next")}</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
  }