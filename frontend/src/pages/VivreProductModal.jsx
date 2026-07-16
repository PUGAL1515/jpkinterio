// VivreProductModal.jsx
import React from 'react';

const VivreProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-7xl max-h-[95vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-slideUp">
        
        {/* ========== HEADER ========== */}
        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              {product.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Product Overview
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-all duration-300 text-3xl"
          >
            ✕
          </button>
        </div>

        {/* ========== SCROLLABLE CONTENT ========== */}
        <div className="overflow-y-auto flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-6xl mx-auto space-y-12">
           
            {/* ===== MAIN CONTENT: 2-COLUMN LAYOUT ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              
              {/* LEFT: Product Image */}
              <div className="lg:col-span-2">
                <div className="sticky top-0">
                  <div className="bg-gray-50 rounded-3xl p-6 flex items-center justify-center shadow-inner">
                    <img
                      src={product.src}
                      alt={product.name}
                      className="w-full max-h-[420px] object-contain rounded-2xl"
                     loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>

              {/* RIGHT: Details */}
              <div className="lg:col-span-3 space-y-10">
                
                {/* Description */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                    About {product.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-[17px]">
                    {product.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                {product.features && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                      <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-4 bg-gray-50 hover:bg-gray-100 p-5 rounded-2xl transition-colors duration-200"
                        >
                          <span className="text-red-600 text-xl font-bold mt-0.5">✦</span>
                          <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ===== GALLERY SECTION ===== */}
            {product.galleryImages && product.galleryImages.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                  Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {product.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100"
                      onClick={() => window.open(img, '_blank')}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                       loading="lazy" decoding="async" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                          View
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== SPECIFICATIONS ===== */}
            {product.specs && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                  Specifications
                </h3>
                <div className="bg-gray-50 rounded-3xl p-6 md:p-8 divide-y divide-gray-200">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-8"
                    >
                      <span className="font-semibold text-gray-600 md:w-48 flex-shrink-0 text-sm uppercase tracking-wider">
                        {key}
                      </span>
                      <span className="text-gray-900 leading-relaxed">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== DESIGNS SECTION ===== */}
            {product.designImages && product.designImages.length > 0 && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                    Designs
                  </h3>
                  <span className="text-sm text-gray-400 bg-gray-100 px-4 py-1.5 rounded-full">
                    Click to enlarge
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                  {product.designImages.map((item, idx) => {
                    const imgSrc = typeof item === 'string' ? item : item.src;
                    const designCode = typeof item === 'string'
                      ? String(idx + 1).padStart(4, '0')
                      : item.code;
                    return (
                      <div
                        key={idx}
                        className="group relative cursor-pointer rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                        onClick={() => window.open(imgSrc, '_blank')}
                      >
                        <img
                          src={imgSrc}
                          alt={`Design ${designCode}`}
                          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                         loading="lazy" decoding="async" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10">
                          #{designCode}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="bg-white/90 text-black px-4 py-2 rounded-full text-xs font-semibold">
                            View Design
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========== FOOTER ACTIONS ========== */}
        {/* ========== FOOTER ACTIONS ========== */}
<div className="border-t border-gray-200 bg-gray-50 px-6 md:px-8 py-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
  <button
  onClick={onClose}
  className={`px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-200 w-auto min-w-[100px] ${
    product.pdfUrl
      ? "border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-100 text-gray-700"
      : "bg-gray-900 hover:bg-black text-white"
  }`}
>
  Close
</button>

  {product.pdfUrl && (
    <a
      href={product.pdfUrl}
      download
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold text-base rounded-2xl transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download Technical PDF
    </a>
  )}
</div>
      </div>
    </div>
  );
};

export default VivreProductModal;