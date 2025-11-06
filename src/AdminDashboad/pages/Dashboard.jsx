import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Home, Users, Building2, DollarSign, Bed } from "lucide-react";

const Dashboard = () => {
  // === Dummy Data for Charts ===
  const revenueData = [
    { month: "Jan", revenue: 4500 },
    { month: "Feb", revenue: 5200 },
    { month: "Mar", revenue: 6800 },
    { month: "Apr", revenue: 7500 },
    { month: "May", revenue: 8200 },
    { month: "Jun", revenue: 9000 },
    { month: "Jul", revenue: 9800 },
    { month: "Aug", revenue: 9400 },
    { month: "Sep", revenue: 8700 },
    { month: "Oct", revenue: 10200 },
    { month: "Nov", revenue: 11200 },
    { month: "Dec", revenue: 12000 },
  ];

  const growthData = [
    { month: "Jan", houses: 30, tenants: 40 },
    { month: "Feb", houses: 35, tenants: 45 },
    { month: "Mar", houses: 40, tenants: 52 },
    { month: "Apr", houses: 50, tenants: 60 },
    { month: "May", houses: 55, tenants: 70 },
    { month: "Jun", houses: 60, tenants: 74 },
    { month: "Jul", houses: 70, tenants: 80 },
    { month: "Aug", houses: 72, tenants: 85 },
    { month: "Sep", houses: 74, tenants: 90 },
    { month: "Oct", houses: 78, tenants: 94 },
    { month: "Nov", houses: 80, tenants: 98 },
    { month: "Dec", houses: 85, tenants: 105 },
  ];

  // === Statistic Cards ===
  const stats = [
    {
      title: "Total Tenants",
      value: "1,240",
      icon: <Users className="text-blue-500" size={28} />,
      bg: "bg-blue-100",
    },
    {
      title: "Apartments",
      value: "320",
      icon: <Building2 className="text-green-500" size={28} />,
      bg: "bg-green-100",
    },
    {
      title: "Family Houses",
      value: "180",
      icon: <Home className="text-yellow-500" size={28} />,
      bg: "bg-yellow-100",
    },
    {
      title: "Single Rooms",
      value: "250",
      icon: <Bed className="text-indigo-500" size={28} />,
      bg: "bg-indigo-100",
    },
    {
      title: "Monthly Revenue",
      value: "$12,000",
      icon: <DollarSign className="text-emerald-500" size={28} />,
      bg: "bg-emerald-100",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500">Welcome back, here’s an overview of activity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-5 rounded-2xl shadow-sm ${stat.bg}`}
          >
            <div className="p-3 bg-white rounded-xl shadow">{stat.icon}</div>
            <div>
              <h4 className="text-sm text-gray-600 font-medium">{stat.title}</h4>
              <p className="text-xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart: Monthly Revenue */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Monthly Revenue
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart: Growth */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Property & Tenant Growth
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="houses"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="tenants"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
