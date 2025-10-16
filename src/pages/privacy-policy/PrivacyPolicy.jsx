import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './PrivacyPolicy.module.css';
import { GlobalContainer } from '../../components/globalComponent/globalComponent';
import axios from 'axios';
import { toast } from 'react-toastify';

export function PrivacyPolicy() {
  const { t, i18n } = useTranslation("global");
  const currentLang = i18n.language;
  const [privacyData, setPrivacyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api_privacy_policy`,
          {
            headers: {
              "Content-Type": "application/json",
              lang: i18n.language,
            },
          }
        );
        if (response.status === 200 && response.data.status === "success") {
          setPrivacyData(response.data.result);
        }
      } catch (err) {
        console.error('Error fetching privacy policy:', err);
        toast.error(t("noData") || err?.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, [i18n.language, t]);

  if (loading) {
    return (
      <>
        <GlobalContainer
          text={t("privacyPolicy.title")}
          header={t("privacyPolicy.breadcrumb")}
        />
        <div className={styles['privacy-policy']} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
          <div className={styles.container}>
            <div className={styles['loading-container']}>
              <div className={styles['loading-spinner']}></div>
              <p className={styles['loading-text']}>{t("privacyPolicy.loading")}</p>
        </div>
      </div>
    </div>
      </>
    );
  }

  return (
    <>
      <GlobalContainer
        text={t("privacyPolicy.title")}
        header={t("privacyPolicy.breadcrumb")}
      />
      <div className={styles['privacy-policy']} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
        <div className={styles.container}>
 

          {/* Privacy Policy Content */}
          <section className={styles['policy-section']}>
            <div 
              className={styles['policy-content']}
              dangerouslySetInnerHTML={{ 
                __html: privacyData?.text || t("privacyPolicy.introduction") 
              }}
            />
          </section>
        </div>
      </div>
    </>
  );
}