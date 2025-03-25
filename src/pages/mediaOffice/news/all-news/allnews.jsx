 import { Link } from 'react-router-dom'
import { GlobalContainer } from '../../../../components/globalComponent/globalComponent'
import './allnews.css'
 import React from 'react'
 
 export default function Allnews() {
   return<>
        <GlobalContainer text='الأخبار الرئيسية' header='الرئيسية - المكتب الاعلامي - الأخبار الرئيسية' />
            <MainAllnews/>
   </>
   
 }
 
 function MainAllnews (){
  
    return <section className=' MainAllnews my-5'>
    <div className="container">
        <div className="row my-3">
            <div className="col-lg-4">
                <img style={{ maxWidth: "100%" }} src="/assets/Container.png " className='mb-3' width="100%" alt="" />
            </div>
            <div className="col-lg-8">
                <h5>وزير الداخلية يُقرر دمج عدد من مديريات الأمن التابعة للحكومة الليبية</h5>
                <p className='desicionstitle mt-2'>قدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس، اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس جهاز البحث الجنائي اللواء “أحمد الشامخ”، ورئيس جهاز مكافحة الهجرة غير شرعية، اللواء “صلاح الخفيفي”، مع مدير الأمن، اللواء “وهبي الرخ”، ومدراء الفروع والإدارات الأمنية، إضافة إلى رؤساء المراكز والأقسام التابعة للمديرية. وأكد معاليه خلال الاجتماع .....</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>
                    <Link to={'/mediaOffice/newsdetails'} className='type'>اكمل القراءة.....</Link>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-lg-4">
                <img style={{ maxWidth: "100%" }} src="/assets/Container.png " className='mb-3' width="100%" alt="" />
            </div>
            <div className="col-lg-8">
                <h5>وزير الداخلية يُقرر دمج عدد من مديريات الأمن التابعة للحكومة الليبية</h5>
                <p className='desicionstitle mt-2'>قدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس، اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس جهاز البحث الجنائي اللواء “أحمد الشامخ”، ورئيس جهاز مكافحة الهجرة غير شرعية، اللواء “صلاح الخفيفي”، مع مدير الأمن، اللواء “وهبي الرخ”، ومدراء الفروع والإدارات الأمنية، إضافة إلى رؤساء المراكز والأقسام التابعة للمديرية. وأكد معاليه خلال الاجتماع .....</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>
                    <Link to={'/mediaOffice/newsdetails'} className='type'>اكمل القراءة.....</Link>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-lg-4">
                <img style={{ maxWidth: "100%" }} src="/assets/Container.png " className='mb-3' width="100%" alt="" />
            </div>
            <div className="col-lg-8">
                <h5>وزير الداخلية يُقرر دمج عدد من مديريات الأمن التابعة للحكومة الليبية</h5>
                <p className='desicionstitle mt-2'>قدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس، اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس جهاز البحث الجنائي اللواء “أحمد الشامخ”، ورئيس جهاز مكافحة الهجرة غير شرعية، اللواء “صلاح الخفيفي”، مع مدير الأمن، اللواء “وهبي الرخ”، ومدراء الفروع والإدارات الأمنية، إضافة إلى رؤساء المراكز والأقسام التابعة للمديرية. وأكد معاليه خلال الاجتماع .....</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>
                    <Link to={'/mediaOffice/newsdetails'} className='type'>اكمل القراءة.....</Link>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-lg-4">
                <img style={{ maxWidth: "100%" }} src="/assets/Container.png " className='mb-3' width="100%" alt="" />
            </div>
            <div className="col-lg-8">
                <h5>وزير الداخلية يُقرر دمج عدد من مديريات الأمن التابعة للحكومة الليبية</h5>
                <p className='desicionstitle mt-2'>قدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس، اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس جهاز البحث الجنائي اللواء “أحمد الشامخ”، ورئيس جهاز مكافحة الهجرة غير شرعية، اللواء “صلاح الخفيفي”، مع مدير الأمن، اللواء “وهبي الرخ”، ومدراء الفروع والإدارات الأمنية، إضافة إلى رؤساء المراكز والأقسام التابعة للمديرية. وأكد معاليه خلال الاجتماع .....</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>
                    <Link to={'/mediaOffice/newsdetails'} className='type'>اكمل القراءة.....</Link>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-lg-4">
                <img style={{ maxWidth: "100%" }} src="/assets/Container.png " className='mb-3' width="100%" alt="" />
            </div>
            <div className="col-lg-8">
                <h5>وزير الداخلية يُقرر دمج عدد من مديريات الأمن التابعة للحكومة الليبية</h5>
                <p className='desicionstitle mt-2'>قدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس، اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس جهاز البحث الجنائي اللواء “أحمد الشامخ”، ورئيس جهاز مكافحة الهجرة غير شرعية، اللواء “صلاح الخفيفي”، مع مدير الأمن، اللواء “وهبي الرخ”، ومدراء الفروع والإدارات الأمنية، إضافة إلى رؤساء المراكز والأقسام التابعة للمديرية. وأكد معاليه خلال الاجتماع .....</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>
                    <Link to={'/mediaOffice/newsdetails'} className='type'>اكمل القراءة.....</Link>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-lg-4">
                <img style={{ maxWidth: "100%" }} src="/assets/Container.png " className='mb-3' width="100%" alt="" />
            </div>
            <div className="col-lg-8">
                <h5>وزير الداخلية يُقرر دمج عدد من مديريات الأمن التابعة للحكومة الليبية</h5>
                <p className='desicionstitle mt-2'>قدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس، اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس جهاز البحث الجنائي اللواء “أحمد الشامخ”، ورئيس جهاز مكافحة الهجرة غير شرعية، اللواء “صلاح الخفيفي”، مع مدير الأمن، اللواء “وهبي الرخ”، ومدراء الفروع والإدارات الأمنية، إضافة إلى رؤساء المراكز والأقسام التابعة للمديرية. وأكد معاليه خلال الاجتماع .....</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>
                    <Link to={'/mediaOffice/newsdetails'} className='type'>اكمل القراءة.....</Link>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-lg-4">
                <img style={{ maxWidth: "100%" }} src="/assets/Container.png " className='mb-3' width="100%" alt="" />
            </div>
            <div className="col-lg-8">
                <h5>وزير الداخلية يُقرر دمج عدد من مديريات الأمن التابعة للحكومة الليبية</h5>
                <p className='desicionstitle mt-2'>قدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس، اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس جهاز البحث الجنائي اللواء “أحمد الشامخ”، ورئيس جهاز مكافحة الهجرة غير شرعية، اللواء “صلاح الخفيفي”، مع مدير الأمن، اللواء “وهبي الرخ”، ومدراء الفروع والإدارات الأمنية، إضافة إلى رؤساء المراكز والأقسام التابعة للمديرية. وأكد معاليه خلال الاجتماع .....</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>
                    <Link to={'/mediaOffice/newsdetails'} className='type'>اكمل القراءة.....</Link>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-lg-4">
                <img style={{ maxWidth: "100%" }} src="/assets/Container.png " className='mb-3' width="100%" alt="" />
            </div>
            <div className="col-lg-8">
                <h5>وزير الداخلية يُقرر دمج عدد من مديريات الأمن التابعة للحكومة الليبية</h5>
                <p className='desicionstitle mt-2'>قدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس، اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس جهاز البحث الجنائي اللواء “أحمد الشامخ”، ورئيس جهاز مكافحة الهجرة غير شرعية، اللواء “صلاح الخفيفي”، مع مدير الأمن، اللواء “وهبي الرخ”، ومدراء الفروع والإدارات الأمنية، إضافة إلى رؤساء المراكز والأقسام التابعة للمديرية. وأكد معاليه خلال الاجتماع .....</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>
                    <Link to={'/mediaOffice/newsdetails'} className='type'>اكمل القراءة.....</Link>
                </div>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-lg-4">
                <img style={{ maxWidth: "100%" }} src="/assets/Container.png " className='mb-3' width="100%" alt="" />
            </div>
            <div className="col-lg-8">
                <h5>وزير الداخلية يُقرر دمج عدد من مديريات الأمن التابعة للحكومة الليبية</h5>
                <p className='desicionstitle mt-2'>قدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس، اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس جهاز البحث الجنائي اللواء “أحمد الشامخ”، ورئيس جهاز مكافحة الهجرة غير شرعية، اللواء “صلاح الخفيفي”، مع مدير الأمن، اللواء “وهبي الرخ”، ومدراء الفروع والإدارات الأمنية، إضافة إلى رؤساء المراكز والأقسام التابعة للمديرية. وأكد معاليه خلال الاجتماع .....</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>
                    <Link to={'/mediaOffice/newsdetails'} className='type'>اكمل القراءة.....</Link>
                </div>
            </div>
        </div>
     

        <div className="mt-5">
        <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <button className="page-link">السابق</button>
                            </li>
                            <li className="page-item active">
                                <button className="page-link">2</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">3</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">التالي</button>
                            </li>
                        </ul>
                    </nav>
        </div>
    </div>
</section>
 }