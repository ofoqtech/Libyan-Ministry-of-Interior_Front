import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './MeetingsDetails.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MeetingsDetails() {
  const { t } = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t('meetingsDetails.title')}
        header={t('meetingsDetails.header')}
      />
      <MainMeetingsDetails />
    </>
  );
}

function MainMeetingsDetails() {
  const { t } = useTranslation("global");

  const relatedArticles = [
    {
      image: '/assets/FB_IMG_1740637952084 2.png',
      title: t('meetingsDetails.relatedArticle1.title'),
      time: t('meetingsDetails.relatedArticle1.time'),
    },
    {
      image: '/assets/FB_IMG_1740637952084 2.png',
      title: t('meetingsDetails.relatedArticle2.title'),
      time: t('meetingsDetails.relatedArticle2.time'),
    },
    {
      image: '/assets/FB_IMG_1740637952084 2.png',
      title: t('meetingsDetails.relatedArticle3.title'),
      time: t('meetingsDetails.relatedArticle3.time'),
    },
  ];

  return (
    <section className="MainMeetingsDetails my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              style={{ maxWidth: '100%', width: '700px' }}
              src="/assets/FB_IMG_1740579987780 3.png"
              className="mb-3"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <h2 style={{ lineHeight: '40px', fontSize: '25px' }}>
              {t('meetingsDetails.mainTitle')}
            </h2>
            <span className="desicionstime">
              <i className="uil uil-calendar-alt mx-1"></i>
              {t('meetingsDetails.time')}
            </span>
          </div>
        </div>

        <div className="my-3">
          <p className="titledetalis">{t('meetingsDetails.description')}</p>
        </div>

        <div className="mt-5">
          <div className="row g-3">
            {[...Array(16)].map((_, index) => (
              <div
                key={index}
                className="col-md-3 col-sm-6 col-12 image-container"
              >
                <img
                  src="/assets/FB_IMG_1740580037892 1.png"
                  alt={t('meetingsDetails.imageAlt')}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="my-5">
          <span className="type mb-4">{t('meetingsDetails.relatedArticles')}</span>
          <div className="row">
            {relatedArticles.map((article, index) => (
              <div key={index} className="col-lg-4">
                <div className="card mb-3">
                  <img src={article.image} alt="" />
                  <h5 className="my-2">{article.title}</h5>
                  <span className="desicionstime">
                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                    {article.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
