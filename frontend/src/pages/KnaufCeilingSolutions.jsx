import React, { useState } from 'react';

const KnaufCeilingSolutions = () => {
  // Product data array with multiple images for each product
  const products = [
    {
      name: 'Boards',
      description: 'High-performance gypsum boards for walls and ceilings, offering fire resistance and durability.',
      images: [
        '/images/products/knauf/boards/boards1.webp',
        '/images/products/knauf/boards/boards2.webp',
        '/images/products/knauf/boards/boards3.webp',
        '/images/products/knauf/boards/boards4.webp',
        '/images/products/knauf/boards/boards5.webp',
        '/images/products/knauf/boards/boards6.webp',
        '/images/products/knauf/boards/boards7.webp',
        '/images/products/knauf/boards/boards8.webp',
        '/images/products/knauf/boards/boards9.webp'
      ],
      bgClass: 'bg-amber-50'
    },
    {
      name: 'Insulation',
      description: 'Thermal and acoustic insulation materials for energy efficiency and sound control.',
      images: [
        '/images/products/knauf/insulation/insulation.webp'
      ],
      bgClass: 'bg-blue-50'
    },
    {
      name: 'Ceiling & Wall Absorbers',
      description: 'Acoustic absorbers for superior sound management in commercial spaces.',
      images: [
        '/images/products/knauf/Ceilings/Ceilings1.webp',
        '/images/products/knauf/Ceilings/Ceilings2.webp',
        '/images/products/knauf/Ceilings/Ceilings3.webp',
        '/images/products/knauf/Ceilings/Ceilings4.webp',
        '/images/products/knauf/Ceilings/Ceilings5.webp',
        '/images/products/knauf/Ceilings/Ceilings6.webp',
        '/images/products/knauf/Ceilings/Ceilings7.webp',
        '/images/products/knauf/Ceilings/Ceilings8.webp',
        '/images/products/knauf/Ceilings/Ceilings9.webp',
        '/images/products/knauf/Ceilings/Ceilings10.webp',
        '/images/products/knauf/Ceilings/Ceilings11.webp',
        '/images/products/knauf/Ceilings/Ceilings12.webp',
        '/images/products/knauf/Ceilings/Ceilings13.webp',
        '/images/products/knauf/Ceilings/Ceilings14.webp',
        '/images/products/knauf/Ceilings/Ceilings15.webp'
      ],
      bgClass: 'bg-indigo-50'
    },
    {
      name: 'Plasters & Mortar',
      description: 'High-quality plasters and mortars for smooth, durable finishes.',
      images: [
        '/images/products/knauf/plasters/plaster1.webp',
        '/images/products/knauf/plasters/plaster2.webp'
      ],
      bgClass: 'bg-gray-100'
    },
    {
      name: 'Filling Materials',
      description: 'Joint fillers and compounds for seamless surface integration.',
      images: [
        '/images/products/knauf/Filling/Filling1.webp',
        '/images/products/knauf/Filling/Filling2.webp',
        '/images/products/knauf/Filling/Filling3.webp',
        '/images/products/knauf/Filling/Filling4.webp',
        '/images/products/knauf/Filling/Filling5.webp',
        '/images/products/knauf/Filling/Filling6.webp',
        '/images/products/knauf/Filling/Filling7.webp'
      ],
      bgClass: 'bg-orange-50'
    },
    {
      name: 'Profiles & Supports',
      description: 'Metal profiles and support systems for secure framing.',
      images: [
        '/images/products/knauf/profiles/Profiles1.webp',
        '/images/products/knauf/profiles/Profiles2.webp',
        '/images/products/knauf/profiles/Profiles3.webp',
        '/images/products/knauf/profiles/Profiles4.webp',
        '/images/products/knauf/profiles/Profiles5.webp',
        '/images/products/knauf/profiles/Profiles6.webp',
        '/images/products/knauf/profiles/Profiles7.webp',
        '/images/products/knauf/profiles/Profiles8.webp',
        '/images/products/knauf/profiles/Profiles9.webp',
        '/images/products/knauf/profiles/Profiles10.webp',
        '/images/products/knauf/profiles/Profiles11.webp',
        '/images/products/knauf/profiles/Profiles12.webp',
        '/images/products/knauf/profiles/Profiles13.webp',
        '/images/products/knauf/profiles/Profiles14.webp'
      ],
      bgClass: 'bg-slate-100'
    },
    {
      name: 'Built-ins',
      description: 'Integrated solutions like access panels and service outlets.',
      images: [
        '/images/products/knauf/profiles/built-ins.webp'
      ],
      bgClass: 'bg-emerald-50'
    },
    {
      name: 'Coating Materials',
      description: 'Protective and decorative coatings for long-lasting surfaces.',
      images: [
        '/images/products/knauf/profiles/Coating1.webp',
        '/images/products/knauf/profiles/Coating2.webp'
      ],
      bgClass: 'bg-pink-50'
    },
    {
      name: 'Glues & Sealers',
      description: 'Strong adhesives and sealers for reliable bonding.',
      images: [
        '/images/products/knauf/profiles/Glues.webp'
      ],
      bgClass: 'bg-yellow-50'
    },
    {
      name: 'Mounting & Fixing Technology',
      description: 'Screws, anchors, and tools for professional installation.',
      images: [
        '/images/products/knauf/Mounting/Mounting1.webp',
        '/images/products/knauf/Mounting/Mounting2.webp',
        '/images/products/knauf/Mounting/Mounting3.webp',
        '/images/products/knauf/Mounting/Mounting4.webp',
        '/images/products/knauf/Mounting/Mounting5.webp',
        '/images/products/knauf/Mounting/Mounting6.webp',
        '/images/products/knauf/Mounting/Mounting7.webp',
        '/images/products/knauf/Mounting/Mounting8.webp',
        '/images/products/knauf/Mounting/Mounting9.webp',
        '/images/products/knauf/Mounting/Mounting10.webp'
      ],
      bgClass: 'bg-stone-100'
    },
    {
      name: 'Strips & Adhesive Tapes',
      description: 'Specialized tapes for joints, reinforcement, and sealing.',
      images: [
        '/images/products/knauf/Mounting/Strips1.webp',
        '/images/products/knauf/Mounting/Strips2.webp'
      ],
      bgClass: 'bg-cyan-50'
    },
    {
      name: 'Sealings & Foils',
      description: 'Vapor barriers and sealing foils for moisture protection.',
      images: [
        '/images/products/knauf/Mounting/Sealings1.webp'
      ],
      bgClass: 'bg-teal-50'
    }
  ];

  // State to track which product's gallery is open
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Product Card Component with multiple images
  const ProductCard = ({ product, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const nextImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
      <div className={`${product.bgClass} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100`}>
        {/* Multiple Images Carousel */}
        <div className="relative">
          <div className="h-48 overflow-hidden relative">
            <img
              src={product.images[currentImageIndex]}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
              }}
              onClick={() => setLightboxImage({ product, index: currentImageIndex })}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {currentImageIndex + 1} / {product.images.length}
          </div>

          {/* Navigation Arrows */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Thumbnail Strip */}
          <div className="flex gap-1 p-2 bg-white/80 backdrop-blur-sm border-t overflow-x-auto">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-10 h-10 rounded-md overflow-hidden border-2 transition flex-shrink-0 ${currentImageIndex === idx ? 'border-red-600' : 'border-transparent'
                  }`}
              >
                <img
                  src={img}
                  alt={`Thumb ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/40x40?text=?';
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-gray-600 text-xs leading-relaxed">{product.description}</p>
          <button
            onClick={() => setSelectedProduct(selectedProduct === product.name ? null : product.name)}
            className="mt-3 text-red-600 font-semibold text-xs inline-flex items-center hover:translate-x-0.5 transition"
          >
            {selectedProduct === product.name ? 'Show Less' : 'View All Images'}
            <svg className={`w-3 h-3 ml-1 transition-transform ${selectedProduct === product.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Expanded Image Gallery */}
        {selectedProduct === product.name && (
          <div className="p-4 pt-0 border-t border-gray-200 mt-2">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">All Images ({product.images.length})</h4>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition"
                  onClick={() => setLightboxImage({ product, index: idx })}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150x150?text=No+Image';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-white py-10 md:py-12 px-6 md:px-16 overflow-hidden">
  <div className="max-w-7xl mx-auto text-center">

    {/* 🔥 Logo */}
    <div className="flex justify-center mb-5">
      <img 
        src="/images/customers/07.png" 
        alt="Knauf Logo" 
        className="h-14 md:h-20 object-contain"
      />
    </div>

    {/* Tag */}
    <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mb-3 text-xs shadow-md">
      Knauf
    </span>

    {/* Heading (corrected) */}
    <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-black leading-tight">
      Ceiling & Wall Absorbers
    </h1>

    {/* Description */}
    <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
      Advanced ceiling systems for commercial and residential applications.
    </p>

  </div>
</section>

      {/* Products Grid Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Complete Product Range</h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Discover our comprehensive portfolio of high-quality building materials
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
            onClick={() => setLightboxImage(null)}
          >
            ✕
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.product.images[lightboxImage.index]}
              alt={`${lightboxImage.product.name} - Large view`}
              className="w-full h-auto rounded-lg shadow-2xl max-h-[80vh] object-contain"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
              }}
            />
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setLightboxImage({
                  product: lightboxImage.product,
                  index: (lightboxImage.index - 1 + lightboxImage.product.images.length) % lightboxImage.product.images.length
                })}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-white text-sm">
                {lightboxImage.index + 1} / {lightboxImage.product.images.length}
              </span>
              <button
                onClick={() => setLightboxImage({
                  product: lightboxImage.product,
                  index: (lightboxImage.index + 1) % lightboxImage.product.images.length
                })}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="text-white text-center mt-3 text-sm">
              {lightboxImage.product.name} - Image {lightboxImage.index + 1}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnaufCeilingSolutions;