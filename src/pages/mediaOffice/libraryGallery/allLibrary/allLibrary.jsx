import { Link } from 'react-router-dom';
import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './allLibrary.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AllLibrary() {
  const { t } = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t('library.imageLibrary')}
        header={t('library.breadcrumb')}
      />
      <MainAllLibrary />
    </>
  );
}

function MainAllLibrary() {
  const { t } = useTranslation("global");

  const articles = [
    {
      imgSrc: '/assets/1-59-1 1.png',
      title: t('library.articleTitle'),
      time: t('library.twoDaysAgo'),
      link: '/mediaOffice/librarydetails',
    },
    {
        imgSrc: '/assets/1-59-1 1.png',
        title: t('library.articleTitle'),
        time: t('library.twoDaysAgo'),
        link: '/mediaOffice/librarydetails',
      },
      {
        imgSrc: '/assets/1-59-1 1.png',
        title: t('library.articleTitle'),
        time: t('library.twoDaysAgo'),
        link: '/mediaOffice/librarydetails',
      },
  ];

  return (
    <section className="MainAllLibrary my-5">
      <div className="container">
        {articles.map((article, index) => (
          <div className="row align-items-center my-3" key={index}>
            <div className="col-lg-4">
              <img
                style={{ maxWidth: '100%', width: '700px' }}
                src={article.imgSrc}
                className="mb-3"
                alt=""
              />
            </div>
            <div className="col-lg-8">
              <h5>{article.title}</h5>
              <div className="d-flex justify-content-between align-items-center">
                <span className="desicionstime">
                  <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                  {article.time}
                </span>
                <Link to={article.link} className="type">
                  {t('library.readMore')}
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-5">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button className="page-link">{t('library.previous')}</button>
              </li>
              <li className="page-item active">
                <button className="page-link">2</button>
              </li>
              <li className="page-item">
                <button className="page-link">3</button>
              </li>
              <li className="page-item">
                <button className="page-link">{t('library.next')}</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
