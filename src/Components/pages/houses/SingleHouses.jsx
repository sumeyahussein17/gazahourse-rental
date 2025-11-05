import React, { useState } from 'react';

const SingleHouses = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);

  const houses = [
    {
      id: 1,
      title: "Modern 3-Bedroom House",
      location: "Garissa Township",
      price: "KSh 25,000/month",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://www.maramani.com/cdn/shop/files/3BedroomHouseplanwithroofterrace-ID33301_1.jpg?v=1682404881&width=2048",
      amenities: ["Security", "Parking", "Garden"]
    },
    {
      id: 2,
      title: "2-Bedroom Bungalow",
      location: "Bula Punda",
      price: "KSh 18,000/month",
      bedrooms: 2,
      bathrooms: 1,
      image: "https://ujenziforum.com/wp-content/uploads/2024/10/FRONT.webp",
      amenities: ["Water Tank", "Fenced"]
    },
    {
      id: 3,
      title: "4-Bedroom Villa",
      location: "Jamhuri Estate",
      price: "KSh 35,000/month",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://www.maramani.com/cdn/shop/files/Modernaffordable2-bedroomhouseplan-ID12307Image01_977be641-182c-415f-bca5-10f3ac4a67ca.jpg?v=1694702243&width=1800",
      amenities: ["Pool", "Security", "Garden"]
    },
    // Updated with professional images
    {
      id: 4,
      title: "Stylish 3-Bedroom Home with Balcony",
      location: "Garissa Central",
      price: "KSh 27,000/month",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.kenyapropertycentre.com/properties/images/49985/06851a9deeede8-2-bedroom-house-semi-detached-duplexes-for-rent-karen-nairobi.jpg",
      amenities: ["Balcony", "Wi-Fi Ready", "Parking"]
    },
    {
      id: 5,
      title: "2-Bedroom Executive Home",
      location: "Madogo Area",
      price: "KSh 20,000/month",
      bedrooms: 2,
      bathrooms: 2,
      image: "https://www.maramani.com/cdn/shop/collections/Pers-1_3d08d602-6611-4f2d-894a-ca784fcbe2c3.jpg?v=1714128418&width=1024",
      amenities: ["Solar Power", "Fenced Compound", "Security Lights"]
    },
    {
      id: 6,
      title: "Elegant 4-Bedroom Single House with Garage",
      location: "Garissa Bula Iftin",
      price: "KSh 38,000/month",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://www.maramani.com/cdn/shop/products/4BedroomsAnd2CarGarage-ID14308-Perspective_1.jpg?v=1663753406&width=2048",
      amenities: ["Garage", "Backyard Garden", "24/7 Security"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-black mb-2">
          Single Houses for Rent
        </h1>
        <p className="text-gray-600">
          Premium houses available in Garissa
        </p>
      </div>

      {/* Houses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {houses.map((house) => (
          <div
            key={house.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
              <img
                src={house.image}
                alt={house.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">
                {house.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {house.location}
              </p>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                {house.price}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>{house.bedrooms} Bed</span>
                <span>{house.bathrooms} Bath</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {house.amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-100"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedHouse(house)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedHouse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-black">
                    {selectedHouse.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {selectedHouse.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedHouse(null)}
                  className="text-gray-400 hover:text-black"
                >
                  ✕
                </button>
              </div>

              <img
                src={selectedHouse.image}
                alt={selectedHouse.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <p className="text-2xl font-bold text-blue-600 mb-4">
                {selectedHouse.price}
              </p>

              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex justify-between border-b pb-2">
                  <span>Bedrooms</span>
                  <span className="text-black font-medium">{selectedHouse.bedrooms}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Bathrooms</span>
                  <span className="text-black font-medium">{selectedHouse.bathrooms}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-black mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedHouse.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm border border-blue-100"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleHouses;
