import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './PrivacyPolicy.module.css';

export function PrivacyPolicy() {
  const { t, i18n } = useTranslation("global");
  const currentLang = i18n.language;

  return (
    <div className={styles['privacy-policy']} style={{padding : "260px 0 140px"}} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className={styles['breadcrumb-nav']}>
          <ol className={styles.breadcrumb} >
            <li className={styles['breadcrumb-item']} style={{margin : '0 20px'}}>
              <Link to="/">{t("home")}</Link>
            </li>
            /
            <li  className={`${styles['breadcrumb-item']} ${styles.active}`} aria-current="page">
              {t("privacyPolicy.title")}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className={styles['policy-header']}>
          <h1 className={styles['policy-title']}>{t("privacyPolicy.title")}</h1>
          <p className={styles['policy-date']}>{t("privacyPolicy.lastUpdated")}</p>
        </div>

        {/* Introduction */}
        <section className={styles['policy-section']}>
          <p className={styles['policy-intro']}>{t("privacyPolicy.introduction")}</p>
        </section>

        {/* Information Collection */}
        <section className={styles['policy-section']}>
          <h2 className={styles['section-title']}>{t("privacyPolicy.informationCollection.title")}</h2>
          <p className={styles['section-description']}>{t("privacyPolicy.informationCollection.description")}</p>
          <ul className={styles['info-list']}>
            <li>{t("privacyPolicy.informationCollection.personalInfo")}</li>
            <li>{t("privacyPolicy.informationCollection.contactInfo")}</li>
            <li>{t("privacyPolicy.informationCollection.accountInfo")}</li>
            <li>{t("privacyPolicy.informationCollection.serviceRequests")}</li>
            <li>{t("privacyPolicy.informationCollection.usageData")}</li>
          </ul>
        </section>

        {/* Information Use */}
        <section className={styles['policy-section']}>
          <h2 className={styles['section-title']}>{t("privacyPolicy.informationUse.title")}</h2>
          <p className={styles['section-description']}>{t("privacyPolicy.informationUse.description")}</p>
          <ul className={styles['info-list']}>
            <li>{t("privacyPolicy.informationUse.serviceProvision")}</li>
            <li>{t("privacyPolicy.informationUse.accountManagement")}</li>
            <li>{t("privacyPolicy.informationUse.communication")}</li>
            <li>{t("privacyPolicy.informationUse.security")}</li>
            <li>{t("privacyPolicy.informationUse.improvement")}</li>
          </ul>
        </section>

        {/* Information Protection */}
        <section className={styles['policy-section']}>
          <h2 className={styles['section-title']}>{t("privacyPolicy.informationProtection.title")}</h2>
          <p className={styles['section-description']}>{t("privacyPolicy.informationProtection.description")}</p>
          <ul className={styles['info-list']}>
            <li>{t("privacyPolicy.informationProtection.encryption")}</li>
            <li>{t("privacyPolicy.informationProtection.accessControl")}</li>
            <li>{t("privacyPolicy.informationProtection.regularAudits")}</li>
            <li>{t("privacyPolicy.informationProtection.staffTraining")}</li>
          </ul>
        </section>

        {/* Information Sharing */}
        <section className={styles['policy-section']}>
          <h2 className={styles['section-title']}>{t("privacyPolicy.informationSharing.title")}</h2>
          <p className={styles['section-description']}>{t("privacyPolicy.informationSharing.description")}</p>
          <ul className={styles['info-list']}>
            <li>{t("privacyPolicy.informationSharing.legalRequirement")}</li>
            <li>{t("privacyPolicy.informationSharing.serviceProviders")}</li>
            <li>{t("privacyPolicy.informationSharing.userConsent")}</li>
            <li>{t("privacyPolicy.informationSharing.securityPurposes")}</li>
          </ul>
        </section>

        {/* User Rights */}
        <section className={styles['policy-section']}>
          <h2 className={styles['section-title']}>{t("privacyPolicy.userRights.title")}</h2>
          <p className={styles['section-description']}>{t("privacyPolicy.userRights.description")}</p>
          <ul className={styles['info-list']}>
            <li>{t("privacyPolicy.userRights.accessInfo")}</li>
            <li>{t("privacyPolicy.userRights.updateInfo")}</li>
            <li>{t("privacyPolicy.userRights.deleteInfo")}</li>
            <li>{t("privacyPolicy.userRights.withdrawConsent")}</li>
            <li>{t("privacyPolicy.userRights.dataPortability")}</li>
          </ul>
        </section>

        {/* Cookies */}
        <section className={styles['policy-section']}>
          <h2 className={styles['section-title']}>{t("privacyPolicy.cookies.title")}</h2>
          <p className={styles['section-description']}>{t("privacyPolicy.cookies.description")}</p>
          <ul className={styles['info-list']}>
            <li>{t("privacyPolicy.cookies.essential")}</li>
            <li>{t("privacyPolicy.cookies.functional")}</li>
            <li>{t("privacyPolicy.cookies.analytics")}</li>
          </ul>
        </section>

        {/* Data Retention */}
        <section className={styles['policy-section']}>
          <h2 className={styles['section-title']}>{t("privacyPolicy.dataRetention.title")}</h2>
          <p className={styles['section-description']}>{t("privacyPolicy.dataRetention.description")}</p>
        </section>

        {/* Children Privacy */}
        <section className={styles['policy-section']}>
          <h2 className={styles['section-title']}>{t("privacyPolicy.childrenPrivacy.title")}</h2>
          <p className={styles['section-description']}>{t("privacyPolicy.childrenPrivacy.description")}</p>
        </section>

        {/* Policy Changes */}
        <section className={styles['policy-section']}>
          <h2 className={styles['section-title']}>{t("privacyPolicy.changes.title")}</h2>
          <p className={styles['section-description']}>{t("privacyPolicy.changes.description")}</p>
        </section>

       
        {/* Footer Note */}
        <div className={styles['policy-footer']}>
          <p className={styles['footer-note']}>
            {t("privacyPolicy.introduction")}
          </p>
        </div>
      </div>
    </div>
  );
}
