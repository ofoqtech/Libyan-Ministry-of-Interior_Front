import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './AllMeetings.css';

export default function AllMeetings() {
  const { t } = useTranslation("global");
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <GlobalContainer
        text={t('meetings.title')}
        header={t('meetings.header')}
      />
      <MainAllMeetings />
    </>
  );
}

function MainAllMeetings() {
  const { t, i18n } = useTranslation("global");
  const [meetings, setMeetings] = useState([]);
  const [filteredMeetings, setFilteredMeetings] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    next_page_url: null,
    prev_page_url: null,
  });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchMeetings(`${process.env.REACT_APP_API_URL}/meetings/get_all?isMobile=0`);
  }, [i18n.language]);

  const fetchMeetings = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
          'lang': i18n.language,
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      if (data.status === 'success') {
        setMeetings(data.result.data);
        setFilteredMeetings(data.result.data);
        setPagination(data.result.pagination);
      }
    } catch (error) {
      console.error('Error fetching meetings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePagination = (url) => {
    if (!url) return;
    fetchMeetings(url);
  };

  const handleSearchChange = (e) => {
    const q = e.target.value.toLowerCase();
    setSearchQuery(q);
    setFilteredMeetings(
      meetings.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q)
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
    <section className="MainAllMeetings my-5">
      <div className="container">
        {/* Search Input */}
        <div className="row mb-4">
          <div className="col-lg-12 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder={t('allNews.searchPlaceholder') || 'ابحث في الاجتماعات...'}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Meetings List */}
        {filteredMeetings.length === 0 ? (
          <p className="text-center">{t('noData')}</p>
        ) : (
          filteredMeetings.map((meeting, index) => (
            <div className="row my-3" key={index}>
              <div className="col-lg-4">
                <img
                  style={{ maxWidth: '100%', width: '700px' }}
                  src={meeting.image_url}
                  className="mb-3"
                  alt={meeting.title}
                />
              </div>
              <div className="col-lg-8">
                <h5>{meeting.title}</h5>
                <div className="desicionstitle my-2 mb-4" dangerouslySetInnerHTML={{ __html: meeting?.description.slice(0,200) }} />

                <div className="d-flex justify-content-between align-items-center">
                  <span className="desicionstime">
                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                    {new Date(meeting.date)
                      .toLocaleDateString(i18n.language)}
                  </span>
                  <Link
                    to={`/mediaOffice/meetingsdetails/${meeting.id}`}
                    className="type"
                  >
                    {t('meetings.readMore')}
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Pagination Controls */}
        <div className="mt-5">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handlePagination(pagination.prev_page_url)}
                  disabled={!pagination.prev_page_url}
                >
                  {t('pagination.previous')}
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
                  {t('pagination.next')}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
