import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
i18next.init({
    lng: "ar",
    resources: {
      ar: {
        global: global_ar,
      },
      en: {
        global: global_en,
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  );
