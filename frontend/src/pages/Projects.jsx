import { useState, useEffect } from 'react';
import { staticData } from '../data/staticData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('finished');
  const { ongoing, finished } = staticData.projects;
  const projects = activeTab === 'ongoing' ? ongoing : finished;

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, selectedProject]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-semibold mb-4 text-sm shadow-lg tracking-wider">
            OUR PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
            Our Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Showcasing our finest interior design and installation projects
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Tab Toggle */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('ongoing')} 
            className={`px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'ongoing' ? 'bg-red-600 text-white shadow-lg shadow-red-200 scale-105' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'}`}
          >
            Ongoing ({ongoing.length})
          </button>
          <button 
            onClick={() => setActiveTab('finished')} 
            className={`px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'finished' ? 'bg-red-600 text-white shadow-lg shadow-red-200 scale-105' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'}`}
          >
            Finished ({finished.length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              onClick={() => openModal(project)}
            >
              <div className="relative h-72 md:h-80 overflow-hidden bg-gray-900">
                <img
                  src={project.images?.[0] || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Dynamic Status Badge */}
                <div className="absolute top-4 right-4 px-4 py-1.5 text-xs font-semibold rounded-full shadow">
                  {project.status === 'Finished' || project.status === 'Completed' ? (
                    <span className="bg-green-600 text-white">✓ Completed</span>
                  ) : (
                    <span className="bg-yellow-500 text-white flex items-center gap-1">
                      <span className="animate-pulse">●</span> Ongoing
                    </span>
                  )}
                </div>

                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {project.images.length} Photos
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compact Modal */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="relative w-full max-w-3xl">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 text-sm shadow-lg z-50"
            >
              ✕ CLOSE
            </button>

            <div className="relative bg-black rounded-2xl overflow-hidden min-h-[60vh] max-h-[78vh] flex items-center justify-center p-4">
              <img
                src={selectedProject.images[currentSlide]}
                alt={selectedProject.title}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain"
              />
            </div>

            {selectedProject.images.length > 1 && (
              <>
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-4 rounded-full text-3xl transition-all">←</button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-4 rounded-full text-3xl transition-all">→</button>
              </>
            )}

            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
              <p className="text-gray-400 text-sm mt-1">
                {currentSlide + 1} / {selectedProject.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}