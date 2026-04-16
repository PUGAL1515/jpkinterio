import React from 'react';

const AboutFundermax = () => {
  const publicPath = process.env.PUBLIC_URL;

  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-white py-10 md:py-12 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mb-3 text-xs shadow-md">
            Fundermax
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-black leading-tight">
            Fundermax: Sustainable Materials and Innovative Design
          </h1>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Premium wood-based materials and compact laminates combining performance with sustainability
          </p>
        </div>
      </section>

      {/* Hero Image & Intro Section */}
      <section className="relative bg-white py-12 px-6 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <img
              src={`${publicPath}/images/products/about.png`}
              alt="About Fundermax"
              className="w-full h-full object-contain rounded-3xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Innovation Through Sustainability</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Fundermax values and processes natural raw materials. Through sustainable production, they create 
              high-quality wood-based materials and compact laminates that combine premium performance with 
              inspiring design. Backed by the guarantee of "Made in Austria", Fundermax products are trusted by 
              architects, designers, and customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Product Portfolio Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Complete Product Portfolio</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Raw chipboard panels',
              'Coated chipboard panels (Star Favorit)',
              'Laminate panels (HPL)',
              'Compact panels (Max Compact Exterior & Interior)',
              'Biofaser panels (raw and decorative)',
              'm.look Interior and Exterior',
              'Premium Star'
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">{product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside & Outside Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Fundermax: Inside and Outside</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto">
              Versatile solutions for diverse applications across interior and exterior spaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span>🏠</span> Interior Applications
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Kitchens and sanitary facilities</li>
                <li>• Furniture manufacturing</li>
                <li>• Wall claddings</li>
                <li>• Interior design elements</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span>🌳</span> Exterior Applications
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Facade systems</li>
                <li>• Balcony flooring</li>
                <li>• Exterior design applications</li>
                <li>• Outdoor furniture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Fundermax Apart */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Sets Fundermax Apart</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">Innovation & Creativity</h3>
              <p className="text-gray-700">
                Thinking outside the box, creativity and innovation drive daily decisions. Fundermax combines 
                smart wood-based materials and compact laminates with a strong commitment to sustainability.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">Service Partnership</h3>
              <p className="text-gray-700">
                More than a sustainable production company: a service partner and design laboratory that supports 
                customers throughout the decision-making process.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">Green Energy Production</h3>
              <p className="text-gray-700">
                Proudly generating green electricity and district heating that significantly exceeds their own 
                energy requirements.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">Sustainable Materials</h3>
              <p className="text-gray-700">
                Committed to developing innovative solutions and materials made from renewable raw resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus on People Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Focus on People</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg">
            <p>
              At Fundermax, people work together on an equal footing. Trust, honesty and transparency are core 
              values, and long-term employee retention is supported through a safe workplace and continuous 
              development opportunities.
            </p>
            <p>
              Feedback is treated as feedforward, and employee suggestions are actively welcomed as part of a 
              collaborative effort to improve the company and prepare for future success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Elevate Your Project?</h2>
          <p className="text-white text-lg mb-8 opacity-95">
            Discover the complete range of Fundermax premium solutions for your interior and exterior needs
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Contact Us for Fundermax Solutions
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutFundermax;