import { useTranslation } from "react-i18next";
import { GlobalContainer } from "../../components/globalComponent/globalComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function ContactUs() {
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
      window.scrollTo(0, 0);
    }
    , []);
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
  const { id } = useParams();
  const [governments, setGovernments] = useState([]);
  useEffect(() => {
    fetchGovernments();
  }, [i18n.language]);

  const fetchGovernments = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/governments/get_all?isMobile=false`, {
        headers: {
          'lang': i18n.language,
        },
      });
      setGovernments(response.data?.result || []);
    } catch (error) {
      toast.error(error?.response?.data?.message || t("noData") || "Something went wrong");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      ...(id != null && { government_id: "" }), 
    },
    

    validationSchema: Yup.object({
      name: Yup.string().required(t("form.required")),
      phone: Yup.string().required(t("form.required")),
      email: Yup.string().email(t("form.invalidEmail")).required(t("form.required")),
      subject: Yup.string().required(t("form.required")),
      message: Yup.string().required(t("form.required")),
    }),
    onSubmit: async (values) => {
      try {
        const payload = {
          name: values.name,
          phone: values.phone,
          email: values.email,
          title: values.subject,
          message: values.message,
        };

        if (id != null && values.government_id) {
          payload.government_id = values.government_id;
        }
        

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/contact/contact_us?isMobile=false`, payload);

        if (response.status === 200) {
          toast.success(t("form.success"), {
            autoClose: 2000,
            onClose: () => {
              window.location.reload();
            },
          });
        } else {
          toast.error(response.data.message || t("form.error"));
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message || t("form.error"));
        } else if (error.request) {
          toast.error(t("networkError"));
        } else {
          toast.error(t("form.error"));
        }
      }
    },

  });

  return (
    <section className="contact-details">
      <ToastContainer />
      <div className="container py-5">
        {id != null && (
          <div className="mb-4 d-flex justify-content-between align-items-center">
            <select
              className="form-select w-auto"
              name="government_id"
              value={formik.values.government_id}
              onChange={formik.handleChange}
            >
              <option value="">{t("chooseDirectorates")}</option> {/* الاختيار الافتراضي */}
              {governments.map((gov) => (
                <option key={gov.id} value={gov.id}>
                  {gov.name}
                </option>
              ))}
            </select>

          </div>
        )}

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
