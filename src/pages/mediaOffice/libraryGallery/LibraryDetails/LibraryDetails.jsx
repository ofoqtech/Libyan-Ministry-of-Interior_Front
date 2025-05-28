import { GlobalContainer } from '../../../../components/globalComponent/globalComponent'
import './LibraryDetails.css'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

export default function LibraryDetails() {
    const { t } = useTranslation("global");

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return <>
        <GlobalContainer
            text={t('library.imageLibrary')}
            header={t('library.breadcrumb')}
        />

        <MainLibraryDetails />
    </>
}

function MainLibraryDetails() {
    const { t } = useTranslation("global");

    return (
        <section className="MainLibraryDetails my-5">
            <div className="container">
                <div className="row align-items-center">
                    <img style={{ maxWidth: "100%", width: "300px" }} src="/assets/1-59-1 1.png" className="mb-3"  alt="" />
                    <div className="col-lg-6">
                        <h2 style={{ lineHeight: "40px", fontSize: "25px" }}>
                            {t('security_media')}
                        </h2>
                        <span className="desicionstime">
                            <i className="uil uil-calendar-alt mx-1"></i>{t('time_ago')}
                        </span>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="row g-3">
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/1-1-11 1.png" alt={t('minister_visit')} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/1-1-11 1.png" alt={t('minister_visit')} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/1-1-11 1.png" alt={t('minister_visit')} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/1-1-11 1.png" alt={t('minister_visit')} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/1-1-11 1.png" alt={t('minister_visit')} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/1-1-11 1.png" alt={t('minister_visit')} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/1-1-11 1.png" alt={t('minister_visit')} />
                        </div>
                        <div className="col-md-3 col-sm-6 col-12 image-container">
                            <img src="/assets/1-1-11 1.png" alt={t('minister_visit')} />
                        </div>
                    </div>
                </div>

                <div className="my-5">
                    <span className="type mb-4">{t('related_articles')}</span>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <img src="/assets/FB_IMG_1740637952084 2.png" alt="" />
                                <h5 className="my-2">{t('minister_visit')}</h5>
                                <span className="desicionstime">
                                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>{t('time_ago')}
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <img src="/assets/FB_IMG_1740637952084 2.png" alt="" />
                                <h5 className="my-2">{t('minister_visit')}</h5>
                                <span className="desicionstime">
                                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>{t('time_ago')}
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <img src="/assets/FB_IMG_1740637952084 2.png" alt="" />
                                <h5 className="my-2">{t('minister_visit')}</h5>
                                <span className="desicionstime">
                                    <i className="uil uil-calendar-alt ms-1 mx-2"></i>{t('time_ago')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
