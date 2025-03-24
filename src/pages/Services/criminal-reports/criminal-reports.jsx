import { GlobalContainer } from "../../../components/globalComponent/globalComponent";

export function CriminalReportsPage() {
    return <>

        <GlobalContainer text='رقيب' header='الرئيسية  - الخدمات - رقيب' />
        <CriminalReports />
    </>
}
function CriminalReports() {
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
                                            الاسم الثلاثي
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="الاسم الثلاثي"
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
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="upload" className="form-label">
                                        رفع الصورة
                                    </label>
                                    <input type="file" className="form-control" id="upload" />
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">
                                            عنوان البلاغ
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder="عنوان البلاغ"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">
                                            نوع البلاغ
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder="نوع البلاغ"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">
                                            رابط البلاغ
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder="رابط البلاغ"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">
                                            موضوع البلاغ
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="subject"
                                            placeholder="موضوع البلاغ "
                                            cols="30"
                                            rows={10}
                                        />

                                    </div>
                                </div>
                            </div>



                            <div className="text-center">
                                <button type="submit" className="btn btn-primary px-5"                                 style={{
                                    width: "200px",
                                    maxWidth: "100%",
                                    borderWidth: "1px",
                                    borderColor: "#003F9C",
                                    backgroundColor: "#003F9C" ,
                                }}>
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

