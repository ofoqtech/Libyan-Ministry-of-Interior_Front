import { useTranslation } from "react-i18next";
import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import "./MinistryWords.css";
import { useState, useEffect } from "react";
import axios from "axios";

export function MinistryWords() {
  const [t] = useTranslation("global");

  return (
    <>
      <GlobalContainer
        t={t}
        text={t("ministryWordsPage.pageTitle")}
        header={t("ministryWordsPage.breadcrumb")}
      />
      <MainWords t={t} />
    </>
  );
}

function MainWords({ t }) {
  const { i18n } = useTranslation("global");
  const [ministryWord, setMinistryWord] = useState({});
  const [loading, setLoading] = useState(true);

  // Function to decode HTML entities like &rdquo;, &ldquo;, etc.
  const decodeHtmlEntities = (text) => {
    return text
      .replace(/&rdquo;/g, '"')  // Replacing &rdquo; with a double quote
      .replace(/&ldquo;/g, '"')  // Replacing &ldquo; with a double quote
      .replace(/&nbsp;/g, ' ')   // Replacing &nbsp; with a space
      .replace(/&amp;/g, '&')    // Replacing &amp; with an ampersand
      .replace(/&lt;/g, '<')     // Replacing &lt; with a less-than sign
      .replace(/&gt;/g, '>')     // Replacing &gt; with a greater-than sign
      .replace(/&quot;/g, '"');  // Replacing &quot; with a double quote
  };

  useEffect(() => {
    const getWord = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/app_settings/minister_word`,
          {
            headers: {
              "Content-Type": "application/json",
              'lang': i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setMinistryWord(response.data.result);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getWord();
  }, [i18n.language]);

  const ministerWord = ministryWord?.minister_word
    ? decodeHtmlEntities(
        ministryWord.minister_word
          .replace(/<p>/g, "")
          .replace(/<\/p>/g, "")
      )
        .split("\n")  // Split by new lines
        .filter((item) => item.trim() !== "")  // Filter out empty lines
        .map((item, index) => <p key={index}>{item.trim()}</p>)  // Display each line in <p> tag
    : null;

  return (
    <section className="my-5">
      <div className="container">
        {loading ? (
          // Skeleton loader while loading data
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
          <div>{ministerWord}</div>  // Display minister's message

        )}
      </div>
    </section>
  );
}
