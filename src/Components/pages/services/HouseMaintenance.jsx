import React from "react";
import { Wrench, ShieldCheck, Clock, Users, CheckCircle } from "lucide-react";

const maintenanceServices = [
  {
    id: 1,
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Plumbing Repairs",
    description: "Quick and reliable plumbing maintenance for all types of leaks, pipe issues, and installations.",
  },
  {
    id: 2,
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Electrical Services",
    description: "Safe electrical checks, wiring repairs, and light fixture installations for your property.",
  },
  {
    id: 3,
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: "24/7 Emergency Support",
    description: "Our maintenance team is available around the clock to handle urgent issues immediately.",
  },
  {
    id: 4,
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Professional Team",
    description: "Trained and experienced technicians ensuring every repair is handled with professionalism.",
  },
  {
    id: 5,
    icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
    title: "Quality Assurance",
    description: "We guarantee high-quality work and use trusted materials for long-lasting maintenance.",
  },
];

const HouseMaintenance = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">House Maintenance Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Reliable, efficient, and professional maintenance for all rental properties in Garissa.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {maintenanceServices.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Maintenance Support?</h2>
        <p className="text-lg mb-6">
          Our support team is always ready to assist you. Get in touch today for reliable help.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Maintenance Team
        </button>
      </section>
    </div>
  );
};

export default HouseMaintenance;
