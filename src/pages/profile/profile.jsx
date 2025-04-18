import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlobalContainer } from '../../components/globalComponent/globalComponent';
import styles from './profile.module.css';

export default function ProfilePage() {
    const { t } = useTranslation("global");

    return (
        <>
            <GlobalContainer
                text={t('profile.header1')}
                header={t('profile.header2')}
            />
            <Profile />
        </>
    );
}
function Profile() {
    const { t } = useTranslation("global");
    const [activeTab, setActiveTab] = useState("basic");

    return (
        <section className="MainAllnews my-5">
            <div className="container">
                <div className={styles.tabWrapper}>
                    <div className={styles.tabs}>
                        <div
                            className={`${styles.tab} ${activeTab === 'basic' ? styles.active : ''}`}
                            onClick={() => setActiveTab('basic')}
                        >
                            {t('profile.basicInfo')}
                            <div
                                className={styles.progressBar}
                                style={{ width: activeTab === 'basic' ? '100%' : '0%' }}
                            />
                        </div>
                        <div
                            className={`${styles.tab} ${activeTab === 'requests' ? styles.active : ''}`}
                            onClick={() => setActiveTab('requests')}
                        >
                            {t('profile.requestHistory')}
                            <div
                                className={styles.progressBar}
                                style={{ width: activeTab === 'requests' ? '100%' : '0%' }}
                            />
                        </div>
                    </div>
                    <p style={{background : "red" , padding : "6px 20px", color : "white", borderRadius : "12px"}}>{t('profile.remove')}</p>
                </div>

                {/* عرض الأقسام بناءً على التاب النشط */}
                {activeTab === 'basic' && (
                    <section className="basicInfoSection my-5">
                        <div className={styles.mediaReg__wrapper}>
                            <div className="container">

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
                            </div>
                        </div>

                    </section>
                )}

                {activeTab === 'requests' && (
                    <section className="requestHistorySection">
                        <div
                            className="orders-content container"
                            style={{ marginTop: "40px" }}
                        >
                            <h5 className="mb-4 text-center">{t("orders.title")}</h5>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="list-group">
                                        {/* الطلب الأول */}
                                        <div className="list-group-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center list-status-item gap-2">
                                                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6797 58.1601V54.4501C15.3797 53.5001 45.6097 54.4501 52.3197 54.4501V58.1601C52.3197 60.2801 43.2197 62.0001 31.9997 62.0001C20.7797 62.0001 11.6797 60.2801 11.6797 58.1601Z" fill="#8B5738" />
                                                    <path d="M31.9997 58.0784C43.2221 58.0784 52.3197 56.3592 52.3197 54.2384C52.3197 52.1177 43.2221 50.3984 31.9997 50.3984C20.7773 50.3984 11.6797 52.1177 11.6797 54.2384C11.6797 56.3592 20.7773 58.0784 31.9997 58.0784Z" fill="#FFB17A" />
                                                    <path d="M31.9997 58.0784C43.2221 58.0784 52.3197 56.3592 52.3197 54.2384C52.3197 52.1177 43.2221 50.3984 31.9997 50.3984C20.7773 50.3984 11.6797 52.1177 11.6797 54.2384C11.6797 56.3592 20.7773 58.0784 31.9997 58.0784Z" fill="#CC8552" />
                                                    <path opacity="0.75" d="M34.9797 32.7452C34.6047 32.5902 34.4447 32.2852 34.4447 31.8802C34.4447 31.4752 34.5697 31.1852 34.9347 31.0602C37.2397 30.1302 48.8197 25.6952 48.8197 11.8802L48.7297 9.47018L15.2397 9.43018L15.1797 11.9652C15.1797 25.3602 26.7197 30.0902 29.0197 31.0202C29.3947 31.1752 29.6297 31.4302 29.6297 31.8852C29.6297 32.3402 29.4347 32.5802 29.0647 32.7052C26.7597 33.6352 15.1797 38.0702 15.1797 51.8852C15.2083 52.6443 15.4849 53.3731 15.9671 53.96C16.4493 54.547 17.1106 54.9597 17.8497 55.1352C20.3697 55.7302 25.0397 56.4202 33.1147 56.4202C40.0697 56.4202 43.9647 55.9152 46.1297 55.4052C47.6697 55.0402 48.7747 53.6852 48.8097 52.1052L48.8147 51.8002C48.8197 38.4052 37.2847 33.6752 34.9797 32.7452Z" fill="#81D4FA" />
                                                    <path opacity="0.39" d="M48.7305 9.46969L15.2405 9.42969L15.1855 11.6897C15.1855 11.6897 18.8105 13.5497 32.0005 13.5497C45.1905 13.5497 48.8155 11.6897 48.8155 11.6897L48.7305 9.46969Z" fill="#1D44B3" />
                                                    <path d="M11.6797 8.96865V5.03365C15.2697 4.55365 47.1347 5.03365 52.3197 5.03365V8.96865C52.3197 10.6486 43.2197 12.0086 31.9997 12.0086C20.7797 12.0086 11.6797 10.6486 11.6797 8.96865Z" fill="#8B5738" />
                                                    <path d="M31.9997 8.08C43.2221 8.08 52.3197 6.71895 52.3197 5.04C52.3197 3.36105 43.2221 2 31.9997 2C20.7773 2 11.6797 3.36105 11.6797 5.04C11.6797 6.71895 20.7773 8.08 31.9997 8.08Z" fill="#CC8552" />
                                                    <path d="M45.2951 54.2831C45.7551 54.1481 46.0051 53.6281 45.7801 53.2031C44.2101 50.2331 37.5101 50.1481 34.9751 44.5681C33.2851 40.8431 33.1901 35.6631 33.1401 33.4481C33.0701 30.4531 34.5651 29.8081 34.5651 29.8081C41.6451 26.9581 46.8501 20.3781 47.1501 14.5031C47.1801 13.9181 36.0601 19.0881 32.2351 19.8331C25.1651 21.2131 18.1201 19.3981 18.0801 19.6481C20.7001 25.3831 25.9751 28.3781 29.5101 29.8081C30.3501 30.1531 31.7401 31.4581 31.6951 35.3781C31.6601 38.1831 31.3101 45.5781 26.4751 48.7231C24.6551 49.9081 20.6301 51.6431 19.8801 53.5281C19.7151 53.9431 19.9501 54.4131 20.3851 54.5231C21.7651 54.8731 25.9751 55.4881 32.5201 55.4881C37.6651 55.4931 42.7451 55.0231 45.2951 54.2831Z" fill="#FFCA28" />
                                                    <path d="M21.1841 21.6443C23.8641 23.0293 29.7441 25.0043 32.6441 24.0043C35.5441 23.0043 46.7591 15.9993 47.1441 14.5043C47.6241 12.6543 34.1441 17.3593 29.3991 18.4593C26.1841 19.2043 20.0441 18.8193 18.6641 19.1093C17.2891 19.3943 18.7191 20.3693 21.1841 21.6443Z" fill="#E2A610" />
                                                    <path opacity="0.6" d="M22.8958 18.8304C23.5258 20.3004 24.6758 23.6354 23.1758 24.2054C21.6758 24.7804 19.4808 22.6504 18.4408 20.5104C17.4008 18.3704 17.4958 15.5304 19.0658 15.4854C20.6358 15.4404 22.0608 16.8854 22.8958 18.8304ZM21.4508 40.3004C19.8858 42.1304 18.7108 44.5904 19.1558 46.9654C19.6258 49.4704 21.9558 48.7804 22.7658 48.1454C25.3458 46.1204 24.6408 43.5254 26.6358 40.6104C26.9758 40.1104 28.3958 38.5454 28.1958 37.5604C28.0758 36.9754 26.7158 36.6754 24.2408 37.9154C23.1508 38.4654 22.2558 39.3654 21.4508 40.3004Z" fill="white" />
                                                </svg>
                                                <div>
                                                    <p className="mb-1">{t("orders.reviewing")}</p>
                                                    <small>
                                                        {t("orders.todayDate", { date: "20 3 2025" })}
                                                    </small>
                                                </div>
                                            </div>
                                            <Link
                                                to="/request-details"
                                                className="btn btn-link text-primary text-decoration-none"
                                            >
                                                {t("orders.view")}
                                            </Link>
                                        </div>

                                        {/* الطلب الثاني */}
                                        <div className="list-group-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center list-status-item gap-2">
                                                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6797 58.1601V54.4501C15.3797 53.5001 45.6097 54.4501 52.3197 54.4501V58.1601C52.3197 60.2801 43.2197 62.0001 31.9997 62.0001C20.7797 62.0001 11.6797 60.2801 11.6797 58.1601Z" fill="#8B5738" />
                                                    <path d="M31.9997 58.0784C43.2221 58.0784 52.3197 56.3592 52.3197 54.2384C52.3197 52.1177 43.2221 50.3984 31.9997 50.3984C20.7773 50.3984 11.6797 52.1177 11.6797 54.2384C11.6797 56.3592 20.7773 58.0784 31.9997 58.0784Z" fill="#FFB17A" />
                                                    <path d="M31.9997 58.0784C43.2221 58.0784 52.3197 56.3592 52.3197 54.2384C52.3197 52.1177 43.2221 50.3984 31.9997 50.3984C20.7773 50.3984 11.6797 52.1177 11.6797 54.2384C11.6797 56.3592 20.7773 58.0784 31.9997 58.0784Z" fill="#CC8552" />
                                                    <path opacity="0.75" d="M34.9797 32.7452C34.6047 32.5902 34.4447 32.2852 34.4447 31.8802C34.4447 31.4752 34.5697 31.1852 34.9347 31.0602C37.2397 30.1302 48.8197 25.6952 48.8197 11.8802L48.7297 9.47018L15.2397 9.43018L15.1797 11.9652C15.1797 25.3602 26.7197 30.0902 29.0197 31.0202C29.3947 31.1752 29.6297 31.4302 29.6297 31.8852C29.6297 32.3402 29.4347 32.5802 29.0647 32.7052C26.7597 33.6352 15.1797 38.0702 15.1797 51.8852C15.2083 52.6443 15.4849 53.3731 15.9671 53.96C16.4493 54.547 17.1106 54.9597 17.8497 55.1352C20.3697 55.7302 25.0397 56.4202 33.1147 56.4202C40.0697 56.4202 43.9647 55.9152 46.1297 55.4052C47.6697 55.0402 48.7747 53.6852 48.8097 52.1052L48.8147 51.8002C48.8197 38.4052 37.2847 33.6752 34.9797 32.7452Z" fill="#81D4FA" />
                                                    <path opacity="0.39" d="M48.7305 9.46969L15.2405 9.42969L15.1855 11.6897C15.1855 11.6897 18.8105 13.5497 32.0005 13.5497C45.1905 13.5497 48.8155 11.6897 48.8155 11.6897L48.7305 9.46969Z" fill="#1D44B3" />
                                                    <path d="M11.6797 8.96865V5.03365C15.2697 4.55365 47.1347 5.03365 52.3197 5.03365V8.96865C52.3197 10.6486 43.2197 12.0086 31.9997 12.0086C20.7797 12.0086 11.6797 10.6486 11.6797 8.96865Z" fill="#8B5738" />
                                                    <path d="M31.9997 8.08C43.2221 8.08 52.3197 6.71895 52.3197 5.04C52.3197 3.36105 43.2221 2 31.9997 2C20.7773 2 11.6797 3.36105 11.6797 5.04C11.6797 6.71895 20.7773 8.08 31.9997 8.08Z" fill="#CC8552" />
                                                    <path d="M45.2951 54.2831C45.7551 54.1481 46.0051 53.6281 45.7801 53.2031C44.2101 50.2331 37.5101 50.1481 34.9751 44.5681C33.2851 40.8431 33.1901 35.6631 33.1401 33.4481C33.0701 30.4531 34.5651 29.8081 34.5651 29.8081C41.6451 26.9581 46.8501 20.3781 47.1501 14.5031C47.1801 13.9181 36.0601 19.0881 32.2351 19.8331C25.1651 21.2131 18.1201 19.3981 18.0801 19.6481C20.7001 25.3831 25.9751 28.3781 29.5101 29.8081C30.3501 30.1531 31.7401 31.4581 31.6951 35.3781C31.6601 38.1831 31.3101 45.5781 26.4751 48.7231C24.6551 49.9081 20.6301 51.6431 19.8801 53.5281C19.7151 53.9431 19.9501 54.4131 20.3851 54.5231C21.7651 54.8731 25.9751 55.4881 32.5201 55.4881C37.6651 55.4931 42.7451 55.0231 45.2951 54.2831Z" fill="#FFCA28" />
                                                    <path d="M21.1841 21.6443C23.8641 23.0293 29.7441 25.0043 32.6441 24.0043C35.5441 23.0043 46.7591 15.9993 47.1441 14.5043C47.6241 12.6543 34.1441 17.3593 29.3991 18.4593C26.1841 19.2043 20.0441 18.8193 18.6641 19.1093C17.2891 19.3943 18.7191 20.3693 21.1841 21.6443Z" fill="#E2A610" />
                                                    <path opacity="0.6" d="M22.8958 18.8304C23.5258 20.3004 24.6758 23.6354 23.1758 24.2054C21.6758 24.7804 19.4808 22.6504 18.4408 20.5104C17.4008 18.3704 17.4958 15.5304 19.0658 15.4854C20.6358 15.4404 22.0608 16.8854 22.8958 18.8304ZM21.4508 40.3004C19.8858 42.1304 18.7108 44.5904 19.1558 46.9654C19.6258 49.4704 21.9558 48.7804 22.7658 48.1454C25.3458 46.1204 24.6408 43.5254 26.6358 40.6104C26.9758 40.1104 28.3958 38.5454 28.1958 37.5604C28.0758 36.9754 26.7158 36.6754 24.2408 37.9154C23.1508 38.4654 22.2558 39.3654 21.4508 40.3004Z" fill="white" />
                                                </svg>
                                                <div>
                                                    <p className="mb-1">{t("orders.reviewing")}</p>
                                                    <small>
                                                        {t("orders.todayDate", { date: "20 3 2025" })}
                                                    </small>
                                                </div>
                                            </div>
                                            <Link
                                                to="/request-details"
                                                className="btn btn-link text-primary text-decoration-none"
                                            >
                                                {t("orders.view")}
                                            </Link>
                                        </div>

                                        {/* الطلب الثالث */}
                                        <div className="list-group-item d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center list-status-item gap-2">
                                                <svg
                                                    width="48"
                                                    height="48"
                                                    viewBox="0 0 64 64"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M5.33398 32L12.0007 25.3333L25.334 38.6667L52.0007 12L58.6673 18.6667L25.334 52L5.33398 32Z"
                                                        fill="#82CE3F"
                                                        stroke="#82CE3F"
                                                        strokeWidth="5.33333"
                                                        stroke-linecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div>
                                                    <p className="mb-1">{t("orders.accepted")}</p>
                                                    <small>
                                                        {t("orders.todayDate", { date: "20 3 2025" })}
                                                    </small>
                                                </div>
                                            </div>
                                            <Link
                                                to="/request-details"
                                                className="btn btn-link text-primary text-decoration-none"
                                            >
                                                {t("orders.view")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </section>
    );
}


