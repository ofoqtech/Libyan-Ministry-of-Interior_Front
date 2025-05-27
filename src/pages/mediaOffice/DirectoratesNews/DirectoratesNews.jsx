import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import { toast } from 'react-toastify';
import DOMPurify from 'dompurify';

export default function DirectoratesNewsPage() {
  const { t } = useTranslation("global");
  return (
    <>
      <GlobalContainer
        text={t('allNews.DirectoratesNews')}
        header={t('allNews.DirectoratesNews2')}
      />
      <DirectoratesNews />
    </>
  );
}

function DirectoratesNews() {
  const { t, i18n } = useTranslation("global");
  const [governments, setGovernments] = useState([]);
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedGovId, setSelectedGovId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingData, setLoadingData] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleReadMore = (newsItem) => {
    setSelectedNews(newsItem);
    setShowModal(true);
  };

  // Load governments
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/governments/get_all`, {
      headers: { lang: i18n.language }
    })
      .then(res => setGovernments(res.data.result || []))
      .catch(() => toast.error(t('error')));
  }, [i18n.language, t]);

  // Load news for selected governorate
  useEffect(() => {
    if (!selectedGovId) {
      setNews([]);
      setFilteredNews([]);
      return;
    }
    setLoadingData(true);
    axios.get(
      `${process.env.REACT_APP_API_URL}/news/government_news/${selectedGovId}`,
      { headers: { lang: i18n.language, 'Content-Type': 'application/json' } }
    )
      .then(res => {
        const arr = res.data.result.data || [];
        setNews(arr);
        setFilteredNews(arr);
      })
      .catch(() => toast.error(t('error')))
      .finally(() => setLoadingData(false));
  }, [selectedGovId, i18n.language, t]);

  // Filter on title AND description
  const handleSearchChange = e => {
    const q = e.target.value.toLowerCase();
    setSearchQuery(q);
    setFilteredNews(
      news.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.description.toLowerCase().includes(q)
      )
    );
  };
  const modalRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  if (showModal) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [showModal]);


  if (loadingData) {
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
        {/* selector */}
        <div className="mb-4 d-flex align-items-center gap-3">
          <select
            className="form-select w-auto"
            value={selectedGovId}
            onChange={e => setSelectedGovId(e.target.value)}
          >
            <option value="">{t('chooseDirectorates')}</option>
            {governments.map(gov => (
              <option key={gov.id} value={gov.id}>
                {gov.name}
              </option>
            ))}
          </select>
        </div>

        {/* صف جديد للبحث مع ترويسة */}
        {selectedGovId && (
          <div className="row mb-5">
            <div className="col-lg-6 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder={t('allNews.searchPlaceholder') || 'ابحث في العنوان أو الوصف...'}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        )}
       {showModal && selectedNews && (
  <div className="modal fade show d-block" role="dialog">
    <div className="modal-dialog modal-lg" style={{ zIndex: "122121" }} role="document">
      <div className="modal-content" ref={modalRef}> {/* 👈 اضف المرجع هنا */}
        <div className="modal-header">
          <h5 className="modal-title">{selectedNews?.title}</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>
        <div className="modal-body">
          <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedNews?.description || '') }}
          />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            {t('decisionsPage.close') || 'إغلاق'}
          </button>
        </div>
      </div>
    </div>
    <div className="modal-backdrop fade show"></div>
  </div>
)}


        {/* news cards */}
        <div className="row justify-content-center">
          {filteredNews.length > 0 ? (
            filteredNews.map(item => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
                <div className="card px-4 pt-4 pb-1 text-center h-100 mb-2" style={{cursor : "pointer"}} onClick={() => handleReadMore(item)}>
                  <img
                    src={item.image_url || '/assets/placeholder.jpg'}
                    className="rounded"
                    alt={item?.title}
                  />
                  <h5 className="mt-3 mb-2" style={{ lineHeight: 1.6 }}>
                    {item?.title}
                  </h5>

                  <div className=" mt-1" style={{ fontSize: 14, fontWeight: 400 }} dangerouslySetInnerHTML={{ __html: item?.description.slice(0, 200) }} />
                  <Link className='mb-4' onClick={() => handleReadMore(item)}
                  >{t('ReadMore')}</Link>
                  {item?.youtube_link && <Link to={item?.youtube_link} className="d-block mb-3">
                    <span className="type mx-auto d-block">
                      {t('programsNewsPage.view')}
                    </span>
                  </Link>}

                </div>
              </div>
            ))
          ) : selectedGovId ? (
            <p>{t('noData')}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
