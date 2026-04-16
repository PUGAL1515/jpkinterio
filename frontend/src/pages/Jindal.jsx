import React from 'react';

const Jindal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white py-10 md:py-12 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">

          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mb-3 text-xs shadow-md">
             Jindal
          </span>

          <h1 className="text-2xl md:text-4xl font-extrabold mb-3 text-black leading-tight">
            Jindal MLC Pipes
          </h1>

          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Premium Multi-Layer Composite Piping Solutions for Hot & Cold Water, Gas, and Compressed Air Systems
          </p>

        </div>
     </section>

<section className="bg-gray-50 py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-red-600 mb-8 border-l-4 border-red-600 pl-4">
      Hot & Cold Water Distribution
    </h2>

    {/* Description */}
    <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4 max-w-4xl mb-10">
      <p>
        The smooth inner layer of Jindal MLC pipes prevents deposit accumulation and corrosion, 
        leading to up to 30% more flow of fluid than in metal pipes.
      </p>
      <p>
        They are easy to bend and install directly on girder or inside wall and cement concrete. 
        They can be easily located with a simple metal detector.
      </p>
      <p>
        The combination of plastic and metal makes Jindal MLC pipes a permanently reliable system 
        for all common hot and cold water installations.
      </p>
      <p className="font-semibold text-gray-900 pt-2">
        Concealed Plumbing vs JINDAL MLC PIPES
      </p>
    </div>

    {/* Main Images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  <div className="rounded-xl overflow-hidden">
    <img 
      src="/images/products/jindal/water1.jpg" 
      alt="Jindal MLC Hot & Cold Water Distribution"
      className="w-full h-48 md:h-56 object-contain"
    />
  </div>

  <div className="rounded-xl overflow-hidden  ">
    <img 
      src="/images/products/jindal/water2.jpg" 
      alt="Jindal MLC Pipes Installation"
      className="w-full h-48 md:h-56 object-contain"
    />
  </div>
</div>

    {/* Additional Images */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Installation & Application Views
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {["water3.png", "water4.png", "water5.png", "water6.png"].map((img, i) => (
          <div key={i} className="group">
            <div className="rounded-xl overflow-hidden shadow-md bg-black">
              <img 
                src={`/images/products/jindal/${img}`} 
                alt={`Jindal View ${i + 1}`}
                className="w-full h-40 md:h-44 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}

      </div>
    </div>

  </div>
</section>

 {/* MLC For Gas Application */}
<section className="bg-white py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-red-600 mb-10 border-l-4 border-red-600 pl-4">
      MLC For Gas Application
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* Left Side - Content */}
      <div>
        <div className="prose prose-lg text-gray-700 max-w-none leading-relaxed">
          <p>
            Jindal MLC Gas Piping System combines the advantages of metal and plastic, eliminating the disadvantages of both.
          </p>
          <p>
            The aluminum core is absolutely diffusion tight and reliably prevents oxygen or gases from permeating. 
            It compensates and reduces snap-back forces and heat expansion with changes in temperature.
          </p>
          <p>
            Jindal MLC Gas Pipes are an ideal choice for indoor and outdoor installations. The pipes conform to stringent 
            international standards for gas piping systems and multilayer piping technology.
          </p>
          <p>
            The pipe consists of an overlapped aluminum core with an inner and outer layer of polyethylene. 
            All layers are permanently bonded together by intermediate adhesive layers.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Advantages</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-700">
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Clean and easy to install, no welding or soldering</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Easy to bend</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Light weight</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Corrosion resistant</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Excellent long-time rupture strength</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Minimal roughness ensuring lower pressure losses</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> High operating temperature up to 60°C and pressure of 5 bar</li>
        </ul>
      </div>

      {/* Right Side - Images */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/products/jindal/gas1.jpg" 
              alt="Jindal MLC Gas Piping System"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/images/products/jindal/gas2.jpg" 
              alt="Jindal MLC Gas Application"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/images/products/jindal/gas3.png" 
            alt="Jindal MLC Gas Pipe Installation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>

    {/* Size Range Table - Corrected */}
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-red-600 mb-8 border-l-4 border-red-600 pl-4">
            Size Range
          </h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border font-semibold">Size Range</th>
              <th className="p-4 border font-semibold">Size in Inches</th>
              <th className="p-4 border font-semibold">Inner Diameter</th>
              <th className="p-4 border font-semibold">Outer Diameter</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-4 border font-medium">1014</td>
              <td className="p-4 border">3/8"</td>
              <td className="p-4 border">10mm</td>
              <td className="p-4 border">14mm</td>
            </tr>
            <tr>
              <td className="p-4 border font-medium">1216</td>
              <td className="p-4 border">1/2"</td>
              <td className="p-4 border">12mm</td>
              <td className="p-4 border">16mm</td>
            </tr>
            <tr>
              <td className="p-4 border font-medium">1620</td>
              <td className="p-4 border">3/4"</td>
              <td className="p-4 border">16mm</td>
              <td className="p-4 border">20mm</td>
            </tr>
            <tr>
              <td className="p-4 border font-medium">2025</td>
              <td className="p-4 border">1"</td>
              <td className="p-4 border">20mm</td>
              <td className="p-4 border">25mm</td>
            </tr>
            <tr>
              <td className="p-4 border font-medium">2532</td>
              <td className="p-4 border">1 1/4"</td>
              <td className="p-4 border">25mm</td>
              <td className="p-4 border">32mm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Fittings Section */}
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8">Available Fittings</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        <div className="text-center group">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-3 transition-transform group-hover:scale-105">
            <img 
              src="/images/products/jindal/gasmaleunion.png" 
              alt="Male Union"
              className="w-full h-40 object-contain p-4"
            />
          </div>
          <p className="font-medium text-gray-800">Male Union</p>
        </div>

        <div className="text-center group">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-3 transition-transform group-hover:scale-105">
            <img 
              src="/images/products/jindal/gasfemaleelbow.png" 
              alt="Female Elbow"
              className="w-full h-40 object-contain p-4"
            />
          </div>
          <p className="font-medium text-gray-800">Female Elbow</p>
        </div>

        <div className="text-center group">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-3 transition-transform group-hover:scale-105">
            <img 
              src="/images/products/jindal/gasequaltee.png" 
              alt="Equal Tee"
              className="w-full h-40 object-contain p-4"
            />
          </div>
          <p className="font-medium text-gray-800">Equal Tee</p>
        </div>

        <div className="text-center group">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-3 transition-transform group-hover:scale-105">
            <img 
              src="/images/products/jindal/gasnipple.png" 
              alt="Gas Nipple"
              className="w-full h-40 object-contain p-4"
            />
          </div>
          <p className="font-medium text-gray-800">Gas Nipple</p>
        </div>

        <div className="text-center group">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-3 transition-transform group-hover:scale-105">
            <img 
              src="/images/products/jindal/gasvalve.png" 
              alt="Gas Valve"
              className="w-full h-40 object-contain p-4"
            />
          </div>
          <p className="font-medium text-gray-800">Gas Valve</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Compressed Air Piping System */}
      {/* Compressed Air Piping System */}
<section className="bg-gray-50 py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-red-600 mb-10 border-l-4 border-red-600 pl-4">
      Compressed Air Piping System
    </h2>

    {/* Centered Title */}
    <div className="text-center mb-10">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Air Connect by Jindal: Advanced Pipe Systems for Industrial Fluids
      </h3>
      <p className="text-red-600 font-medium mt-2 text-lg">
        Compressed Air | Vacuum | Inert Gas
      </p>
    </div>

    {/* Two Images - Horizontal Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img 
          src="/images/products/jindal/compressed1.png" 
          alt="Compressed Air Piping System"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img 
          src="/images/products/jindal/compressed2.png" 
          alt="Air Connect Piping"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Main Content */}
    <div className="prose prose-lg text-gray-700 max-w-none leading-relaxed mb-12">
      <p>
        Air Connect Piping system are composed of Multi layered composite pipes and a range of different types of fittings. 
        The fittings are available in Brass and Plastic materials and are joint using either compression technique or crimp technique.
      </p>
      <p>
        Compressed Air is required in manufacturing and industrial activities for a multitude of applications. 
        It is used to control and regulate appliances and is the driving force for pneumatic drills, conveyors, spray guns, machine tools etc.
      </p>
      <p>
        In Air Connect pipes the inner surface of the pipe which comes in direct contact with air is made of polyethylene which unlike metal pipes 
        guarantees absence of rust and impurities. Cleaner air also means that the filters require less maintenance.
      </p>
      <p>
        Air Connect pipes are suitable for use at high operating pressures of up to 232 psi. They are bendable without springing back and come in coils of up to 200 meters which significantly reduces the number of joints.
      </p>
      <p>
        Air Connect piping system can be easily and quickly installed, modified or expanded without the need for specialized equipment, 
        providing clean, reliable and long-term performance.
      </p>
    </div>

    {/* Ease of Installation & Advantages */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Ease of Installation */}
      <div>
        <h4 className="text-xl font-semibold text-gray-900 mb-6">EASE OF INSTALLATION</h4>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Pipes and fittings are supplied ready for installation</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> No in-depth training required</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> No need to weld, glue, fuse or thread</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Time Saving</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Easy to install, handle and Transport</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Light Weight</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Pipes do not require painting</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Can be modified or expanded without the need for Specialized Equipment</li>
        </ul>
      </div>

      {/* Advantages */}
      <div>
        <h4 className="text-xl font-semibold text-gray-900 mb-6">ADVANTAGES</h4>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Long Working Life</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Low Thermal Conductivity</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Low Thermal linear expansion</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Cleaner Air due to corrosion free surface</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Better flow rate</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Compact Piping system</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Bendable without springing back</li>
          <li className="flex items-start gap-3"><span className="text-red-600 mt-1">•</span> Lower labour cost & Minimum Fittings</li>
        </ul>
      </div>
    </div>
  </div>
</section>     
    </div>
  );
};

export default Jindal;