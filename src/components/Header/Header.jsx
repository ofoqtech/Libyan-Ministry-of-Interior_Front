import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";

function Header() {
  const [mobHeader, setMobHeader] = useState(false);

  return (
    <>
      <DesktopHeader mobHeader={mobHeader} setMobHeader={setMobHeader} />
      <ModileHeader mobHeader={mobHeader} setMobHeader={setMobHeader} />
    </>
  );
}

function DesktopHeader({ mobHeader, setMobHeader }) {
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
              <Link to={"/about"}>عن الوزارة</Link>
              <i className="uil uil-angle-down"></i>
            </div>
            <div className="link menu">
              <Link to={"/services"}>الخدمات</Link>
              <i className="uil uil-angle-down"></i>
            </div>
            <div className="link menu">
              <Link to={"/"}>المكتب الاعلامي</Link>
              <i className="uil uil-angle-down"></i>
            </div>
            <div className="link">
              <Link to={"/"}>تواصل معنا</Link>
            </div>

          </div>
          <div className="lang lang-desktop">
            <i className="uil uil-globe"></i>
            <div className="lang-menu">
              <ul>
                <li>العربية</li>
                <li>الانجليزية</li>
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

function ModileHeader({ mobHeader, setMobHeader }) {
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
            <NavLink to={"/1"} onClick={() => setMobHeader(false)}>
              عن الوزارة
            </NavLink>
          </li>
          <li>
            <NavLink to={"/2"} onClick={() => setMobHeader(false)}>
              الخدمات
            </NavLink>
          </li>
          <li>
            <NavLink to={"/3"} onClick={() => setMobHeader(false)}>
              المكتب الاعلامي
            </NavLink>
          </li>
          <li>
            <NavLink to={"/4"} onClick={() => setMobHeader(false)}>
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
              <li>
                <a className="dropdown-item" href="#">
                  العربيه
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  English
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
