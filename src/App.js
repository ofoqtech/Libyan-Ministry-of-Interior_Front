import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { ContactUs } from "./pages/contact-us/contactUs";
import { AllServicesPage } from "./pages/Services/allservices/allServices";
import { RequestDetailsPage } from "./pages/Services/RequestDetails/RequestDetails";
import { CriminalReportsPage } from "./pages/Services/criminal-reports/criminal-reports";
import { Overview } from "./pages/about/Overview/Overview";
import { MinistryWords } from "./pages/about/Ministry Words/MinistryWords";
import Desicions from "./pages/about/desicions/desicions";
import DesicionDetails from "./pages/about/desicion Details/desicionDetails";
import EmergencyCases from "./pages/about/Emergency Cases/EmergencyCases";
import DevelopmentGoals from "./pages/about/Development Goals/developmentGoals";
import FAQ from "./pages/about/FAQ/FAQ";
import Allnews from "./pages/mediaOffice/news/all-news/allnews";
import NewsDetails from "./pages/mediaOffice/news/newsDetails/newsDetails";
import AllMeetings from "./pages/mediaOffice/mettings/allMeetings/AllMeetings";
import MeetingsDetails from "./pages/mediaOffice/mettings/MeetingDetails/MeetingsDetails";
import AllLibrary from "./pages/mediaOffice/libraryGallery/allLibrary/allLibrary";
import LibraryDetails from "./pages/mediaOffice/libraryGallery/LibraryDetails/LibraryDetails";
import DevelopmentDetailsPage from "./pages/about/development goals Details/developmentDetails";
import NotFound from "./pages/404/404";
import LoginPage from "./pages/Login/LoginPage";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import MediaDataRegistration from "./pages/MediaDataRegistration/MediaDataRegistration";
import RegisteringOrganizationData from "./pages/RegisteringOrganizationData/RegisteringOrganizationData";
import { IDFORMPage } from "./pages/Services/IdForm/IDForm";
import { useTranslation } from "react-i18next";
import useLocalStorage from "use-local-storage";
import ProfilePage from "./pages/profile/profile";

function LayoutWrapper({ children }) {
  const location = useLocation();


  const authRoutes = ["/login", "/createaccount" , "/chooseaccounttype" , "/mediadataregistration" , "/registeringorganizationdata"];

  const hideLayout = authRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function AppRoutes() {
  const [t, i18n] = useTranslation("global");
  const [lang, setLang] = useLocalStorage("lang", "ar");
  const dir = i18n.dir();


  /* eslint-disable */
  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = dir;
    document.title =
      localStorage.getItem("lang") === `"ar"`
        ? "الوزاره الداخلية بالحكومة الليبية"
        : "Ministry of Interior of the Libyan government";
  }, [dir, i18n, lang]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="/services" element={<AllServicesPage />} />
      <Route path="/request-details" element={<RequestDetailsPage />} />
      <Route path="/services/criminal-reports" element={<CriminalReportsPage />} />
      <Route path="/services/identical" element={<IDFORMPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      
      <Route path="/about/overview" element={<Overview />} />
      <Route path="/about/Ministry-words" element={<MinistryWords />} />
      <Route path="/about/desicions" element={<Desicions />} />
      <Route path="/about/desicions-details" element={<DesicionDetails />} />
      <Route path="/about/emergencyCases" element={<EmergencyCases />} />
      <Route path="/about/developmentgoals" element={<DevelopmentGoals />} />
      <Route path="/about/development-details" element={<DevelopmentDetailsPage />} />
      <Route path="/about/faq" element={<FAQ />} />
      <Route path="/mediaOffice/allnews" element={<Allnews />} />
      <Route path="/mediaOffice/newsdetails" element={<NewsDetails />} />
      <Route path="/mediaOffice/allmeetings" element={<AllMeetings />} />
      <Route path="/mediaOffice/meetingsdetails" element={<MeetingsDetails />} />
      <Route path="/mediaOffice/alllibrary" element={<AllLibrary />} />
      <Route path="/mediaOffice/librarydetails" element={<LibraryDetails />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/mediadataregistration" element={<MediaDataRegistration />} />
      <Route path="/registeringorganizationdata" element={<RegisteringOrganizationData />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <AppRoutes />
      </LayoutWrapper>
    </BrowserRouter>
  );
}

export default App;
