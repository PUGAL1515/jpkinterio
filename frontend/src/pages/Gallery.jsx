import { useState } from 'react';
import { staticData } from '../data/staticData';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { featured, all } = staticData.gallery;

  const downloadImage = () => {
    if (!selectedImage) return;
    const link = document.createElement('a');
    link.href = selectedImage;
    const fileName = selectedImage.substring(selectedImage.lastIndexOf('/') + 1);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareImage = async () => {
    if (!selectedImage) return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'JPK Interio Gallery Image',
          url: selectedImage
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      alert('Sharing is not supported on this browser. Image URL: ' + selectedImage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-16">
  <div className="max-w-5xl mx-auto text-center">

    {/* Tag */}
    <span className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold mb-4 text-xs shadow-sm">
      Gallery
    </span>

    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
      Our Gallery
    </h1>

    {/* Description */}
    <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
      Explore our latest interior design projects, installations, and beautifully crafted spaces across South India.
    </p>

  </div>
</section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Images Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featured.map((img) => (
              <div
                key={img.id}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(img.image)}
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover group-hover:brightness-75 transition-all duration-300"
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/images/header02.png`;
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-semibold transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Images Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">All Images</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {all.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-md shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-40 md:h-48 lg:h-56 object-cover group-hover:brightness-75 transition-all duration-300"
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/images/header02.png`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full rounded-lg overflow-hidden bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-gray-800 hover:text-red-600 text-3xl font-bold z-20 w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-all"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Gallery Preview"
              className="w-full h-auto max-h-[85vh] object-contain bg-gray-100"
              onError={(e) => {
                e.target.src = `${process.env.PUBLIC_URL}/images/header02.png`;
              }}
            />
            
            {/* Action Buttons */}
            <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 bg-gray-50">
              <button
                onClick={downloadImage}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition flex items-center space-x-2 font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download</span>
              </button>
              <button
                onClick={shareImage}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition flex items-center space-x-2 font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Inspired by Our Work?</h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us to discuss your interior design and installation project.
          </p>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}