import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../components/globalComponent/globalComponent';
import { Link, useParams } from 'react-router-dom';

export default function TodayNewsDetailsPage() {
    const { t } = useTranslation("global");

    return (
        <>
            <GlobalContainer text={t('header.latest_news')} header={`${t('home')} - ${t('header.latest_news')} `} />
            <TodayNewsDetails />
        </>
    );
}

function TodayNewsDetails() {
    const { i18n, t } = useTranslation("global");
    const { id } = useParams();
    const [todayNews, setTodayNews] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
                setTodayNews(selectedNews || null);
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) fetchNews();
    }, [id, i18n.language]);

    return (
        <section className="MainNewsDetalis my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {isLoading ? (
                            <div className="bg-secondary rounded w-100" style={{ height: "350px", opacity: 0.2 }}></div>
                        ) : (
                            <img
                                style={{ maxWidth: "100%", width: "700px" }}
                                src={todayNews?.image_url}
                                className="mb-3"
                                alt=""
                            />
                        )}
                    </div>
                    <div className="col-lg-6">
                        <h2 style={{ lineHeight: "40px", fontSize: "25px" }}>
                            {isLoading ? (
                                <div className="bg-secondary rounded mb-2" style={{ width: "80%", height: "30px", opacity: 0.2 }}></div>
                            ) : (
                                todayNews?.name
                            )}
                        </h2>
                    </div>
                </div>

                <div className="my-3">
                    {isLoading ? (
                        <>
                            <div className="bg-secondary rounded mb-2" style={{ height: "15px", width: "100%", opacity: 0.2 }}></div>
                            <div className="bg-secondary rounded mb-2" style={{ height: "15px", width: "95%", opacity: 0.2 }}></div>
                            <div className="bg-secondary rounded mb-2" style={{ height: "15px", width: "90%", opacity: 0.2 }}></div>
                        </>
                    ) : (

                        <>
                            <p className="titledetalis">{todayNews?.description}</p>
                            {todayNews?.youtube_link && (
                                <div className="my-5 mx-auto text-center d-flex justify-content-center">
                                    <Link className="titledetalis type" to={todayNews.youtube_link}>
                                        {t('showVideo')}
                                    </Link>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
