import React, { useState } from 'react';

const VivrePanels = () => {
  // Generate Vivre images from 1 to 9 (JPG format)
  const vivreImages = Array.from({ length: 9 }, (_, i) => {
    const id = i + 1;
    return {
      id: id,
      src: `/images/products/vivre/vivre${id}.jpg`,
      alt: `Vivre Panel Design ${id}`
    };
  });

  return (
    <div>
      {/* Hero Section */}
      
      <section className="relative bg-white py-10 md:py-12 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">

          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mb-3 text-xs shadow-md">
             Vivre Panels
          </span>

          <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-black leading-tight">
            Transform Your Spaces with Vivre Panels
          </h1>

          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
           Premium decorative panels that blend artistry with functionality for modern interiors
          </p>

        </div>
     </section>

      {/* About Vivre Panels Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">About Vivre Panels</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Vivre Panels represents the pinnacle of decorative surface innovation, offering premium quality 
              panels that transform ordinary spaces into extraordinary experiences. With a commitment to 
              excellence in design and manufacturing, Vivre has established itself as a leading name in the 
              interior design industry.
            </p>
            
            <p>
              Each Vivre panel is crafted using state-of-the-art German technology, ensuring superior quality, 
              durability, and aesthetic appeal. The panels are designed to meet the evolving needs of modern 
              architecture and interior design, providing solutions that are both beautiful and functional.
            </p>
            
            <p>
              Whether you're designing a residential space, commercial establishment, or hospitality project, 
              Vivre Panels offer the perfect blend of style, performance, and sustainability. The extensive 
              range of designs, textures, and finishes allows architects and designers to bring their creative 
              visions to life.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Key Features</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover what makes Vivre Panels the preferred choice for premium interiors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12H7a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2zm0 2v2a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2v2zm0-8h2a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Premium Quality</h3>
              <p className="text-gray-600">Manufactured using high-grade materials and advanced German technology for superior finish and durability.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm10 4H6v2h8V8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Extensive Design Range</h3>
              <p className="text-gray-600">Wide variety of colors, patterns, and textures to suit every design requirement and aesthetic preference.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Durable & Long-lasting</h3>
              <p className="text-gray-600">Resistant to scratches, moisture, and daily wear, ensuring your interiors remain beautiful for years.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 3a1 1 0 000 2h14a1 1 0 100-2H3zm0 4a1 1 0 000 2h14a1 1 0 100-2H3zm0 4a1 1 0 100 2h14a1 1 0 100-2H3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Easy Installation</h3>
              <p className="text-gray-600">Designed for hassle-free installation with precision-engineered edges and consistent thickness.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Eco-friendly</h3>
              <p className="text-gray-600">Manufactured using sustainable practices with low VOC emissions for healthier indoor environments.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Low Maintenance</h3>
              <p className="text-gray-600">Easy to clean and maintain, saving time and effort while preserving the pristine appearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Collection</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our exquisite range of decorative panels
            </p>
          </div>

          {/* Image Grid - 9 images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {vivreImages.map((image) => (
              <div 
                key={image.id} 
                className="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                <div className="p-4 text-center bg-white">
                  <p className="text-gray-700 font-medium">Vivre Panel</p>
                  <p className="text-gray-500 text-sm">Design {image.id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Applications</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Versatile solutions for diverse interior applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-red-600 text-3xl mb-3">🏠</div>
              <h3 className="font-semibold text-black">Residential</h3>
              <p className="text-gray-600 text-sm mt-2">Living rooms, bedrooms, kitchens</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-red-600 text-3xl mb-3">🏢</div>
              <h3 className="font-semibold text-black">Commercial</h3>
              <p className="text-gray-600 text-sm mt-2">Offices, retail stores, showrooms</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-red-600 text-3xl mb-3">🏨</div>
              <h3 className="font-semibold text-black">Hospitality</h3>
              <p className="text-gray-600 text-sm mt-2">Hotels, restaurants, cafes</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-red-600 text-3xl mb-3">🏥</div>
              <h3 className="font-semibold text-black">Institutional</h3>
              <p className="text-gray-600 text-sm mt-2">Hospitals, schools, auditoriums</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VivrePanels;