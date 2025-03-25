import { GlobalContainer } from '../../../components/globalComponent/globalComponent';
import MainTitle from '../../../components/MainTitle/MainTitle';
import './EmergencyCases.css';


import React from 'react'

export default function EmergencyCases() {
  return <>
    <GlobalContainer text='التعامل مع الحالات الطارئه' header='الرئيسية - عن الوزارة -  التعامل مع الحالات الطارئه' />
    <MainEmergencyCases />
  </>

}

function MainEmergencyCases() {
  return <section className='mainEmergencyCases my-5'>
    <div className="container">
      <div>
        <span className='type'>أرقام هامة</span>
        <h5 className='my-3'>في حالة الطوارئ، يمكنك الاتصال بالأرقام التالية من أي مكان بدولة ليبيا</h5>
        <ul>
          <li>- 190  للاتصال بالشرطة</li>
          <li>- 998 للاتصال بالإسعاف</li>
          <li>- 997 للاتصال بالدفاع المدني</li>
        </ul>
      </div>

      <div className='my-5'>
        <span className='type'>الحوادث المروريه</span>
        <p className='mt-3'>عند وقوع حادث اتصل بالشرطة على رقم الطوارئ المجاني 999، من أي مكان في دولة ليبيا، وقم بالإبلاغ عن الحادث ومكان وقوعه، وعما إذا كانت هناك أية إصابات تتطلب إرسال سيارة إسعاف. اتبع تعليمات الشرطة، وتذكر أنه لا بد من الإبلاغ عن أي حادث مهما كان بسيطاً.
          في حال الحوادث المرورية الخفيفة، قم بتحريك سيارتك إلى جانب الطريق، إن استطعت، حتى لا تتسبب في إعاقة حركة السير.</p>
      </div>


      <div className='my-5'>
        <span className='type'>عند اندلاع الحرائق</span>
        <ul className='mt-3' >
          <li className="my-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z" fill="#38BF57" stroke="#38BF57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='me-2'>اتصل برقم الطوارئ المجاني (997) من أي مكان في ليبيا، واتبع التعليمات.</span>
          </li>
          <li className="my-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z" fill="#38BF57" stroke="#38BF57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='me-2'>قم بإخلاء المكان فوراً، وتوجه نحو أقرب مخرج طوارئ.</span>
          </li>
          <li className="my-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z" fill="#38BF57" stroke="#38BF57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='me-2'>اتجه نحو المخارج بهدوء ولا تندفع.</span>
          </li>
          <li className="my-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z" fill="#38BF57" stroke="#38BF57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='me-2'>لا تبقى لجمع احتياجاتك تحت أي ظرف من الظروف.</span>
          </li>
          <li className="my-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z" fill="#38BF57" stroke="#38BF57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='me-2'>إن استطعت، قم بإغلاق الأبواب عند خروجك حتى لا يمتد الحريق إلى منطقة أوسع.</span>
          </li>
          <li className="my-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z" fill="#38BF57" stroke="#38BF57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='me-2'>لا تستخدم المصعد عند خروجك.</span>
          </li>
          <li className="my-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z" fill="#38BF57" stroke="#38BF57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='me-2'>إن استطعت، حاول إخماد الحريق بمساعدة الطفايات المتوفرة دون المجازفة بحياتك وحياة الآخرين.</span>
          </li>
          <li className="my-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z" fill="#38BF57" stroke="#38BF57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='me-2'>لا تعد إلى المبنى إلا بعد إعلان الشرطة أو الدفاع المدني بزوال الخطر.</span>
          </li>
          <li className="my-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.16699 7L2.62533 5.54167L5.54199 8.45833L11.3753 2.625L12.8337 4.08333L5.54199 11.375L1.16699 7Z" fill="#38BF57" stroke="#38BF57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='me-2'>استفد من أنظمة الحماية والتحكم الذكية، إذا كانت متوفرة، لكشف الدخان والحريق والوقاية منه في المباني التجارية والشقق السكنية.</span>
          </li>
        </ul>
      </div>

      <div className='my-5'>
      <MainTitle title={"ارسال طلب"} />
        <div className="row">
          <form>
            <div className="col-lg-12">
              <label htmlFor="name">الاسم</label>
              <input type="text" id='name' name='' className='form-control mt-2'/>
            </div>

            <div className='row my-2'>
              <div className="col-lg-6">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input type="email" id='email' name='' className='form-control mt-2'/>
              </div>
              <div className="col-lg-6">
              <label htmlFor="sub">الموضوع  </label>
              <input type="text" id='sub' name='' className='form-control mt-2'/>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
              <label htmlFor="disc">الوصف</label>
              <textarea type="" id='disc' name='' className='form-control mt-2'/>
              </div>
            </div>

            <div className='d-flex justify-content-end my-4'>
              <button className='btn btn-print'>طباعة</button>
              <button className='btn btn-send me-3'>ارسال</button>
            </div>
          </form>
        </div>
      </div>

      
    </div>
  </section>


}
