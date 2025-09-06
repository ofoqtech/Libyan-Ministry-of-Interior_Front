import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './newsDetails.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from 'dompurify';
import { Modal, Button } from "react-bootstrap";

export default function 
NewsDetails() {
    const { t } = useTranslation("global");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <GlobalContainer text={t('main_news')} header={`${t('home')} - ${t('media_office')} - ${t('main_news')}`} />
            <MainNewsDetalis />
        </>
    );
}

function MainNewsDetalis() {
    const { t, i18n } = useTranslation("global");
    const { id } = useParams();
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [newsDetails, setNewsDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
        const fetchNewsDetails = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/news/news_details/${id}?isMobile=0`, {
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
            } finally {
                setIsLoading(false);
            }
        };

        fetchNewsDetails();
    }, [id, i18n.language]);

    return (
        <section className="news-details-page">
            <div className="container">
                {isLoading ? (
                    <div className="news-details-header-skeleton news-details-loading-skeleton"></div>
                ) : newsDetails ? (
                    <>
                        {/* News Header Section */}
                        <div className="news-details-header">
                            <div className="news-details-header-content">
                                <div className="news-details-header-image">
                                    <img
                                        src={newsDetails.image_url}
                                        alt={newsDetails.title}
                                    />
                                </div>
                                <div className="news-details-header-text">
                                    <h1>{newsDetails.title}</h1>
                                    <div className="news-details-meta">
                                        <div className="news-details-date">
                                            <i className="uil uil-calendar-alt"></i>
                                            {new Date(newsDetails.date).toLocaleDateString(i18n.language)}
                                        </div>
                                        <div className="news-details-category">
                                            {t('main_news')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* News Content Section */}
                        <div className="news-details-content">
                            <div className="news-details-description" dangerouslySetInnerHTML={{ __html: newsDetails?.description }} />
                            
                            {/* Media Gallery */}
                            {newsDetails?.medias && newsDetails?.medias.length > 0 && (
                                <div className="news-details-media-gallery">
                                    <h3>صور أخرى</h3>
                                    <div className="news-details-media-grid">
                                        {newsDetails.medias.map((media, index) => (
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
                            {newsDetails?.youtube_link && (
                                <div className="news-details-video-section">
                                    <Link className="news-details-video-link" to={newsDetails.youtube_link}>
                                        <i className="uil uil-play-circle me-2"></i>
                                        {t('showVideo')}
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Related News Section */}
                        {newsDetails?.related_news && newsDetails?.related_news.length > 0 && (
                            <div className="news-details-related-section">
                                <div className="news-details-related-title">
                                    <span>{t('related_articles')}</span>
                                </div>
                                <div className="news-details-related-grid">
                                    {newsDetails.related_news.map((article, index) => (
                                        <div key={index} className="news-details-related-card">
                                            <img
                                                src={article?.image_url}
                                                alt={article?.title}
                                            />
                                            <div className="news-details-related-content">
                                                <h4>{getPreviewText(article?.title.slice(0, 100))}</h4>
                                                <div className="news-details-related-actions">
                                                    {article.description.split(' ').length > wordLimit && (
                                                        <button
                                                            className="news-details-read-more-btn"
                                                            onClick={() => handleReadMore(article)}
                                                        >
                                                            {t("ReadMore")}
                                                        </button>
                                                    )}
                                                    {article?.youtube_link && (
                                                        <Link className="news-details-video-btn" to={article.youtube_link}>
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
