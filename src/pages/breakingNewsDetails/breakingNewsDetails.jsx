import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContainer } from "../../components/globalComponent/globalComponent";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
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
                    `${process.env.REACT_APP_API_URL}/news/breaking_news`,
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
        <section className="MainNewsDetalis my-5">
            <div className="container">
                {loading ? (
                    // Skeleton
                    <div className="row justify-content-center my-3">
                        <div className="col-lg-12">
                            <div className="skeleton-wrapper">
                                <div className="skeleton-image mb-3"></div>
                                <div className="skeleton-text mb-2"></div>
                                <div className="skeleton-text mb-2"></div>
                                <div className="skeleton-text short mb-2"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row align-items-center">
                        <img
                            style={{ maxWidth: "100%", width: "300px" }}
                            src={detail?.image_url}
                            className="mb-3"
                            width="300px"
                            alt=""
                        />
                        <div className="col-lg-6">
                            <h2 style={{ lineHeight: "40px", fontSize: "25px" }}>
                                {detail?.title}
                            </h2>
                            <span className="desicionstime">
                                <i className="uil uil-calendar-alt mx-1"></i>{" "}
                                {`${detail?.created_at?.slice(0, 10)}`}
                            </span>
                        </div>
                    </div>
                )}

                <div className="my-3">
                    <div className="titledetalis" dangerouslySetInnerHTML={{ __html: detail?.description }} />
                    {detail?.youtube_link && (
                        <div className="my-5 mx-auto text-center d-flex justify-content-center">
                            <Link className="titledetalis type" to={detail.youtube_link}>
                                {t('showVideo')}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
