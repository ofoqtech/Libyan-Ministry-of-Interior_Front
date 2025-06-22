import { useState, useEffect } from "react";
import styles from "./VertificationOtp.module.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const VertificationOtp = () => {
    const [t, i18n] = useTranslation("global");
    const [code, setCode] = useState("");
    const [timer, setTimer] = useState(60);
    const [resendAvailable, setResendAvailable] = useState(false);
    const navigate = useNavigate();
const email = localStorage.getItem("emailLibyan") || "";
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        } else {
            setResendAvailable(true);
        }
        return () => clearInterval(interval);
    }, [timer]);


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/medias/verify_code?isMobile=false`,
                { email, code },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
    
            if (response.status === 200) {
                toast.success(t("verificationOk"), {
                    autoClose: 2000,
                    onClose: () => navigate('/change-password'),
                });
            } else {
                toast.error(t("verificationFailed"), { autoClose: 5000 });
            }
        } catch (error) {
            toast.error(t("verificationFailed"), { autoClose: 5000 });
        }
    };
    
    const handleResend = async () => {
        if (!email) {
            toast.error(t("login.enterEmailFirst"));
            return;
        }
    
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/medias/resend_code?isMobile=false`,
                { email },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
    
            console.log("Resend response:", response.data);
    
            if (response.status === 200) {
                toast.success(t("codeResent"));
                setTimer(60);
                setResendAvailable(false);
            } else {
                toast.error(t("resendFailed"));
            }
        } catch (error) {
            console.error(error);
            toast.error(t("resendFailed"));
        }
    };

    return (
        <section className={`mt-5 pt-5 ${styles.LoginPage}`}>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 p-3">
                        <h2>{t("login.welcomeBack")}</h2>
                        <h6 className="text-secondary mt-3">{t("vertification2")}</h6>
                        <div className="p-2 mt-3">
                            <form onSubmit={handleSubmit}>
                         
                                <div className="mb-3">
                                    <label className="form-label d-flex justify-content-start text-secondary">
                                        {t("verificationCode")}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={t("verificationCode")}
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className={`btn w-100 ${styles.gradientBtn}`}>
                                    {t("sendCode")}
                                </button>

                                <div className="text-center mx-auto mt-3">
                                    {!resendAvailable ? (
                                        <span className="text-muted">{t("reSendCode")} ({timer})</span>
                                    ) : (
                                        <span
                                            className="text-primary"
                                            style={{ cursor: "pointer", textDecoration: "underline" }}
                                            onClick={handleResend}
                                        >
                                            {t('send')}
                                        </span>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VertificationOtp;
