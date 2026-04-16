import { useState } from 'react';
import { staticData } from '../data/staticData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ongoing');
  const { ongoing, finished } = staticData.projects;
  const projects = activeTab === 'ongoing' ? ongoing : finished;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-16">
  <div className="max-w-5xl mx-auto text-center">

    {/* Tag */}
    <span className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold mb-4 text-xs shadow-sm">
      Projects
    </span>

    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
      Our Projects
    </h1>

    {/* Description */}
    <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
      Showcasing our finest interior design and installation projects across residential, commercial, and hospitality sectors.
    </p>

  </div>
</section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tab Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
              activeTab === 'ongoing'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Ongoing Projects ({ongoing.length})
          </button>
          <button
            onClick={() => setActiveTab('finished')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
              activeTab === 'finished'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Finished Projects ({finished.length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/images/header02.png`;
                  }}
                />
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-bold ${
                  project.status === 'Ongoing' ? 'bg-blue-600' : 'bg-green-600'
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-gray-500 text-sm font-medium">
                    📅 {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <button className="text-red-600 font-semibold hover:text-red-700 transition-colors text-sm">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              No {activeTab} projects found at the moment.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us today to discuss your interior design and installation needs.
          </p>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}