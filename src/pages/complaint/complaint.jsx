import { useTranslation } from "react-i18next";
import { GlobalContainer } from "../../components/globalComponent/globalComponent";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export function ComplaintPage() {
  const { t } = useTranslation("global");

  return (
    <>
      <GlobalContainer 
        text={t("header.complaint")} 
        header={t("header.complaint2")} 
      />
      <Complaint t={t} />
    </>
  );
}

function Complaint({ t }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [message, setMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message || !photo1 || !photo2) {
      toast.error(t("developmentGoals.fillin"));
      return;
    }
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("subject", subject);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("photo1", photo1);
    formData.append("photo2", photo2);
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/complaints/add`,
        formData
      );
  
      if (response.status === 200) {
        toast.success(t("developmentGoals.submitted"), {
          autoClose: 2000,
          onClose: () => {
            window.location.reload();
          },
        });
        // Reset form
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setPhoto1(null);
        setPhoto2(null);
      } else {
       
        toast.error(response.data.message || t("developmentGoals.error"));
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
     
        toast.error(err.response.data.message || t("developmentGoals.error"));
      } else if (err.request) {
      
        toast.error(t("networkError"));
      } else {
      
        toast.error(t("developmentGoals.error"));
      }
    }
  };
  

  return (
    <section className="contact-details">
      <ToastContainer />  
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <form onSubmit={onSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    {t("contactUs.name")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("contactUs.namePlaceholder")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    {t("contactUs.email")}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("contactUs.emailPlaceholder")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="subject" className="form-label">
                    {t("contactUs.subject")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={t("contactUs.subjectPlaceholder")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="photo1" className="form-label">
                    {t("contactUs.PHOTO1")}
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="photo1"
                    accept="image/*"
                    onChange={(e) => setPhoto1(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="photo2" className="form-label">
                  {t("contactUs.PHOTO2")}
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="photo2"
                  accept="image/*"
                  onChange={(e) => setPhoto2(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  {t("contactUs.message")}
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contactUs.messagePlaceholder")}
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5">
                  {t("contactUs.submitButton")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
