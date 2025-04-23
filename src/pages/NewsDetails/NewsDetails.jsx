import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../components/globalComponent/globalComponent';
import { useParams } from 'react-router-dom';

export default function TodayNewsDetailsPage() {
    const { t } = useTranslation("global");

    return (
        <>
            <GlobalContainer text={t('main_news')} header={`${t('home')} -  ${t('main_news')} - ${t('header.latest_news')} `} />
            <TodayNewsDetails />
        </>
    );
}

function TodayNewsDetails() {
    const {i18n} = useTranslation("global");
    const { id } = useParams();
    const [todayNews, setTodayNews] = useState(null);
    
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/news/home_latest_news`,
            {
              headers: {
                "lang": i18n.language,
              },
            }
          );
          const result = await response.json();
          const selectedNews = result.data.find((news) => news.id === Number(id));
          console.log("Selected news by ID:", selectedNews);
          setTodayNews(selectedNews || null);
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      };
    
      if (id) fetchNews();
    }, [id, i18n.language]);
    const { t } = useTranslation("global");

    return (
        <section className="MainNewsDetalis my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img style={{ maxWidth: "100%", width: "700px" }} src={todayNews?.image_url} className="mb-3" width="700px" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2 style={{ lineHeight: "40px", fontSize: "25px" }}>
                        {todayNews?.name}
                        </h2>

                    </div>
                </div>

                <div className="my-3">
                    <p className="titledetalis">
                       {todayNews?.description}
                    </p>
                </div>

           

            
            </div>
        </section>
    );
}
