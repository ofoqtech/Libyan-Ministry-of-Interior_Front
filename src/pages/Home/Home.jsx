import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import CommonNewsBox from "../../components/CommonNewsBox/CommonNewsBox";

const Home = () => {
  return (
    <>
      <Hero />
      <CommonNews />
      <TodayNews />
      <PrimaryNews />
    </>
  );
};

function Hero() {
  const images = [
    "/assets/home_1.png",
    "/assets/home_2.png",
    "/assets/home_3.png",
    "/assets/home_4.png",
    "/assets/home_2.png",
    "/assets/home_1.png",
    "/assets/home_3.png",
    "/assets/home_4.png",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (src, index) => {
    setActiveImage(src);
    setActiveIndex(index);
  };

  useEffect(() => {
    const activeElement = document.querySelector(".home-image.active");
    const indicator = document.querySelector(".home-image-indicator");

    if (activeElement && indicator) {
      const rect = activeElement.getBoundingClientRect();
      indicator.style.left = `${rect.left - 90}px`;
      indicator.style.width = `${rect.width}px`;
    }
  }, [activeIndex]);

  return (
    <div className="home" style={{ backgroundImage: `url(${activeImage})` }}>
      <div className="container">

        <div className="text" style={{ paddingTop: "170px" }}>
          <span className="news">أخر الأخبار</span>
          <h1 className="title">
            وزير الداخلية يعقد اجتماعًا أمنيًا موسعًا في مديرية أمن الشاطئ
          </h1>
          <div className="time">
            <i className="uil uil-schedule"></i>
            <span>منذ يومين</span>
          </div>
          <p className="description">
            عقدَ معالي وزير الداخلية، اللواء “عصام أبوزريبة”، اليوم الخميس،
            اجتماعًا موسعًا مع القيادات الأمنية في مديرية أمن الشاطئ، بحضور رئيس
            جهاز البحث الجنائي اللواء “أحمد الشامخ”، ........
          </p>
        </div>

        <div className="slider home-images" style={{ paddingTop: "80px" }}>
          <div className="home-image-indicator"></div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={500}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 5 },
              480: { slidesPerView: 2, spaceBetween: 5 },
              768: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 5, spaceBetween: 10 },
              1200: { slidesPerView: 7, spaceBetween: 10 },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {images.map((src, index) => (
              <SwiperSlide
                key={index}
                onClick={() => handleImageClick(src, index)}
              >
                <div
                  className={`slide home-image ${activeIndex === index ? "active" : ""
                    }`}
                >
                  <img src={src} alt={`Slide ${index}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

function CommonNews() {
  useEffect(() => {
    const nextBtn = document.querySelector(".swiper-button-next");
    const prevBtn = document.querySelector(".swiper-button-prev");

    if (nextBtn && prevBtn) {
      nextBtn.classList.add("custom-swiper-button");
      prevBtn.classList.add("custom-swiper-button");
    }
  }, []);

  return (
    <div className="common-news">
      <div className="container">
        <div className="common-news-title">
          <MainTitle title={"الأخبار الشائعة"} />
          <div className="swiper-arrows">
            <div className="swiper-button-prev">
              <i className="uil uil-arrow-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="uil uil-arrow-right"></i>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={500}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <CommonNewsBox
              image={"/assets/home_1.png"}
              type={"فئة 1"}
              title={
                "وزير الداخلية يعقد اجتماعًا موسعًا لمناقشة الأوضاع الأمنية"
              }
              time={"منذ يومين"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CommonNewsBox
              image={"/assets/home_4.png"}
              type={"فئة 1"}
              title={
                "وزير الداخلية يعقد اجتماعًا موسعًا لمناقشة الأوضاع الأمنية"
              }
              time={"منذ يومين"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CommonNewsBox
              image={"/assets/home_3.png"}
              type={"فئة 1"}
              title={
                "وزير الداخلية يعقد اجتماعًا موسعًا لمناقشة الأوضاع الأمنية"
              }
              time={"منذ يومين"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CommonNewsBox
              image={"/assets/home_2.png"}
              type={"فئة 1"}
              title={
                "وزير الداخلية يعقد اجتماعًا موسعًا لمناقشة الأوضاع الأمنية"
              }
              time={"منذ يومين"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CommonNewsBox
              image={"/assets/home_3.png"}
              type={"فئة 1"}
              title={
                "وزير الداخلية يعقد اجتماعًا موسعًا لمناقشة الأوضاع الأمنية"
              }
              time={"منذ يومين"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
function TodayNews() {
  return <section className="today-news mb-3">
    <div className="container">
      <MainTitle title={"أخبار اليوم "} />
      <div className="row">
        <div className="col-lg-4">
          <div className="today-news-box position-relative">
            <div className="today-news-background mb-3" style={{ backgroundImage: `url(/assets/home_1.png)`, height: "200px", objectFit: "cover" }}>
              <span className="type">فئة 1</span>
            </div>
            <h6>وزير الداخلية يتفقد الأوضاع الأمنية في بلدية مرزق</h6>
            <div className="time">
              <i className="uil uil-calendar-alt"></i>
              <p>منذ يومين</p>
            </div>
          </div>
          <div className="today-news-box position-relative">
            <div className="today-news-background mb-3" style={{ backgroundImage: `url(/assets/home_1.png)`, height: "200px", objectFit: "cover" }}>
              <span className="type">فئة 1</span>
            </div>
            <h6>وزير الداخلية يتفقد الأوضاع الأمنية في بلدية مرزق</h6>
            <div className="time">
              <i className="uil uil-calendar-alt"></i>
              <p>منذ يومين</p>
            </div>
          </div>

        </div>
        <div className="col-lg-8">
          <CommonNewsBox
            image={"/assets/home_1.png"}
            type={"فئة 1"}
            title={
              "وزير الداخلية يعقد اجتماعًا موسعًا لمناقشة الأوضاع الأمنية"
            }
            sizing="30px"
            lineHeight="50px"
            time={"منذ يومين"}
            styling="95.8%"
          />
        </div>
      </div>
    </div>
  </section>
}
function PrimaryNews() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    // Close the modal if the user clicks outside the modal content
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    <section
      className="primary-news"
      style={{ backgroundImage: `url(/assets/background-primary.png)` }}
    >
      <div className="overlay2"></div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="primary-news-content">
              <span className="type">الاخبار الرئيسيه</span>
              <h1 className="text-white my-4">الداخليه في دقيقه</h1>
              <div className="time">
                <i className="uil uil-calendar-alt"></i>
                <p>منذ يومين</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div
              onClick={openModal}
              className="play-button-video my-5"
              style={{ cursor: "pointer" }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="80" height="80" rx="40" fill="white" />
                <g clipPath="url(#clip0_138_2411)">
                  <path
                    d="M36.7399 48.6001C36.1712 48.573 35.7108 48.3834 35.3587 48.0313C34.9795 47.6522 34.7899 47.1918 34.7899 46.6501V32.3501C34.7899 31.8084 34.9795 31.348 35.3587 30.9688C35.7108 30.6168 36.1712 30.4272 36.7399 30.4001C37.092 30.4001 37.4305 30.4949 37.7555 30.6845L49.4555 37.8345C50.0514 38.2407 50.3628 38.7959 50.3899 39.5001C50.3628 40.2043 50.0514 40.7595 49.4555 41.1657L37.7555 48.3157C37.4305 48.5053 37.092 48.6001 36.7399 48.6001Z"
                    fill="#080809"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_138_2411">
                    <rect
                      width="20.8"
                      height="21"
                      fill="white"
                      transform="matrix(1 0 0 -1 29.59 50)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          {/* Modal */}
          {isModalOpen && (
            <div
              className="modal"
              onClick={handleBackdropClick}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <div
                className="modal-content"
                style={{
                  position: "relative",
                  width: "80%",
                  maxWidth: "700px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    color: "#333",
                  }}
                >
                  &times;
                </button>

                {/* Video */}
                <iframe
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/NJjh9AwTBkY?si=LoYmP9K2RH5dIYU1"                  title="Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



export default Home;
