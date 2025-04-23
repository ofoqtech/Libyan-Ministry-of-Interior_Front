import { useState } from "react";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";


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
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        reportType: '',
        reportLink: '',
        iden_img: null,
        army_rank: '',
        army_number: '',
        side: '',
        bod: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = new FormData();
        payload.append("name", formData.name);
        payload.append("city", formData.city);
        payload.append("phone", formData.phone);
        payload.append("email", formData.email);
        payload.append("iden_img", formData.iden_img);
        payload.append("army_rank", formData.army_rank);
        payload.append("army_number", formData.army_number);
        payload.append("side", formData.side);
        payload.append("bod", formData.bod);

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/indentity_cards/make_card`, {
                method: "POST",
                body: payload,
            });

            const result = await response.json();
            console.log("Response:", result);  // طباعة الريسبونس في الـ console

            if (result.status === "success") {
                toast.success(t("Criminal-Reports.submissionSuccess"), {
                    autoClose: 2000,
                });
            } else {
                toast.error(t("Criminal-Reports.submissionError"), {
                    autoClose: 2000,
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(t("Criminal-Reports.submissionError"), {
                autoClose: 2000,
            });
        }
    };

    return (
        <section className="contact-details">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
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
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
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
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
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
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t("Criminal-Reports.email")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="iden_img" className="form-label">
                                        {t("Criminal-Reports.uploadImage")}
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="iden_img"
                                        name="iden_img"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="city" className="form-label">
                                            {t("identical.header3")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder={t("identical.header3")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="army_rank" className="form-label">
                                            {t("identical.header4")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="army_rank"
                                            name="army_rank"
                                            value={formData.army_rank}
                                            onChange={handleChange}
                                            placeholder={t("identical.header4")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="army_number" className="form-label">
                                            {t("identical.header5")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="army_number"
                                            name="army_number"
                                            value={formData.army_number}
                                            onChange={handleChange}
                                            placeholder={t("identical.header5")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="side" className="form-label">
                                            {t("identical.header6")}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="side"
                                            name="side"
                                            value={formData.side}
                                            onChange={handleChange}
                                            placeholder={t("identical.header6")}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="bod" className="form-label">
                                            {t("identical.header7")}
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="bod"
                                            name="bod"
                                            value={formData.bod}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary px-5"
                                    style={{
                                        width: "200px",
                                        maxWidth: "100%",
                                        borderWidth: "1px",
                                        borderColor: "#003F9C",
                                        backgroundColor: "#003F9C",
                                    }}
                                >
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





