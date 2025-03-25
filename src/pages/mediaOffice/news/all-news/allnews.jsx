import { Link } from 'react-router-dom';
import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './allnews.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Allnews() {
  const { t } = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t('allNews.mainHeader')}
        header={t('allNews.breadcrumb')}
      />
      <MainAllnews />
    </>
  );
}

function MainAllnews() {
  const { t } = useTranslation("global");

  const news = Array(8).fill({
    image: '/assets/Container.png',
    title: t('allNews.newsTitle'),
    description: t('allNews.newsDescription'),
    timeAgo: t('allNews.timeAgo'),
    link: '/mediaOffice/newsdetails'
  });

  return (
    <section className="MainAllnews my-5">
      <div className="container">
        {news.map((item, index) => (
          <div className="row my-3" key={index}>
            <div className="col-lg-4">
              <img
                style={{ maxWidth: '100%', width: '700px' }}
                src={item.image}
                className="mb-3"
                alt=""
              />
            </div>
            <div className="col-lg-8">
              <h5>{item.title}</h5>
              <p className="desicionstitle mt-2">{item.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="desicionstime">
                  <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                  {item.timeAgo}
                </span>
                <Link to={item.link} className="type">
                  {t('allNews.readMore')}
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button className="page-link">{t('allNews.pagination.previous')}</button>
              </li>
              <li className="page-item active">
                <button className="page-link">2</button>
              </li>
              <li className="page-item">
                <button className="page-link">3</button>
              </li>
              <li className="page-item">
                <button className="page-link">{t('allNews.pagination.next')}</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
