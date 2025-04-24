import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

function Header() {
  const [mobHeader, setMobHeader] = useState(false);

  const [t, i18n] = useTranslation("global");
  const [lang, setLang] = useLocalStorage("lang", "ar");
  const dir = i18n.dir();

  const handleChange = (value) => {
    setLang(value);
    i18n.changeLanguage(value);
    setMobHeader(false);
  };

  /* eslint-disable */
  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = dir;
    document.title =
      localStorage.getItem("lang") === `"ar"`
        ? "الوزاره الداخلية بالحكومة الليبية"
        : "Ministry of Interior of the Libyan government";
  }, [dir, i18n, lang]);
  const { user, logout } = useAuth();

  return (
    <>
      <TopNav t={t} i18n={i18n} />
      <DesktopHeader
        t={t}
        user={user}
        logout={logout}
        mobHeader={mobHeader}
        setMobHeader={setMobHeader}
        handleChange={handleChange}
      />
      <ModileHeader
        t={t}
        user={user}
        logout={logout}
        mobHeader={mobHeader}
        setMobHeader={setMobHeader}
        handleChange={handleChange}
      />
    </>
  );
}

function TopNav({ t, i18n }) {
  const [breakingNews, setBreakingNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const getBreakingNews = async () => {
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
          setBreakingNews(response.data.result.data[0]);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    const getSocials = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/socials`,
          {
            headers: {
              "Content-Type": "application/json",
              lang: i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setSocials(response.data.result);
        }
      } catch (err) {
        toast.error(t("noData") || err?.response?.data?.message || "Something went wrong");
      }
    };

    getBreakingNews();
    getSocials();
  }, [i18n.language]);

  if (loading) {
    return (
      <div className="top-nav">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="loading-indicator p-2 my-3">
            <p>{t("loading")}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="top-nav">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="top-nav-list d-flex gap-3 align-items-center ">
          <div className="time d-flex gap-2 mt-3">
            <i className="uil uil-calendar-alt"></i>
            <p style={{ fontSize: "14px" }} className="fw-light">
              {`${breakingNews?.created_at?.slice(0, 10)}`}
            </p>
          </div>
          <div
            className="fast-news text-white"
            style={{
              background: "#003f9c",
              padding: "8px 20px",
              borderRadius: "4px",
              fontSize: "14px",
              width: "150px",
              textAlign: "center",
              maxWidth: "100%",
            }}
          >
            {t("header.breakingNews")}
          </div>
          <p className="mt-3">
            {`${breakingNews?.title?.slice(0, 47)}`}...
            <Link to={`/CommonNewsDetailsPage/${breakingNews.id}`}>{t("ReadMore")}</Link>
          </p>
        </div>
        <div className="top-nav-social">
          <ul className="d-flex mt-1 mb-0">
      {socials.map(({ id, link, type }) => {
        let icon;
        if (type === "facebook") {
          icon = (
            <svg
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_351_4704)">
                    <rect
                      x="14"
                      y="12"
                      width="40"
                      height="40"
                      rx="20"
                      fill="white"
                      shapeRendering="crispEdges"
                    />
                    <path
                      d="M37.4566 33.625H35.4059V39.75H32.6715V33.625H30.4293V31.1094H32.6715V29.168C32.6715 26.9805 33.984 25.75 35.9801 25.75C36.9371 25.75 37.9488 25.9414 37.9488 25.9414V28.1016H36.8277C35.734 28.1016 35.4059 28.7578 35.4059 29.4688V31.1094H37.8395L37.4566 33.625Z"
                      fill="#0F0F6F"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_351_4704"
                      x="0"
                      y="0"
                      width="68"
                      height="68"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0156863 0 0 0 0 0.0235294 0 0 0 0 0.258824 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_351_4704"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_351_4704"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
          );
        } else if (type === "twitter") {
          icon = (
            <svg
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_138_2815)">
              <rect
                x="14"
                y="12"
                width="40"
                height="40"
                rx="20"
                fill="white"
                shapeRendering="crispEdges"
              />
              <g clipPath="url(#clip0_138_2815)">
                <path
                  d="M28.076 27H31.61L34.755 31.498L38.53 27H39.659L35.185 32.114L40 39H36.468L33.183 34.303L29.128 39H28L32.753 33.688L28.076 27Z"
                  fill="#0F0F6F"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_138_2815"
                x="0"
                y="0"
                width="68"
                height="68"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0156863 0 0 0 0 0.0235294 0 0 0 0 0.258824 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_138_2815"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_138_2815"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_138_2815">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(28 27)"
                />
              </clipPath>
            </defs>
          </svg>
          );
        } else if (type === "instagram") {
          icon = (
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_141_3844)">
                    <rect x="14" y="12" width="40" height="40" rx="20" fill="white" shapeRendering="crispEdges" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M25 31C25 27.229 25 25.343 26.172 24.172C27.344 23.001 29.229 23 33 23H35C38.771 23 40.657 23 41.828 24.172C42.999 25.344 43 27.229 43 31V33C43 36.771 43 38.657 41.828 39.828C40.656 40.999 38.771 41 35 41H33C29.229 41 27.343 41 26.172 39.828C25.001 38.656 25 36.771 25 33V31ZM40 27.5C40 27.8978 39.842 28.2794 39.5607 28.5607C39.2794 28.842 38.8978 29 38.5 29C38.1022 29 37.7206 28.842 37.4393 28.5607C37.158 28.2794 37 27.8978 37 27.5C37 27.1022 37.158 26.7206 37.4393 26.4393C37.7206 26.158 38.1022 26 38.5 26C38.8978 26 39.2794 26.158 39.5607 26.4393C39.842 26.7206 40 27.1022 40 27.5ZM36 33C36 33.5304 35.7893 34.0391 35.4142 34.4142C35.0391 34.7893 34.5304 35 34 35C33.4696 35 32.9609 34.7893 32.5858 34.4142C32.2107 34.0391 32 33.5304 32 33C32 32.4696 32.2107 31.9609 32.5858 31.5858C32.9609 31.2107 33.4696 31 34 31C34.5304 31 35.0391 31.2107 35.4142 31.5858C35.7893 31.9609 36 32.4696 36 33ZM38 33C38 34.0609 37.5786 35.0783 36.8284 35.8284C36.0783 36.5786 35.0609 37 34 37C32.9391 37 31.9217 36.5786 31.1716 35.8284C30.4214 35.0783 30 34.0609 30 33C30 31.9391 30.4214 30.9217 31.1716 30.1716C31.9217 29.4214 32.9391 29 34 29C35.0609 29 36.0783 29.4214 36.8284 30.1716C37.5786 30.9217 38 31.9391 38 33Z" fill="#0F0F6F" />
                  </g>
                  <defs>
                    <filter id="filter0_d_141_3844" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.0235294 0 0 0 0 0.258824 0 0 0 0.1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_141_3844" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_141_3844" result="shape" />
                    </filter>
                  </defs>
                </svg>
          );
        }

        return (
          <li key={id}>
            <Link to={link} target="_blank" rel="noopener noreferrer">
              {icon}
            </Link>
          </li>
        );
      })}
    </ul>
        </div>
      </div>
    </div>
  );
}

function DesktopHeader({
  mobHeader,
  setMobHeader,
  handleChange,
  t,
  user,
  logout,
}) {
  return (
    <div className="header px-2">
      <div className="container px-2">
        <div className="logo">
          <img src="/assets/logo.png" alt={t("header.logo_alt")} />
        </div>
        <div className="left-header">
          <div className="links">
            <div className="link">
              <Link to={"/"}>{t("header.home")}</Link>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle text-white"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("header.about")}
              </Link>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <Link className="dropdown-item" to="/about/overview">
                    {t("header.overview")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/Ministry-words">
                    {t("header.ministryWords")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/desicions">
                    {t("header.decisions")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/emergencyCases">
                    {t("header.emergencyCases")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/developmentgoals">
                    {t("header.developmentGoals")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/faq">
                    {t("header.faq")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/complaint">
                    {t("header.complaint")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="link menu">
              <Link to={"/services"}>{t("header.services")}</Link>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle text-white"
                id="mediaOfficeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("header.media_office")}
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="mediaOfficeDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/mediaOffice/allnews">
                    {t("header.all_news")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/mediaOffice/allmeetings">
                    {t("header.all_meetings")}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/mediaOffice/alllibrary">
                    {t("header.all_library")}
                  </Link>
                </li>
              </ul>
            </div>
            {user == null ? (
              <div className="link menu">
                <Link to="/login">{t("header.login")}</Link>
              </div>
            ) : (
              <div className="dropdown">
                <button
                  className="btn text-white border-0 dropdown-toggle"
                  type="button"
                  id="profile"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("profile.profile")}
                </button>
                <ul className="dropdown-menu" aria-labelledby="profile">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      {t("profile.header1")}
                    </Link>
                  </li>

                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={logout}
                    >
                      {t("logout")}
                    </button>
                  </li>
                </ul>
              </div>
            )}

            <div className="link">
              <Link to={"/contact"}>{t("header.contact")}</Link>
            </div>
          </div>
          <div className="lang lang-desktop">
            <i className="uil uil-globe"></i>
            <div className="lang-menu">
              <ul>
                <li className="w-100" onClick={() => handleChange("ar")}>
                  {t("header.ar")}
                </li>
                <li onClick={() => handleChange("en")}>{t("header.en")}</li>
              </ul>
            </div>
          </div>
          <span className="menu-icon" onClick={() => setMobHeader(!mobHeader)}>
            <i className="uil uil-bars"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

function ModileHeader({
  mobHeader,
  setMobHeader,
  handleChange,
  t,
  user,
  logout,
}) {
  return (
    <>
      <div
        className={`overlay ${mobHeader ? "active" : ""}`}
        onClick={() => setMobHeader(false)}
      ></div>

      <div className={`navbar-mobile ${mobHeader ? "active" : "none"}`}>
        <div className="nav-header">
          <Link to="/" onClick={() => setMobHeader(false)}>
            <div className="logo">
              <img src="/assets/logo.png" alt={t("header.logo_alt")} />
            </div>
          </Link>
          <button className="close-btn" onClick={() => setMobHeader(false)}>
            <i className="uil uil-times"></i>
          </button>
        </div>
        <ul>
          <li>
            <NavLink to={"/"} onClick={() => setMobHeader(false)}>
              {t("header.home")}
            </NavLink>
          </li>
          <div className="dropdown">
            <div
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuAbout"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "10px", cursor: "pointer" }}
            >
              {t("header.about")}
            </div>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuAbout"
              data-bs-popper="static"
            >
              <li>
                <Link
                  className="dropdown-item"
                  to="/about/overview"
                  onClick={() => setMobHeader(false)}
                >
                  {t("header.overview")}
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/about/Ministry-words"
                  onClick={() => setMobHeader(false)}
                >
                  {t("header.ministryWords")}
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/about/desicions"
                  onClick={() => setMobHeader(false)}
                >
                  {t("header.decisions")}
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/about/emergencyCases"
                  onClick={() => setMobHeader(false)}
                >
                  {t("header.emergencyCases")}
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/about/developmentgoals"
                  onClick={() => setMobHeader(false)}
                >
                  {t("header.developmentGoals")}
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/about/faq"
                  onClick={() => setMobHeader(false)}
                >
                  {t("header.faq")}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about/complaint">
                  {t("header.complaint")}
                </Link>
              </li>
            </ul>
          </div>
          <li>
            <NavLink to={"/services"} onClick={() => setMobHeader(false)}>
              {t("header.services")}
            </NavLink>
          </li>
          <div className="dropdown">
            <div
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuAbout"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "10px", cursor: "pointer" }}
            >
              {t("header.media_office")}
            </div>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuAbout"
              data-bs-popper="static"
            >
              <li onClick={() => setMobHeader(false)}>
                <Link className="dropdown-item" to="/mediaOffice/allnews">
                  {t("header.all_news")}
                </Link>
              </li>

              <li onClick={() => setMobHeader(false)}>
                <Link className="dropdown-item" to="/mediaOffice/allmeetings">
                  {t("header.all_meetings")}
                </Link>
              </li>

              <li onClick={() => setMobHeader(false)}>
                <Link className="dropdown-item" to="/mediaOffice/alllibrary">
                  {t("header.all_library")}
                </Link>
              </li>
            </ul>
          </div>
          <li>
            <NavLink to={"/contact"} onClick={() => setMobHeader(false)}>
              {t("header.contact")}
            </NavLink>
          </li>
          {user == null ? (
            <div className="link menu mb-2">
              <Link to="/login">{t("header.login")}</Link>
            </div>
          ) : (
            <div className="dropdown" style={{ marginBottom: "15px" }}>
              <button
                className="btn text-black border-0 dropdown-toggle"
                type="button"
                id="profile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("profile.profile")}
              </button>
              <ul className="dropdown-menu" aria-labelledby="profile">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    {t("profile.header1")}
                  </Link>
                </li>

                <li>
                  <button
                    className="dropdown-item text-danger"
                    onClick={logout}
                  >
                    {t("logout")}
                  </button>
                </li>
              </ul>
            </div>
          )}

          <div className="dropdown">
            <div
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "10px", cursor: "pointer" }}
            >
              {t("header.language")}
            </div>
            <ul
              className="dropdown-menu language-mob"
              aria-labelledby="dropdownMenuButton"
            >
              <li onClick={() => handleChange("ar")}>
                <a className="dropdown-item" href="#">
                  {t("header.ar")}
                </a>
              </li>
              <li onClick={() => handleChange("en")}>
                <a className="dropdown-item" href="#">
                  {t("header.en")}
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Header;
