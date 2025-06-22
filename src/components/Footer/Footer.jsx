import { Link } from 'react-router-dom'
import './footer.css'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
export function Footer() {
  const [t] = useTranslation("global");
  const [socials, setSocials] = useState([]);
  const { i18n } = useTranslation("global")
  useEffect(() => {

    const getSocials = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/socials?isMobile=false`,
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

    getSocials();
  }, [i18n.language]);
  return (
    <footer style={{ backgroundImage: "url('/assets/linear-background.png')" }}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <img
              src="/assets/logo.png"
              className="footer-logo mb-3"
              alt={t("footer.altLogo")}
            />
          </div>
          <div className="col-md-3 mb-3">
            <ul>
              <li className="text-white fw-bold">{t("footer.links")}</li>
              <li>
                <Link to="/about/overview">{t("footer.aboutMinistry")}</Link>
              </li>
              <li>
                <Link to="/services">{t("footer.services")}</Link>
              </li>
              <li>
                <Link to="/mediaOffice/allnews">{t("footer.mediaOffice")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("footer.contactUs")}</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="social-logos">
              <span className="text-white" style={{ fontSize: "20px" }}>
                {t("footer.followUs")}
              </span>
              <ul className="d-flex">
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
      </div>
      <hr className="w-100" style={{ border: "1px solid white" }} />
      <p className="mx-auto text-center text-white">
        {t("footer.rights")} ©{" "}
        <Link to={'https://brmja.tech'} style={{ color: "#FFA500" }}>{t("footer.programming")}</Link>.
      </p>
    </footer>
  );
}
