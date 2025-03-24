import { GlobalContainer } from "../../../components/globalComponent/globalComponent";
import MainTitle from "../../../components/MainTitle/MainTitle";

export function RequestDetailsPage() {
    return <>

        <GlobalContainer text='حاله الطلب' header='الرئيسية  - الخدمات الالكترونية - حاله الطلب' />
        <RequestDetails />
    </>
}
function RequestDetails() {
    return (
        <section className="contact-details">
            <div className="container py-5">
                <MainTitle title={'حاله الطلب'} sizing="20px" />
                <div className="request-status">
                    <div className="d-flex align-items-center gap-2">

                        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33398 32L12.0007 25.3333L25.334 38.6667L52.0007 12L58.6673 18.6667L25.334 52L5.33398 32Z" fill="#82CE3F" stroke="#82CE3F" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div>
                            <p className="mb-1">تم قبول الطلب</p>
                            <small>اليوم، 20 مارس 2025</small>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center my-5">
                        <div className="col-lg-6">
                            <div className="request-details border rounded  p-3">
                                <img src="/assets/home_1.png" className="w-100" alt="التصريح" />
                            </div>
                        </div>
                        <p className="my-5">وصف ...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

