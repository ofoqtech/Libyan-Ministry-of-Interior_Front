import { GlobalContainer } from "../../components/globalComponent/globalComponent"

export function ContactUs() {
  return <>

    <GlobalContainer text='تواصل معنا' header='الرئيسية  - تواصل معنا' />
    <ContactDetails />
  </>
}
function ContactDetails() {
  return (
    <section className="contact-details">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <form >
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      الاسم
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="الاسم"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      رقم الهاتف
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="رقم الهاتف"
                    />
                  </div>
                </div>
                <div className="col-md-6">

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      البريد الالكتروني
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="البريد الالكتروني"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      عنوان الموضوع
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="عنوان الموضوع"
                    />
                  </div>
                </div>
              </div>


              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  رسالتك
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="رسالتك"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5">
                  إرسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

