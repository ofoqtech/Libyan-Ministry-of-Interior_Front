import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import { useTranslation } from 'react-i18next';
import './FAQ.css';
import React from 'react';

export default function FAQ() {
  const { t } = useTranslation("global");

  return (
    <>
      <GlobalContainer text={t('page.faq.title')} header={t('page.faq.header')} />
      <MainFAQ />
    </>
  );
}

function MainFAQ() {
  const { t } = useTranslation("global");

  const faqs = [
    {
      question: t('faq.item1.question'),
      answer: t('faq.item1.answer'),
      list: [t('faq.item1.list1')],
    },
    {
      question: t('faq.item2.question'),
      answer: t('faq.item2.answer'),
    },
    {
      question: t('faq.item3.question'),
      answer: t('faq.item3.answer'),
    },
    {
      question: t('faq.item4.question'),
      answer: t('faq.item4.answer'),
    },
    {
      question: t('faq.item5.question'),
      answer: t('faq.item5.answer'),
    },
  ];

  return (
    <section className="my-5">
      <div className="container">
        <h4 className="mb-4 ">{t('faq.section.title')}</h4>
        <div className="accordion" id="accordionExample">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item border mb-3">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
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
      </div>
    </section>
  );
}
