import { Link } from 'react-router-dom'
import './footer.css'
import { useTranslation } from 'react-i18next';

export function Footer() {
  const [t] = useTranslation("global");

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
              <ul className='d-flex '>
                <li>
                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_351_4708)">
                            <rect x="14" y="12" width="40" height="40" rx="20" fill="white" shapeRendering="crispEdges" />
                            <path d="M38.4418 28.4297C39.5902 29.5781 40.3012 31.082 40.3012 32.7227C40.3012 36.0586 37.5121 38.793 34.1488 38.793C33.1371 38.793 32.1527 38.5195 31.2504 38.0547L28.0512 38.875L28.8988 35.7305C28.3793 34.8281 28.0785 33.7891 28.0785 32.6953C28.0785 29.3594 30.8129 26.625 34.1488 26.625C35.7895 26.625 37.3207 27.2812 38.4418 28.4297ZM34.1488 37.7539C36.9379 37.7539 39.2621 35.4844 39.2621 32.7227C39.2621 31.3555 38.6879 30.0977 37.7309 29.1406C36.7738 28.1836 35.516 27.6641 34.1762 27.6641C31.3871 27.6641 29.1176 29.9336 29.1176 32.6953C29.1176 33.6523 29.391 34.582 29.8832 35.4023L30.0199 35.5938L29.5004 37.4531L31.4145 36.9336L31.5785 37.043C32.3715 37.5078 33.2465 37.7539 34.1488 37.7539ZM36.9379 33.9805C37.0746 34.0625 37.184 34.0898 37.2113 34.1719C37.266 34.2266 37.266 34.5273 37.1293 34.8828C36.9926 35.2383 36.391 35.5664 36.1176 35.5938C35.6254 35.6758 35.2426 35.6484 34.2855 35.2109C32.7543 34.5547 31.7699 33.0234 31.6879 32.9414C31.6059 32.832 31.0863 32.1211 31.0863 31.3555C31.0863 30.6172 31.4691 30.2617 31.6059 30.0977C31.7426 29.9336 31.9066 29.9062 32.016 29.9062C32.098 29.9062 32.2074 29.9062 32.2895 29.9062C32.3988 29.9062 32.5082 29.8789 32.6449 30.1797C32.7543 30.4805 33.0824 31.2188 33.1098 31.3008C33.1371 31.3828 33.1645 31.4648 33.1098 31.5742C32.8363 32.1484 32.5082 32.1211 32.6723 32.3945C33.2738 33.4062 33.848 33.7617 34.7504 34.1992C34.8871 34.2812 34.9691 34.2539 35.0785 34.1719C35.1605 34.0625 35.4613 33.707 35.5434 33.5703C35.6527 33.4062 35.7621 33.4336 35.8988 33.4883C36.0355 33.543 36.7738 33.8984 36.9379 33.9805Z" fill="#0F0F6F" />
                        </g>
                        <defs>
                            <filter id="filter0_d_351_4708" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="7" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.0235294 0 0 0 0 0.258824 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_351_4708" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_351_4708" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </li>
                <li>
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
            </li>
                <li>

                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_351_4704)">
                            <rect x="14" y="12" width="40" height="40" rx="20" fill="white" shapeRendering="crispEdges" />
                            <path d="M37.4566 33.625H35.4059V39.75H32.6715V33.625H30.4293V31.1094H32.6715V29.168C32.6715 26.9805 33.984 25.75 35.9801 25.75C36.9371 25.75 37.9488 25.9414 37.9488 25.9414V28.1016H36.8277C35.734 28.1016 35.4059 28.7578 35.4059 29.4688V31.1094H37.8395L37.4566 33.625Z" fill="#0F0F6F" />
                        </g>
                        <defs>
                            <filter id="filter0_d_351_4704" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="7" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.0235294 0 0 0 0 0.258824 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_351_4704" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_351_4704" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-100" style={{ border: "1px solid white" }} />
      <p className="mx-auto text-center text-white">
        {t("footer.rights")} ©{" "}
        <span style={{ color: "#FFA500" }}>{t("footer.programming")}</span>.
      </p>
    </footer>
  );
}
