import './NewsBoxNew.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
export function NewBoxContent({type, title, time, image, medias}){
    return <div className="new-box-content" >
        {/* Decision Image */}
        {image && (
            <div className="newbox-image-container mb-2">
                <img src={image} alt={title} className="newbox-image" />
            </div>
        )}
        
        {/* Decision Images Swiper */}
        {medias && medias.length > 0 && (
            <div className="newbox-swiper-container mb-2">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation={medias.length > 1}
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="newbox-swiper"
                >
                    {medias.map((media, index) => (
                        <SwiperSlide key={media.id || index}>
                            <div className="newbox-swiper-image-container">
                                <img
                                    src={media.file_url}
                                    alt={title}
                                    className="newbox-swiper-image"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )}
        
        <span className="type">{type}</span>
        <h6 className="title fw-bold" style={{fontSize : "13px", lineHeight : "1.8", cursor : "pointer"}}>{title}</h6>
        <div className="time d-flex gap-2 align-items-center">
            <i class="uil uil-calendar-alt"></i> 
            <p className='mb-0' style={{fontSize : "13px"}}>{time}</p>
        </div>
    </div>
}