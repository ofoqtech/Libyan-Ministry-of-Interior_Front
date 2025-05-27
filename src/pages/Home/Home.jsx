import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import CommonNewsBox from "../../components/CommonNewsBox/CommonNewsBox";
import { NewBoxContent, NewsBoxNew } from "../../components/NewsBoxNew/NewsBoxNew";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";


const Home = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <Hero t={t} />
      <CommonNews t={t} />
      <TodayNews t={t} />
      {/* <PrimaryNews t={t} /> */}
      {/* <NewsSliderBoxes t={t} /> */}
      <NewsInternalPlatform t={t} />
      <DesitionsAndPhotos t={t} />
    </>
  );
};


function Hero({ t }) {
  const [heroSections, setHeroSection] = useState(null);
  const { i18n } = useTranslation("global");

  useEffect(() => {
    const getHeroSection = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/app_settings/hero`,
          {
            headers: {
              "Content-Type": "application/json",
              'lang': i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setHeroSection(response.data.result);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getHeroSection();
  }, [i18n.language]);

  const isLoading = !heroSections;

  return (
    <>
      <div className="home-swiper home">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {heroSections?.map((heroSection, index) => (
            <SwiperSlide key={index}>
              <div
                className="swiper-image"
                style={{
                  backgroundImage: `url(${heroSection?.image || "/assets/home_1.png"})`,
                }}
              >
                <div className="swiper-info">
                  <div className="container">
                    <div className="text" style={{ paddingTop: "170px" }}>
                      {isLoading ? (
                        <div className="swip-skel">
                          <div
                            style={{
                              width: "120px",
                              height: "30px",
                              backgroundColor: "#ddd",
                              borderRadius: "4px",
                              marginBottom: "20px",
                            }}
                          />
                          <div
                            style={{
                              width: "60%",
                              height: "60px",
                              backgroundColor: "#ccc",
                              borderRadius: "6px",
                              marginBottom: "20px",
                            }}
                          />
                          <div
                            style={{
                              width: "80%",
                              height: "80px",
                              backgroundColor: "#eee",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                      ) : (
                        <>
                          <span
                            className="news text-black"
                            style={{ background: "white" }}
                          >
                            {t("header.latest_news")}
                          </span>
                          <h1
                            className="title py-3 px-3 text-white"
                            style={{ background: "#003f9c" }}
                          >
                            <Link to={`/lastNews/${heroSection?.id}`}>
                              {heroSection?.title}
                            </Link>
                          </h1>
                          <p
                            className="description new-desc"
                            style={{
                              background: "white",
                              color: "black",
                              padding: "10px",
                              width: "80%",
                              maxWidth: "100%",
                            }}
                            dangerouslySetInnerHTML={{ __html: heroSection?.description }}
                          ></p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}


        </Swiper>
      </div>
    </>
  );
}





function CommonNews({ t }) {
  const [common, setCommon] = useState([]);
  const { i18n } = useTranslation('global');
  useEffect(() => {
    const nextBtn = document.querySelector(".swiper-button-next");
    const prevBtn = document.querySelector(".swiper-button-prev");

    if (nextBtn && prevBtn) {
      nextBtn.classList.add("custom-swiper-button");
      prevBtn.classList.add("custom-swiper-button");
    }
    const getCommonNews = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/news/common_news`,
          {
            headers: {
              "Content-Type": "application/json",
              'lang': i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setCommon(response.data.result.data);
        }
      } catch (err) {
        toast.error(t('error'));
      }
    }
    getCommonNews();
  }, [i18n.language]);

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
          {common ? (
            common.map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={`/CommonNewsDetailsPage/${item.id}`}>
                  <CommonNewsBox
                    image={item.image_url}
                    type={t("common_news.category_1")}
                    more={t("news.read_more")}
                    newsDetailsItem={item.id}
                    title={`${item.title.slice(0, 80)}...`}
                    time={`${item?.created_at?.slice(0, 10)}`}
                    backgroundSize="100% 100%"
                  />
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <p>{t("news.no_news")}</p>
          )}
        </Swiper>
        {common.length === 0 && (<p>{t("news.no_news")}</p>
        )}
      </div>
    </div>
  );
}



