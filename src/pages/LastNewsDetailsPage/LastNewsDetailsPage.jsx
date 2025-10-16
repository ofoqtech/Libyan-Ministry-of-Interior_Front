import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { GlobalContainer } from '../../components/globalComponent/globalComponent';
import './LastNewsDetailsPage.css';

export default function LastNewsDetailsPage() {
    const { t } = useTranslation("global");
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <GlobalContainer text={t('lastnews')} header={`${t('home')} - ${t('lastnews')} `} />
            <LastNews />
        </>
    );
}

function LastNews() {
    const { t, i18n } = useTranslation("global");
    const [heroSection, setHeroSection] = useState(null);
  
    useEffect(() => {
      const getHeroSection = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/app_settings/hero?isMobile=0`,
            {
              headers: {
                "Content-Type": "application/json",
                lang: i18n.language,
              },
            }
          );
          if (response.status === 200) {
            setHeroSection(response.data.result);
          }
        } catch (err) {
        }
      };
  
      getHeroSection();
    }, [i18n.language]);
    const { id } = useParams();

    const isLoading = !heroSection;
const selectedHero = heroSection?.find(hero => String(hero.id) === id) || null;



    if (!selectedHero) return <p className="text-center my-5">{t('loading')}...</p>;

 


    return (
        <section className="last-news-details-page">
            <div className="container">
                {isLoading ? (
                    <div className="last-news-details-header-skeleton last-news-details-loading-skeleton"></div>
                ) : selectedHero ? (
                    <>
                        {/* News Header Section */}
                        <div className="last-news-details-header">
                            <div className="last-news-details-header-content">
                                <div className="last-news-details-header-image">
                                    <img
                                        src={selectedHero?.image}
                                        alt={selectedHero.title}
                                    />
                                </div>
                                <div className="last-news-details-header-text">
                                    <h1>{selectedHero.title}</h1>
                                    <div className="last-news-details-meta">
                                        <div className="last-news-details-date">
                                            <i className="uil uil-calendar-alt"></i>
                                            {selectedHero?.date || new Date().toString().slice(0,16)}
                                            {/* {new Date().toString().slice(0,16)} */}
                                        </div>
                                        <div className="last-news-details-category">
                                            {t('lastnews')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* News Content Section */}
                        <div className="last-news-details-content">
                            <div className="last-news-details-description" dangerouslySetInnerHTML={{ __html: selectedHero?.description }} />
                        </div>
                    </>
                ) : (
                    <div className="text-center my-5">
                        <p className="text-muted">{t('loading')}...</p>
                    </div>
                )}
            </div>
        </section>
    );
}
