import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
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
    console.log(dir)
    document.dir = dir;
    document.title =
      localStorage.getItem("lang") === `"ar"`
        ? "الوزاره الداخلية بالحكومة الليبية"
        : "Ministry of Interior of the Libyan government";
  }, [dir, i18n, lang]);


  return (
    <>
      <DesktopHeader t={t} mobHeader={mobHeader} setMobHeader={setMobHeader} handleChange={handleChange} />
      <ModileHeader t={t} mobHeader={mobHeader} setMobHeader={setMobHeader} handleChange={handleChange} />
    </>
  );
}

function DesktopHeader({ mobHeader, setMobHeader, handleChange, t }) {
  return (
    <div className="header px-2">
      <div className="container px-2">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="left-header">
          <div className="links">
            <div className="link">
              <Link to={"/"}> الرئيسية</Link>
            </div>
            <div className="link menu">
              <Link to={"/"}>عن الوزارة</Link>
              <i className="uil uil-angle-down"></i>
            </div>
            <div className="link menu">
              <Link to={"/services"}>الخدمات</Link>

            </div>
            <div className="link menu">
              <Link to={"/"}>المكتب الاعلامي</Link>
              <i className="uil uil-angle-down"></i>
            </div>
            <div className="link">
              <Link to={"/contact"}>تواصل معنا</Link>
            </div>

          </div>
          <div className="lang lang-desktop">
            <i className="uil uil-globe"></i>
            <div className="lang-menu">
              <ul>
                <li className="w-100" onClick={() => handleChange("ar")}>{t('header.ar')}</li>
                <li onClick={() => handleChange("en")}>{t('header.en')}</li>
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

function ModileHeader({ mobHeader, setMobHeader, handleChange, t }) {
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
              <img src="/assets/logo.png" alt="شعار وزاره الداخليه بالحكومه الليبيه " />
            </div>
          </Link>
          <button className="close-btn" onClick={() => setMobHeader(false)}>
            <i className="uil uil-times"></i>
          </button>
        </div>
        <ul>
          <li>
            <NavLink to={"/"} onClick={() => setMobHeader(false)}>
              الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} onClick={() => setMobHeader(false)}>
              عن الوزارة
            </NavLink>
          </li>
          <li>
            <NavLink to={"/services"} onClick={() => setMobHeader(false)}>
              الخدمات
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} onClick={() => setMobHeader(false)}>
              المكتب الاعلامي
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} onClick={() => setMobHeader(false)}>
              تواصل معنا
            </NavLink>
          </li>

          <div className="dropdown">
            <div
              className="dropdown-toggle" // Add this class
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "10px", cursor: "pointer" }} // Add cursor pointer for better UX
            >
              اللغه
            </div>
            <ul className="dropdown-menu language-mob" aria-labelledby="dropdownMenuButton">
              <li onClick={() => handleChange("ar")}>
                <a className="dropdown-item" href="#">
                {t('header.ar')}
                </a>
              </li>
              <li onClick={() => handleChange("en")}>
                <a className="dropdown-item" href="#">
                {t('header.en')}
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
