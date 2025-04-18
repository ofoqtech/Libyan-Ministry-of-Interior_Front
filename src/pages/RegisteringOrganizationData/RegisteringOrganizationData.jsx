import React from "react";
import styles from "./RegisteringOrganizationData.module.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RegisteringOrganizationData = () => {
    const { t } = useTranslation("global");

    return (
        <div className={styles.mediaReg__wrapper}>
            <nav>
                <div className="container-fluid">
                    <div className={styles.mediaReg__navbar}>
                        <img src="/assets/logo.png" alt="Logo" />
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="text-center fw-bold my-4">
                    <h4>{t("orgRegistration.title")}</h4>
                </div>

                <div className={styles.mediaReg__card}>
                    <div className="row">
                        <h4 style={{ marginBottom: "20px" }}>{t("orgRegistration.basicInfo")}</h4>

                        <div className="col-md-4">
                            <label htmlFor="name">{t("orgRegistration.orgName")}</label>
                            <input type="text" className="form-control mt-2" id="name" placeholder={t("orgRegistration.orgNamePlaceholder")} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="type">{t("orgRegistration.orgType")}</label>
                            <input type="text" className="form-control mt-2" id="type" placeholder={t("orgRegistration.orgTypePlaceholder")} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="number">{t("orgRegistration.phone")}</label>
                            <input type="text" className="form-control mt-2" id="number" placeholder={t("orgRegistration.phonePlaceholder")} />
                        </div>

                        <div className="col-md-4 mt-3 mb-2">
                            <label htmlFor="email">{t("orgRegistration.email")}</label>
                            <input type="email" className="form-control mt-2" id="email" placeholder={t("orgRegistration.emailPlaceholder")} />
                        </div>
                        <div className="col-md-4 mt-3 mb-2">
                            <label htmlFor="Identity">{t("orgRegistration.idNumber")}</label>
                            <input type="text" className="form-control mt-2" id="Identity" placeholder={t("orgRegistration.idPlaceholder")} />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-wrap justify-content-center mt-3 mb-5">
                    <button className={`btn btn-outline-secondary mb-3 ${styles.btnClose}`}>
                        {t("orgRegistration.cancel")}
                    </button>
                    <Link to="" className={styles.noUnderline}>
                        <button style={{ fontSize: "14px" }} className={`btn px-5 me-3 ${styles.bgBtn}`}>
                            {t("orgRegistration.create")}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisteringOrganizationData;
