import { useTranslation } from "react-i18next";
import { GlobalContainer } from "../../components/globalComponent/globalComponent"

export function ContactUs() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <GlobalContainer 
        text={t('contactUs.contactUsText')} 
        header={t('contactUs.contactUsHeader')} 
      />
      <ContactDetails t={t} />
    </>
  );
}

function ContactDetails({ t }) {
  return (
    <section className="contact-details">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      {t('contactUs.name')}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={t('contactUs.namePlaceholder')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      {t('contactUs.phone')}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder={t('contactUs.phonePlaceholder')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      {t('contactUs.email')}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder={t('contactUs.emailPlaceholder')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      {t('contactUs.subject')}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder={t('contactUs.subjectPlaceholder')}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  {t('contactUs.message')}
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder={t('contactUs.messagePlaceholder')}
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5">
                  {t('contactUs.submitButton')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


