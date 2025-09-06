import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContainer } from "../../components/globalComponent/globalComponent";
import { Link, useParams } from "react-router-dom";
import DOMPurify from 'dompurify';
import { Modal, Button } from "react-bootstrap";
import "./commonNewsDetails.css";

export default function CommonNewsDetailsPage() {
    const { t } = useTranslation("global");

    return (
        <>
            <GlobalContainer
                text={t("commnNews.header1")}
                header={`${t("home")} - ${t("commnNews.header1")} `}
            />
            <CommonNewsDetails />
        </>
    );
}

function CommonNewsDetails() {
    const { i18n, t } = useTranslation("global");
    const { id } = useParams();
    const [todayNews, setTodayNews] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const wordLimit = 20;

    const getPreviewText = (text) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) {
            return text;
        } else {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
    };

    const handleReadMore = (article) => {
        setSelectedArticle(article);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedArticle(null);
        setShowModal(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/news/news_details/${id}?isMobile=0`,
                    {
                        headers: {
                            "lang": i18n.language,
                        },
                    }
                );
                const result = await response.json();
                const selectedNews = result.result;
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
        <section className="common-news-details">
            <div className="container">
                {isLoading ? (
                    <div className="header-skeleton loading-skeleton"></div>
                ) : (
                    <>
                        {/* News Header Section */}
                        <div className="news-header">
                            <div className="news-header-content">
                                <div className="news-header-image">
                                    <img
                                        src={todayNews?.image_url}
                                        alt={todayNews?.title}
                                    />
                                </div>
                                <div className="news-header-text">
                                    <h1>{todayNews?.title}</h1>
                                    <div className="news-meta">
                                        <div className="news-date">
                                            <i className="uil uil-calendar-alt"></i>
                                            {new Date(todayNews?.date).toLocaleDateString(i18n.language)}
                                        </div>
                                        <div className="news-category">
                                            {t("common_news.category_1")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* News Content Section */}
                        <div className="news-content">
                            <div className="news-description" dangerouslySetInnerHTML={{ __html: todayNews?.description }} />
                            
                            {/* Media Gallery */}
                            {todayNews?.medias && todayNews?.medias.length > 0 && (
                                <div className="media-gallery">
                                    <h3>{t('another')}</h3>
                                    <div className="media-grid">
                                        {todayNews.medias.map((media, index) => (
                                            <div key={index} className="media-item">
                                                <img
                                                    src={media?.file_url}
                                                    alt={`Media ${index + 1}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Video Link */}
                            {todayNews?.youtube_link && (
                                <div className="video-section">
                                    <Link className="video-link" to={todayNews.youtube_link}>
                                        <i className="uil uil-play-circle me-2"></i>
                                        {t('showVideo')}
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Related News Section */}
                        {todayNews?.related_news && todayNews?.related_news.length > 0 && (
                            <div className="related-news-section">
                                <div className="related-news-title">
                                    <span>{t('related')}</span>
                                </div>
                                <div className="related-news-grid">
                                    {todayNews.related_news.map((news, index) => (
                                        <div key={index} className="related-news-card">
                                            <img
                                                src={news?.image_url}
                                                alt={news?.title}
                                            />
                                            <div className="related-news-content">
                                                <h4>{getPreviewText(news?.title.slice(0, 100))}</h4>
                                                <div className="related-news-actions">
                                                    <button
                                                        className="read-more-btn"
                                                        onClick={() => handleReadMore(news)}
                                                    >
                                                        {t("ReadMore")}
                                                    </button>
                                                    {news?.youtube_link && (
                                                        <Link className="video-btn" to={news.youtube_link}>
                                                            <i className="uil uil-play-circle me-2"></i>
                                                            {t("showVideo")}
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* Modal for Related News */}
                <Modal 
                    show={showModal} 
                    onHide={handleCloseModal} 
                    centered 
                    size="lg"
                    className="news-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedArticle?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(selectedArticle?.description || '')
                            }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            {t('Close')}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </section>
    );
}