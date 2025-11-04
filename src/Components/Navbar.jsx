import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState({ 
    houses: false, 
    services: false, 
    account: false 
  });

  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeAllDropdowns = () => {
    setDropdown({ houses: false, services: false, account: false });
    setMobileMenu(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Garissa Rentals 🏠
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>

          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About Us
          </Link>

          {/* Houses Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("houses")}
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
            >
              Houses <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdown.houses && (
              <div className="absolute bg-white rounded-md shadow-md mt-2 w-52 z-50">
                <Link
                  to="/houses/family"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={closeAllDropdowns}
                >
                  Family Houses
                </Link>
                <Link
                  to="/houses/single"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={closeAllDropdowns}
                >
                  Single Rooms
                </Link>
                <Link
                  to="/houses/apartments"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={closeAllDropdowns}
                >
                  Apartments
                </Link>
              </div>
            )}
          </div>

          {/* Landlords */}
          <Link to="/landlords" className="text-gray-700 hover:text-blue-600 font-medium">
            Landlords
          </Link>

          {/* Tenants */}
          <Link to="/tenants" className="text-gray-700 hover:text-blue-600 font-medium">
            Tenants
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
            >
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdown.services && (
              <div className="absolute bg-white rounded-md shadow-md mt-2 w-56 z-50">
                <Link
                  to="/services/booking"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={closeAllDropdowns}
                >
                  Booking Assistance
                </Link>
                <Link
                  to="/services/maintenance"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={closeAllDropdowns}
                >
                  House Maintenance
                </Link>
                <Link
                  to="/services/management"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={closeAllDropdowns}
                >
                  Rental Management
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact Us
          </Link>

          {/* Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("account")}
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
            >
              Account <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdown.account && (
              <div className="absolute bg-white rounded-md shadow-md mt-2 w-44 z-50">
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={closeAllDropdowns}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={closeAllDropdowns}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t">
          {[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about" },
            { label: "Landlords", path: "/landlords" },
            { label: "Tenants", path: "/tenants" },
            { label: "Contact Us", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={closeAllDropdowns}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile dropdowns */}
          <div className="border-t">
            <button
              onClick={() => toggleDropdown("houses")}
              className="w-full flex justify-between px-4 py-2 text-left hover:bg-gray-100"
            >
              Houses <ChevronDown className="w-4 h-4" />
            </button>
            {dropdown.houses && (
              <div className="pl-6 bg-gray-50">
                <Link to="/houses/family" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>Family Houses</Link>
                <Link to="/houses/single" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>Single Rooms</Link>
                <Link to="/houses/apartments" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>Apartments</Link>
              </div>
            )}
          </div>

          <div className="border-t">
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full flex justify-between px-4 py-2 text-left hover:bg-gray-100"
            >
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {dropdown.services && (
              <div className="pl-6 bg-gray-50">
                <Link to="/services/booking" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>Booking Assistance</Link>
                <Link to="/services/maintenance" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>House Maintenance</Link>
                <Link to="/services/management" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>Rental Management</Link>
              </div>
            )}
          </div>

          <div className="border-t">
            <button
              onClick={() => toggleDropdown("account")}
              className="w-full flex justify-between px-4 py-2 text-left hover:bg-gray-100"
            >
              Account <ChevronDown className="w-4 h-4" />
            </button>
            {dropdown.account && (
              <div className="pl-6 bg-gray-50">
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>Login</Link>
                <Link to="/register" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllDropdowns}>Register</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;