function TodayNews({ t }) {
  const { _, i18n } = useTranslation("global");
  const [TodayNews, setTodayNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/news/home_latest_news`,
          {
            headers: {
              'lang': i18n.language,
            },
          }
        );
        const result = await response.json();
        setTodayNews(result.data || []);
      } catch (error) {
        toast.error(t('error'));

      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [i18n.language]);

  return (
    <section className="today-news mb-3">
      <div className="container">
        <MainTitle title={t("header.latest_news")} />
        <div className="row">
          <div className="col-lg-4">
            {isLoading
              ? [1, 2].map((_, index) => (
                <div className="mb-3" key={index}>
                  <div
                    className="bg-secondary mb-2"
                    style={{ height: "200px", width: "100%", borderRadius: "5px", opacity: 0.2 }}
                  />
                  <div
                    className="bg-secondary"
                    style={{ height: "20px", width: "80%", borderRadius: "5px", opacity: 0.2 }}
                  />
                </div>
              ))
              : TodayNews.slice(1, 3).map((news, index) => (
                <Link
                  to={`/news/details/${news.id}`}
                  key={index}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="today-news-box position-relative mb-3">
                    <div
                      className="today-news-background mb-3"
                      style={{
                        backgroundImage: `url(${news?.image_url})`,
                        height: "200px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <span className="type">{t("today_news.category_1")}</span>
                    </div>
                    <h6 style={{ lineHeight: "1.6" }}>{news?.name}</h6>
                  </div>
                </Link>
              ))}
          </div>

          <div className="col-lg-8">
            {isLoading ? (
              <div
                className="bg-secondary mb-3"
                style={{ height: "300px", width: "100%", borderRadius: "10px", opacity: 0.2 }}
              />
            ) : TodayNews[2] && TodayNews[0] ? (

              <Link to={`/news/details/${TodayNews[0]?.id}`}>

                <CommonNewsBox
                  image={TodayNews[0].image_url}
                  type={t("today_news.category_1")}
                  title={TodayNews[0]?.name}
                  sizing="30px"
                  lineHeight="50px"
                  styling="95.8%"
                />
              </Link>
            ) : null}
          </div>
          {TodayNews.length === 0 && <p>{t('noData')}</p>}
        </div>
      </div>
    </section>
  );
}

// function PrimaryNews({ t }) {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target.classList.contains("modal")) {
//       closeModal();
//     }
//   };

//   return (
//     <section
//       className="primary-news"
//       style={{ backgroundImage: `url(/assets/background-primary.png)` }}
//     >
//       <div className="overlay2"></div>
//       <div className="container">
//         <div className="row justify-content-between">
//           <div className="col-lg-9 col-md-9 col-sm-12">
//             <div className="primary-news-content">
//               <span className="type">{t("primary_news.title")}</span>
//               <h1 className="text-white my-4">{t("primary_news.subtitle")}</h1>
//               <div className="time">
//                 <i className="uil uil-calendar-alt"></i>
//                 <p>{t("primary_news.time")}</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-3 col-sm-12">
//             <div
//               onClick={openModal}
//               className="play-button-video my-5"
//               style={{ cursor: "pointer" }}
//             >
//               <svg
//                 width="80"
//                 height="80"
//                 viewBox="0 0 80 80"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect width="80" height="80" rx="40" fill="white" />
//                 <g clipPath="url(#clip0_138_2411)">
//                   <path
//                     d="M36.7399 48.6001C36.1712 48.573 35.7108 48.3834 35.3587 48.0313C34.9795 47.6522 34.7899 47.1918 34.7899 46.6501V32.3501C34.7899 31.8084 34.9795 31.348 35.3587 30.9688C35.7108 30.6168 36.1712 30.4272 36.7399 30.4001C37.092 30.4001 37.4305 30.4949 37.7555 30.6845L49.4555 37.8345C50.0514 38.2407 50.3628 38.7959 50.3899 39.5001C50.3628 40.2043 50.0514 40.7595 49.4555 41.1657L37.7555 48.3157C37.4305 48.5053 37.092 48.6001 36.7399 48.6001Z"
//                     fill="#080809"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_138_2411">
//                     <rect
//                       width="20.8"
//                       height="21"
//                       fill="white"
//                       transform="matrix(1 0 0 -1 29.59 50)"
//                     />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>
//           </div>
//           {isModalOpen && (
//             <div
//               className="modal"
//               onClick={handleBackdropClick}
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 backgroundColor: "rgba(0, 0, 0, 0.8)",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 zIndex: 1000,
//               }}
//             >
//               <div
//                 className="modal-content"
//                 style={{
//                   position: "relative",
//                   width: "80%",
//                   maxWidth: "700px",
//                   backgroundColor: "#fff",
//                   borderRadius: "8px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <button
//                   onClick={closeModal}
//                   style={{
//                     position: "absolute",
//                     top: "10px",
//                     right: "10px",
//                     background: "transparent",
//                     border: "none",
//                     fontSize: "1.5rem",
//                     cursor: "pointer",
//                     color: "#333",
//                   }}
//                 >
//                   &times;
//                 </button>
//                 <iframe
//                   width="100%"
//                   height="400px"
//                   src="https://www.youtube.com/embed/NJjh9AwTBkY?si=LoYmP9K2RH5dIYU1"
//                   title="Video"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }



// function NewsSliderBoxes({ t }) {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState("");
//   const [activeNewsIndex, setActiveNewsIndex] = useState(0); // default to first news

//   const newsData = [
//     {
//       title: t("news_slider_boxes.title_1"),
//       time: t("news_slider_boxes.time"),
//       videoUrl: "https://www.youtube.com/embed/videoID1",
//     },
//     {
//       title: t("news_slider_boxes.title_2"),
//       time: t("news_slider_boxes.time"),
//       videoUrl: "https://www.youtube.com/embed/videoID2",
//     },
//     {
//       title: t("news_slider_boxes.title_3"),
//       time: t("news_slider_boxes.time"),
//       videoUrl: "https://www.youtube.com/embed/videoID3",
//     },
//     {
//       title: t("news_slider_boxes.title_3"),
//       time: t("news_slider_boxes.time"),
//       videoUrl: "https://www.youtube.com/embed/videoID4",
//     },
//   ];

//   const openModal = (videoUrl) => {
//     setCurrentVideo(videoUrl);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setCurrentVideo("");
//   };

//   const handleNewsBoxClick = (index) => {
//     setActiveNewsIndex(index);
//   };

//   return (
//     <section className="news-slider-boxes" style={{ marginTop: "60px" }}>
//       <div className="container mb-0">
//         <div className="row">
//           <div className="col-lg-8">
//             <div
//               className="secondary-news-box"
//               style={{
//                 backgroundImage: `url(/assets/background-primary.png)`,
//                 height: "100%",
//                 marginBottom: "20px"
//               }}
//             >
//               <div className="secondary-content w-100">
//                 <span
//                   className="news"
//                   style={{
//                     background: "white",
//                     padding: "4px 20px",
//                     fontSize: "14px",
//                     color: "#003f9c",
//                   }}
//                 >
//                   {t("common_news.category_1")}
//                 </span>
//                 <h1 className="title text-white my-4" style={{ lineHeight: "40px" }}>
//                   {newsData[activeNewsIndex].title}
//                 </h1>
//                 <div className="time d-flex gap-2 text-white">
//                   <i className="uil uil-calendar-alt"></i>
//                   <p>{t('primary_news.time')}</p>
//                 </div>
//                 <div
//                   onClick={() => openModal(newsData[activeNewsIndex].videoUrl)}
//                   className="play-button-video mt-2"
//                   style={{ cursor: "pointer" }}
//                 >
//                   {/* SVG Play Button */}
//                   <svg
//                     width="80"
//                     height="80"
//                     viewBox="0 0 80 80"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="d-block mx-auto"
//                   >
//                     <rect width="80" height="80" rx="40" fill="white" />
//                     <g clipPath="url(#clip0)">
//                       <path
//                         d="M36.7399 48.6001C36.1712 48.573 35.7108 48.3834 35.3587 48.0313C34.9795 47.6522 34.7899 47.1918 34.7899 46.6501V32.3501C34.7899 31.8084 34.9795 31.348 35.3587 30.9688C35.7108 30.6168 36.1712 30.4272 36.7399 30.4001C37.092 30.4001 37.4305 30.4949 37.7555 30.6845L49.4555 37.8345C50.0514 38.2407 50.3628 38.7959 50.3899 39.5001C50.3628 40.2043 50.0514 40.7595 49.4555 41.1657L37.7555 48.3157C37.4305 48.5053 37.092 48.6001 36.7399 48.6001Z"
//                         fill="#080809"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0">
//                         <rect
//                           width="20.8"
//                           height="21"
//                           fill="white"
//                           transform="matrix(1 0 0 -1 29.59 50)"
//                         />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             {newsData.map((news, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleNewsBoxClick(index)}
//                 className={`news-box new-slider-box d-flex align-items-center py-3 px-2 mb-4 rounded ${index === activeNewsIndex ? "border-primary" : ""
//                   }`}
//                 style={{
//                   cursor: "pointer",
//                   height: "fit-content",
//                   border: "1px solid #003F9C",
//                 }}
//               >
//                 <div className="news-box-content d-flex align-items-center">
//                   <div
//                     className="youtube-logo my-4"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       openModal(news.videoUrl);
//                     }}
//                   >
//                     <svg width="92" height="82" viewBox="0 0 92 82" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <g filter="url(#filter0_d_138_2643)">
//                         <rect x="12" y="9" width="68" height="58" rx="12" fill="#B9C0C9" />
//                       </g>
//                       <path d="M58.3876 31.41C58.2442 30.8317 57.9626 30.304 57.5708 29.8795C57.1791 29.4549 56.6909 29.1484 56.1549 28.9904C54.1863 28.418 46.2889 28.418 46.2889 28.418C46.2889 28.418 38.3914 28.418 36.4228 28.9904C35.8868 29.1484 35.3986 29.4549 35.0069 29.8795C34.6151 30.304 34.3335 30.8317 34.1901 31.41C33.6621 33.5464 33.6621 37.9999 33.6621 37.9999C33.6621 37.9999 33.6621 42.4533 34.1901 44.5897C34.3334 45.1682 34.6149 45.6962 35.0066 46.121C35.3984 46.5457 35.8866 46.8525 36.4228 47.0106C38.3925 47.5818 46.2889 47.5818 46.2889 47.5818C46.2889 47.5818 54.1863 47.5818 56.1549 47.0106C56.6911 46.8525 57.1793 46.5457 57.5711 46.121C57.9628 45.6962 58.2444 45.1682 58.3876 44.5897C58.9156 42.4558 58.9156 37.9999 58.9156 37.9999C58.9156 37.9999 58.9156 33.5464 58.3876 31.41ZM43.7061 42.044V33.9569L50.3065 38.0011L43.7061 42.044Z" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" strokeLinejoin="round" />
//                       <defs>
//                         <filter id="filter0_d_138_2643" x="0" y="0" width="92" height="82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//                           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                           <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
//                           <feOffset dy="3" />
//                           <feGaussianBlur stdDeviation="6" />
//                           <feComposite in2="hardAlpha" operator="out" />
//                           <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
//                           <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_2643" />
//                           <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_2643" result="shape" />
//                         </filter>
//                       </defs>
//                     </svg>
//                   </div>
//                   <div>
//                     <h6>{news.title}</h6>
//                     <p className="text-muted mb-0">{news.time}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <Modal show={isModalOpen} onHide={closeModal} centered>
//           <Modal.Header closeButton />
//           <Modal.Body>
//             <iframe
//               width="100%"
//               height="400"
//               src={currentVideo}
//               title="YouTube video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </Modal.Body>
//         </Modal>
//       )}
//     </section>
//   );
// }




function NewsInternalPlatform() {
  const { t, i18n } = useTranslation("global");
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/news/minis_news`,
          {
            headers: {
              'lang': i18n.language,
            },
          }
        );
        const result = await response.json();
        setNewsList(result.result.data || []);
      } catch (error) {
        toast.error(t('error'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [i18n.language]);

  return (
    <section className="news-internal-platform">
      <div className="container">
        <MainTitle title={t("news.internal_title")} />
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12 mb-4">
            {isLoading ? (
              <div
                className="bg-secondary mb-4"
                style={{ height: "300px", borderRadius: "10px", opacity: 0.2 }}
              />
            ) : newsList[0] && (
              <Link to={`MinsitryNewsDetailsPage/${newsList[0]?.id}`}>
                <CommonNewsBox
                  image={newsList[0].image_url}
                  type={t("news.category_1")}
                  title={newsList[0].title}
                  time={new Date(newsList[0].created_at).toLocaleDateString()}
                  description={newsList[0].description}
                  styling="500px"
                  styling2='cover'
                />
              </Link>
            )}
          </div>

          <div className="row  align-items-center mt-4">
            {isLoading ? [1, 2, 3].map((_, index) => (
              <div className="col-lg-6 mb-2" key={index}>
                <div
                  className="bg-secondary mb-2"
                  style={{ height: "150px", borderRadius: "8px", opacity: 0.2 }}
                />
              </div>
            ))
              : newsList?.slice(1, 4).map((item, index) => (
                <>
                  <div className="col-lg-6 mb-2" key={index}>
                    <div className="newBox mb-2">
                      <Link to={`MinsitryNewsDetailsPage/${item?.id}`} className="text-black">
                        <NewsBoxNew
                          image={item.image_url}
                          type={t("news.category_1")}
                          title={item.title}
                          time={new Date(item.created_at).toLocaleDateString()}
                        />

                      </Link>
                    </div>
                  </div>
                </>

              ))}
          </div>
          {newsList.length === 0 && <p>{t('noData')}</p>}
        </div>
      </div>
    </section>
  );
}




function DesitionsAndPhotos({ t }) {
  const [Desicions, setDesicions] = useState([]);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedDesicion, setSelectedDesicion] = useState(null); // Selected desicion for modal
  // Function to handle modal opening
  const { i18n } = useTranslation("global");

  const openModal = (desicion) => {
    setSelectedDesicion(desicion);
    setShowModal(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedDesicion(null); // Reset selected desicion
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/pictures/home_pictures`, {
          headers: {
            'lang': i18n.language,
          },
        });
        const result = await response.json();
        setImages(result.result || []);

      } catch (error) {
        toast.error(t('error'));
      }
    };

    fetchImages();
  }, [i18n.language]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/decisions/all_decisions`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'lang': i18n.language,
          },
        });
        const result = await response.json();
        setDesicions(result.result.data || []);

      } catch (error) {
        toast.error(t('error'));
      }
    };

    fetchImages();
  }, [i18n.language]);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowModal2(true);
  };


  return (
    <section className="desitions-and-photos mb-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <MainTitle title={t("decisions.title")} />
            {Desicions.slice(0, 3).map((desition, index) => (
              <div className="new-box-content mb-3" key={index} onClick={() => openModal(desition)} // Open modal on card click
              >
                <NewBoxContent
                  type={t("decisions.category_1")}
                  title={`${desition.text.slice(0, 80)}...`}
                  time={`${desition.created_at.slice(0, 10)}`}
                />
              </div>
            ))}
            {Desicions.length === 0 && <p>{t('noData')}</p>}
          </div>
          <div className="col-lg-6">
            <MainTitle title={t("photos.title")} />
            <div className="desiscions-gallary">
              {images?.map((img, index) => (
                <img
                  src={img.link_url}
                  alt={t("photos.alt_text")}
                  key={index}
                  onClick={() => handleImageClick(img)}
                  style={{ cursor: "pointer" }}
                />
              ))}

              {images.length === 0 && <p>{t("noData")}</p>}
            </div>

            {showModal2 && selectedImage && (
              <div
                className="modal fade show"
                style={{ display: "block", marginBottom : "70px" }}
                tabIndex="-1"
                aria-labelledby="imageModalLabel"
                aria-hidden="true"
                onClick={() => setShowModal2(false)} 
              >
                <div className="modal-dialog modal-lg" style={{marginBottom : "100px"}} onClick={(e) => e.stopPropagation()}>
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="imageModalLabel">
                        {t("photos.title")}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setShowModal2(false)}
                      ></button>
                    </div>
                    <div className="modal-body text-center">
                      <img
                        src={selectedImage?.link_url}
                        alt={t("photos.alt_text")}
                        style={{ width: "100%", height : "300px", objectFit : "cover"  }}
                      />
                      <p>{selectedImage?.text}</p>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => setShowModal2(false)}
                      >
                        {t("decisionsPage.close")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
      {/* Modal for displaying decision details */}
      {showModal && selectedDesicion && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          onClick={closeModal} // Close modal when clicking outside content
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {t("decisionsPage.modalTitle")}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <h6 style={{ lineHeight: "2.3" }}>{selectedDesicion?.text}</h6>
                <p style={{ lineHeight: "1.7" }}>{selectedDesicion?.description}</p>
                <p>
                  {t("decisionsPage.createdAt")}: {selectedDesicion?.created_at}
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  {t("decisionsPage.close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}



export default Home;
