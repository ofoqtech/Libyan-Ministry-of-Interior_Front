import { useParams } from "react-router-dom";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from 'axios';

import { toast } from "react-toastify";  // استيراد الـ toast
import { ToastContainer } from "react-toastify";

export function CriminalReportsPage() {
    const { t } = useTranslation("global");

    return <>

        <GlobalContainer text={t('Criminal-Reports.eServices')}
            header={t('Criminal-Reports.header')} />
        <CriminalReports />
    </>
}


function CriminalReports() {
    const { t } = useTranslation("global");
    const { type1, type2 } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        gender: "male",
        city: "",
        phone: "",
        email: "",
        iden_img: null,
        subject: "",
        description: "",
        file: null,
    });

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: files ? files[0] : value,
        }));
    };

 
const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("main_cat", type1);
    payload.append("side_cat", type2);
    payload.append("name", formData.name);
    payload.append("gender", formData.gender);
    payload.append("city", formData.city);
    payload.append("phone", formData.phone);
    payload.append("email", formData.email);
    payload.append("iden_img", formData.iden_img);  
    payload.append("iden_img", formData.image);
    payload.append("subject", formData.subject);
    payload.append("description", formData.description);
    payload.append("file", formData.file);

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/services/ask_serv`,
            payload,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
        );

        const result = response.data;
        console.log("Response:", result);

        if (result.status === "success") {
            toast.success(t("Criminal-Reports.submissionSuccess"), {
                onClose: () => {
                    window.location.reload(); 
                },
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
            <ToastContainer />
            <div className="container py-5">
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
                                    placeholder={t("Criminal-Reports.fullName")}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="upload" className="form-label">
                                {t("Criminal-Reports.uploadImage")}
                            </label>
                            <input type="file" className="form-control" id="iden_img" onChange={handleChange} />
                        </div>
                        <div className="col-md-12 mb-3">
                            <label htmlFor="upload" className="form-label">
                                {t("Criminal-Reports.uploadFile")}
                            </label>
                            <input type="file" className="form-control" id="file" onChange={handleChange} />
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">
                                    {t("Criminal-Reports.city")}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    placeholder={t("Criminal-Reports.city")}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">
                                    {t("Criminal-Reports.reportTitle")}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    placeholder={t("Criminal-Reports.reportTitle")}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="reportType" className="form-label">
                                    {t("Criminal-Reports.reportType")}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="reportType"
                                    placeholder={t("Criminal-Reports.reportType")}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label htmlFor="reportLink" className="form-label">
                                    {t("Criminal-Reports.reportLink")}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="reportLink"
                                    placeholder={t("Criminal-Reports.reportLink")}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label htmlFor="reportSubject" className="form-label">
                                    {t("Criminal-Reports.reportSubject")}
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    placeholder={t("Criminal-Reports.reportSubject")}
                                    cols="30"
                                    rows={10}
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
        </section>
    );
}


