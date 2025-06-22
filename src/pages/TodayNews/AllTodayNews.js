import { Link } from "react-router-dom";
import { GlobalContainer } from "../../components/globalComponent/globalComponent";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState, useEffect } from "react";
import CommonNewsBox from "../../components/CommonNewsBox/CommonNewsBox";

export default function AllTodayNews() {
  const { t } = useTranslation("global");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GlobalContainer
        text={t("header.latest_news")}
        header={t("today_news.breadcrumb")}
      />
      <MainAllTodayNews />
    </>
  );
}

function MainAllTodayNews() {
  const { t, i18n } = useTranslation("global");
  const [allTodayNews, setAllTodayNews] = useState({});
  const [loading, setLoading] = useState(true); // renamed for clarity

  useEffect(() => {
    const getAllTodayNews = async () => {
      try {
        setLoading(true); // show skeleton
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/news/home_latest_news?isMobile=false`,
          {
            headers: {
              "Content-Type": "application/json",
              lang: i18n.language,
            },
          }
        );
        if (response.status === 200) {
          console.log(response.data.data);
          setAllTodayNews(response.data.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // hide skeleton
      }
    };

    getAllTodayNews();
  }, [i18n.language]);

  return (
    <section className="all_today_news my-5">
      <div className="container">
        {loading ? (
          // Skeleton
          <div className="row justify-content-center my-3">
            <div className="col-lg-4">
              <div className="skeleton-wrapper">
                <div className="skeleton-image mb-3"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text short mb-2"></div>
              </div>
            </div>
          </div>
        ) : allTodayNews && allTodayNews.length > 0 ? (
          <div className="row justify-content-center my-3">
            {allTodayNews.map((item,index) => (
              <div key={item.id || index} className="col-xl-4 col-lg-4 col-md-4 col-12">
                <Link to={`/news/details/${item?.id}`}>
                <CommonNewsBox
                  image={item.image_url}
                  type={t("today_news.category_1")}
                  title={item?.name}
                  sizing="18px"
                  lineHeight="50px"
                  styling="95.8%"
                />
              </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">{t("noData")}</p>
        )}
      </div>
    </section>
  );
}