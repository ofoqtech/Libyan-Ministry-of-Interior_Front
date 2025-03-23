import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Overview } from "./pages/about/Overview/Overview";
import { MinistryWords } from "./pages/about/Ministry Words/MinistryWords";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/Ministry-words" element={<MinistryWords />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
