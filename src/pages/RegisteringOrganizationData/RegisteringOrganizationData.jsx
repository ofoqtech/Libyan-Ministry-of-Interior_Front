import React, { useEffect, useState } from "react";
import styles from "./RegisteringOrganizationData.module.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";


const RegisteringOrganizationData = () => {
    const { t, i18n } = useTranslation("global");
    const [mediaTypes, setMediaTypes] = useState([]);
    const navigate = useNavigate();
    const [confirmpassword, setConfirmationPassword] = useState("");

    useEffect(() => {
        const fetchMediaTypes = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/medias/media_types`, {
                    headers: {
                        lang: i18n.language,
                    },
                });
                const data = await response.json();
                if (data.status === "success") {
                    setMediaTypes(data.result);
                }
            } catch (err) {
                console.error("Error fetching media types:", err);
            }
        };

        fetchMediaTypes();
    }, [i18n.language]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const password = form.password.value;
  // تحقق من تطابق كلمة المرور مع تأكيد كلمة المرور
        if (password !== confirmpassword) {
            toast.error(t("passwordMatch"), { autoClose: 2000 });
            return;
        }
        if (password.length < 8) {
            toast.error(t("mediaRegistration.passwordMinLength"));
            return;
        }
        const formData = new FormData();
        formData.append("name", form.name.value);

        formData.append("email", form.email.value);
        formData.append("phone", form.phone.value);
        formData.append("national_id", form.Identity.value);
        formData.append("password", form.password.value); // تعديل حسب المطلوب
        formData.append("nationality", form.Nationality.value);
        formData.append("prof_img", form.prof_img.files[0]);
        formData.append("type", "org"); 

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/medias/media_regist`, {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            console.log(data);

            if (data.status === "success") {
                toast.success(t("Criminal-Reports.submissionSuccess"), {
                    autoClose: 2000,
                    onClose: () => {
                        navigate("/vertification");
                    },
                });

            } else {
                toast.error(data.message || t("Criminal-Reports.submissionError"));
            }
        } catch (err) {
            console.error("Submit error:", err);
            toast.error(t("Criminal-Reports.submissionError"));
        }
    };

    return (
        <div className={styles.mediaReg__wrapper}>
            <nav>
                <div className="container-fluid">
                    <div className={styles.mediaReg__navbar}>
                        <img src="/assets/logo.png" alt="Logo" />
                    </div>
                </div>
            </nav>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="container">
                    <div className="text-center fw-bold my-3">
                        <h4>{t("mediaRegistration.title")}</h4>
                    </div>

                    <div className={styles.mediaReg__card}>
                        <div className="row">
                            <h4>{t("mediaRegistration.basicInfo")}</h4>

                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <label className="my-1 d-block">{t("mediaRegistration.profileImage")}</label>
                                <div className="d-flex parent-btns2 align-items-center gap-2">
                                    <div className={styles["custom-file-input"]}>
                                        <input type="file" id="prof_img" name="prof_img" />
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <label htmlFor="name">{t("mediaRegistration.orgName")}</label>
                                <input required type="text" className="form-control mt-2" id="name" name="name" placeholder={t("mediaRegistration.namePlaceholder")} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="phone">{t("mediaRegistration.phone")}</label>
                                <input required type="text" className="form-control mt-2" id="phone" name="phone" placeholder={t("mediaRegistration.phonePlaceholder")} />
                            </div>

                            <div className="col-md-4 mt-3 mb-2">
                                <label htmlFor="email">{t("mediaRegistration.email")}</label>
                                <input required type="email" className="form-control mt-2" id="email" name="email" placeholder={t("mediaRegistration.emailPlaceholder")} />
                            </div>
                            <div className="col-md-4 mt-3 mb-2">
                                <label htmlFor="password">{t("mediaRegistration.password")}</label>
                                <input required type="password" className="form-control mt-2" id="password" name="password" placeholder={t("mediaRegistration.password")} />
                            </div>
                            <div className="col-md-4 mt-3 mb-2">
                                <label htmlFor="confirmpassword">{t("login.password2")}</label>
                                <input required type="password" className="form-control mt-2" id="confirmpassword" name="confirmpassword" onChange={(e) => setConfirmationPassword(e.target.value)} placeholder={t("login.password2")} />
                            </div>
                            <div className="col-md-4 mt-3 mb-2">
                                <label htmlFor="Identity">{t("mediaRegistration.idNumber")}</label>
                                <input required type="text" className="form-control mt-2" id="Identity" name="Identity" placeholder={t("mediaRegistration.idPlaceholder")} />
                            </div>

                            <div className="col-md-4 mt-3 mb-2 position-relative">
                                <label htmlFor="Nationality">{t("mediaRegistration.nationality")}</label>
                                <select  required className={`form-control mt-2 ${styles.selectWithArrow}`} id="Nationality" name="Nationality" defaultValue="">
                                    <option value="" disabled>{t("mediaRegistration.selectNationality")}</option>
                                    <option value="مصرى">{t("mediaRegistration.nationalities.egyptian")}</option>
                                    <option value="سعودى">{t("mediaRegistration.nationalities.saudi")}</option>
                                    <option value="أردنى">{t("mediaRegistration.nationalities.jordanian")}</option>
                                    <option value="سورى">{t("mediaRegistration.nationalities.syrian")}</option>
                                    <option value="فلسطينى">{t("mediaRegistration.nationalities.palestinian")}</option>
                                    <option value="سودانى">{t("mediaRegistration.nationalities.sudanese")}</option>
                                    <option value="مغربى">{t("mediaRegistration.nationalities.moroccan")}</option>
                                    <option value="آخر">{t("mediaRegistration.nationalities.other")}</option>
                                </select>
                            </div>

                           

                            <div className="col-md-4 mt-3 mb-2">
                                <label htmlFor="mediaType">{t("mediaRegistration.orgType")}</label>
                                <select required className="form-control mt-2" id="mediaType" name="mediaType" defaultValue="">
                                    <option value="" disabled>{t("mediaRegistration.orgType")}</option>
                                    {mediaTypes.map((type) => (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center flex-wrap mt-3 mb-5">
                        <button type="button" className={`btn border mb-2 me-3 ${styles.btnclos}`} style={{ borderRadius: '10px' }}>
                            {t("mediaRegistration.cancel")}
                        </button>
                        <button type="submit" className={`btn px-5 me-3 ${styles["bg-btn"]}`} style={{ fontSize: "14px" }}>
                            {t("mediaRegistration.createAccount")}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default RegisteringOrganizationData;
