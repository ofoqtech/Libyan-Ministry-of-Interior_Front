import React from "react";
import styles from "./MediaDataRegistration.module.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MediaDataRegistration = () => {
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
                <div className="text-center fw-bold my-3">
                    <h4>{t("mediaRegistration.title")}</h4>
                </div>

                <div className={styles.mediaReg__card}>
                    <div className="row">
                        <h4>{t("mediaRegistration.basicInfo")}</h4>
                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <label style={{ display: 'block' }} className="my-1">
                                {t("mediaRegistration.profileImage")}
                            </label>
                            <div className="d-flex parent-btns2 align-items-center gap-2">
                                <div className={styles['custom-file-input']}>
                                    <input type="file" id="upload-file" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="name">{t("mediaRegistration.fullName")}</label>
                            <input type="text" className="form-control mt-2" id="name" placeholder={t("mediaRegistration.namePlaceholder")} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="number">{t("mediaRegistration.phone")}</label>
                            <input type="text" className="form-control mt-2" id="number" placeholder={t("mediaRegistration.phonePlaceholder")} />
                        </div>
                        <div className="col-md-4 mt-3 mb-2">
                            <label htmlFor="email">{t("mediaRegistration.email")}</label>
                            <input type="email" className="form-control mt-2" id="email" placeholder={t("mediaRegistration.emailPlaceholder")} />
                        </div>
                        <div className="col-md-4 mt-3 mb-2">
                            <label htmlFor="Identity">{t("mediaRegistration.idNumber")}</label>
                            <input type="text" className="form-control mt-2" id="Identity" placeholder={t("mediaRegistration.idPlaceholder")} />
                        </div>
                        <div className="col-md-4 mt-3 mb-2 position-relative">
                            <label htmlFor="Nationality">{t("mediaRegistration.nationality")}</label>
                            <select className={`form-control mt-2 ${styles.selectWithArrow}`} id="Nationality" defaultValue="">
                                <option value="" disabled>{t("mediaRegistration.selectNationality")}</option>
                                <option value="saudi">{t("mediaRegistration.nationalities.saudi")}</option>
                                <option value="egyptian">{t("mediaRegistration.nationalities.egyptian")}</option>
                                <option value="jordanian">{t("mediaRegistration.nationalities.jordanian")}</option>
                                <option value="syrian">{t("mediaRegistration.nationalities.syrian")}</option>
                                <option value="palestinian">{t("mediaRegistration.nationalities.palestinian")}</option>
                                <option value="sudanese">{t("mediaRegistration.nationalities.sudanese")}</option>
                                <option value="moroccan">{t("mediaRegistration.nationalities.moroccan")}</option>
                                <option value="other">{t("mediaRegistration.nationalities.other")}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center flex-wrap mt-3 mb-5">
                    <button className={`btn border mb-2 me-3 ${styles.btnclos}`} style={{ borderRadius: '10px' }}>
                        {t("mediaRegistration.cancel")}
                    </button>
                    <Link to="">
                        <button className={`btn px-5 me-3 ${styles['bg-btn']}`} style={{ fontSize: "14px" }}>
                            {t("mediaRegistration.createAccount")}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MediaDataRegistration;
