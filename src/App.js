import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/services" element={<AllServicesPage />} />
        <Route path="/request-details" element={<RequestDetailsPage />} />
        <Route path="/services/criminal-reports" element={<CriminalReportsPage />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/Ministry-words" element={<MinistryWords />} />
        <Route path="/about/desicions" element={<Desicions/>} />
        <Route path="/about/desicions-details" element={<DesicionDetails/>} />
        <Route path="/about/emergencyCases" element={<EmergencyCases/>} />
        <Route path="/about/developmentgoals" element={<DevelopmentGoals/>} />
        <Route path="/about/development-details" element={<DevelopmentDetailsPage/>} />

        <Route path="/about/faq" element={<FAQ/>} />
        <Route path="/mediaOffice/allnews" element={<Allnews/>} /> 
        <Route path="/mediaOffice/newsdetails" element={<NewsDetails/>} /> 
        <Route path="/mediaOffice/allmeetings" element={<AllMeetings/>} /> 
        <Route path="/mediaOffice/meetingsdetails" element={<MeetingsDetails/>} /> 
        <Route path="/mediaOffice/alllibrary" element={<AllLibrary/>} /> 
        <Route path="/mediaOffice/librarydetails" element={<LibraryDetails/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
