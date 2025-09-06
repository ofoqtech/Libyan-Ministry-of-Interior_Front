import { Link } from 'react-router-dom';
import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './allnews.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export default function Allnews() {
  const { t } = useTranslation("global");
  useEffect(() => {
    window.scrollTo(0, 0);
  }
    , []);
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
  const { t, i18n } = useTranslation("global");
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    next_page_url: null,
    prev_page_url: null,
  });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchNews(`${process.env.REACT_APP_API_URL}/news/main_news?page=1?isMobile=0`);
  }, [i18n.language]);

  const fetchNews = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
          'lang': i18n.language,
          'Content-Type': 'application/json',
        },
      });
      if (response.data.status === 'success') {
        const fetched = response.data.result.data;
        setNews(fetched);
        setFilteredNews(fetched);
        setPagination(response.data.result);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePagination = (url) => {
    if (url) fetchNews(url);
  };

  const handleSearchChange = (e) => {
    const q = e.target.value.toLowerCase();
    setSearchQuery(q);
    setFilteredNews(
      news.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      )
    );
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">{t('loading')}</span>
        </div>
      </div>
    );
  }

  return (
    <section className="MainAllnews my-5">
      <div className="container">

        {/* Search Input */}
        <div className="row mb-4">
          <div className="col-lg-12 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder={t('allNews.searchPlaceholder') || 'ابحث في الأخبار...'}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* News List */}
        {filteredNews.length === 0 ? (
          <p className="text-center">{t('noData')}</p>
        ) : (
          filteredNews.map((item, index) => (
            <div className="row my-3" key={index}>
              <div className="col-lg-4">
                <img
                  style={{ maxWidth: '100%', width: '700px' }}
                  src={item.image_url}
                  className="mb-3"
                  alt={item.title}
                />
              </div>
              <div className="col-lg-8">
                <h5 style={{ lineHeight: '2.0' }}>{item.title}</h5>
                <div className="desicionstitle my-3" dangerouslySetInnerHTML={{ __html: item?.description.slice(0, 200) }} />

                <div className="d-flex justify-content-between align-items-center">
                  <span className="desicionstime">
                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                    {new Date(item.date)
                      .toLocaleDateString(i18n.language)}
                  </span>
                  <Link
                    to={`/mediaOffice/newsdetails/${item.id}`}
                    className="type"
                  >
                    {t('allNews.readMore')}
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Pagination */}
        <div className="mt-5">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handlePagination(pagination.prev_page_url)}
                  disabled={!pagination.prev_page_url}
                >
                  {t('allNews.pagination.previous')}
                </button>
              </li>
              <li className="page-item active">
                <button className="page-link">
                  {pagination.current_page}
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handlePagination(pagination.next_page_url)}
                  disabled={!pagination.next_page_url}
                >
                  {t('allNews.pagination.next')}
                </button>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </section>
  );
}
