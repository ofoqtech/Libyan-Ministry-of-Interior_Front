import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './MeetingsDetails.css';

export default function MeetingsDetails() {
  const { t, i18n } = useTranslation("global");
  const { id } = useParams();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/meetings/meeting_details/${id}`, {
        headers: {
          'lang': i18n.language,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setData(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching meeting details:', err);
        setLoading(false);
      });
  }, [id, i18n.language]);

  return (
    <>
      <GlobalContainer
        text={t('meetingsDetails.title')}
        header={t('meetingsDetails.header')}
      />

      <section className="meetings-details-page">
        <div className="container">
          {loading ? (
            <div className="meetings-details-header-skeleton meetings-details-loading-skeleton"></div>
          ) : data ? (
            <>
              {/* Meeting Header Section */}
              <div className="meetings-details-header">
                <div className="meetings-details-header-content">
                  <div className="meetings-details-header-image">
                    <img
                      src={data.image_url}
                      alt="meeting"
                    />
                  </div>
                  <div className="meetings-details-header-text">
                    <h1>{data.title}</h1>
                    <div className="meetings-details-meta">
                      <div className="meetings-details-date">
                        <i className="uil uil-calendar-alt"></i>
                        {new Date(data.created_at).toLocaleDateString(i18n.language)}
                      </div>
                      <div className="meetings-details-category">
                        {t('meetingsDetails.title')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Content Section */}
              <div className="meetings-details-content">
                <div className="meetings-details-description" dangerouslySetInnerHTML={{ __html: data?.description }} />
              </div>

              {/* Media Gallery */}
              {data.medias && data.medias.length > 0 && (
                <div className="meetings-details-media-gallery">
                  <h3>{t('meetingsDetails.mediaGallery') || 'معرض الوسائط'}</h3>
                  <div className="meetings-details-media-grid">
                    {data.medias.map((media) => (
                      <div
                        key={media.id}
                        className="meetings-details-media-item"
                      >
                        <img
                          src={media.file_url}
                          alt={t('meetingsDetails.imageAlt')}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-5 text-danger">{t('error')}</div>
          )}
        </div>
      </section>
    </>
  );
}
