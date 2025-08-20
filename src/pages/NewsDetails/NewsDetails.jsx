import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../components/globalComponent/globalComponent';
import { Link, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import './NewsDetails.css';

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
        <section className="news-details-page">
            <div className="container">
                {isLoading ? (
                    <div className="news-details-header-skeleton news-details-loading-skeleton"></div>
                ) : todayNews ? (
                    <>
                        {/* News Header Section */}
                        <div className="news-details-header">
                            <div className="news-details-header-content">
                                <div className="news-details-header-image">
                                    <img
                                        src={todayNews?.image_url}
                                        alt={todayNews?.title}
                                    />
                                </div>
                                <div className="news-details-header-text">
                                    <h1>{todayNews?.title}</h1>
                                    <div className="news-details-meta">
                                        <div className="news-details-date">
                                            <i className="uil uil-calendar-alt"></i>
                                            {new Date(todayNews?.created_at).toLocaleDateString(i18n.language)}
                                        </div>
                                        <div className="news-details-category">
                                            {t('header.latest_news')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* News Content Section */}
                        <div className="news-details-content">
                            <div className="news-details-description" dangerouslySetInnerHTML={{ __html: todayNews?.description }} />
                            
                            {/* Media Gallery */}
                            {todayNews?.medias && todayNews?.medias.length > 0 && (
                                <div className="news-details-media-gallery">
                                    <h3>صور أخرى</h3>
                                    <div className="news-details-media-grid">
                                        {todayNews.medias.map((media, index) => (
                                            <div key={index} className="news-details-media-item">
                                                <img
                                                    src={media?.file_url}
                                                    alt={`صورة ${index + 1}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Video Link */}
                            {todayNews?.youtube_link && (
                                <div className="news-details-video-section">
                                    <Link className="news-details-video-link" to={todayNews.youtube_link}>
                                        <i className="uil uil-play-circle me-2"></i>
                                        {t('showVideo')}
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Related News Section */}
                        {todayNews?.related_news && todayNews?.related_news.length > 0 && (
                            <div className="news-details-related-section">
                                <div className="news-details-related-title">
                                    <span>{t('related')}</span>
                                </div>
                                <div className="news-details-related-grid">
                                    {todayNews.related_news.map((news, index) => (
                                        <div key={index} className="news-details-related-card">
                                            <img
                                                src={news?.image_url}
                                                alt={news?.title}
                                            />
                                            <div className="news-details-related-content">
                                                <h4>{getPreviewText(news?.title.slice(0, 100))}</h4>
                                                <div className="news-details-related-actions">
                                                    <button
                                                        className="news-details-read-more-btn"
                                                        onClick={() => handleReadMore(news)}
                                                    >
                                                        {t("ReadMore")}
                                                    </button>
                                                    {news?.youtube_link && (
                                                        <Link className="news-details-video-btn" to={news.youtube_link}>
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
                ) : (
                    <div className="text-center my-5">
                        <p className="text-muted">{t('loading')}...</p>
                    </div>
                )}

                {/* Modal for Related News */}
                <Modal 
                    show={showModal} 
                    onHide={handleCloseModal} 
                    centered 
                    size="lg"
                    className="news-details-modal"
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
