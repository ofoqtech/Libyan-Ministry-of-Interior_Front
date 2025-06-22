import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import { useTranslation } from 'react-i18next';
import './FAQ.css';
import React, { useState ,useEffect} from 'react';
import axios from 'axios';

export default function FAQ() {
  const { t } = useTranslation("global");
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <GlobalContainer text={t('page.faq.title')} header={t('page.faq.header')} />
      <MainFAQ />
    </>
  );
}

function MainFAQ() {
  const baseURL = process.env.REACT_APP_API_URL;
  const { t, i18n } = useTranslation("global");
  const [faqs,setFaqs] = useState([]);
  const [loading,setLoading] = useState(true);
  // get faqs 
  useEffect(() => {
    const getFaqs = async () => {
      try {
        const response = await axios.get(`${baseURL}/faqs/all_faqs?isMobile=false`, {
          headers:{
            'Content-Type': 'application/json',
            'lang' : i18n.language,
          }
        });
        if(response.status === 200) {
          setFaqs(response.data.result);
          console.log(response.data.result);
        }
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false);
      }
    }
    getFaqs();
  }, [baseURL, i18n.language]);
  return (
    <section className="my-5">
      <div className="container">
        <h4 className="mb-4 ">{t('faq.section.title')}</h4>
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
        ):(
          <div className="accordion" id="accordionExample">
          {faqs?.map((faq, index) => (
            <div key={index} className="accordion-item border mb-3">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button faq-accordion-btn ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0}
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {faq.answer}
                  {faq.list && (
                    <ul>
                      {faq.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
