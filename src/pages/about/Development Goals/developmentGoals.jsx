import { Link } from 'react-router-dom';
import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import './developmentGoals.css';
import { useTranslation } from 'react-i18next';
import React from 'react';

export default function DevelopmentGoals() {
  const { t } = useTranslation("global");
  return (
    <>
      <GlobalContainer
        text={t('developmentGoals.title')}
        header={t('developmentGoals.breadcrumb')}
      />
      <MainDevelopmentGoals />
    </>
  );
}

function MainDevelopmentGoals() {
  const { t } = useTranslation("global");
  return (
    <section className="MainDevelopmentGoals my-5">
      <div className="container">
        {/* First Row */}
        <div className="row my-3">
          <div className="col-lg-4">
            <img
              style={{ maxWidth: "100%" }}
              src="/assets/2148325790 1.png"
              className="mb-3"
              width="100%"
              alt={t('developmentGoals.imageAlt')}
            />
          </div>
          <div className="col-lg-8">
            <h5>{t('developmentGoals.cardTitle')}</h5>
            <p className="desicionstitle mt-2">
              {t('developmentGoals.cardDescription')}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="desicionstime">
                <i className="uil uil-calendar-alt ms-1"></i> {t('developmentGoals.timeAgo')}
              </span>
              <Link to="/about/development-details" className="type">
                {t('developmentGoals.readMore')}
              </Link>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="row my-3">
          <div className="col-lg-4">
            <img
              style={{ maxWidth: "100%" }}
              src="/assets/2148325790 1.png"
              className="mb-3"
              width="100%"
              alt={t('developmentGoals.imageAlt')}
            />
          </div>
          <div className="col-lg-8">
            <h5>{t('developmentGoals.cardTitle')}</h5>
            <p className="desicionstitle mt-2">
              {t('developmentGoals.cardDescription')}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="desicionstime">
                <i className="uil uil-calendar-alt ms-1"></i> {t('developmentGoals.timeAgo')}
              </span>
              <Link to="/about/development-details" className="type">
                {t('developmentGoals.readMore')}
              </Link>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="row my-3">
          <div className="col-lg-4">
            <img
              style={{ maxWidth: "100%" }}
              src="/assets/2148325790 1.png"
              className="mb-3"
              width="100%"
              alt={t('developmentGoals.imageAlt')}
            />
          </div>
          <div className="col-lg-8">
            <h5>{t('developmentGoals.cardTitle')}</h5>
            <p className="desicionstitle mt-2">
              {t('developmentGoals.cardDescription')}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="desicionstime">
                <i className="uil uil-calendar-alt ms-1"></i> {t('developmentGoals.timeAgo')}
              </span>
              <Link to="/about/development-details" className="type">
                {t('developmentGoals.readMore')}
              </Link>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="mt-5">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button className="page-link">{t('developmentGoals.pagination.previous')}</button>
              </li>
              <li className="page-item active">
                <button className="page-link">2</button>
              </li>
              <li className="page-item">
                <button className="page-link">3</button>
              </li>
              <li className="page-item">
                <button className="page-link">{t('developmentGoals.pagination.next')}</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
