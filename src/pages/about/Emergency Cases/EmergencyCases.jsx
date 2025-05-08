import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import MainTitle from "../../../components/MainTitle/MainTitle";
import "./EmergencyCases.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function EmergencyCases() {
  const { t } = useTranslation("global");

  return (
    <>
      <GlobalContainer
        text={t("emergency_cases.title")}
        header={t("emergency_cases.breadcrumb")}
      />
      <MainEmergencyCases t={t} />
    </>
  );
}

function MainEmergencyCases({ t }) {
  const { i18n } = useTranslation("global");
  const [emergencyCases, setEmergencyCases] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to decode HTML entities like &nbsp;, &rdquo;, &ldquo;, etc.
  const decodeHtmlEntities = (text) => {
    return text
      .replace(/&nbsp;/g, ' ')    // Replacing &nbsp; with a space
      .replace(/&rdquo;/g, '"')   // Replacing &rdquo; with a double quote
      .replace(/&ldquo;/g, '"')   // Replacing &ldquo; with a double quote
      .replace(/&amp;/g, '&')     // Replacing &amp; with an ampersand
      .replace(/&lt;/g, '<')      // Replacing &lt; with a less-than sign
      .replace(/&gt;/g, '>')      // Replacing &gt; with a greater-than sign
      .replace(/&quot;/g, '"');   // Replacing &quot; with a double quote
  };

  useEffect(() => {
    const getEmergencyCases = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/app_settings/emergency_situation`,
          {
            headers: {
              "Content-Type": "application/json",
              'lang': i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setEmergencyCases(response.data.result);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // hide skeleton
      }
    };

    getEmergencyCases();
  }, [i18n.language]);

  const em = emergencyCases?.emergency_situation
    ? decodeHtmlEntities(
        emergencyCases.emergency_situation
          .replace(/<p>/g, "") // Remove <p> tags
          .replace(/<\/p>/g, "") // Remove </p> tags
      )
        .split("\n") // Split by new lines
        .filter((item) => item.trim() !== "") // Filter out empty lines
        .map((item, index) => <p key={index}>{item.trim()}</p>) // Map each line to a <p> tag
    : null; // Return null if emergency_situation is undefined

  // inputs
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [disc, setDisc] = useState("");
  const [email, setEmail] = useState("");

  // make emergency
  const makeEmergency = async (e) => {
    e.preventDefault();
    if (!name || !email || !sub || !disc) {
      toast.error(t('developmentGoals.fillin'));
      return;
    }
    const payload = {
      name,
      email,
      subject: sub,
      description: disc,
    };
    console.log(payload);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/emergencies/make_emerg`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.log(JSON.stringify(response.data));
        toast.success(t('developmentGoals.submitted'));
        // reset form
        setName("");
        setSub("");
        setDisc("");
        setEmail("");
      }
    } catch (err) {
      console.log(err);
      toast.error("Faild to submit");
    }
  };

  return (
    <section className="mainEmergencyCases my-5">
      <div className="container">
        {loading ? (
          // Skeleton
          <div className="row justify-content-center my-3">
            <div className="col-lg-12">
              <div className="skeleton-wrapper">
                <div className="skeleton-image mb-3"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text short mb-2"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {em}
          </>
        )}

        <div className="my-5">
          <MainTitle title={t("emergency_cases.send_request")} />
          <div className="row">
            <form onSubmit={makeEmergency}>
              <div className="col-lg-12">
                <label htmlFor="name">{t("emergency_cases.form.name")}</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control mt-2"
                />
              </div>

              <div className="row my-2">
                <div className="col-lg-6">
                  <label htmlFor="email">
                    {t("emergency_cases.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control mt-2"
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="sub">
                    {t("emergency_cases.form.subject")}
                  </label>
                  <input
                    type="text"
                    id="sub"
                    name="sub"
                    value={sub}
                    onChange={(e) => setSub(e.target.value)}
                    className="form-control mt-2"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor="disc">
                    {t("emergency_cases.form.description")}
                  </label>
                  <textarea
                    id="disc"
                    name="disc"
                    value={disc}
                    className="form-control mt-2"
                    onChange={(e) => setDisc(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center my-4 gap-2">
                <button type="submit" className="btn btn-send me-3">
                  {t("emergency_cases.form.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
