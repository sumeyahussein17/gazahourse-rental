import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  Users,
  FileText,
  Building2,
  Menu,
  X,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={20} /> }, // ✅ Added proper dashboard link
    { name: "Reports", path: "/admin/reports", icon: <FileText size={20} /> },
    { name: "Apartments", path: "/admin/apartments", icon: <Building2 size={20} /> },
    { name: "Family Houses", path: "/admin/family-houses", icon: <Home size={20} /> },
    { name: "Single Rooms", path: "/admin/single-rooms", icon: <Users size={20} /> },
  ];

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-lg"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col justify-between transition-transform duration-300 z-40 shadow-lg`}
      >
        {/* Top Section */}
        <div>
          <div className="flex items-center justify-center py-6 border-b border-gray-700">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Garissa<span className="text-blue-400">Rentals</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 px-4 space-y-2">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Logout Section */}
        <div className="border-t border-gray-700 p-4">
          <button className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-800 w-full p-2 rounded-lg transition-all duration-200">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
          <p className="text-xs text-gray-500 mt-3 text-center">
            © {new Date().getFullYear()} Garissa Rentals
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
