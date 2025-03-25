import { GlobalContainer } from '../../../../components/globalComponent/globalComponent';
import './newsDetails.css';


import React from 'react'

export default function NewsDetails() {
    return <>

        <GlobalContainer text='الأخبار الرئيسية' header='الرئيسية - المكتب الاعلامي - الأخبار الرئيسية - وزير الداخلية يعقد اجتماعًا أمنيًا موسعًا في مديرية أمن الشاطئ' />
        <MainNewsDetalis />
    </>

}

function MainNewsDetalis() {

    return <section className='MainNewsDetalis my-5'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img style={{ maxWidth: "100%" }} src="/assets/Container.png " className='mb-3' width="700px" alt="" />

                </div>
                <div className="col-lg-6">
                    <h2 style={{lineHeight : "40px", fontSize : "25px"}}>وزير الداخلية يعقد اجتماعًا أمنيًا موسعًا في مديرية أمن الشاطئ</h2>
                    <span className='desicionstime'><i className="uil uil-calendar-alt mx-1"></i>منذ يومين</span>

                </div>
            </div>


            <div className='my-3'>
                <p className='titledetalis'>عقدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس، اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس جهاز البحث الجنائي اللواء “أحمد الشامخ”، ورئيس جهاز مكافحة الهجرة غير شرعية، اللواء “صلاح الخفيفي”، مع مدير الأمن، اللواء “وهبي الرخ”، ومدراء الفروع والإدارات الأمنية، إضافة إلى رؤساء المراكز والأقسام التابعة للمديرية.
وأكد معاليه خلال الاجتماع على أهمية الالتزام الصارم بتطبيق القانون دون تهاون، مشددًا على أن المواطن يعقد آماله على الأجهزة الأمنية في تحقيق الأمن والاستقرار، وأنه لا مجال للتهاون مع أي تهديدات تمس السلم الاجتماعي.
كما تطرق معاليه إلى مسألة التعيينات التي شهدتها المؤسسة الأمنية في وقت سابق، مشيرًا إلى ضرورة وضع معايير واضحة لضمان كفاءة العناصر الأمنية وقدرتهم على تحمل المسؤولية الملقاة على عاتقهم.
وناقش الاجتماع أبرز التحديات الأمنية التي تواجه المنطقة، وسُبل تحسين الأداء الأمني من خلال تطوير خطط الطوارئ، وتعزيز التنسيق بين مختلف الأجهزة، وتوفير المستلزمات اللازمة للمديرية ومكوناتها، حيث أصدر تعليماته بسرعة تزويد المديرية بالإمكانيات التي تحتاجها، تنفيذًا لما تم عرضه من قبل مدير أمن الشاطئ.
وشدد معالي الوزير على أهمية حماية حقوق رجال الأمن وتعزيز مكانتهم أثناء أداء مهامهم، مشيرًا إلى أن الوزارة ستعمل على تحسين أوضاعهم المهنية وضمان حصولهم على كافة الامتيازات التي يستحقونها. مؤكداً أن ضباط الصف يمثلون الخط الأول في التعامل مع الأحداث الميدانية، الأمر الذي يتطلب منحهم اهتمامًا خاصًا، نظرًا لدورهم الحاسم في تنفيذ المهام الأمنية المباشرة.
وخلال زيارته، التقى الوزير بعددٍ من جرحى أفراد الأمن الذين أصيبوا أثناء أداء واجبهم، حيث أثنى على تضحياتهم، وأصدر تعليماته بصرف منح مالية لهم، إضافة إلى تقديم تذاكر سفر للعلاج في دولة تونس، تقديرًا لما قدموه في سبيل حماية الوطن والمواطن.
وفي ختام الاجتماع، أكد معاليه أن الوزارة ستواصل جهودها لضبط الأمن، وتطوير آليات العمل الأمني، مع مراجعة بعض الإجراءات القديمة التي لم يتم تحويلها إلى الجهات المختصة، مشددًا على ضرورة التنسيق الفعّال بين جميع الأجهزة الأمنية لضمان تحقيق الأمن والاستقرار في المنطقة.</p>
            </div>


            <div class=" mt-5">
        <div className="row g-3">
       
        <div className="col-md-3 col-sm-6 col-12 image-container">
            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="صورة"/>
        </div>
        <div className="col-md-3 col-sm-6 col-12 image-container">
            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="صورة"/>
        </div>
        <div className="col-md-3 col-sm-6 col-12 image-container">
            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="صورة"/>
        </div>
        <div className="col-md-3 col-sm-6 col-12 image-container">
            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="صورة"/>
        </div>
        <div className="col-md-3 col-sm-6 col-12 image-container">
            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="صورة"/>
        </div>
        <div className="col-md-3 col-sm-6 col-12 image-container">
            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="صورة"/>
        </div>
        <div className="col-md-3 col-sm-6 col-12 image-container">
            <img src="/assets/FB_IMG_1740685420997 1 (1).png" alt="صورة"/>
        </div>
       
    
       
       
    
    </div>
            </div>

            <div className='my-5'>
            <span className='type mb-4'>مقالات ذات صلة</span>
                <div className="row">
                    <div className="col-lg-4">
                        <div className='card mb-3'>
                            <img src="/assets/FB_IMG_1740637952084 2.png" alt="" />
                            <h5 className='my-2'>وزير الداخلية يتفقد الأوضاع الأمنية في بلدية مرزق</h5>
                            <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='card mb-3'>
                            <img src="/assets/FB_IMG_1740637952084 2.png" alt="" />
                            <h5 className='my-2'>وزير الداخلية يتفقد الأوضاع الأمنية في بلدية مرزق</h5>
                            <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='card mb-3'>
                            <img src="/assets/FB_IMG_1740637952084 2.png" alt="" />
                            <h5 className='my-2'>وزير الداخلية يتفقد الأوضاع الأمنية في بلدية مرزق</h5>
                            <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
