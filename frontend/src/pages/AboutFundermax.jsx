import React from 'react';

const AboutFundermax = () => {
  const publicPath = process.env.PUBLIC_URL;

  return (
    <div>
      {/* Header Section - Same as before */}
      <section className="relative bg-white py-12 md:py-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src={`${publicPath}/images/customers/01.webp`} 
              alt="Fundermax Logo" 
              className="h-16 md:h-20 object-contain"
              loading="lazy" decoding="async" 
            />
          </div>

          <span className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold mb-4 text-sm shadow-md">
            PREMIUM HPL CLADDING
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-black leading-tight">
            Fundermax - Top Quality, Made in Austria
          </h1>
          
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Premium wood-based materials and compact laminates combining performance with sustainability
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-red-600"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">About us</h2>
          </div>
          
          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
            <p>
              Fundermax values and processes natural raw materials. In the course of our sustainable production processes, we create high-quality wood-based materials and compact laminates. The result: a comprehensive portfolio that combines top quality and innovative design to impress. Fundermax offers the following products:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>Raw chipboard panels</li>
              <li>Coated chipboard panels (Star Favorit)</li>
              <li>Laminate panels (HPL)</li>
              <li>Compact panels (Max Compact Exterior and Max Compact Interior)</li>
              <li>Biofaser panels (raw and decorative)</li>
              <li>m.look Interior and Exterior</li>
              <li>Premium Star</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inside and Outside */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-red-600"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">Fundermax: inside and outside</h2>
          </div>
          
          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6 bg-white p-8 rounded-2xl shadow-sm">
            <p>
              The Fundermax products are used indoors for kitchens, sanitary facilities, furniture, wall claddings and interior design as well as outdoors for facades, balcony flooring and exterior design applications. Architects, designers, processors, specialists from the furniture industry and end customers all trust in the “Made in Austria” quality from Fundermax.
            </p>
            <p>
              Let yourself be inspired: Here you will be given an impression of the Fundermax product portfolio and all the applications for which we offer the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* What sets Fundermax apart */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-red-600"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">What sets Fundermax apart</h2>
          </div>
          
          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-8">
            <p>
              Our innovative spirit, creativity and willingness to think outside the box motivate everything we do. Sophisticated wood materials and compact laminates are our strength. Fundermax is much more than a sustainable production company:
            </p>
            
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li>We see ourselves as a service partner who supports all our customers throughout the entire decision-making process and beyond.</li>
              <li>We also see ourselves as a design laboratory in which developments are driven forward and innovations are created.</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-r-xl">
              <p>
                Proud of our team: We are particularly proud of our employees, who are already actively shaping the design and product trends of tomorrow, right down to the materials made from renewable raw materials. After all, Fundermax stands for sustainability! When it comes to energy generation, we also think outside the company and generate green electricity and district heating to an extent that significantly exceeds our own needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus on the people */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-red-600"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">Focus on the people</h2>
          </div>
          
          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-8 bg-white p-10 rounded-3xl shadow-sm">
            <p>
              We at Fundermax work together on an equal footing, because we know: together we are strong and can develop optimal solutions for the future! We are all united by our common values, above all trust, honesty and transparency. Another important factor for maintaining a good working atmosphere is laughing together and celebrating our success.
            </p>
            <p>
              At Fundermax, we also place great importance to retaining our employees in the long term. That is why we not only offer a safe working environment, but also numerous learning and development opportunities.
            </p>
            <p>
              Feedforward instead of feedback: This is ensured on the one hand with regular internal company surveys, and the other hand with an open ear. At Fundermax, we welcome and act on the suggestions and ideas from our employees. The feedback serves as an impetus for future measures. The result: The entire team is motivated to work proactively on the further development of Fundermax and is happy about the success we achieve together.
            </p>
          </div>
        </div>
      </section>

      {/* That's what makes Fundermax so special */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-red-600"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">That's what makes Fundermax so special</h2>
          </div>
          
          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-8">
            <p>
              Thinking outside the box as well as creativity and innovative spirit determine our daily actions. Well thought-out wood-based materials and compact laminates are our strength. Fundermax is much more than a sustainable production company:
            </p>
            
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li>We see ourselves as a service partner who supports customers throughout the entire decision-making process and beyond.</li>
              <li>We also see ourselves as a design laboratory where developments are driven forward and innovations are created.</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-r-xl text-lg">
              <p>
                We are proud of this: From our employees, who are already actively shaping the design and product trends of tomorrow, to materials made from renewable raw materials: Fundermax stands for sustainability! When it comes to energy generation, we also think beyond the company's boundaries and generate green electricity and district heating to an extent that significantly exceeds our own needs.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutFundermax;