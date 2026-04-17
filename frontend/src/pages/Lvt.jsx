import React from 'react';

const Lvt = () => {
  // Array of image paths for LVT products
  const lvtImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/products/Responsive/lvt1.png` },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/products/Responsive/lvt2.png` },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/products/Responsive/lvt3.jpg` },
    { id: 4, src: `${process.env.PUBLIC_URL}/images/products/Responsive/lvt4.png` }
  ];

  // Features data
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "SPC Flooring",
      description: "No Adhesive Installation"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "100% Waterproof",
      description: "Super Easy To Maintain"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "80+ Wood & Stone Designs",
      description: "Patterns Printed In-House"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Large Capacity",
      description: "10 Million Sq. Meter"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "30+ Years Experience",
      description: "Vinyl Flooring Veterans"
    }
  ];

  // Featured ranges
  const featuredRanges = [
    { name: "Resonate®", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { name: "Tranquil®", color: "bg-gradient-to-br from-blue-500 to-teal-500" },
    { name: "Inspire®", color: "bg-gradient-to-br from-orange-500 to-red-500" },
    { name: "Opulence®", color: "bg-gradient-to-br from-yellow-600 to-amber-600" },
    { name: "Natural Wood®", color: "bg-gradient-to-br from-green-700 to-emerald-700" },
    { name: "Carpet Touch®", color: "bg-gradient-to-br from-gray-500 to-gray-700" }
  ];

  return (
    <div>
      {/* Hero Section */}

      <section className="relative bg-white py-10 md:py-12 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">

          {/* 🔥 Logo */}
          <div className="flex justify-center mb-5">
            <img
              src="/images/customers/04.png"
              alt="LVT Logo"
              className="h-14 md:h-20 object-contain"
            />
          </div>

          {/* Tag */}
          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mb-3 text-xs shadow-md">
            Responsive
          </span>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-black leading-tight">
            Luxury Vinyl Tile (LVT) Overview
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Discover the versatility and durability of our Luxury Vinyl Tile solutions.
          </p>

        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* India's Leading Manufacturer Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              India's Leading Manufacturer of SPC Flooring & LVT
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Cutting edge technology meets nature's design. A revolutionary alternate to wood and stone floors that will last you a lifetime.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Images Grid - 4 Images */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our LVT Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {lvtImages.map((image) => (
                <div
                  key={image.id}
                  className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-center text-gray-700 font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Ranges Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Ranges
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Responsive has launched 6 spectacular ranges under the Luxury Vinyl Tile category
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRanges.map((range, index) => (
                <div
                  key={index}
                  className={`${range.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group cursor-pointer`}
                >
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{range.name}</h3>
                  <p className="text-white/90 text-sm">Premium Quality LVT Flooring</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 🔥 Download Brochures */}
<div className="mt-20 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
    Download Resources
  </h2>

  <div className="flex flex-col sm:flex-row justify-center gap-4">

    {/* Vinyl Flooring Catalog */}
    <a
      href="/brochures/ResponsiveProductCatalog_2019.pdf"
      download
      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-8m0 8l-3-3m3 3l3-3M5 20h14" />
      </svg>
      Vinyl Flooring Catalog PDF
    </a>

    {/* Installation Manual */}
    <a
      href="/brochures/Responsive_flooring_installation_manual.pdf"
      download
      className="inline-flex items-center justify-center gap-2 bg-white border-2 border-red-600 text-red-600 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-red-600 hover:text-white transition"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-8m0 8l-3-3m3 3l3-3M5 20h14" />
      </svg>
      Installation Manual PDF
    </a>

  </div>
</div>
      </section>
    </div>
  );
};

export default Lvt;