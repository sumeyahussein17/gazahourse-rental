import React from "react";
import { Bell, Search, MessageSquare, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-30">
      {/* Left: Page Title */}
      {/* <div>
        <h1 className="text-xl font-semibold text-gray-800 tracking-wide">
          Admin Dashboard
        </h1>
        <p className="text-sm text-gray-500">Welcome back, Admin 👋</p>
      </div> */}

      {/* Center: Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
        <Search size={18} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-sm text-gray-700"
        />
      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <button className="relative hover:text-blue-500 transition">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Messages */}
        <button className="relative hover:text-blue-500 transition">
          <MessageSquare size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
        </button>

        {/* Admin Profile */}
        <div className="flex items-center space-x-2 cursor-pointer group">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Admin Avatar"
            className="w-8 h-8 rounded-full object-cover border border-gray-300"
          />
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-800">Admin</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <ChevronDown
            size={18}
            className="text-gray-600 group-hover:text-blue-500 transition"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
