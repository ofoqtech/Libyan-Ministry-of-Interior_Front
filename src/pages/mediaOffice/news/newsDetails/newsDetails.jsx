import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './newsDetails.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { Modal, Button } from "react-bootstrap"; // تأكد إن Bootstrap و React-Bootstrap متثبتين



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

    const { id } = useParams();


    const [selectedArticle, setSelectedArticle] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [newsDetails, setNewsDetails] = useState(null);
   const [showFullText, setShowFullText] = useState(false);

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
                                        <p className="desicionstime mt-3">
                                            <i className="uil uil-calendar-alt mt-1 ms-1 mx-2"></i>
                                            {new Date(article.created_at).toLocaleDateString(i18n.language)}
                                        </p>
                                        <div className="card-body p-0">
                                            <h5 style={{ lineHeight: "1.6", color: "black", marginBottom: '10px' }} className="card-title">{article?.title}</h5>

                                            <div
                                                className="card-text m-0"
                                                dangerouslySetInnerHTML={{
                                                    __html: DOMPurify.sanitize(getPreviewText(article?.description || ''))
                                                }}
                                            />

                                            {article.description.split(' ').length > wordLimit && (
                                                <button
                                                    className="btn btn-link p-0 mt-1" style={{ color: "#003f9c" }}
                                                    onClick={() => handleReadMore(article)}
                                                >
                                                    {t('ReadMore')}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
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
