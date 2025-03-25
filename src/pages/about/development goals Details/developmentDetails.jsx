import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import React from 'react';

export default function DevelopmentDetailsPage() {
    const { t } = useTranslation("global");

    return (
        <>
            <GlobalContainer 
                text={t('page.decisions')} 
                header={t('page.header')}
            />
            <DevelopmentDetails />
        </>
    );
}

function DevelopmentDetails() {
    const { t } = useTranslation("global");

    return (
        <section className="desicionsinformationsdetalis my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img 
                            style={{ maxWidth: '100%' }} 
                            src="/assets/2148325790 1.png" 
                            className="mb-3" 
                            width="700px" 
                            alt={t('gallery.image_alt')} 
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 style={{ lineHeight: '40px', fontSize: '25px' }}>
                            {t('details.title')}
                        </h2>
                        <span className="desicionstime">
                            <i className="uil uil-calendar-alt mx-2"></i>
                            {t('details.time_ago')}
                        </span>
                    </div>
                </div>

                <div className="my-3">
                    <p className="titledetalis">{t('details.body')}</p>
                </div>

                <div className="mt-5">
                    <div className="row g-3">
                        {[...Array(10)].map((_, idx) => (
                            <div key={idx} className="col-md-3 col-sm-6 col-12 image-container">
                                <img src="/assets/2148325790 1.png" alt={t('gallery.image_alt')} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-5">
                    <span className="type mb-4">{t('related.title')}</span>
                    <div className="row">
                        {[...Array(3)].map((_, idx) => (
                            <div key={idx} className="col-lg-4">
                                <div className="card mb-4">
                                    <img src="/assets/FB_IMG_1740637952084 2.png" alt={t('gallery.image_alt')} />
                                    <h5 className="my-2">{t('related.article_title')}</h5>
                                    <span className="desicionstime">
                                        <i className="uil uil-calendar-alt ms-1 mx-2"></i>
                                        {t('related.time_ago')}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
