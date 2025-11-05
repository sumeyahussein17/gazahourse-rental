import React, { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  DollarSign,
  Info,
  X,
  Phone,
} from "lucide-react";

const HOUSES = [
  {
    id: 1,
    title: "Spacious 4-Bedroom Family House — Garissa Central",
    location: "Garissa Central",
    price: 25000,
    beds: 4,
    baths: 3,
    area: "2200 sqft",
    image:
      "https://www.maramani.com/cdn/shop/articles/ID_12107_-_Maramani_01_724x482.progressive_a1488629-ad96-4597-af13-0e8f68a8f798.jpg?v=1615115308&width=2048",
    description:
      "A beautiful and secure family house with a large compound, parking space, and proximity to schools and markets.",
    tags: ["Family", "Secure Compound", "Central Location"],
  },
  {
    id: 2,
    title: "Modern 3-Bedroom Townhouse — Garissa Estate",
    location: "Garissa Estate",
    price: 18000,
    beds: 3,
    baths: 2,
    area: "1500 sqft",
    image:
      "https://www.maramani.com/cdn/shop/collections/ID_23404_Perspective_1_fc1d4037-a6c7-465c-a09a-f31565df4a16.jpg?v=1589204757&width=2048",
    description:
      "Contemporary design with open living, small garden, and easy access to town. Ideal for young families.",
    tags: ["Modern", "Low Maintenance", "Estate Living"],
  },
  {
    id: 3,
    title: "Dual-Unit Compound — Garissa Outskirts",
    location: "Garissa Outskirts",
    price: 20000,
    beds: 5,
    baths: 4,
    area: "3200 sqft",
    image:
      "https://www.buyrentkenya.com/discover/wp-content/uploads/og-cache/property-tax-16-1-branded.jpg",
    description:
      "Two self-contained units in one spacious compound. Great for large families or rental investment opportunities.",
    tags: ["Compound", "Investment", "Spacious"],
  },
  {
    id: 4,
    title: "Elegant 5-Bedroom Villa — Garissa Heights",
    location: "Garissa Heights",
    price: 35000,
    beds: 5,
    baths: 4,
    area: "2800 sqft",
    image:
      "https://images.kenyapropertycentre.com/properties/images/52782/068c2d7dccb5c5-three-3-bedroom-all-ensuite-apartment-with-a-staff-quarter-for-sale-kilimani-nairobi.jpg",
    description:
      "Luxury villa featuring modern interiors, private balcony, lush garden, and full security system — perfect for a growing family.",
    tags: ["Luxury", "Private Garden", "Secure"],
  },
  {
    id: 5,
    title: "Cozy 3-Bedroom Family Home — Garissa East",
    location: "Garissa East",
    price: 16000,
    beds: 3,
    baths: 2,
    area: "1400 sqft",
    image:
      "https://commercialpropertykenya.com/wp-content/uploads/2022/02/render6.RGB_color-1.jpg",
    description:
      "A warm and affordable family home with modern finishes and a quiet environment. Ideal for small to medium families.",
    tags: ["Affordable", "Peaceful", "Modern Design"],
  },
  {
    id: 6,
    title: "Modern 4-Bedroom Family Residence — Garissa South",
    location: "Garissa South",
    price: 23000,
    beds: 4,
    baths: 3,
    area: "2100 sqft",
    image:
      "https://davidchola.com/wp-content/uploads/2018/01/01-1024x539.jpg",
    description:
      "A stunning residence with a beautiful compound, spacious rooms, and convenient access to main roads and amenities.",
    tags: ["Spacious", "Elegant", "Accessible Location"],
  },
];

// --- Reusable Price Display ---
function Price({ value }) {
  return (
    <span className="inline-flex items-center gap-1 text-blue-700 font-semibold">
      <DollarSign className="w-4 h-4" /> KES {value.toLocaleString()}
    </span>
  );
}

export default function FamilyHouses({ houses = HOUSES }) {
  const [query, setQuery] = useState("");
  const [minBeds, setMinBeds] = useState(0);
  const [sort, setSort] = useState("relevance");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    let list = [...houses];
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (h) =>
          h.title.toLowerCase().includes(q) ||
          h.location.toLowerCase().includes(q) ||
          h.description.toLowerCase().includes(q)
      );
    }
    if (minBeds > 0) list = list.filter((h) => h.beds >= minBeds);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [houses, query, minBeds, sort]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 px-4 sm:px-6 lg:px-10 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          🏡 Family Houses for Rent in Garissa
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Explore secure, spacious, and family-friendly rental homes in Garissa 🌿✨
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, location or keyword..."
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none shadow-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={minBeds}
            onChange={(e) => setMinBeds(Number(e.target.value))}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-600 shadow-sm"
          >
            <option value={0}>Any Beds</option>
            <option value={1}>1+ Beds</option>
            <option value={2}>2+ Beds</option>
            <option value={3}>3+ Beds</option>
            <option value={4}>4+ Beds</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-600 shadow-sm"
          >
            <option value="relevance">Sort by: Relevance</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <p className="text-gray-500 text-sm mb-6">
        Showing {filtered.length} available houses 🏠
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((house) => (
          <div
            key={house.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 group"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={house.image}
                alt={house.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src =
                    'https://via.placeholder.com/800x600?text=House+Image';
                }}
              />
              <div className="absolute top-3 left-3 flex gap-2">
                {house.tags.slice(0, 2).map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/80 text-xs px-2 py-1 rounded-md text-gray-700 shadow-sm backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 space-y-3">
              <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
                {house.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-blue-500" /> {house.location}
              </div>

              <div className="flex items-center justify-between">
                <Price value={house.price} />
                <span className="text-sm text-gray-500">{house.area}</span>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2">
                {house.description}
              </p>

              <div className="flex items-center justify-between pt-3">
                <div className="text-gray-500 text-sm flex gap-4">
                  <span className="flex items-center gap-1">
                    <BedDouble className="w-4 h-4 text-blue-500" /> {house.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-blue-500" /> {house.baths}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(house)}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                >
                  <Info className="w-4 h-4" /> View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden relative animate-fadeIn">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="grid md:grid-cols-2">
              <img
                src={selected.image}
                alt={selected.title}
                className="object-cover w-full h-64 md:h-full"
              />
              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selected.title}
                </h2>
                <Price value={selected.price} />
                <p className="text-gray-600">{selected.description}</p>
                <p className="text-sm text-gray-500">
                  📍 {selected.location} | {selected.area}
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="tel:+254700000000"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Call Landlord
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
