import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import { useTranslation } from "react-i18next";


export function IDFORMPage() {
    const { t } = useTranslation("global");

    return <>

        <GlobalContainer text={t('identical.header')}
            header={t('identical.header2')} />
        <IDFORM />
    </>
}
function IDFORM() {
    const { t } = useTranslation("global");
    return (
        <section className="contact-details">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            {t("Criminal-Reports.fullName")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder={t("Criminal-Reports.fullName")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">
                                            {t("Criminal-Reports.phoneNumber")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            placeholder={t("Criminal-Reports.phoneNumber")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            {t("Criminal-Reports.email")}
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder={t("Criminal-Reports.email")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="upload" className="form-label">
                                        {t("Criminal-Reports.uploadImage")}
                                    </label>
                                    <input type="file" className="form-control" id="upload" />
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">
                                            {t("identical.header3")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder={t("identical.header3")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="reportType" className="form-label">
                                            {t("identical.header4")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="reportType"
                                            placeholder={t("identical.header4")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="reportLink" className="form-label">
                                            {t("identical.header5")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="reportLink"
                                            placeholder={t("identical.header5")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="reportLink" className="form-label">
                                            {t("identical.header6")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="reportLink"
                                            placeholder={t("identical.header6")}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="reportLink" className="form-label">
                                            {t("identical.header7")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="reportLink"
                                            placeholder={t("identical.header7")}
                                        />
                                    </div>
                                </div>

                               
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary px-5"
                                    style={{
                                        width: "200px",
                                        maxWidth: "100%",
                                        borderWidth: "1px",
                                        borderColor: "#003F9C",
                                        backgroundColor: "#003F9C",
                                    }}>
                                    {t("Criminal-Reports.submit")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}



