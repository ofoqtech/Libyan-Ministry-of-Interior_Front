import { useTranslation } from "react-i18next";
import { GlobalContainer } from "../../components/globalComponent/globalComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

export function ContactUs() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t("contactUs.contactUsText")}
        header={t("contactUs.contactUsHeader")}
      />
      <ContactDetails t={t} i18n={i18n} />
    </>
  );
}

function ContactDetails({ t, i18n }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("form.required")),
      phone: Yup.string().required(t("form.required")),
      email: Yup.string().email(t("form.invalidEmail")).required(t("form.required")),
      subject: Yup.string().required(t("form.required")),
      message: Yup.string().required(t("form.required")),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/contact/contact_us`, {
          name: values.name,
          phone: values.phone,
          email: values.email,
          title: values.subject,
          message: values.message,
          lang: i18n.language,
        });
        toast.success(t("form.success"));
        resetForm();
      } catch (error) {
        toast.error(t("form.error"));
      }
    }
    
  });

  return (
    <section className="contact-details">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">{t("contactUs.name")}</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder={t("contactUs.namePlaceholder")}
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-danger">{formik.errors.name}</div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">{t("contactUs.phone")}</label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    placeholder={t("contactUs.phonePlaceholder")}
                    {...formik.getFieldProps("phone")}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="text-danger">{formik.errors.phone}</div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">{t("contactUs.email")}</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder={t("contactUs.emailPlaceholder")}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="subject" className="form-label">{t("contactUs.subject")}</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder={t("contactUs.subjectPlaceholder")}
                    {...formik.getFieldProps("subject")}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <div className="text-danger">{formik.errors.subject}</div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">{t("contactUs.message")}</label>
                <textarea
                  id="message"
                  rows="4"
                  className="form-control"
                  placeholder={t("contactUs.messagePlaceholder")}
                  {...formik.getFieldProps("message")}
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="text-danger">{formik.errors.message}</div>
                )}
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
