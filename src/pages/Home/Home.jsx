import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import CommonNewsBox from "../../components/CommonNewsBox/CommonNewsBox";
import { Modal } from "react-bootstrap";
import { NewBoxContent, NewsBoxNew } from "../../components/NewsBoxNew/NewsBoxNew";
import { useTranslation } from "react-i18next";


const Home = () => {
    const [t, i18n] = useTranslation("global");
  
  return (
    <>
      <Hero t = {t} />
      <CommonNews t= {t} />
      <TodayNews t={t} />
      <PrimaryNews t = {t} />
      <NewsSliderBoxes t = {t} />
      <NewsInternalPlatform t = {t} />
      <DesitionsAndPhotos t ={t} />
    </>
  );
};


function Hero({t}) {

  const images = [
    "/assets/home_1.png",
    "/assets/home_2.png",
    "/assets/home_3.png",
    "/assets/home_4.png",
    "/assets/home_2.png",
    "/assets/home_1.png",
    "/assets/home_3.png",
    "/assets/home_4.png"
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
          <span className="news">{t("header.latest_news")}</span>
          <h1 className="title">{t("header.news_article.title")}</h1>
          <div className="time">
            <i className="uil uil-schedule"></i>
            <span>{t("header.news_article.date")}</span>
          </div>
          <p className="description">{t("header.news_article.details")}</p>
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
              1200: { slidesPerView: 7, spaceBetween: 10 }
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {images.map((src, index) => (
              <SwiperSlide
                key={index}
                onClick={() => handleImageClick(src, index)}
              >
                <div
                  className={`slide home-image ${
                    activeIndex === index ? "active" : ""
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




function CommonNews({t}) {

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
          <MainTitle title={t("common_news.title")} />
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
          {[
            { image: "/assets/home_1.png", type: "category_1", time: "2_days_ago" },
            { image: "/assets/home_4.png", type: "category_1", time: "2_days_ago" },
            { image: "/assets/home_3.png", type: "category_1", time: "2_days_ago" },
            { image: "/assets/home_2.png", type: "category_1", time: "2_days_ago" },
            { image: "/assets/home_3.png", type: "category_1", time: "2_days_ago" },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <CommonNewsBox
                image={item.image}
                type={t(`common_news.category_1`)}
                title={t("common_news.sample_title")}
                time={t(`common_news.2_days_ago`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


function TodayNews({ t }) {
  return (
    <section className="today-news mb-3">
      <div className="container">
        <MainTitle title={t("today_news.title")} />
        <div className="row">
          <div className="col-lg-4">
            <div className="today-news-box position-relative">
              <div
                className="today-news-background mb-3"
                style={{
                  backgroundImage: `url(/assets/home_1.png)`,
                  height: "200px",
                  objectFit: "cover",
                }}
              >
                <span className="type">{t("today_news.category_1")}</span>
              </div>
              <h6>{t("today_news.sample_title")}</h6>
              <div className="time">
                <i className="uil uil-calendar-alt"></i>
                <p>{t("today_news.2_days_ago")}</p>
              </div>
            </div>
            <div className="today-news-box position-relative">
              <div
                className="today-news-background mb-3"
                style={{
                  backgroundImage: `url(/assets/home_1.png)`,
                  height: "200px",
                  objectFit: "cover",
                }}
              >
                <span className="type">{t("today_news.category_1")}</span>
              </div>
              <h6>{t("today_news.sample_title")}</h6>
              <div className="time">
                <i className="uil uil-calendar-alt"></i>
                <p>{t("today_news.2_days_ago")}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <CommonNewsBox
              image={"/assets/home_1.png"}
              type={t("today_news.category_1")}
              title={t("today_news.sample_title")}
              sizing="30px"
              lineHeight="50px"
              time={t("today_news.2_days_ago")}
              styling="95.8%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

  function PrimaryNews({ t }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
    };

    const handleBackdropClick = (e) => {
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
                <span className="type">{t("primary_news.title")}</span>
                <h1 className="text-white my-4">{t("primary_news.subtitle")}</h1>
                <div className="time">
                  <i className="uil uil-calendar-alt"></i>
                  <p>{t("primary_news.time")}</p>
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
                  <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube.com/embed/NJjh9AwTBkY?si=LoYmP9K2RH5dIYU1"
                    title="Video"
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


  function NewsSliderBoxes({ t }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");

    const newsData = [
      {
        title: t("news_slider_boxes.title_1"),
        time: t("news_slider_boxes.time"),
        videoUrl: "https://www.youtube.com/embed/videoID1",
      },
      {
        title: t("news_slider_boxes.title_2"),
        time: t("news_slider_boxes.time"),
        videoUrl: "https://www.youtube.com/embed/videoID2",
      },
      {
        title: t("news_slider_boxes.title_3"),
        time: t("news_slider_boxes.time"),
        videoUrl: "https://www.youtube.com/embed/videoID3",
      },
      {
        title: t("news_slider_boxes.title_3"),
        time: t("news_slider_boxes.time"),
        videoUrl: "https://www.youtube.com/embed/videoID3",
      },
    ];

    const openModal = (videoUrl) => {
      setCurrentVideo(videoUrl);
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
      setCurrentVideo("");
    };

    return (
      <section className="news-slider-boxes">
        <div className="container mb-5">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={500}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {newsData.map((news, index) => (
              <SwiperSlide key={index}>
                <div
                  className="news-box d-flex align-items-center py-3 px-2 rounded"
                  style={{
                    cursor: "pointer",
                    height: "fit-content",
                    border: "1px solid #003F9C",
                  }}
                >
                  <div className="news-box-content d-flex align-items-center">
                    <div
                      className="youtube-logo my-4"
                      onClick={() => openModal(news.videoUrl)}
                    >
              <svg width="92" height="82" viewBox="0 0 92 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_138_2643)">
                          <rect x="12" y="9" width="68" height="58" rx="12" fill="#B9C0C9" />
                        </g>
                        <path d="M58.3876 31.41C58.2442 30.8317 57.9626 30.304 57.5708 29.8795C57.1791 29.4549 56.6909 29.1484 56.1549 28.9904C54.1863 28.418 46.2889 28.418 46.2889 28.418C46.2889 28.418 38.3914 28.418 36.4228 28.9904C35.8868 29.1484 35.3986 29.4549 35.0069 29.8795C34.6151 30.304 34.3335 30.8317 34.1901 31.41C33.6621 33.5464 33.6621 37.9999 33.6621 37.9999C33.6621 37.9999 33.6621 42.4533 34.1901 44.5897C34.3334 45.1682 34.6149 45.6962 35.0066 46.121C35.3984 46.5457 35.8866 46.8525 36.4228 47.0106C38.3925 47.5818 46.2889 47.5818 46.2889 47.5818C46.2889 47.5818 54.1863 47.5818 56.1549 47.0106C56.6911 46.8525 57.1793 46.5457 57.5711 46.121C57.9628 45.6962 58.2444 45.1682 58.3876 44.5897C58.9156 42.4558 58.9156 37.9999 58.9156 37.9999C58.9156 37.9999 58.9156 33.5464 58.3876 31.41ZM43.7061 42.044V33.9569L50.3065 38.0011L43.7061 42.044Z" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linejoin="round" />
                        <defs>
                          <filter id="filter0_d_138_2643" x="0" y="0" width="92" height="82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="3" />
                            <feGaussianBlur stdDeviation="6" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_2643" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_2643" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h6>{news.title}</h6>
                      <p className="text-muted mb-0">{news.time}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {isModalOpen && (
          <Modal show={isModalOpen} onHide={closeModal} centered>
            <Modal.Header closeButton />
            <Modal.Body>
              <iframe
                width="100%"
                height="400"
                src={currentVideo}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Modal.Body>
          </Modal>
        )}
      </section>
    );
  }

  function NewsInternalPlatform({ t }) {
    return (
      <section className="news-internal-platform">
        <div className="container">
          <MainTitle title={t("news.internal_title")} />
          <div className="row align-items-center">
            <div className="col-lg-8">
              <CommonNewsBox
                image="/assets/home_3.png"
                type={t("news.category_1")}
                title={t("news.internal_meeting")}
                time={t("news.two_days_ago")}
              />
              <div className="row">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div className="col-lg-6 mb-2" key={index}>
                      <div className="newBox mb-2">
                        <NewsBoxNew
                          image="/assets/home_2.png"
                          type={t("news.category_1")}
                          title={t("news.internal_meeting")}
                          time={t("news.two_days_ago")}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-4">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div className="newBox mb-4" key={index}>
                    <NewsBoxNew
                      image="/assets/home_2.png"
                      type={t("news.category_1")}
                      title={t("news.internal_meeting")}
                      time={t("news.two_days_ago")}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function DesitionsAndPhotos({ t }) {
    return (
      <section className="desitions-and-photos mb-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <MainTitle title={t("decisions.title")} />
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div className="new-box-content mb-3" key={index}>
                    <NewBoxContent
                      type={t("decisions.category_1")}
                      title={t("decisions.decision_merge")}
                      time={t("decisions.two_hours_ago")}
                    />
                  </div>
                ))}
            </div>
            <div className="col-lg-6">
              <MainTitle title={t("photos.title")} />
              <div className="desiscions-gallary">
                {Array(12)
                  .fill(0)
                  .map((_, index) => (
                    <img
                      src={`/assets/home_${(index % 4) + 1}.png`}
                      alt={t("photos.alt_text")}
                      key={index}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  


export default Home;
