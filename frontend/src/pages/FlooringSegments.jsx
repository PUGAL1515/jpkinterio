import React from 'react';

const FlooringSegments = () => {
  const segments = [
    {
      title: "Healthcare",
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/healthcare.png`,
      areas: [
        "Wards And Rooms",
        "Corridors",
        "Out-Patient Departments",
        "Laboratories",
        "Reception Areas",
        "Rehabilitation Areas"
      ]
    },
    {
      title: "Education",
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/education.png`,
      areas: [
        "Classrooms",
        "Play areas",
        "Libraries",
        "Art rooms",
        "Corridors",
        "Cafeterias"
      ]
    },
    {
      title: "Sports",
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/sports.png`, // Note: You may need to rename or add this
      areas: [
        "Basket Ball courts",
        "Badminton courts",
        "Table tennis courts",
        "Gymnasiums",
        "Multi-purpose sports",
        "Fitness areas"
      ]
    },
    {
      title: "Safety & Transport",
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/safety-transport.png`,
      areas: [
        "Buses",
        "Trains",
        "Metros",
        "Trams",
        "Subways",
        "Ships"
      ]
    },
    {
      title: "Hospitality",
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/hospitality.png`,
      areas: [
        "Hotels",
        "Restaurants",
        "Bars",
        "Lounges",
        "Video game arcades",
        "Movie theatres"
      ]
    },
    {
      title: "Commercial",
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/commercial.jpg`,
      areas: [
        "Airports",
        "Aerobridges",
        "Food Courts",
        "Convention Center",
        "Public Service Centers",
        "Exhibition Centers"
      ]
    },
    {
      title: "Retail & Offices",
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/reatil-commercial.png`,
      areas: [
        "Offices",
        "Shops",
        "Supermarkets",
        "Showrooms",
        "Banking Centers",
        "Malls"
      ]
    },
    {
      title: "Industrial",
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/industry.png`,
      areas: [
        "Government buildings",
        "Automotive",
        "Electronics",
        "Pharmaceuticals",
        "Appliances",
        "Logistics"
      ]
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-white py-12 md:py-16 px-6 md:px-16 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold text-sm mb-4">
            RESPONSIVE VINYL FLOORING
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Flooring Segments
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Specialized vinyl flooring solutions designed for diverse environments and high-performance requirements.
          </p>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold tracking-tight">{segment.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-semibold text-gray-800 mb-4">Application Areas:</p>
                  
                  <ul className="space-y-2 mb-6">
                    {segment.areas.map((area, i) => (
                      <li key={i} className="flex items-start text-gray-700 text-sm">
                        <span className="text-red-600 mr-2 mt-1">•</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlooringSegments;