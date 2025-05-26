import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './newsDetails.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function NewsDetails() {
    const { t } = useTranslation("global");

    return (
        <>
            <GlobalContainer text={t('main_news')} header={`${t('home')} - ${t('media_office')} - ${t('main_news')}`} />
            <MainNewsDetalis />
        </>
    );
}

function MainNewsDetalis() {
    const { t, i18n } = useTranslation("global");
    const [showFullText, setShowFullText] = useState(false);

    const { id } = useParams();
    const wordLimit = 20;


    const [newsDetails, setNewsDetails] = useState(null);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/news/news_details/${id}`, {
                    headers: {
                        'lang': i18n.language,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.data.status === 'success') {
                    setNewsDetails(response.data.result);
                }
            } catch (error) {
                console.error('Error fetching news details:', error);
            }
        };

        fetchNewsDetails();
    }, [id, i18n.language]);

    if (!newsDetails) return <p className="text-center my-5">{t('loading')}...</p>;

    const getPreviewText = (text) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) {
            return text;
        } else {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
    };


    return (
        <section className="MainNewsDetalis my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img
                            style={{ maxWidth: "100%", width: "700px" }}
                            src={newsDetails.image_url}
                            className="mb-3"
                            alt={newsDetails.title}
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 style={{ lineHeight: "40px", fontSize: "25px" }}>
                            {newsDetails.title}
                        </h2>
                        <span className="desicionstime">
                            <i className="uil uil-calendar-alt mx-1"></i>
                            {new Date(newsDetails.created_at).toLocaleDateString(i18n.language)}
                        </span>
                    </div>
                </div>

                <div className="titledetalis my-3" dangerouslySetInnerHTML={{ __html: newsDetails?.description }} />

                {newsDetails?.youtube_link && <div className="my-5 mx-auto text-center d-flex justify-content-center">
                    <Link className="titledetalis type" to={newsDetails?.youtube_link}>{t('showVideo')}</Link>
                </div>}

                {newsDetails.medias?.length > 0 && (
                    <div className="mt-5">
                        <div className="row justify-content-center g-3">
                            {newsDetails.medias.map((media) => (
                                <div
                                    key={media.id}
                                    className="col-md-3 col-sm-6 col-12 image-container"
                                >
                                    <img
                                        src={media.file_url}
                                        alt={t('newsDetails.imageAlt')}
                                        className="img-fluid"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}



                {newsDetails.related_news?.length > 0 && (
                    <div className="my-5">
                        <span className="type mb-4">{t('related_articles')}</span>
                        <div className="row">
                            {newsDetails.related_news.map((article, index) => (
                                <div className="col-lg-4" key={index}>
                                    <div className="card mb-3">
                                        <img
                                            src={article.image_url}
                                            alt={article.title}
                                            className="card-img-top"
                                        />
                                        <div className="card-body">
                                            <h5 style={{ lineHeight: "1.6" }} className="card-title">{article.title}</h5>
                                            <p className="card-text m-0">
                                                {showFullText ? article.description : getPreviewText(article.description)}
                                            </p>

                                            {article.description.split(' ').length > wordLimit && (
                                                <button
                                                    className="btn btn-link p-0 mt-2 " style={{ color: "#003f9c" }}
                                                    onClick={() => setShowFullText(!showFullText)}
                                                >
                                                    {showFullText ? t('ShowLess') : t('ReadMore')}
                                                </button>
                                            )}
                                            <p className="desicionstime">
                                                <i className="uil uil-calendar-alt mt-1 ms-1 mx-2"></i>
                                                {new Date(article.created_at).toLocaleDateString(i18n.language)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
