import React, { useState } from 'react';

const Donaire = () => {
  const [activeTab, setActiveTab] = useState('broadloom'); // 'broadloom' or 'carpet'

  // Generate Broadloom images - 1 to 8 (PNG), 9 to 19 (JPG)
  const broadloomImages = Array.from({ length: 19 }, (_, i) => {
    const id = i + 1;
    const extension = id <= 8 ? 'png' : 'jpg';
    return {
      id: id,
      src: `/images/products/donaire/donaire${id}.${extension}`,
      alt: `Broadloom Carpet ${id}`
    };
  });

  // Generate Carpet images (Carpet Tiles & Planks) - 1 to 27 (PNG)
  const carpetImages = Array.from({ length: 27 }, (_, i) => {
    const id = i + 1;
    return {
      id: id,
      src: `/images/products/donaire/carpet/Carpet${id}.png`,
      alt: `Carpet Design ${id}`
    };
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-10 md:py-12 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">

          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mb-3 text-xs shadow-md">
             Donaire
          </span>

          <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-black leading-tight">
             Donaire Carpets
          </h1>

          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Quality materials for construction and interiors.
          </p>

        </div>
     </section>

      {/* Tab Buttons */}
      <section className="bg-white pt-8 pb-4 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('broadloom')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeTab === 'broadloom'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Broadloom Carpets
            </button>
            <button
              onClick={() => setActiveTab('carpet')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeTab === 'carpet'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Carpet Tiles & Planks
            </button>
          </div>
        </div>
      </section>

      {/* Broadloom Carpets Section */}
      {activeTab === 'broadloom' && (
        <section className="bg-gray-50 py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Broadloom Carpets</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Choose your design from our wide range. Our passion and commitment in anticipating and 
                satisfying new trends and need for quality Broadloom Carpets are second to none, 
                while remaining competitively priced. Choose your style and decor.
              </p>
            </div>

            {/* Broadloom Brands */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Loop Pile', 'Cut Pile', 'Cut Loop', 'Woven Wilton'].map((brand, index) => (
                <span 
                  key={index}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-red-600 hover:text-white hover:border-red-600 transition cursor-pointer"
                >
                  {brand}
                </span>
              ))}
            </div>

            {/* Broadloom Image Grid - 19 images (1-8 PNG, 9-19 JPG) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {broadloomImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = '/images/placeholder.png';
                        e.target.onerror = null;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Carpet Tiles & Planks Section */}
      {activeTab === 'carpet' && (
        <section className="bg-gray-50 py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Carpet Tiles & Planks</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Choose your design from our wide range. Our passion and commitment in anticipating and 
                satisfying new trends and need for quality Carpet Tiles & Planks are second to none, 
                while remaining competitively priced. Choose your style and decor.
              </p>
            </div>

            {/* Carpet Tiles & Planks Brands */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['PP Carpet Tiles', 'Nylon Carpet Tiles', 'Carpet Planks'].map((brand, index) => (
                <span 
                  key={index}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-red-600 hover:text-white hover:border-red-600 transition cursor-pointer"
                >
                  {brand}
                </span>
              ))}
            </div>

            {/* Carpet Images Grid - 27 images */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {carpetImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = '/images/placeholder.png';
                        e.target.onerror = null;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Donaire;