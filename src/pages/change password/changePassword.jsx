import { useState, useEffect } from "react";
import styles from "./ChangePassword.module.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {
    const [t, i18n] = useTranslation("global");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmationPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
      e.preventDefault();
  
      // تحقق من تطابق كلمة المرور مع تأكيد كلمة المرور
      if (password !== confirmpassword) {
          toast.error(t("passwordMatch"), { autoClose: 2000 });
          return;
      }
  
      try {
          const response = await axios.post(
              `${process.env.REACT_APP_API_URL}/medias/reset_password`,
              { email, password }, 
              {
                  headers: {
                      "Content-Type": "application/json",
                  },
              }
          );
  
          if (response.status === 200) {
              toast.success(t("change1"), {
                  autoClose: 2000,
                  onClose: () => navigate("/login"),
              });
          } else {
              toast.error(t("change2"), { autoClose: 5000 });
          }
      } catch (error) {
          console.error("Reset password error:", error);
          toast.error(
              error.response?.data?.message || t("change2"),
              { autoClose: 5000 }
          );
      }
  };
  


   

    return (
        <section className={`mt-5 pt-5 ${styles.LoginPage}`}>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 p-3">
                        <h2>{t("login.welcomeBack")}</h2>
                        <h6 className="text-secondary mt-3">{t("change4")}</h6>
                        <div className="p-2 mt-3">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <label className="form-label d-flex justify-content-start text-secondary">
                                        {t("login.email")}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={t("login.emailPlaceholder")}
                                        value={email}
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label d-flex justify-content-start text-secondary">
                                        {t("login.password")}
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder={t("login.passwordPlaceholder")}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label d-flex justify-content-start text-secondary">
                                        {t("login.password2")}
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder={t("login.password2")}
                                        value={confirmpassword}
                                        onChange={(e) => setConfirmationPassword(e.target.value)}
                                    />
                                </div>
            
                                <button type="submit" className={`btn my-2 w-100 ${styles.gradientBtn}`}>
                                    {t("send")}
                                </button>

                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChangePassword;
