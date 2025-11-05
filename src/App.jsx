import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// === Main Pages ===
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Landlords from "./Components/pages/Landlords";
import Tenants from "./Components/pages/Tenants";
import Services from "./Components/pages/Services";
import Login from "./Components/pages/acount/Login";
import Register from "./Components/pages/acount/Register";
import Signup from "./Components/pages/acount/Signup"; // ✅ Added this line

// === Houses Pages ===
import Apartments from "./Components/pages/houses/Apertments";
import FamilyHouses from "./Components/pages/houses/FamilyHouses";
import SingleHouses from "./Components/pages/houses/SingleHouses";

// === Services Pages ===
import Booking from "./Components/pages/services/Booking";
import HouseMaintenance from "./Components/pages/services/HouseMaintenance";
import RentalManagement from "./Components/pages/services/RentalManagement";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/landlords" element={<Landlords />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/services" element={<Services />} />

          {/* Houses */}
          <Route path="/houses/apartments" element={<Apartments />} />
          <Route path="/houses/familyhouses" element={<FamilyHouses />} />
          <Route path="/houses/singlehouses" element={<SingleHouses />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />

          {/* Services */}
          <Route path="/services/booking" element={<Booking />} />
          <Route path="/services/housemaintenance" element={<HouseMaintenance />} />
          <Route path="/services/rentalmanagement" element={<RentalManagement />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
