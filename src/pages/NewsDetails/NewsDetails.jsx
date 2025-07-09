import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../components/globalComponent/globalComponent';
import { Link, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import DOMPurify from 'dompurify';

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

    const [showFullText, setShowFullText] = useState(false);

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
        <section className="MainNewsDetalis my-5">
            <div className="container">
                <div className="row align-items-center">
                    {isLoading ? (
                        <div className="bg-secondary rounded w-100" style={{ height: "350px", opacity: 0.2 }}></div>
                    ) : (

                        <>
                            <div className="d-flex gap-4  align-items-center">
                                <img
                                    style={{ maxWidth: "100%", width: "300px" }}
                                    src={todayNews?.image_url}
                                    className="mb-3"
                                    alt=""
                                />
                                <h2 style={{ lineHeight: "40px", fontSize: "25px" }}>
                                    {isLoading ? (
                                        <div className="bg-secondary rounded mb-2" style={{ width: "80%", height: "30px", opacity: 0.2 }}></div>
                                    ) : (
                                        todayNews?.title
                                    )}
                                </h2>
                            </div>

                        </>
                    )}

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
                            <div className="titledetalis" dangerouslySetInnerHTML={{ __html: todayNews?.description }} />

                            {todayNews?.medias.length > 0 && (
                                <div className="text-center">
                                    <p>{t('another')}</p>
                                    <div className="d-flex flex-wrap justify-content-center gap-3">
                                        {todayNews.medias.map((media, index) => (
                                            <img
                                                key={index}
                                                style={{ maxWidth: "100%", width: "200px" }}
                                                src={media?.file_url}
                                                className="mb-3"
                                                alt=""
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="row mt-5">
                                {todayNews?.related_news.length > 0 && <div class="my-2 text-center mx-auto"><span class="type mb-4 text-center mx-auto">{t('related')}</span></div>}                                 {todayNews?.related_news.length > 0 &&
                                    todayNews?.related_news.map((news, index) => (
                                        <div key={index} className="col-lg-4 mb-4">
                                            <div
                                                className="card h-100"
                                                style={{
                                                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                                    borderRadius: "10px",
                                                }}
                                            >
                                                <img
                                                    style={{
                                                        maxWidth: "100%",
                                                        borderTopLeftRadius: "10px",
                                                        borderTopRightRadius: "10px",
                                                    }}
                                                    src={news?.image_url}
                                                    alt=""
                                                />
                                                <div className="card-body">
                                                    <p style={{ lineHeight: "1.8" }}>{getPreviewText(news?.title.slice(0, 100))}</p>
                                                    <span
                                                        className="btn type my-3 mx-auto text-center d-flex justify-content-center"
                                                        style={{ width: "160px", borderRadius: "5px" }}
                                                        onClick={() => handleReadMore(news)}

                                                    >
                                                        {t("ReadMore")}
                                                    </span>
                                                    {news?.youtube_link && (
                                                        <div className="text-center mt-3">
                                                            {news?.title.split(' ').length > wordLimit && (
                                                                <Link className="btn btn-primary" to={news.youtube_link}>
                                                                    {t("showVideo")}
                                                                </Link>
                                                            )}


                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>




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
                <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title style={{ fontSize: "16px" }}>{selectedArticle?.title}</Modal.Title>
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
