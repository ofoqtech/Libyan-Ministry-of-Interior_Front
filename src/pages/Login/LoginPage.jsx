import { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
    const { login } = useAuth();
    const [t, i18n] = useTranslation("global");
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/medias/login`, {
                email,
                password
            });
    
            const result = res?.data?.result;
            if (!result) {
                toast.error(t("login.error")); // أو رسالة مخصصة مثل "بيانات غير صالحة من السيرفر"
                return;
            }
    
            toast.success(t("login.success"), {
                autoClose: 2000,
                onClose: () => {
                    login(result); 
                    Navigate("/"); 
                },
            });
    
        } catch (error) {
            toast.error(
                error?.response?.data?.message || t("login.error") || "Network error"
            );
        }
    };
    
    return (
        <section className={`mt-1 ${styles.LoginPage}`}>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 p-3">
                        <h2>{t("login.welcomeBack")}</h2>
                        <h6 className="text-secondary mt-3">{t("login.enterDetails")}</h6>
                        <div className="p-2 mt-3">
                            <form onSubmit={handleLogin}>
                                <div className="mb-2">
                                    <label className="form-label d-flex justify-content-start text-secondary">
                                        {t("login.email")}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={t("login.emailPlaceholder")}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label d-flex justify-content-start text-secondary">
                                        {t("login.password")}
                                    </label>
                                    <div style={{ position: "relative" }}>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                            placeholder={t("login.passwordPlaceholder")}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <span
                                            onClick={togglePassword}
                                            className="eye-icon-new"
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "15px",
                                                transform: "translateY(-50%)",
                                                cursor: "pointer",
                                                color: "#6c757d",
                                            }}
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className={`btn w-100 ${styles.gradientBtn}`}
                                >
                                    {t("login.loginBtn")}
                                </button>
                            </form>
                            <div className="d-flex justify-content-between align-items-center mt-3 mb-1">
                                <Link to={'/forget-password'} className="my-3 d-block">نسيت كلمه المرور؟</Link>
                                <Link to={'/active-account'} className="my-3 text-black d-block">تفعيل حسابك</Link>
                            </div>

                            <div className="d-flex justify-content-center align-items-center mt-3 mb-1">
                                <span className={`ms-3 ${styles.account}`}>
                                    {t("login.noAccount")}
                                </span>
                                <Link to={'/createaccount'} className={`btn btn-outline-secondary me-3 ${styles.createSingin}`}>
                                    {t("login.registerNow")}
                                </Link>
                            </div>
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

export default LoginPage;
