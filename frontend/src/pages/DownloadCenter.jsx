import React from 'react';

const DownloadCenter = () => {
  return (
    <div>
      <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-semibold mb-4 text-sm shadow-lg">
            Responsive
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-black leading-tight">
            Download Center
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Access product specifications, installation guides, and technical documentation.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 text-lg">
            Downloadable resources will be available here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DownloadCenter;
