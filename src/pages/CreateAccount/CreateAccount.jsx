import React from "react";
import styles from "./CreateAccount.module.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CreateAccount = () => {
  const { t } = useTranslation("global");
  

  return (
    <div>
      <nav>
        <div className="container-fluid">
          <div className={styles.customNavbar}>
            <img src="/assets/logo.png" alt="Logo" className={styles.navbarLogo} />
          </div>
        </div>
      </nav>

      <div>
        <div className="text-center my-4">
          <h1>{t("createAccount.whoAreYou")}</h1>
          <h3 className="text-secondary" style={{ fontSize: "20px", marginTop: "20px" }}>
            {t("createAccount.chooseOption")}
          </h3>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <div className={styles.cardContainer}>
            <Link to="/mediadataregistration">
              <button className={styles.serviceButton}>{t("createAccount.mediaProfessional")}</button>
            </Link>
            <Link to="/registeringorganizationdata">
              <button className={styles.serviceButton}>{t("createAccount.mediaOrganization")}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
