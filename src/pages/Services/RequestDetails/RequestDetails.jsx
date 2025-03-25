import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import MainTitle from "../../../components/MainTitle/MainTitle";
import { useTranslation } from "react-i18next";

export function RequestDetailsPage() {
    const { t } = useTranslation("global");

    return <>

        <GlobalContainer text={t('requestDetails.statusTitle')} 
                header={t('requestDetails.header')} />
        <RequestDetails />
    </>
}
function RequestDetails() {
    const { t } = useTranslation("global");

    return (
        <section className="contact-details">
            <div className="container py-5">
                <MainTitle title={t("requestDetails.statusTitle")} sizing="20px" />
                <div className="request-status">
                    <div className="d-flex align-items-center gap-2">
                        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.33398 32L12.0007 25.3333L25.334 38.6667L52.0007 12L58.6673 18.6667L25.334 52L5.33398 32Z" fill="#82CE3F" stroke="#82CE3F" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                            <p className="mb-1">{t("requestDetails.accepted")}</p>
                            <small>{t("requestDetails.date", { date: "20 3 2025" })}</small>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center my-5">
                        <div className="col-lg-6">
                            <div className="request-details border rounded p-3">
                                <img src="/assets/home_1.png" className="w-100" alt={t("requestDetails.imageAlt")} />
                            </div>
                        </div>
                        <p className="my-5">{t("requestDetails.description")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

