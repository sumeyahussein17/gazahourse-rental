import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Landlords from "./Components/pages/Landlords";
import Tenants from "./Components/pages/Tenants";
import Services from "./Components/pages/Services";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landlords" element={<Landlords />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/services" element={<Services />} />
        <Route path="/houses/family" element={<Home />} />
        <Route path="/houses/single" element={<Home />} />
        <Route path="/houses/apartments" element={<Home />} />
        <Route path="/services/booking" element={<Services />} />
        <Route path="/services/maintenance" element={<Services />} />
        <Route path="/services/management" element={<Services />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
