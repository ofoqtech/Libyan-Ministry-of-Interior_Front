import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Overview } from "./pages/about/Overview/Overview";
import { MinistryWords } from "./pages/about/Ministry Words/MinistryWords";
import { Footer } from "./components/Footer/Footer";
import { ContactUs } from "./pages/contact-us/contactUs";
import { AllServicesPage } from "./pages/Services/allservices/allServices";
import { RequestDetailsPage } from "./pages/Services/RequestDetails/RequestDetails";
import { CriminalReportsPage } from "./pages/Services/criminal-reports/criminal-reports";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/Ministry-words" element={<MinistryWords />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/services" element={<AllServicesPage />} />
        <Route path="/request-details" element={<RequestDetailsPage />} />
        <Route path="/services/criminal-reports" element={<CriminalReportsPage />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
