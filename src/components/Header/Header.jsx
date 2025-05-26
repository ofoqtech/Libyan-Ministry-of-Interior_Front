import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
import React, { useCallback, useMemo, useRef } from "react";
import { Swiper } from "swiper";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Marquee from "react-fast-marquee";

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

function TopNav({ t }) {
  const [breakingNews, setBreakingNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation("global");
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const getBreakingNews = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/news/breaking_news`,
          {
            headers: {
              "Content-Type": "application/json",
              "lang": i18n.language,
            },
          }
        );
        if (response.status === 200) {
          setBreakingNews(response.data.result.data);
        }
      } catch (err) {
        toast.error(t("noData") || err?.response?.data?.message || "Something went wrong");
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
        toast.error(
          t("noData") || err?.response?.data?.message || "Something went wrong"
        );
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

        <div className="top-nav-list d-flex gap-3 align-items-center mx-2">
          <div className="time d-flex gap-2 mt-3">

            {breakingNews?.created_at && <>
              <i className="uil uil-calendar-alt"></i>
              <p style={{ fontSize: "14px", whiteSpace: "nowrap" }} className="fw-light">
                {`${breakingNews?.created_at?.slice(0, 10)}`}
              </p>
            </>}
          </div>
          {breakingNews?.title &&  <div
            className="fast-news text-white"
            style={{
              background: "#003f9c",
              padding: "8px 20px",
              borderRadius: "4px",
              fontSize: "14px",
              width: "150px",
              textAlign: "center",
              maxWidth: "100%",
              whiteSpace: "nowrap"
            }}
          >
            {t("header.breakingNews")}
          </div> }
         
          <Marquee speed={90} delay={0}>
            <p className="mt-3">
              {breakingNews?.title && `${breakingNews?.title?.slice(0, 47)} ...`}
              {breakingNews?.title && <Link to={`/CommonNewsDetailsPage/${breakingNews?.id}`}>
                {t("ReadMore")}
              </Link>}

            </p>
          </Marquee>
        </div>


        <div className="top-nav-social">
          <ul className="d-flex mt-3">
            {socials.map(({ id, link, image_url }) => {
              const icon = (
                <img
                  src={image_url}
                  alt="social"
                  style={{ width: "30px", height: "30px" }}
                />
              );
              return (
                <li key={id} className="my-2 mx-2">
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
                  <Link className="dropdown-item" to="/about/programs-news">
                    {t("header.programsNews")}
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
                <li>
                  <Link
                    className="dropdown-item"
                    to="/mediaOffice/DirectoratesNews"
                  >
                    {t("header.DirectoratesNews")}
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

            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle text-white"
                id="contactDrop"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("header.contact")}
              </Link>
              <ul className="dropdown-menu" aria-labelledby="contactDrop">
                <li>
                  <Link className="dropdown-item" to="/contact">
                    {t("header.contactTheMinistry")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact/directorate">
                    {t("header.contacTheDirectorate")}
                  </Link>
                </li>
              </ul>
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
                  to="/about/programs-news"
                  onClick={() => setMobHeader(false)}
                >
                  {t("header.programsNews")}
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

          <div className="dropdown " style={{ marginBottom: "15px" }}>
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
              <li onClick={() => setMobHeader(false)}>
                <Link
                  className="dropdown-item"
                  to="/mediaOffice/DirectoratesNews"
                >
                  {t("header.DirectoratesNews")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown" style={{ marginBottom: "15px" }}>
            <div
              className="dropdown-toggle"
              type="button"
              id="contactDrop"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "10px", cursor: "pointer" }}
            >
              {t("header.contact")}
            </div>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="contactDrop"
              data-bs-popper="static"
            >
              <li>
                <Link
                  className="dropdown-item"
                  to="/contact"
                  onClick={() => setMobHeader(false)}
                >
                  {t("header.contactTheMinistry")}
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  style={{ marginBottom: "15px" }}
                  to="/contact/1"
                  onClick={() => setMobHeader(false)}
                >
                  {t("header.contacTheDirectorate")}
                </Link>
              </li>
            </ul>
          </div>
          {user == null ? (
            <li>
              <Link to="/login">{t("header.login")}</Link>
            </li>
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
                  <Link
                    className="dropdown-item"
                    to="/profile"
                    style={{ margin: "0 3px" }}
                  >
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