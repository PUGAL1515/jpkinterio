// src/components/KnaufCeilingSolutions.jsx

import React, { useState } from 'react';
import { productsData } from '../data/productsData';

const KnaufCeilingSolutions = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-2 h-px bg-red-600" />
            <span className="text-red-600 font-medium tracking-widest text-xs">KNAUF CEILING SOLUTIONS</span>
            <div className="w-2 h-px bg-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900">Ceiling Solutions</h1>
          <p className="text-zinc-600 mt-2">Premium Knauf & Armstrong Systems</p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-52 overflow-hidden bg-zinc-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] px-3 py-1 rounded-full font-medium">
                  {product.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-base text-zinc-900 mb-2 line-clamp-2 min-h-[48px]">
                  {product.name}
                </h3>
                <p className="text-zinc-500 text-xs line-clamp-2 mb-4 min-h-[32px]">
                  {product.shortDesc}
                </p>
                <div className="text-red-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <span className="text-base">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Product Detail Component
const ProductDetail = ({ product, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Check if product has multiple images
  const hasMultipleImages = product.image2 || (product.images && product.images.length > 0);
  const images = [];
  
  if (product.image2) {
    images.push(product.image, product.image2);
  } else if (product.images && product.images.length > 0) {
    images.push(...product.images);
  } else {
    images.push(product.image);
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Helper function to format column headers
  const formatHeader = (key) => {
    const headers = {
      materialNo: "Material No.",
      ean: "EAN/GTIN",
      edge: "Edge Detail",
      length: "Length",
      width: "Width",
      thickness: "Thickness",
      colour: "Colour",
      aw: "αw",
      awShapeIndicator: "αw Shape",
      soundAbsorptionClass: "Sound Absorption Class",
      nrc: "NRC",
      cac: "CAC (dB)",
      dnrw: "DNFW (dB)",
      soundAbsorptionSabins: "Sound Absorption (Sabins)",
      recycleContent: "Recycle Content",
      soundAttenuation: "Sound Attenuation (dB)"
    };
    return headers[key] || key.replace(/([A-Z])/g, ' $1').trim();
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm py-4 px-6">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-zinc-600 hover:text-red-600 font-medium transition-colors"
        >
          <span className="text-xl">←</span> Back to Ceiling Solutions
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-5 pt-8 pb-16">
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left Column - Image + Quick Specs + Downloads */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Product Image with Navigation for Multiple Images */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white group">
              <img 
                src={images[currentImageIndex]}
                alt={product.name}
                className="w-full h-auto object-cover aspect-square max-h-[400px]"
              />
              
              {/* Image Navigation for multiple images */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  >
                    ←
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  >
                    →
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentImageIndex === idx ? 'bg-red-600 w-4' : 'bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
              
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                {product.category}
              </div>
            </div>

            {/* Quick Specifications */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-100">
              <h4 className="font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-red-600 rounded-full"></span>
                Quick Specifications
              </h4>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div className="text-zinc-500 font-medium">Brand</div>
                <div className="text-zinc-800">{product.brand || "Armstrong"}</div>
                
                <div className="text-zinc-500 font-medium">Thickness</div>
                <div className="text-zinc-800">{product.thickness || "—"}</div>
                
                <div className="text-zinc-500 font-medium">Size</div>
                <div className="text-zinc-800">{product.size || "—"}</div>
                
                {product.features?.slice(0, 2).map((feature, idx) => {
                  const match = feature.match(/([\d.]+)\s*([A-Za-z%]+)/);
                  if (match && idx === 0) {
                    return (
                      <React.Fragment key={idx}>
                        <div className="text-zinc-500 font-medium">Key Spec</div>
                        <div className="text-zinc-800">{match[0]}</div>
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Downloads - UPDATED WITH RED BACKGROUND */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-100">
              <h4 className="font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-red-600 rounded-full"></span>
                Downloads
              </h4>
              <div className="space-y-3">
                {(product.pdf || product.pdfMain) && (
                  <a 
                    href={product.pdf || product.pdfMain} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl transition-all shadow-md hover:shadow-lg"
                  >
                    <div>
                      <p className="font-medium text-sm text-white">
                        Product Datasheet
                      </p>
                      <p className="text-xs text-red-100 mt-0.5">Technical Data Sheet (PDF)</p>
                    </div>
                    <span className="text-xl text-white group-hover:translate-y-0.5 transition-transform">↓</span>
                  </a>
                )}

                {product.pdfWarranty && (
                  <a 
                    href={product.pdfWarranty} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl transition-all shadow-md hover:shadow-lg"
                  >
                    <div>
                      <p className="font-medium text-sm text-white">
                        Warranty & Installation Guide
                      </p>
                      <p className="text-xs text-red-100 mt-0.5">Installation & Maintenance Info</p>
                    </div>
                    <span className="text-xl text-white group-hover:translate-y-0.5 transition-transform">↓</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-3 space-y-8">

            {/* Title Section */}
            <div className="border-b border-zinc-200 pb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
                {product.name}
              </h1>
              <p className="text-zinc-600 text-base leading-relaxed">
                {product.shortDesc}
              </p>
            </div>

            {/* Description & Details */}
            <div>
              <h3 className="text-red-600 font-semibold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-red-600 rounded-full"></span>
                Description & Details
              </h3>
              <p className="text-zinc-600 text-[15px] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features / Product Benefits */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-red-600 font-semibold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-red-600 rounded-full"></span>
                  Key Features
                </h3>
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-red-500 text-lg leading-5">•</span>
                      <span className="text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div>
                <h3 className="text-red-600 font-semibold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-red-600 rounded-full"></span>
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span key={i} className="bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Building Types */}
            {product.buildingTypes && product.buildingTypes.length > 0 && (
              <div>
                <h3 className="text-red-600 font-semibold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-red-600 rounded-full"></span>
                  Building Types
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.buildingTypes.map((type, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Product Variants & Packaging Table */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <h3 className="text-red-600 font-semibold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-red-600 rounded-full"></span>
                  Product Variants & Packaging
                </h3>
                <div className="bg-white border border-zinc-200 rounded-xl overflow-x-auto shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-zinc-100 border-b border-zinc-200">
                        {Object.keys(product.variants[0]).map((key) => (
                          <th key={key} className="px-4 py-3 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                            {formatHeader(key)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {product.variants.map((variant, idx) => (
                        <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                          {Object.values(variant).map((value, i) => (
                            <td key={i} className="px-4 py-3 text-zinc-700">
                              {value || "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Request Quote Button */}
            <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-semibold text-base transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/40 active:scale-[0.98]">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnaufCeilingSolutions;