import { useState, useEffect } from 'react';

export default function Awards() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [featured, setFeatured] = useState([]);
  const [others, setOthers] = useState([]);

  // Static Achievements
  const achievements = [
    { year: 2024, title: 'Best Interior Design Award', description: 'Recognized for innovative interior design and customer satisfaction.' },
    { year: 2024, title: 'Excellence in Innovation', description: 'Awarded for implementing cutting-edge design solutions and technology.' },
    { year: 2023, title: 'Customer Choice Award', description: 'Voted best by our customers for outstanding service and quality.' },
    { year: 2023, title: 'Premium Quality Recognition', description: 'Certified for maintaining highest standards in materials and craftsmanship.' },
    { year: 2023, title: 'Best Service Provider', description: 'Recognition for exceptional customer service and project management.' },
    { year: 2022, title: 'Industry Excellence', description: 'Awarded for contributions to interior design industry advancement.' }
  ];

  // Load award images from your actual files
  useEffect(() => {
    const allImages = [
      // Logo and main images
      // '/images/awards/New_Project__83_-removebg-preview-225x300.png',
      '/images/awards/New_Project__83_-removebg-preview.png',
      '/images/awards/vecteezy_ai-generated-podium-with-golden-light-rays-background_36042916-scaled.jpeg',
      // '/images/awards/WhatsApp_Image_2024-10-28_at_2.38.01_PM__1_-removebg-preview-224x300.png',
      // '/images/awards/WhatsApp_Image_2024-10-28_at_2.38.01_PM__1_-removebg-preview.png',
      // '/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1-300x200.jpeg',
      '/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1-768x513.jpeg',
      // '/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1-1024x684.jpeg',
      // '/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1-1536x1025.jpeg',
      // '/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1.jpeg',
      // '/images/awards/WhatsApp-Image-2024-10-28-at-2.37.04-PM-1-1-225x300.jpeg',
      // '/images/awards/WhatsApp-Image-2024-10-28-at-2.37.04-PM-1-1-768x1024.jpeg',
      '/images/awards/WhatsApp-Image-2024-10-28-at-2.37.04-PM-1-1.jpeg'
    ];

    // First 5 as Featured Awards, rest as Additional Recognition
    const featuredImages = allImages.slice(0, 5);
    const otherImages = allImages.slice(5);

    setFeatured(featuredImages);
    setOthers(otherImages);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-white py-10 md:py-12 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mb-3 text-xs shadow-md">
            Awards & Recognition
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-black leading-tight">
            Our Awards & Recognition
          </h1>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Celebrating our achievements and industry recognition for excellence in interior design and customer service.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Achievements Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-red-600"
              >
                <div className="flex items-center mb-3">
                  <span className="text-red-600 font-bold text-2xl mr-3">{achievement.year}</span>
                  <span className="text-gray-400 text-sm">•</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Awards */}
        {featured.length > 0 && (
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Featured Awards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {featured.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer group relative bg-gray-100"
                  onClick={() => setSelectedImage(img)}
                >
                  {/* For transparent PNG images, use contain instead of cover */}
                  <img
                    src={img}
                    alt={`Featured Award ${idx + 1}`}
                    className={`w-full h-56 md:h-64 lg:h-72 transition-all duration-300 group-hover:brightness-75 ${
                      img.includes('removebg') || img.includes('jpk_logo') 
                        ? 'object-contain p-4' 
                        : 'object-cover'
                    }`}
                    onError={(e) => { e.target.src = '/images/header02.png'; }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-semibold">
                      View Award
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Recognition */}
        {others.length > 0 && (
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Additional Recognition</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {others.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-md shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer group relative bg-gray-100"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Award ${idx + 1}`}
                    className={`w-full h-40 md:h-48 lg:h-56 transition-all duration-300 group-hover:brightness-75 ${
                      img.includes('removebg') || img.includes('jpk_logo')
                        ? 'object-contain p-2'
                        : 'object-cover'
                    }`}
                    onError={(e) => { e.target.src = '/images/header02.png'; }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-sm font-semibold">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 text-4xl font-bold z-20 
                         bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Award Preview"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg bg-gray-900"
              onError={(e) => {
                e.target.src = '/images/header02.png';
              }}
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Experience Excellence with JPK Interio</h2>
          <p className="text-xl opacity-90 mb-8">
            Benefit from our award-winning expertise and commitment to quality. Contact us for your next project.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}