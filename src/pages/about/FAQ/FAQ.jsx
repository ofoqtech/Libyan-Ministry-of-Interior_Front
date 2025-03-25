import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import './FAQ.css';

import React from 'react'

export default function FAQ() {
  return <>
    <GlobalContainer text='الاسئلة الأكثر شيوعاً' header='الرئيسية - عن الوزارة -  الاسئلة الأكثر شيوعاً' />
    <MainFAQ />
  </>


}

function MainFAQ() {
  return (
    <section className="my-5">
      <div className="container">
        <h4 className="mb-4 text-end">الأسئلة الشائعة</h4>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item border mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                تقدم المتعامل على طلب تصريح زيارة نزيل منذ مدة ولم يتم الموافقة حتى الآن
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body ">
                يرجى تقديم شكوى على منصات وزارة الداخلية للتحقق من سبب تأخر إجراء اللازم عن طريق:
                <ul>
                  <li>التطبيق الذكي: اختر مساعدة، ثم قم باختيار الشكاوى</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item border mb-3">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed text-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                هل يمكن تعديل شهادة بحث الحالة الجنائية بعد صدورها؟
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body ">
                لا يمكن تعديل شهادة بحث الحالة الجنائية بعد صدورها، ولكن يمكن طلب إصدار شهادة جديدة.
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item border mb-3">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                ما هي المستندات المطلوبة لإصدار تصريح عمل؟
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body ">
                المستندات المطلوبة تشمل: صورة جواز السفر، صورة شخصية، عقد العمل، وأي مستندات إضافية تطلبها الجهة المعنية.
              </div>
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="accordion-item mb-3 border">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed text-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                كيف يمكنني تحديث بيانات الإقامة الخاصة بي؟
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body ">
                لتحديث بيانات الإقامة، يرجى زيارة الموقع الإلكتروني لهيئة الهوية والجنسية أو التطبيق الذكي الخاص بهم.
              </div>
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="accordion-item mb-3 border">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed text-end"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                هل يمكنني التقديم للحصول على تأشيرة زيارة متعددة الدخول؟
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body ">
                نعم، يمكنك التقديم للحصول على تأشيرة زيارة متعددة الدخول عن طريق الموقع الإلكتروني للهيئة الاتحادية للهوية والجنسية.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

