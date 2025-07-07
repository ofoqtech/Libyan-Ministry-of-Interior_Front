import styles from "./ForgetPassword.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const ForgetPassword = () => {
    const { t } = useTranslation("global");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/medias/resend_code?isMobile=0`, {
                email: email
            });

            toast.success(t("forget.successMessage"), {
                duration: 2000,
                onClose: () => navigate("/vertification-otp"),
            });

        } catch (err) {
            toast.error(err.response?.data?.message || t("forget.errorMessage"));
        }
    };


    return (
        <section className={`mt-1 ${styles.LoginPage}`}>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 p-3">
                        <h2>{t("login.welcomeBack")}</h2>
                        <h6 className="text-secondary mt-3">{t("forget.header1")}</h6>
                        <div className="p-2 mt-3">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <label className="form-label d-flex justify-content-start text-secondary">
                                        {t("login.email")}
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder={t("login.emailPlaceholder")}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`btn my-3 w-100 ${styles.gradientBtn}`}
                                >
                                    {t("forget.header2")}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={`${styles.bgLogin} d-flex justify-content-center align-items-center`}>
                            <img
                                src="assets/logo.png"
                                alt="Logo"
                                className={styles.logologin}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgetPassword;
