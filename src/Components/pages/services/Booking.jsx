import React, { useState } from "react";
import { Calendar, Mail, Phone, User, Home, MapPin } from "lucide-react";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    houseType: "",
    location: "",
    moveInDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Submitted:", formData);
    alert("Your booking request has been submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      houseType: "",
      location: "",
      moveInDate: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Your Dream Home in Garissa
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Fill in your details and we’ll help you secure your ideal home quickly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Phone className="text-gray-400 mr-2" size={20} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="e.g. +254 700 123 456"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* House Type */}
          <div>
            <label className="block text-gray-700 mb-2">House Type</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Home className="text-gray-400 mr-2" size={20} />
              <select
                name="houseType"
                value={formData.houseType}
                onChange={handleChange}
                required
                className="w-full outline-none bg-transparent"
              >
                <option value="">Select house type</option>
                <option value="Apartment">Apartment</option>
                <option value="Family House">Family House</option>
                <option value="Single Room">Single Room</option>
                <option value="Studio">Studio</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 mb-2">Preferred Location</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="e.g. Garissa Town, Bula Iftin, Madogo"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Move-in Date */}
          <div>
            <label className="block text-gray-700 mb-2">Move-in Date</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar className="text-gray-400 mr-2" size={20} />
              <input
                type="date"
                name="moveInDate"
                value={formData.moveInDate}
                onChange={handleChange}
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            Submit Booking Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
