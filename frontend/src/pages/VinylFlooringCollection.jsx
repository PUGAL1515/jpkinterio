import React from 'react';

const VinylFlooringCollection = () => {
  // Your 7 Vinyl Flooring Images
  const vinylImages = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/products/Responsive/Viny1.png`,
      alt: "Vinyl Flooring Design 1"
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/products/Responsive/Viny2.png`,
      alt: "Vinyl Flooring Design 2"
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/products/Responsive/Viny3.png`,
      alt: "Vinyl Flooring Design 3"
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/images/products/Responsive/Viny4.png`,
      alt: "Vinyl Flooring Design 4"
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/products/Responsive/Viny5.png`,
      alt: "Vinyl Flooring Design 5"
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/products/Responsive/Viny6.png`,
      alt: "Vinyl Flooring Design 6"
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/products/Responsive/Viny7.png`,
      alt: "Vinyl Flooring Design 7"
    },
  ];

  // Thought Leaders / Statistics Data
  const stats = [
    {
      number: "500+",
      label: "SKUs",
      subtext: "Eye-Catching Diverse Designs"
    },
    {
      number: "5000+",
      label: "Projects",
      subtext: "Completed Till Date"
    },
    {
      number: "30+",
      label: "Vinyl Flooring",
      subtext: "Ranges"
    },
    {
      number: "20+",
      label: "Years",
      subtext: "Assured Durability"
    },
    {
      number: "25 Million",
      label: "Sq. Meters",
      subtext: "Made Annually"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Thought Leaders Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold text-sm mb-4">
            THOUGHT LEADERS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Thought Leaders For Vinyl Flooring
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-8"></div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-red-50 transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-red-600 mb-1 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-800 text-lg mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600 leading-tight">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vinyl Flooring Collection Images */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Our Vinyl Flooring Collection
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Premium quality vinyl flooring with diverse designs and exceptional durability
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {vinylImages.map((image) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VinylFlooringCollection;