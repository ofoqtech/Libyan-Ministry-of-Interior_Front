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
          <img src="/assets/logo.png" alt={t('header.logo_alt')} />
        </div>
        <div className="left-header">
          <div className="links">
            <div className="link">
              <Link to={"/"}>{t('header.home')}</Link>
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
                {t('header.about')}
              </Link>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <Link className="dropdown-item" to="/about/overview">
                    {t('header.overview')}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/Ministry-words">
                    {t('header.ministryWords')}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/desicions">
                    {t('header.decisions')}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/emergencyCases">
                    {t('header.emergencyCases')}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/developmentgoals">
                    {t('header.developmentGoals')}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about/faq">
                    {t('header.faq')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="link menu">
              <Link to={"/services"}>{t('header.services')}</Link>
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
                {t('header.media_office')}
              </Link>
              <ul className="dropdown-menu" aria-labelledby="mediaOfficeDropdown">
                <li>
                  <Link className="dropdown-item" to="/mediaOffice/allnews">
                  {t('header.all_news')}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/mediaOffice/allmeetings">
                    {t('header.all_meetings')}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/mediaOffice/alllibrary">
                    {t('header.all_library')}
                  </Link>
                </li>

              </ul>
            </div>

            <div className="link">
              <Link to={"/contact"}>{t('header.contact')}</Link>
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
              <img src="/assets/logo.png" alt={t('header.logo_alt')} />
            </div>
          </Link>
          <button className="close-btn" onClick={() => setMobHeader(false)}>
            <i className="uil uil-times"></i>
          </button>
        </div>
        <ul>
          <li>
            <NavLink to={"/"} onClick={() => setMobHeader(false)}>
              {t('header.home')}
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
              {t('header.about')}
            </div>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuAbout"
              data-bs-popper="static"
            >
              <li>
                <Link className="dropdown-item" to="/about/overview">
                  {t('header.overview')}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about/Ministry-words">
                  {t('header.ministryWords')}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about/desicions">
                  {t('header.decisions')}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about/emergencyCases">
                  {t('header.emergencyCases')}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about/developmentgoals">
                  {t('header.developmentGoals')}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about/faq">
                  {t('header.faq')}
                </Link>
              </li>
            </ul>
          </div>
          <li>
            <NavLink to={"/services"} onClick={() => setMobHeader(false)}>
              {t('header.services')}
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
  {t('header.media_office')}
</div>
  <ul
    className="dropdown-menu dropdown-menu-end"
    aria-labelledby="dropdownMenuAbout"
    data-bs-popper="static"
  >
                <li>
                  <Link className="dropdown-item" to="/mediaOffice/allnews">
                  {t('header.all_news')}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/mediaOffice/allmeetings">
                    {t('header.all_meetings')}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/mediaOffice/alllibrary">
                    {t('header.all_library')}
                  </Link>
                </li>
   
  </ul>
</div>
          <li>
            <NavLink to={"/contact"} onClick={() => setMobHeader(false)}>
              {t('header.contact')}
            </NavLink>
          </li>


          <div className="dropdown">
            <div
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "10px", cursor: "pointer" }}
            >
              {t('header.language')}
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
