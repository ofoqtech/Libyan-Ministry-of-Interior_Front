import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { GlobalContainer } from '../../components/globalComponent/globalComponent';

export default function SearchPage() {
  const { t } = useTranslation("global");
  return (
    <>
      <GlobalContainer
        text={t('allNews.mainHeader')}
        header={t('allNews.breadcrumb')}
      />
      <SearchEl />
    </>
  );
}

function SearchEl() {
  const { id } = useParams();
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
  const [searchQuery, setSearchQuery] = useState(id || '');

  // fetchNews moved to component scope
  const fetchNews = useCallback(async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
          lang: i18n.language,
          'Content-Type': 'application/json',
        },
      });
      if (response.data.status === 'success') {
        const fetched = response.data.result.data;
        setNews(fetched);
        setFilteredNews(
          fetched.filter(item =>
            (item.title + ' ' + item.description)
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
        );
        setPagination(response.data.result);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  }, [i18n.language, searchQuery]);

  // initial fetch
  useEffect(() => {
    fetchNews(`${process.env.REACT_APP_API_URL}/news/main_news?page=1?isMobile=false`);
  }, [fetchNews]);

  // refilter when searchQuery changes
  useEffect(() => {
    setFilteredNews(
      news.filter(item =>
        (item.title + ' ' + item.description)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    );
  }, [news, searchQuery]);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const handlePagination = url => {
    if (url) {
      fetchNews(url);
    }
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
                <h5 style={{ lineHeight: "1.9" }}>{item.title}</h5>
                <div
                  className="desicionstitle mt-2" 
                  style={{lineHeight : '2.0'}}
                  dangerouslySetInnerHTML={{ __html: item.description.slice(0, 200) }}
                ></div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="desicionstime">
                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                    {new Date(item.created_at)
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
