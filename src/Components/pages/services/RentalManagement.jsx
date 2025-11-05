import React from "react";
import {
  Home,
  Users,
  FileText,
  CreditCard,
  BarChart3,
  Building2,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Building2 className="w-10 h-10 text-blue-600" />,
    title: "Property Oversight",
    description:
      "Manage all your rental units efficiently — from apartments to family houses — under one dashboard.",
  },
  {
    id: 2,
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Tenant Management",
    description:
      "Easily track tenant details, lease duration, rent history, and communication logs.",
  },
  {
    id: 3,
    icon: <CreditCard className="w-10 h-10 text-blue-600" />,
    title: "Rent Payments",
    description:
      "Monitor monthly payments, automate reminders, and manage outstanding balances.",
  },
  {
    id: 4,
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    title: "Lease Agreements",
    description:
      "Digitally store, access, and renew lease contracts with full transparency and ease.",
  },
  {
    id: 5,
    icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
    title: "Performance Reports",
    description:
      "Get real-time insights on rental income, property performance, and occupancy rates.",
  },
  {
    id: 6,
    icon: <Home className="w-10 h-10 text-blue-600" />,
    title: "Maintenance Coordination",
    description:
      "Connect directly with maintenance teams to resolve property issues promptly.",
  },
];

const RentalManagement = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* ====== Header Section ====== */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Rental Management System</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Streamline your property management with powerful tools to track rentals,
          tenants, payments, and maintenance — all in one place.
        </p>
      </section>

      {/* ====== Features Section ====== */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* ====== CTA Section ====== */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Manage Rentals with Confidence</h2>
        <p className="text-lg mb-6">
          Simplify property management and boost efficiency with Garissa Rental’s
          all-in-one system.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default RentalManagement;
