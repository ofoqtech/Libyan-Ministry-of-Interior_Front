import { GlobalContainer } from '../../../../components/globalComponent/globalComponent'
import './MeetingsDetails.css'
import React from 'react'

export default function MeetingsDetails() {
    return <>

        <GlobalContainer text='إجتماعات' header='الرئيسية - المكتب الاعلامي - إجتماعات - وزير الداخلية يتفقد الأوضاع الأمنية في بلدية مرزق' />
        <MainMeetingsDetails />
    </>

}

function MainMeetingsDetails() {
    return <section className='MainMeetingsDetails my-5'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img style={{ maxWidth: "100%" }} src="/assets/FB_IMG_1740579987780 3.png" className='mb-3' width="700px" alt="" />

                </div>
                <div className="col-lg-6">
                    <h2 style={{lineHeight : "40px", fontSize : "25px"}}>وزير الداخلية يتفقد الأوضاع الأمنية في بلدية مرزق</h2>
                    <span className='desicionstime'><i className="uil uil-calendar-alt mx-1"></i>منذ يومين</span>

                </div>
            </div>


            <div className='my-3'>
                <p className='titledetalis'>أجرى معالي وزير الداخلية، اللواء عصام أبوزريبة، اليوم الأربعاء، زيارة تفقدية إلى بلدية مرزق، رفقة رئيس ديوان الوزارة بالمنطقة الجنوبية، ورئيس جهاز البحث الجنائي، ومدير الإدارة العامة للعمليات الأمنية ، ومدير الادارة العامة للدعم المركزي، حيث كان في استقباله مدير الأمن، اللواء.د أسامة عويدان، إلى جانب عدد من القيادات الأمنية، وعميد البلدية وأعيان وحكماء المدينة.
وفي إطار جولته الميدانية لمتابعة الأوضاع الأمنية وتعزيز الاستقرار، عقد معالي الوزير اجتماعًا موسعًا مع المجلس البلدي وأعيان وحكماء المدينة داخل مقر مديرية الأمن، واستمع إلى مطالبهم الأمنية واحتياجاتهم، وبحث التحديات التي تواجه البلدية في هذا الإطار.
كما أشاد الحضور بجهود معاليه المتواصلة، مؤكدين تقديرهم لحرصه الشخصي على تحسين الوضع الأمني عبر زياراته المتكررة للمنطقة ومتابعته المباشرة لمستجدات الأمن فيها.
من جانبه، شدد معاليه على أهمية التعاون الوثيق بين وزارة الداخلية والمجتمع المحلي، مؤكدًا أن الوزارة لن تدخر جهدًا في تعزيز الأمن والاستقرار، وملاحقة الخارجين عن القانون، وحماية المواطنين، ومُثمناً دور الأعيان والحكماء في دعم مديرية الأمن ومراكز الشرطة، ووقوفهم إلى جانب رجال الأمن في جهودهم الرامية إلى فرض القانون واستعادة الاستقرار.
وأكد معالي الوزير أن الوزارة تضع أمن المواطن وسلامة ليبيا في مقدمة أولوياتها، وأنها مستمرة في اتخاذ التدابير اللازمة لتعزيز الأمن في مختلف ربوع الوطن .أجرى معالي وزير الداخلية، اللواء عصام أبوزريبة، اليوم الأربعاء، زيارة تفقدية إلى بلدية مرزق، رفقة رئيس ديوان الوزارة بالمنطقة الجنوبية، ورئيس جهاز البحث الجنائي، ومدير الإدارة العامة للعمليات الأمنية ، ومدير الادارة العامة للدعم المركزي، حيث كان في استقباله مدير الأمن، اللواء.د أسامة عويدان، إلى جانب عدد من القيادات الأمنية، وعميد البلدية وأعيان وحكماء المدينة.
وفي إطار جولته الميدانية لمتابعة الأوضاع الأمنية وتعزيز الاستقرار، عقد معالي الوزير اجتماعًا موسعًا مع المجلس البلدي وأعيان وحكماء المدينة داخل مقر مديرية الأمن، واستمع إلى مطالبهم الأمنية واحتياجاتهم، وبحث التحديات التي تواجه البلدية في هذا الإطار.
كما أشاد الحضور بجهود معاليه المتواصلة، مؤكدين تقديرهم لحرصه الشخصي على تحسين الوضع الأمني عبر زياراته المتكررة للمنطقة ومتابعته المباشرة لمستجدات الأمن فيها.</p>
            </div>


            <div class=" mt-5">
                <div className="row g-3">

                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 image-container">
                        <img src="/assets/FB_IMG_1740580037892 1.png" alt="صورة" />
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
                    <div className="col-lg-4 mb-3">
                        <div className='card'>
                            <img src="/assets/FB_IMG_1740637952084 2.png" alt="" />
                            <h5 className='my-2'>وزير الداخلية يتفقد الأوضاع الأمنية في بلدية مرزق</h5>
                            <span className='desicionstime'><i className="uil uil-calendar-alt ms-1"></i>منذ يومين</span>

                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className='card'>
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
