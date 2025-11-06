import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";

// === Main Pages ===
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Landlords from "./Components/pages/Landlords";
import Tenants from "./Components/pages/Tenants";
import Services from "./Components/pages/Services";

// === Auth Pages ===
import Login from "./Components/pages/acount/Login";
import Register from "./Components/pages/acount/Register";
import Signup from "./Components/pages/acount/Signup";

// === Houses Pages ===
import Apartments from "./Components/pages/houses/Apertments";
import FamilyHouses from "./Components/pages/houses/FamilyHouses";
import SingleHouses from "./Components/pages/houses/SingleHouses";

// === Services Pages ===
import Booking from "./Components/pages/services/Booking";
import HouseMaintenance from "./Components/pages/services/HouseMaintenance";
import RentalManagement from "./Components/pages/services/RentalManagement";

// === Admin Dashboard ===
import Layout from "./AdminDashboad/components/Layout";
import Dashboard from "./AdminDashboad/pages/Dashboard"; // ✅ Added
import Reports from "./AdminDashboad/pages/Reports";
import Apartmens from "./AdminDashboad/pages/Apartmens";
import FamilyHouse from "./AdminDashboad/pages/FamilyHouse";
import SingleRooms from "./AdminDashboad/pages/SingleRooms";

import "./App.css";

function AppContent() {
  const location = useLocation();

  // ✅ Check if current route starts with "/admin"
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Show Navbar only for non-admin routes */}
      {!isAdminRoute && <Navbar />}

      <div className={isAdminRoute ? "" : "pt-20"}>
        <Routes>
          {/* === Main Pages === */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/landlords" element={<Landlords />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/services" element={<Services />} />

          {/* === Houses === */}
          <Route path="/houses/apartments" element={<Apartments />} />
          <Route path="/houses/familyhouses" element={<FamilyHouses />} />
          <Route path="/houses/singlehouses" element={<SingleHouses />} />

          {/* === Auth Pages === */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />

          {/* === Services === */}
          <Route path="/services/booking" element={<Booking />} />
          <Route
            path="/services/housemaintenance"
            element={<HouseMaintenance />}
          />
          <Route
            path="/services/rentalmanagement"
            element={<RentalManagement />}
          />

          {/* === Admin Dashboard === */}
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} /> {/* ✅ Default route */}
            <Route path="dashboard" element={<Dashboard />} /> {/* ✅ Explicit route */}
            <Route path="reports" element={<Reports />} />
            <Route path="apartments" element={<Apartmens />} />
            <Route path="family-houses" element={<FamilyHouse />} />
            <Route path="single-rooms" element={<SingleRooms />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
