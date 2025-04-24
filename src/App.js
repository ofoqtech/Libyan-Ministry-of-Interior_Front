import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
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
import TodayNewsDetailsPage from "./pages/NewsDetails/NewsDetails";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import Vertification from "./pages/verification/verification";
import { ComplaintPage } from "./pages/complaint/complaint";
import ProtectedRoute from "./components/ProtectedRoute";
import CommonNewsDetailsPage from "./pages/commonNewsDetails/commonNewsDetails";
import { ContactUs } from "./pages/contact-us/contactUs";
import ForgetPassowrd from "./pages/ForgetPassword/ForgetPassword";
import VertificationOtp from "./pages/vertification-otp/vertification-otp";
import ChangePassword from "./pages/change password/changePassword";
import ActiveAccount from "./pages/ActiveAccount/ActiveAccount";
import MinsitryNewsDetailsPage from "./pages/MinistryNewsDetails/MinistryNewsDetails";
function LayoutWrapper({ children }) {
  const location = useLocation();

  const authRoutes = [
    "/login",
    "/createaccount",
    "/vertification",
    "/vertification-otp",
    "/chooseaccounttype",
    "/change-password",
    "/mediadataregistration",
    "/registeringorganizationdata",
    "/forget-password",
    "/active-account",
  ];

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
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/forget-password" element={<ForgetPassowrd />} />
      <Route path="/services" element={<AllServicesPage />} />
      <Route path="/active-account" element={<ActiveAccount />} />
      <Route path="/request-details/:id" element={<RequestDetailsPage />} />
      <Route
        path="/services/criminal-reports/:type1/:type2"
        element={<CriminalReportsPage />}
      />
      <Route path="/services/identical" element={<IDFORMPage />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route path="/news/details/:id" element={<TodayNewsDetailsPage />} />
      <Route path="/about/overview" element={<Overview />} />
      <Route path="/about/Ministry-words" element={<MinistryWords />} />
      <Route path="/about/desicions" element={<Desicions />} />
      <Route path="/about/desicions-details" element={<DesicionDetails />} />
      <Route path="/about/emergencyCases" element={<EmergencyCases />} />
      <Route path="/about/developmentgoals" element={<DevelopmentGoals />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route
        path="/about/development-details"
        element={<DevelopmentDetailsPage />}
      />
      <Route path="/about/faq" element={<FAQ />} />
      <Route path="/about/complaint" element={<ComplaintPage />} />

      <Route path="/mediaOffice/allnews" element={<Allnews />} />
      <Route path="/mediaOffice/newsdetails/:id" element={<NewsDetails />} />
      <Route path="/mediaOffice/allmeetings" element={<AllMeetings />} />
      <Route
        path="/mediaOffice/meetingsdetails/:id"
        element={<MeetingsDetails />}
      />
      <Route path="/mediaOffice/alllibrary" element={<AllLibrary />} />
      <Route path="/mediaOffice/librarydetails" element={<LibraryDetails />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/vertification" element={<Vertification />} />
      <Route path="/vertification-otp" element={<VertificationOtp />} />

      <Route
        path="/CommonNewsDetailsPage/:id"
        element={<CommonNewsDetailsPage />}
      />
      <Route
        path="/MinsitryNewsDetailsPage/:id"
        element={<MinsitryNewsDetailsPage />}
      />

      <Route path="/createaccount" element={<CreateAccount />} />
      <Route
        path="/mediadataregistration"
        element={<MediaDataRegistration />}
      />
      <Route
        path="/registeringorganizationdata"
        element={<RegisteringOrganizationData />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <LayoutWrapper>
          <AppRoutes />
        </LayoutWrapper>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
