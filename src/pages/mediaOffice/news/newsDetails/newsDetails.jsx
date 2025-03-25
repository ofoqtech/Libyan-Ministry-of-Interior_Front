import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './newsDetails.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NewsDetails() {
    const { t } = useTranslation("global");

    return (
        <>
            <GlobalContainer text={t('main_news')} header={`${t('home')} - ${t('media_office')} - ${t('main_news')} - ${t('minister_security_meeting')}`} />
            <MainNewsDetalis />
        </>
    );
}

function MainNewsDetalis() {
    const { t } = useTranslation("global");

    return (
        <section className="MainNewsDetalis my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img style={{ maxWidth: "100%", width: "700px" }} src="/assets/Container.png" className="mb-3" width="700px" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2 style={{ lineHeight: "40px", fontSize: "25px" }}>
                            {t('minister_security_meeting')}
                        </h2>
                        <span className="desicionstime">
                            <i className="uil uil-calendar-alt mx-1"></i>{t('two_days_ago')}
                        </span>
                    </div>
                </div>

                <div className="my-3">
                    <p className="titledetalis">
                        {t('meeting_details')}
                    </p>
                </div>

                <div className="mt-5">
                    <div className="row g-3">
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="Image" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="Image" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="Image" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="Image" />
                        </div>
                    </div>
                </div>

                <div className="my-5">
                    <span className="type mb-4">{t('related_articles')}</span>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <img src="/assets/FB_IMG_1740637952084 2.png" alt="" />
                                <h5 className="my-2">{t('minister_security_meeting')}</h5>
                                <span className="desicionstime">
                                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>{t('two_days_ago')}
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <img src="/assets/FB_IMG_1740637952084 2.png" alt="" />
                                <h5 className="my-2">{t('minister_security_meeting')}</h5>
                                <span className="desicionstime">
                                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>{t('two_days_ago')}
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <img src="/assets/FB_IMG_1740637952084 2.png" alt="" />
                                <h5 className="my-2">{t('minister_security_meeting')}</h5>
                                <span className="desicionstime">
                                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>{t('two_days_ago')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
