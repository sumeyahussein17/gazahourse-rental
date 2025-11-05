import React, { useState, useMemo } from "react";
import { Search, MapPin, Building2, Bath, BedDouble, DollarSign, Info } from "lucide-react";

const SAMPLE_APARTMENTS = [
  {
    id: 1,
    title: "Luxury Apartment — Garissa Town",
    location: "Garissa Central",
    price: 20000,
    beds: 2,
    baths: 2,
    area: "900 sqft",
    image: "https://modeneseinteriors.com/uploads/2022/08/gorgeos-luxury-apartment-design-kenya-1.jpg",
    description:
      "Modern 2-bedroom apartment in the heart of Garissa Town. Comes with balcony, parking space, and 24/7 security.",
    tags: ["Luxury", "Secure", "Town Center"],
  },
  {
    id: 2,
    title: "Affordable One-Bed Apartment",
    location: "Garissa Estate",
    price: 12000,
    beds: 1,
    baths: 1,
    area: "600 sqft",
    image: "https://antonovich-design.ae//uploads/gallery/2017/9/20174G2dlXrYFE5I.jpg",
    description:
      "Affordable and well-maintained 1-bedroom apartment with easy access to main road and shopping centers.",
    tags: ["Affordable", "Convenient"],
  },
  {
    id: 3,
    title: "3-Bed Executive Apartment — Garissa Heights",
    location: "Garissa Heights",
    price: 25000,
    beds: 3,
    baths: 2,
    area: "1300 sqft",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/17/f8/52/08/lounge.jpg",
    description:
      "Spacious executive apartment with open-plan kitchen, city view, and high-end finishes — perfect for families.",
    tags: ["Executive", "Spacious", "City View"],
  },
];

function Price({ value }) {
  return (
    <span className="inline-flex items-center gap-1 text-base font-semibold text-blue-600">
      <DollarSign className="w-4 h-4" />
      KES {value.toLocaleString()}
    </span>
  );
}

export default function Apartments({ apartments = SAMPLE_APARTMENTS }) {
  const [query, setQuery] = useState("");
  const [minBeds, setMinBeds] = useState(0);
  const [sort, setSort] = useState("relevance");
  const [selected, setSelected] = useState(null);

  const results = useMemo(() => {
    let list = [...apartments];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q) ||
          (a.description && a.description.toLowerCase().includes(q))
      );
    }

    if (minBeds > 0) {
      list = list.filter((a) => a.beds >= minBeds);
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [apartments, query, minBeds, sort]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
      {/* === Filters === */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 w-full md:w-1/2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search apartments by title or location"
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <BedDouble className="w-4 h-4 text-gray-500" />
            <select
              value={minBeds}
              onChange={(e) => setMinBeds(Number(e.target.value))}
              className="rounded-lg border px-2 py-1 border-gray-300"
            >
              <option value={0}>Any beds</option>
              <option value={1}>1+</option>
              <option value={2}>2+</option>
              <option value={3}>3+</option>
            </select>
          </label>

          <label className="flex items-center gap-2 text-sm">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-lg border px-2 py-1 border-gray-300"
            >
              <option value="relevance">Relevance</option>
              <option value="price-asc">Price — Low to High</option>
              <option value="price-desc">Price — High to Low</option>
            </select>
          </label>
        </div>
      </div>

      {/* === Count === */}
      <div className="mb-4 text-sm text-gray-600">
        {results.length} apartments available in Garissa
      </div>

      {/* === Apartments Grid === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((apt) => (
          <article
            key={apt.id}
            className="group bg-white rounded-2xl shadow-sm overflow-hidden border hover:shadow-lg transition-shadow"
          >
            <div className="relative h-44 sm:h-52 w-full bg-gray-100">
              <img
                src={apt.image}
                alt={apt.title}
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://via.placeholder.com/800x600?text=Apartment";
                }}
              />
              <div className="absolute top-3 left-3 flex gap-2">
                {apt.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="bg-white/80 text-xs px-2 py-1 rounded-md font-medium shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {apt.title}
                </h3>
                <div className="text-right">
                  <Price value={apt.price} />
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {apt.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Building2 className="w-4 h-4" /> {apt.area}
                </span>
              </div>

              <p className="text-sm text-gray-700 line-clamp-2">
                {apt.description}
              </p>

              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span>
                    <BedDouble className="w-4 h-4 inline" /> {apt.beds} beds
                  </span>
                  <span>
                    <Bath className="w-4 h-4 inline" /> {apt.baths} baths
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelected(apt)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border font-medium hover:bg-gray-50"
                  >
                    <Info className="w-4 h-4" /> Details
                  </button>
                  <a
                    href="tel:+254700000000"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 text-white font-semibold"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* === Modal === */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setSelected(null)}
          />
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-56 md:h-auto">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://via.placeholder.com/800x600?text=Apartment";
                  }}
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  {selected.title}
                </h2>
                <Price value={selected.price} />
                <p className="text-gray-700">{selected.description}</p>
                <p className="text-sm text-gray-600">
                  Location: {selected.location}
                </p>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-4 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
