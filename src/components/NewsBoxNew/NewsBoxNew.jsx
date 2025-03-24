import './NewsBoxNew.css';

export function NewsBoxNew({ image, type, title, time, }) {
    return (
        <div
          className="news-box-new d-flex gap-3"
        >
            <div className="news-box-Image">
                <img src={image} alt="اخبار الوزاره" />
            </div>
         
            <NewBoxContent type = {type} title={title} time={time} />
        </div>
      );
    }
export function NewBoxContent({type, title, time}){
    return          <div className="new-box-content">
    <span className="type">{type}</span>
     <h6 className="title fw-bold" style={{fontSize : "13px", lineHeight : "1.8"}}>{title}</h6>
     <div className="time d-flex gap-2 align-items-center">
       <i class="uil uil-calendar-alt"></i> 
       <p className='mb-0' style={{fontSize : "13px"}}>{time}</p>
     </div>
    </div>
}