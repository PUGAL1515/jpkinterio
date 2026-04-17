import React from 'react';

const ProjectsBySegment = () => {
  const projects = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project1.png`,
      projectName: "TAJ MAHAL HOTEL, LUCKNOW, INDIA",
      product: "RESONATE® SPC Flooring + IMPACT® SPC Flooring"
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project2.png`,
      projectName: "ENSEMBLE ENGINEERING LTD",
      product: "OPULENCE® LVT Flooring + IMPACT® LVT Flooring"
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project3.png`,
      projectName: "AEROBRIDGE, MUMBAI AIRPORT, INDIA",
      product: "ENTICE® Safety Flooring"
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project4.png`,
      projectName: "COVID-19 FACILITY, WIPRO CAMPUS, INDIA",
      product: "VEGA PLUS® Homogeneous Flooring"
    },
    {
      id: 5,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project5.png`,
      projectName: "HILL SPRING CLUB HOUSE, MUMBAI, INDIA",
      product: "ACTIVE® Sports Flooring"
    },
    {
      id: 6,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project6.png`,
      projectName: "CAPGEMINI CAMPUS, AIROLI, INDIA",
      product: "ACTIVE® Sports Flooring"
    },
    {
      id: 7,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project7.png`,
      projectName: "WSP MIDDLE EAST ARCHITECTS, UAE",
      product: "RESONATE® SPC Flooring"
    },
    {
      id: 8,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project8.png`,
      projectName: "HERO RESTAURANT, TRADEMARK HOTEL, NAIROBI",
      product: "RESONATE® SPC Flooring"
    },
    {
      id: 9,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project9.png`,
      projectName: "RESIDENCE, FINLAND",
      product: "RESONATE® SPC Flooring"
    },
    {
      id: 10,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project10.png`,
      projectName: "SAUDI MUSEUM, SAUDI ARABIA",
      product: "PINNACLE® Homogeneous Flooring"
    },
    {
      id: 11,
      image: `${process.env.PUBLIC_URL}/images/products/Responsive/project11.png`,
      projectName: "SEIMENS FACILITY, GOA, INDIA",
      product: "SPICA® Homogeneous Flooring"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold text-sm mb-4">
            PROJECT SHOWCASE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Projects Completed By Segment
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real-world applications of Responsive Vinyl Flooring across various sectors
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`;
                  }}
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 leading-tight mb-3 line-clamp-2">
                  {project.projectName}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsBySegment;