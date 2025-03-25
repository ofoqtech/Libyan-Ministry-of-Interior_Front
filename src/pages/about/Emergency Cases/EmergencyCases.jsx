import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import './EmergencyCases.css';
import { useTranslation } from 'react-i18next';
import React from 'react';

export default function EmergencyCases() {
  const { t } = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t('emergency_cases.title')}
        header={t('emergency_cases.breadcrumb')}
      />
      <MainEmergencyCases t = {t} />
    </>
  );
}

function MainEmergencyCases({t}) {

  return (
    <section className="mainEmergencyCases my-5">
      <div className="container">
        {/* Important Numbers */}
        <div>
          <span className="type">{t('emergency_cases.important_numbers')}</span>
          <h5 className="my-3">
            {t('emergency_cases.important_numbers_description')}
          </h5>
          <ul>
            <li>{t('emergency_cases.call_police')}</li>
            <li>{t('emergency_cases.call_ambulance')}</li>
            <li>{t('emergency_cases.call_civil_defense')}</li>
          </ul>
        </div>

        {/* Traffic Accidents */}
        <div className="my-5">
          <span className="type">{t('emergency_cases.traffic_accidents')}</span>
          <p className="mt-3">
            {t('emergency_cases.traffic_accidents_description')}
          </p>
        </div>

        {/* Fire Instructions */}
        <div className="my-5">
          <span className="type">{t('emergency_cases.fire')}</span>
          <ul className="mt-3">
            <li className="my-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z"
                  fill="#38BF57"
                  stroke="#38BF57"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-2">
                {t('emergency_cases.fire_instructions.0')}
              </span>
            </li>
            <li className="my-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z"
                  fill="#38BF57"
                  stroke="#38BF57"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-2">
                {t('emergency_cases.fire_instructions.1')}
              </span>
            </li>
            <li className="my-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z"
                  fill="#38BF57"
                  stroke="#38BF57"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-2">
                {t('emergency_cases.fire_instructions.2')}
              </span>
            </li>
            <li className="my-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z"
                  fill="#38BF57"
                  stroke="#38BF57"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-2">
                {t('emergency_cases.fire_instructions.3')}
              </span>
            </li>
            <li className="my-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z"
                  fill="#38BF57"
                  stroke="#38BF57"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-2">
                {t('emergency_cases.fire_instructions.4')}
              </span>
            </li>
            <li className="my-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z"
                  fill="#38BF57"
                  stroke="#38BF57"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-2">
                {t('emergency_cases.fire_instructions.5')}
              </span>
            </li>
            <li className="my-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z"
                  fill="#38BF57"
                  stroke="#38BF57"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-2">
                {t('emergency_cases.fire_instructions.6')}
              </span>
            </li>
            <li className="my-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z"
                  fill="#38BF57"
                  stroke="#38BF57"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-2">
                {t('emergency_cases.fire_instructions.7')}
              </span>
            </li>
            <li className="my-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z"
                  fill="#38BF57"
                  stroke="#38BF57"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-2">
                {t('emergency_cases.fire_instructions.8')}
              </span>
            </li>
          </ul>
        </div>

        <div className="my-5">
          <MainTitle title={t('emergency_cases.send_request')} />
          <div className="row">
            <form>
              <div className="col-lg-12">
                <label htmlFor="name">{t('emergency_cases.form.name')}</label>
                <input type="text" id="name" className="form-control mt-2" />
              </div>

              <div className="row my-2">
                <div className="col-lg-6">
                  <label htmlFor="email">{t('emergency_cases.form.email')}</label>
                  <input type="email" id="email" className="form-control mt-2" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="sub">{t('emergency_cases.form.subject')}</label>
                  <input type="text" id="sub" className="form-control mt-2" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor="disc">{t('emergency_cases.form.description')}</label>
                  <textarea id="disc" className="form-control mt-2" />
                </div>
              </div>

              <div className="d-flex justify-content-end my-4 gap-2">
                <button className="btn btn-print">{t('emergency_cases.form.print')}</button>
                <button className="btn btn-send me-3">{t('emergency_cases.form.send')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
