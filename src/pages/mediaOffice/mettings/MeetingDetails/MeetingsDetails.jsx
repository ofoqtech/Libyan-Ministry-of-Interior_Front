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
      .get(`https://brmjatech.co.uk/api/meetings/meeting_details/${id}`, {
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

      <section className="MainMeetingsDetails my-5">
        <div className="container">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">{t('loading')}</span>
              </div>
            </div>
          ) : data ? (
            <>
              <div className="row align-items-center">
                  <img
                    style={{ maxWidth: '100%', width: '300px' }}
                    src={data.image_url}
                    className="mb-3"
                    alt="meeting"
                  />
                
                <div className="col-lg-6">
                  <h2 style={{ lineHeight: '40px', fontSize: '25px' }}>{data.title}</h2>
                  <span className="desicionstime">
                    <i className="uil uil-calendar-alt mx-1"></i>
                    {new Date(data.created_at).toLocaleDateString(i18n.language)}
                  </span>
                </div>
              </div>


              <div className=" titledetalis my-3" dangerouslySetInnerHTML={{ __html: data?.description }} />


              {data.medias && data.medias.length > 0 && (
                <div className="mt-5">
                  <div className="row justify-content-center g-3">
                    {data.medias.map((media) => (
                      <div
                        key={media.id}
                        className="col-md-3 col-sm-6 col-12 image-container"
                      >
                        <img
                          src={media.file_url}
                          alt={t('meetingsDetails.imageAlt')}
                          className="img-fluid"
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
