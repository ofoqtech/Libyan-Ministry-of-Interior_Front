
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import { toast } from 'react-toastify';

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
  const [news, setNews] = useState([]);
  const [selectedGovId, setSelectedGovId] = useState(null);
  const [loadingData, setLoadingData] = useState(false);
  const [governments, setGovernments] = useState([]);

  const handleGovChange = (event) => {
    const govId = event.target.value;
    setSelectedGovId(govId);
  };

  useEffect(() => {
    const fetchGovernments = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/governments/get_all`, {
          headers: {
            lang: i18n.language,
          },
        });
        setGovernments(response.data?.result || []);
      } catch (error) {
        console.error("Error fetching governments:", error);
      }
    };
    fetchGovernments();
  }, [i18n.language]);

  useEffect(() => {
    const fetchGovernmentNews = async () => {
      if (selectedGovId) {
        setLoadingData(true);
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/news/government_news/${selectedGovId}`,
            {
                headers: {
                    'lang': i18n.language,
                    'Content-Type': 'application/json',
                },
            }
          );
          setNews(response?.data?.result?.data); 
        } catch (err) {
          console.error('Error fetching government news:', err);
        } finally {
          setLoadingData(false);
        }
      } else {
        setNews([]); 
      }
    };
    fetchGovernmentNews();
  }, [selectedGovId, i18n.language]);

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
      <div className="mb-4 d-flex justify-content-between align-items-center">
  <select
    className="form-select w-auto"
    onChange={handleGovChange}
    value={selectedGovId || ""}
  >
    <option value="">{t('chooseDirectorates')}</option>
    {governments.map((gov) => (
      <option key={gov.id} value={gov.id}>
        {gov.name}
      </option>
    ))}
  </select>
</div>

        <div className="row">
          {news.length > 0 ? (
            news.map((program) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={program?.id}>
                <div className="card px-4 pt-4 pb-1 text-center h-100 mb-2">
                  <img
                    src={program?.image_url || '/assets/placeholder.jpg'}
                    className="rounded"
                    alt={program?.name}
                  />
                  <h5 className="mt-3 mb-2" style={{lineHeight : "1.6"}}>{program?.title}</h5>
                  <p
                    className="mb-3 mt-1"
                    style={{ fontSize: '14px', fontWeight: '400' }}
                  >
                   {program?.description}
                  </p>
                  <Link to={program?.youtube_link } className='d-block mb-3'>
                    <span className="type mx-auto d-block">{t('programsNewsPage.view')}</span>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            selectedGovId && <p>{t('noData')}</p>

          )}
        </div>
      </div>
    </section>
  );
}


