import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { GlobalContainer } from '../../components/globalComponent/globalComponent';

export default function LastNewsDetailsPage() {
    const { t } = useTranslation("global");

    return (
        <>
            <GlobalContainer text={t('lastnews')} header={`${t('home')} - ${t('lastnews')} `} />
            <LastNews />
        </>
    );
}

function LastNews() {
    const { t, i18n } = useTranslation("global");
    const [heroSection, setHeroSection] = useState(null);
  
    useEffect(() => {
      const getHeroSection = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/app_settings/hero`,
            {
              headers: {
                "Content-Type": "application/json",
                lang: i18n.language,
              },
            }
          );
          if (response.status === 200) {
            setHeroSection(response.data.result);
          }
        } catch (err) {
          console.log(err);
        }
      };
  
      getHeroSection();
    }, [i18n.language]);
    const { id } = useParams();

    const isLoading = !heroSection;
const selectedHero = heroSection?.find(hero => String(hero.id) === id) || null;

  console.log(selectedHero)


    if (!selectedHero) return <p className="text-center my-5">{t('loading')}...</p>;

 


    return (
        <section className="MainNewsDetalis my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img
                            style={{ maxWidth: "100%", width: "700px" }}
                            src={selectedHero?.image}
                            className="mb-3"
                            alt={selectedHero.title}
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 style={{ lineHeight: "40px", fontSize: "25px" }}>
                        {selectedHero.title}
                        </h2>
                        <span className="desicionstime">
                            <i className="uil uil-calendar-alt mx-1"></i>
                        {new Date().toString().slice(0,16)}
                        </span>
                    </div>
                </div>

                <div className="my-3">
                    <p className="titledetalis"   dangerouslySetInnerHTML={{ __html: selectedHero?.description }}
>
                </p>
                  
                </div>
       

       

            </div>
        </section>
    );
}
