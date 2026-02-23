import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import ContactPage from "./components/contactPage";
import ServicesPage from "./components/servicepage";
import CareersPage from "./components/careerPage";
import AboutPage from "./components/aboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  
     
  );
}

export default App;