import React, { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

// Popular Residencies Data
const popularResidencies = [
  {
    id: 1,
    name: "Luxury Apartment",
    description: "Located in the city center with modern design and comfort.",
    price: "Ksh 120,000/month",
    image: "https://cdn.shopify.com/s/files/1/0567/3873/files/Perspective_2_724x482.progressive_403efd7c-131a-40e9-b586-ea2553487ace_480x480.jpg?v=1606139922",
  },
  {
    id: 2,
    name: "Modern Villa",
    description: "Peaceful environment, perfect for families seeking luxury.",
    price: "Ksh 280,000/month",
    image: "https://r-xx.bstatic.com/xdata/images/hotel/608x352/608875568.webp?k=a37d6ebeef290d6530a39a663e888c40bee2a29ce69fe12cba33eff1ffb8c121&o=",
  },
  {
    id: 3,
    name: "Garissa Heights",
    description: "A premium residence with great views and modern amenities.",
    price: "Ksh 170,000/month",
    image: "https://luxurylifestyleawards.com/wp-content/uploads/2021/08/2-5.jpg",
  },
];

// Our Values Data
const ourValues = [
  {
    id: 1,
    title: "Trust & Transparency",
    description: "We ensure clear communication and honest dealings in every transaction.",
  },
  {
    id: 2,
    title: "Affordable Pricing",
    description: "Get premium properties that fit within your budget and lifestyle.",
  },
  {
    id: 3,
    title: "Customer Support",
    description: "Our dedicated team is always available to assist you anytime.",
  },
];

// Dropdown Component for Our Values
const ValueDropdown = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 p-6  rounded-xl shadow-md hover:shadow-lg transition-all">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <span className="text-blue-500 font-bold text-xl">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <p className="text-gray-600 mt-4">{description}</p>}
    </div>
  );
};

const Home = () => {
  const heroImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80";

  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-16 bg-black  text-white">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover <br />
            <span className="text-blue-400">Most Suitable</span> Property
          </h1>
          <p className="text-gray-400 max-w-md">
            Find a variety of properties that suit you easily. Forget all
            difficulties in finding a perfect residence for you and your family.
          </p>

          <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md mt-6 shadow-lg">
            <input
              type="text"
              placeholder="Search by location"
              className="flex-1 px-4 py-3 text-black outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 transition-all">
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-8 mt-10">
            <div>
              <h2 className="text-3xl font-bold">8,999+</h2>
              <p className="text-gray-400">Premium Properties</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">2,000+</h2>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">28+</h2>
              <p className="text-gray-400">Awards Won</p>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <div className="relative w-[350px] h-[450px] bg-gray-900 rounded-t-[50%] overflow-hidden border-4 border-gray-800 shadow-lg shadow-blue-900/40">
            <img
              src={heroImage}
              alt="Modern building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* POPULAR RESIDENCIES */}
      <section className="py-20 px-10 md:px-20 bg-white text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-10">
          Popular <span className="text-blue-400">Residencies</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {popularResidencies.map((res) => (
            <div
              key={res.id}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={res.image}
                alt={res.name}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{res.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{res.description}</p>
              <p className="text-blue-500 font-bold text-lg mb-4">{res.price}</p>
              <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-300">
                Rent Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 px-10 md:px-20 bg-white text-gray-800 border-t border-gray-200">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-blue-400">Value</span>
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-16 space-y-10 md:space-y-0 items-center">
          <div className="flex-1">
            <img
              src="https://sirfrancismarketingltd.co.ke/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-07-at-15.25.46.jpeg"
              alt="Our values"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-6">
            {ourValues.map((val) => (
              <ValueDropdown
                key={val.id}
                title={val.title}
                description={val.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-black py-8 px-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base mb-4 md:mb-0 transition-colors duration-300 hover:text-orange-500 cursor-default">
            © {new Date().getFullYear()} Garissa Rentals. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-orange-500 transition-colors duration-300"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-orange-500 transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-orange-500 transition-colors duration-300"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-orange-500 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
