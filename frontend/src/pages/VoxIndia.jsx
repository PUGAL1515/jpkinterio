import React, { useState, useEffect } from 'react';

const VoxIndia = () => {
  const [wallImages, setWallImages] = useState([]);
  const [ceilingImages, setCeilingImages] = useState([]);
  const [flooringImages, setFlooringImages] = useState([]);

  // Filenames without spaces
  const wallFileNames = [
    'imagecopy2.png', 'imagecopy3.png', 'imagecopy4.png',
    'imagecopy5.png', 'imagecopy6.png', 'imagecopy7.png',
    'imagecopy8.png', 'imagecopy9.png', 'imagecopy10.png',
    'imagecopy11.png', 'imagecopy12.png', 'imagecopy13.png',
    'imagecopy14.png', 'imagecopy15.png', 'imagecopy16.png',
    'imagecopy17.png', 'imagecopy18.png', 'imagecopy19.png',
    'imagecopy20.png', 'imagecopy21.png', 'imagecopy22.png',
    'imagecopy23.png', 'imagecopy24.png', 'imagecopy25.png',
    'imagecopy26.png', 'imagecopy27.png', 'imagecopy.png',
    'image.png'
  ];

  const ceilingFileNames = [
    'imagecopy2.png', 'imagecopy3.png', 'imagecopy4.png',
    'imagecopy5.png', 'imagecopy6.png', 'imagecopy7.png',
    'imagecopy8.png', 'imagecopy9.png', 'imagecopy10.png',
    'imagecopy11.png', 'imagecopy12.png', 'imagecopy13.png',
    'imagecopy14.png', 'imagecopy15.png', 'imagecopy.png',
    'image.png'
  ];

  const flooringFileNames = [
    'imagecopy2.png', 'imagecopy3.png', 'imagecopy4.png',
    'imagecopy5.png', 'imagecopy6.png', 'imagecopy7.png',
    'imagecopy8.png', 'imagecopy9.png', 'imagecopy10.png',
    'imagecopy11.png', 'imagecopy12.png', 'imagecopy13.png',
    'imagecopy14.png', 'imagecopy15.png', 'imagecopy16.png',
    'imagecopy17.png', 'imagecopy18.png', 'imagecopy19.png',
    'imagecopy20.png', 'imagecopy21.png', 'imagecopy.png',
    'image.png'
  ];

  useEffect(() => {
    const basePath = '/images/products/interior/';

    // Construct image paths
    setWallImages(wallFileNames.map(name => `${basePath}wall/${name}`));
    setCeilingImages(ceilingFileNames.map(name => `${basePath}celing/${name}`));
    setFlooringImages(flooringFileNames.map(name => `${basePath}flooring/${name}`));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderGallery = (images, title) => {
    if (images.length === 0) {
      return <p className="text-gray-500 text-center py-12">No images found in {title}</p>;
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => {
          const filename = img.split('/').pop();
          const cleanTitle = filename
            .replace(/\.(png|jpg|jpeg)$/i, '')
            .replace(/^imagecopy(\d+)$/i, 'Design $1')
            .replace(/^imagecopy$/i, 'Design Copy')
            .replace(/^image$/i, 'Design')
            .trim();

          return (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={img} 
                  alt={cleanTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/images/header02.png';
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 capitalize">
                  {cleanTitle}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Date: {new Date().toISOString().split('T')[0]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
     <section className="relative bg-white py-10 md:py-12 px-6 md:px-16 overflow-hidden">
  <div className="max-w-7xl mx-auto text-center">
    
    <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mb-3 text-xs shadow-md">
      Vox India
    </span>

    <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-black leading-tight">
      Vox India Projects
    </h1>

    <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
      Explore our innovative wall, ceiling, and flooring solutions from Vox India.
    </p>

  </div>
</section>

      {/* Wall Designs */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-8 border-l-4 border-red-600 pl-4">
            Wall Designs
          </h2>
          {renderGallery(wallImages, "Wall Designs")}
        </div>
      </section>

      {/* Ceiling Designs */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-8 border-l-4 border-red-600 pl-4">
            Ceiling Designs
          </h2>
          {renderGallery(ceilingImages, "Ceiling Designs")}
        </div>
      </section>

      {/* Flooring Designs */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-8 border-l-4 border-red-600 pl-4">
            Flooring Designs
          </h2>
          {renderGallery(flooringImages, "Flooring Designs")}
        </div>
      </section>

      {/* Finished Projects */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Finished Projects</h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            More completed project showcases will be added soon. Stay tuned!
          </p>
        </div>
      </section>
    </div>
  );
};

export default VoxIndia;