import React, { useState, useEffect } from 'react';

const InteriorExterior = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  // All your gal_ images from the folder
  const imageFileNames = [
    'gal_1661842105-2.jpg.jpeg',
    'gal_1661842110-2.jpg.jpeg',
    'gal_1661842132-1.jpg.jpeg',
    'gal_1661846409-1.jpg.jpeg',
    'gal_1661846425-3.jpg.jpeg',
    'gal_1661846437-1.jpg.jpeg',
    'gal_1661846452-1.jpg.jpeg',
    'gal_1681890466-300x227.jpg.jpeg',
    'gal_1662138721.jpg'
  ];

  // Fundermax Logo
  const fundermaxLogo = '/images/products/logo-1-1-1-768x176.png';

  // Create gallery images when component mounts
  useEffect(() => {
    const images = imageFileNames.map(filename =>
      `/images/products/${filename}`
    );
    setGalleryImages(images);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);   // ← We intentionally keep empty array because imageFileNames is static

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Fundermax Logo */}
      <section className="relative bg-white py-10 md:py-12 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">

          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mb-3 text-xs shadow-md">
            Fundermax
          </span>

          <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-black leading-tight">
            Interior & Exterior Products
          </h1>

          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Discover Fundermax's comprehensive range of high-quality interior and exterior solutions for modern architecture.
          </p>

        </div>
      </section>

      {/* Exterior Products */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-red-700 text-center mb-12">Exterior Products</h1>

          <div className="space-y-12 text-gray-700">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Max Exterior</h2>
              <div className="prose prose-lg max-w-none leading-relaxed">
                <p>Max Exterior from Fundermax is a highly durable exterior wall cladding product that is constantly undergoing further development.</p>
                <p>Now you can even choose your very own individual decor for your rainscreen cladding. It offers consistent protection and uncompromising strength as a contemporary, cost-effective rainscreen facade resistant to all external influences.</p>
              </div>
            </div>

           <div>
  <h2 className="text-3xl font-bold text-gray-900 mb-6">M.look</h2>

  <div className="prose prose-lg max-w-none leading-relaxed">
    <p>
      M.look is an architectural facade panel with heavy-duty, reinforced glass fiber, predominantly mineral, non-combustible core and highly weather-resistant decorative surface.
    </p>
    <p>
      It offers high scratch resistance, light fastness, impact resistance, anti-graffiti properties, and hail resistance. Suitable for A2-s1,d0 fire classification.
    </p>
  </div>

  {/* 🔥 Download Brochure Button */}
 <div className="mt-6">
  <a
    href="/brochures/fundermax.pdf"
    download
    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-8m0 8l-3-3m3 3l3-3M5 20h14" />
    </svg>
    Download Brochure
  </a>
</div>
</div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Exterior Products</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                {['Max Lato', 'Facade Lapsiding', 'Soffit', 'Perforation', 'Signage', 'Gates', 'Facade', 'Balcony'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-red-600">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Products */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-red-700 text-center mb-12">Interior Products</h1>

          <div className="space-y-12 text-gray-700">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Max Interior</h2>
              <p className="text-lg leading-relaxed">
                Max Compact panels are high-pressure laminates (HPL) in accordance with EN 438-4 Type CGS for heavy-duty areas. Classification according to EN 13501-1: Euroclass D-s2, d0.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Max RE2</h2>
              <p className="text-lg leading-relaxed">
                Max Resistance is a duromer high-pressure laminate with a double-cured polyurethane acrylic coating. It is highly resistant to solvents, acids, and chemicals while remaining easy to clean and disinfect.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Star Favorit</h2>
              <p className="text-lg leading-relaxed mb-6">
                Fundermax Star Favorit panels are melamine resin laminated flat-pressed panels suitable for interior applications for all types of carcass furniture in apartment and commercial buildings.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Star Favorit 2 Applications</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg">
                {['Restroom Cubicles', 'Fumehoods', 'Laboratory Table Tops'].map((app, i) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <span className="text-red-600">•</span> {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center text-red-700">
            Fundermax Product Gallery
          </h2>

          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(img, '_blank')}
                >
                  <img
                    src={img}
                    alt={`Fundermax Product ${idx + 1}`}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/images/header02.png';
                    }}
                  />
                  <div className="p-4 bg-white text-center">
                    <p className="text-sm text-gray-600">Fundermax Gallery</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
              <p className="text-gray-500 text-lg">No gallery images found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default InteriorExterior;