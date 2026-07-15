import React, { useState, useEffect } from 'react';

const VoxIndia = () => {
  const [wallImages, setWallImages] = useState([]);
  const [ceilingImages, setCeilingImages] = useState([]);
  const [flooringImages, setFlooringImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  // Gallery Filenames
  const wallFileNames = [
    'imagecopy2.webp', 'imagecopy3.webp', 'imagecopy4.webp',
    'imagecopy5.webp', 'imagecopy6.webp', 'imagecopy7.webp',
    'imagecopy8.webp', 'imagecopy9.webp', 'imagecopy10.webp',
    'imagecopy11.webp', 'imagecopy12.webp', 'imagecopy13.webp',
    'imagecopy14.webp', 'imagecopy15.webp', 'imagecopy16.webp',
    'imagecopy17.webp', 'imagecopy18.webp', 'imagecopy19.webp',
    'imagecopy20.webp', 'imagecopy21.webp', 'imagecopy22.webp',
    'imagecopy23.webp', 'imagecopy24.webp', 'imagecopy25.webp',
    'imagecopy26.webp', 'imagecopy27.webp', 'imagecopy.webp',
    'image.webp'
  ];

  const ceilingFileNames = [
    'imagecopy2.webp', 'imagecopy3.webp', 'imagecopy4.webp',
    'imagecopy5.webp', 'imagecopy6.webp', 'imagecopy7.webp',
    'imagecopy8.webp', 'imagecopy9.webp', 'imagecopy10.webp',
    'imagecopy11.webp', 'imagecopy12.webp', 'imagecopy13.webp',
    'imagecopy14.webp', 'imagecopy15.webp', 'imagecopy.webp',
    'image.webp'
  ];

  const flooringFileNames = [
    'imagecopy2.webp', 'imagecopy3.webp', 'imagecopy4.webp',
    'imagecopy5.webp', 'imagecopy6.webp', 'imagecopy7.webp',
    'imagecopy8.webp', 'imagecopy9.webp', 'imagecopy10.webp',
    'imagecopy11.webp', 'imagecopy12.webp', 'imagecopy13.webp',
    'imagecopy14.webp', 'imagecopy15.webp', 'imagecopy16.webp',
    'imagecopy17.webp', 'imagecopy18.webp', 'imagecopy19.webp',
    'imagecopy20.webp', 'imagecopy21.webp', 'imagecopy.webp',
    'image.webp'
  ];

  // Updated Products with exact content
  const voxProducts = [
    {
      id: 1,
      name: "Infratop Soffit SV(P) 07/08",
      image: "/images/products/vox/vox11.webp",
      subtitle: "Click-System",
      tags: ["Residential", "Commercial", "Waterproof"],
      details: {
        description: "VOX Infratop Soffit. The practical, hassle-free roof finish — maintenance-free, quick to install, and resistant to weather and biological corrosion. Built-in panel perforations ensure proper ventilation and lasting roof protection.",
        panelWidth: "300 mm",
        panelLength: "3050/3850 mm",
        thickness: "1mm +/- m",
        waterResistant: "YES",
        fireResistant: "D-s3;d0",
        system: "Click System",
        idealFor: ["Bedrooms", "Living Rooms", "Kitchens", "Offices", "Retail", "Hotels"]
      }
    },
    {
      id: 2,
      name: "Infratop Connex",
      image: "/images/products/vox/vox12.webp",
      subtitle: "Joining Without Any Accessories",
      tags: ["Seamless", "Commercial", "Premium"],
      details: {
        description: "Soffit Infratop Connex is a solution for joining non-perforated panels without accessories. Panels with a Connex lock are available in 2650mm length. For Infratop Connex patent is applied.",
        panelWidth: "300 mm",
        panelLength: "2650 mm",
        thickness: "1mm +/- m",
        waterResistant: "YES",
        fireResistant: "D-s3;d0",
        joint: "Seamlessly Connected",
        idealFor: ["Corporate Offices", "Hotel Lobbies", "Airports", "Conference Rooms"]
      }
    },
    {
      id: 3,
      name: "Infratop Soffit SV(P) 26",
      image: "/images/products/vox/vox13.webp",
      subtitle: "Panel with four Lamellas",
      tags: ["Outdoor", "Woodgrain", "Durable"],
      details: {
        description: "VOX Soffit SVP 26. Four-lamella panels that flow seamlessly overhead — creating depth, movement, and a finished outdoor ceiling that feels anything but ordinary. Weather-resistant, maintenance-free, and built to last wherever you install it.",
        panelWidth: "300 mm",
        panelLength: "3050/3850mm",
        thickness: "1mm +/- m",
        waterResistant: "Yes",
        fireResistant: "D-s3;d0",
        finish: "Woodgrain & Solid Wooden Finish",
        idealFor: ["Balconies", "Car Porches", "Overhangs", "Outdoor Corridors", "Facades"]
      }
    }
  ];

  useEffect(() => {
    const basePath = '/images/products/interior/';
    setWallImages(wallFileNames.map(name => `${basePath}wall/${name}`));
    setCeilingImages(ceilingFileNames.map(name => `${basePath}celing/${name}`));
    setFlooringImages(flooringFileNames.map(name => `${basePath}flooring/${name}`));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const renderGallery = (images, title) => {
    if (images.length === 0) {
      return (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🎨</div>
          <p className="text-gray-500 text-lg">No images found in {title}</p>
        </div>
      );
    }

    return (
      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
        {images.map((img, idx) => {
          const filename = img.split('/').pop();
          const cleanTitle = filename
            .replace(/\.(png|jpg|jpeg|webp)$/i, '')
            .replace(/^imagecopy(\d+)$/i, 'Design $1')
            .replace(/^imagecopy$/i, 'Design Copy')
            .replace(/^image$/i, 'Design')
            .trim();

          return (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={img} 
                  alt={cleanTitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  onError={(e) => { e.target.src = '/images/header02.webp'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-semibold text-sm">{cleanTitle}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{cleanTitle}</span>
                <button className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Optimized Product Modal with minimized image section
  const ProductModal = () => {
    if (!selectedProduct) return null;
    const { name, image, subtitle, tags, details } = selectedProduct;

    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
          
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-red-50 to-white">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
                {subtitle && (
                  <p className="text-sm text-red-600 font-medium">{subtitle}</p>
                )}
              </div>
            </div>
            <button 
              onClick={closeModal}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-xl"
            >
              ✕
            </button>
          </div>

          <div className="grid md:grid-cols-5 max-h-[calc(90vh-80px)] overflow-y-auto">
            {/* Left - Image (Smaller - 2 columns) */}
            <div className="md:col-span-2 relative bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6 min-h-[300px]">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent" />
              <img 
                src={image} 
                alt={name}
                className="relative w-full h-auto max-h-[400px] object-contain rounded-lg shadow-2xl"
               loading="lazy" decoding="async" />
              <div className="absolute top-4 left-4 flex gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Content (Larger - 3 columns) */}
            <div className="md:col-span-3 p-6 bg-gray-50 overflow-y-auto">
              <div className="space-y-4">
                {/* Description */}
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {details.description}
                  </p>
                </div>

                {/* Specifications Grid - 3 columns for better use of space */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Panel Width</p>
                    <p className="text-base font-bold text-gray-900 mt-1">{details.panelWidth}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Panel Length</p>
                    <p className="text-base font-bold text-gray-900 mt-1">{details.panelLength}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Thickness</p>
                    <p className="text-base font-bold text-gray-900 mt-1">{details.thickness}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Water Resistant</p>
                    <p className="text-base font-bold text-green-600 mt-1">{details.waterResistant}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Fire Resistant</p>
                    <p className="text-base font-bold text-gray-900 mt-1">{details.fireResistant}</p>
                  </div>
                  {details.system && (
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">System</p>
                      <p className="text-base font-bold text-gray-900 mt-1">{details.system}</p>
                    </div>
                  )}
                  {details.joint && (
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Joint</p>
                      <p className="text-base font-bold text-gray-900 mt-1">{details.joint}</p>
                    </div>
                  )}
                  {details.finish && (
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Finish</p>
                      <p className="text-base font-bold text-gray-900 mt-1">{details.finish}</p>
                    </div>
                  )}
                </div>

                {/* Ideal For */}
                <div>
                  <p className="text-gray-500 text-[10px] font-medium uppercase tracking-wider mb-2">Perfect For</p>
                  <div className="flex flex-wrap gap-2">
                    {details.idealFor.map((item, i) => (
                      <span key={i} className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
               <button 
  onClick={() => window.location.href = '/contact'}
  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-8 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-xl"
>
  Get a Quote <span className="text-xl">→</span>
</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Original/OLD UI Design */}
      <section className="relative bg-white py-12 md:py-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src={`${process.env.PUBLIC_URL}/images/customers/02.webp`} 
              alt="Vox India Logo" 
              className="h-16 md:h-20 object-contain"
             loading="lazy" decoding="async" />
          </div>
          <span className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold mb-4 text-sm shadow-md">
            VOX INDIA
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-black leading-tight">
            Vox India Projects
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Explore our innovative wall, ceiling, and flooring solutions from Vox India.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-2 flex flex-wrap items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {['featured', 'ceiling', 'flooring', 'wall'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors text-xl ${viewMode === 'grid' ? 'bg-red-100 text-red-600' : 'text-gray-400 hover:bg-gray-100'}`}
            >
              ▦
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors text-xl ${viewMode === 'list' ? 'bg-red-100 text-red-600' : 'text-gray-400 hover:bg-gray-100'}`}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      {activeTab === 'featured' && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                Premium Collection
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Infratop Soffit Systems</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cutting-edge ceiling solutions for modern architecture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {voxProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => openModal(product)}
                  className="group cursor-pointer bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                     loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                        View Details
                      </button>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      {product.tags.map((tag, i) => (
                        <span key={i} className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1 text-gray-900">{product.name}</h3>
                    {product.subtitle && (
                      <p className="text-sm text-red-600 font-medium mb-2">{product.subtitle}</p>
                    )}
                    <p className="text-gray-600 text-sm line-clamp-2">{product.details.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Sections */}
      {activeTab === 'ceiling' && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">📐</span>
              <h2 className="text-3xl font-bold text-gray-900">Ceiling Designs</h2>
            </div>
            {renderGallery(ceilingImages, "Ceiling Designs")}
          </div>
        </section>
      )}

      {activeTab === 'flooring' && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🏗️</span>
              <h2 className="text-3xl font-bold text-gray-900">Flooring Designs</h2>
            </div>
            {renderGallery(flooringImages, "Flooring Designs")}
          </div>
        </section>
      )}

      {activeTab === 'wall' && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🧱</span>
              <h2 className="text-3xl font-bold text-gray-900">Wall Designs</h2>
            </div>
            {renderGallery(wallImages, "Wall Designs")}
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-white/90 text-lg mb-8">Get in touch with our team for expert guidance on your project</p>
          <button className="bg-white text-red-700 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && <ProductModal />}
    </div>
  );
};

export default VoxIndia;