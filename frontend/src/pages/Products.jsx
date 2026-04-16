import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { staticData } from '../data/staticData';

const Products = () => {
  const data = staticData.products;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <img src={`${data.hero.image}`} alt="Products" className="w-full h-full object-cover object-center rounded-lg" />
          </div>
          <div className="md:w-1/2 w-full">
            <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full font-medium mb-3 text-xs shadow-lg">Products</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-black leading-tight"><span className="block text-red-600">{data.hero.title}</span></h1>
            <p className="text-black text-base md:text-lg mb-6 leading-relaxed">{data.hero.description}</p>
            <Link
              to="/products/about-fundermax"
              className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Learn about Fundermax
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative bg-gray-50 py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-black">Our Premium Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.items.map((product) => (
              <div 
                key={product.id} 
                onClick={() => setSelectedProduct(product)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer transform hover:scale-105 duration-300"
              >
                <img src={`${product.image}`} alt={product.name} className="w-full h-48 object-cover object-center" />
                <div className="p-6">
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">{product.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-700 text-sm mb-4">{product.description.substring(0, 80)}...</p>
                  <button className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full p-8">
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setActiveTab('overview');
                }}
                className="float-right text-2xl font-bold text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <img
                  src={`${selectedProduct.image}`}
                  alt={selectedProduct.name}
                  className="w-full h-96 object-cover rounded-lg"
                />

                <div>
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">{selectedProduct.category}</span>
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{selectedProduct.name}</h2>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedProduct.description}</p>

                  {/* Tab Navigation */}
                  <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition ${
                        activeTab === 'overview'
                          ? 'bg-white text-red-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Overview
                    </button>
                    {selectedProduct.interior && (
                      <button
                        onClick={() => setActiveTab('interior')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition ${
                          activeTab === 'interior'
                            ? 'bg-white text-red-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Interior
                      </button>
                    )}
                    {selectedProduct.exterior && (
                      <button
                        onClick={() => setActiveTab('exterior')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition ${
                          activeTab === 'exterior'
                            ? 'bg-white text-red-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Exterior
                      </button>
                    )}
                  </div>

                  {/* Tab Content */}
                  {activeTab === 'overview' && (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-2 mb-6">
                        {selectedProduct.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProduct.applications.map((app, idx) => (
                          <span key={idx} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                            {app}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {activeTab === 'interior' && selectedProduct.interior && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProduct.interior.title}</h3>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedProduct.interior.description}</p>

                      {selectedProduct.interior.sections && (
                        <div className="mb-6 space-y-4 border-l-4 border-blue-400 pl-4">
                          {selectedProduct.interior.sections.map((section, idx) => (
                            <div key={idx} className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="text-lg font-semibold text-blue-900 mb-2">{section.name}</h4>
                              <p className="text-gray-700 text-sm mb-2">{section.description}</p>
                              {section.applications && (
                                <div className="flex flex-wrap gap-1">
                                  {section.applications.map((app, i) => (
                                    <span key={i} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                                      {app}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {section.items && (
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                                  {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Interior Features</h4>
                      <ul className="space-y-2 mb-6">
                        {selectedProduct.interior.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Interior Applications</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProduct.interior.applications.map((app, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                            {app}
                          </span>
                        ))}
                      </div>

                      {selectedProduct.interior.images && selectedProduct.interior.images.length > 0 && (
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">Interior Gallery</h4>
                          <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto">
                            {selectedProduct.interior.images.map((img, idx) => (
                              <img key={idx} src={img} alt={`Interior ${idx + 1}`} className="w-full h-24 object-cover rounded hover:opacity-75 cursor-pointer transition" onError={(e) => e.target.style.display = 'none'} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'exterior' && selectedProduct.exterior && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProduct.exterior.title}</h3>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedProduct.exterior.description}</p>

                      {selectedProduct.exterior.sections && (
                        <div className="mb-6 space-y-4 border-l-4 border-green-400 pl-4">
                          {selectedProduct.exterior.sections.map((section, idx) => (
                            <div key={idx} className="bg-green-50 p-4 rounded-lg">
                              <h4 className="text-lg font-semibold text-green-900 mb-2">{section.name}</h4>
                              <p className="text-gray-700 text-sm mb-2">{section.description}</p>
                              {section.items && (
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                                  {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Exterior Features</h4>
                      <ul className="space-y-2 mb-6">
                        {selectedProduct.exterior.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Exterior Applications</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProduct.exterior.applications.map((app, idx) => (
                          <span key={idx} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                            {app}
                          </span>
                        ))}
                      </div>

                      {selectedProduct.exterior.images && selectedProduct.exterior.images.length > 0 && (
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">Exterior Gallery</h4>
                          <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto">
                            {selectedProduct.exterior.images.map((img, idx) => (
                              <img key={idx} src={img} alt={`Exterior ${idx + 1}`} className="w-full h-24 object-cover rounded hover:opacity-75 cursor-pointer transition" onError={(e) => e.target.style.display = 'none'} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <a href="/contact" className="block text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition">
                    Request Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 py-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Need Help Choosing?</h2>
          <p className="text-lg mb-8 opacity-90">Our experts are here to help you select the perfect solution for your project.</p>
          <a href="/contact" className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Contact Our Experts
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
