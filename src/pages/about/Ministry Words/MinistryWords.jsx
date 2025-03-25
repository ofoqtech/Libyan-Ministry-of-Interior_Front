import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import './MinistryWords.css';

export function MinistryWords() {
    const [t] = useTranslation("global");
  
    return (
      <>
        <GlobalContainer
          t={t}
          text={t("ministryWordsPage.pageTitle")}
          header={t("ministryWordsPage.breadcrumb")}
        />
        <MainWords t={t} />
      </>
    );
  }
  
  function MainWords({ t }) {
    return (
      <section className="my-5">
        <div className="container">
          <h2
            className="mb-5  "
            style={{ fontSize: "22px", lineHeight: "40px" }}
          >
            {t("ministryWordsPage.mainHeading")}
          </h2>
          <p
            className=" text-muted fw-light "
            style={{ lineHeight: "1.8" }}
          >
            {t("ministryWordsPage.paragraph")}
          </p>
        </div>
      </section>
    );
  }