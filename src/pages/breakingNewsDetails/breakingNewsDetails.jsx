import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContainer } from "../../components/globalComponent/globalComponent";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./breakingNewsDetails.css";
export default function BreakingNewsDetailsPage() {
    const { t } = useTranslation("global");
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <GlobalContainer
                text={t("header.breakingNews")}
                header={`${t("home")} - ${t("header.breakingNews")} `}
            />
            <BreakingNewsDetails />
        </>
    );
}

function BreakingNewsDetails() {
    const { t } = useTranslation("global");

    const { i18n } = useTranslation("global");
    const { id } = useParams();
    const [detail, setDetail] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getDetail = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/news/breaking_news?isMobile=0`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            'lang': i18n.language,
                        },
                    }
                );
                if (response.status === 200) {
                    const allNews = response.data.result.data;
                    const detailItem = allNews.find(
                        (item) => item.id.toString() === id.toString()
                    );
                    // console.log(detailItem);
                    setDetail(detailItem);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getDetail();
    }, [id, i18n.language]);
    return (
        <section className="breaking-news-details-page">
            <div className="container">
                {loading ? (
                    <div className="breaking-news-details-header-skeleton breaking-news-details-loading-skeleton"></div>
                ) : detail ? (
                    <>
                        {/* News Header Section */}
                        <div className="breaking-news-details-header">
                            <div className="breaking-news-details-header-content">
                                <div className="breaking-news-details-header-image">
                                    <img
                                        src={detail?.image_url}
                                        alt={detail?.title}
                                    />
                                </div>
                                <div className="breaking-news-details-header-text">
                                    <h1>{detail?.title}</h1>
                                    <div className="breaking-news-details-meta">
                                        <div className="breaking-news-details-date">
                                            <i className="uil uil-calendar-alt"></i>
                                            {new Date(detail?.date).toLocaleDateString(i18n.language)}
                                        </div>
                                        <div className="breaking-news-details-category">
                                            {t("header.breakingNews")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* News Content Section */}
                        <div className="breaking-news-details-content">
                            <div className="breaking-news-details-description" dangerouslySetInnerHTML={{ __html: detail?.description }} />
                            
                            {/* Video Link */}
                            {detail?.youtube_link && (
                                <div className="breaking-news-details-video-section">
                                    <Link className="breaking-news-details-video-link" to={detail.youtube_link}>
                                        <i className="uil uil-play-circle me-2"></i>
                                        {t('showVideo')}
                                    </Link>
                                </div>
                            )}
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
