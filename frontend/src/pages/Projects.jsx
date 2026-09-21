import { useState, useEffect } from 'react';
import { staticData } from '../data/staticData';

export default function Projects() {
  const { finished } = staticData.projects;
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

  // Keyboard navigation
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
            Our Finished Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our completed interior design and installation masterpieces across South India
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Projects Count */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Completed Projects <span className="text-red-600">({finished.length})</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {finished.map((project) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-5 right-5 px-4 py-1.5 text-xs font-semibold bg-green-600 text-white rounded-full shadow-lg">
                  ✓ Completed
                </div>

                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-5 right-5 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {project.images.length} Photos
                  </div>
                )}
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">
                  {project.title}
                </h3>
                {project.location && (
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    📍 {project.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {finished.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No finished projects available at the moment.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute -top-14 right-0 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 text-sm shadow-lg z-50 transition-colors"
            >
              ✕ CLOSE PROJECT
            </button>

            <div className="relative bg-black rounded-3xl overflow-hidden">
              <img
                src={selectedProject.images[currentSlide]}
                alt={selectedProject.title}
                className="max-w-full max-h-[78vh] w-auto h-auto object-contain mx-auto"
              />

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-5 rounded-full text-3xl transition-all"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-5 rounded-full text-3xl transition-all"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            <div className="text-center mt-6 text-white">
              <h3 className="text-2xl font-semibold mb-1">{selectedProject.title}</h3>
              <p className="text-gray-400">
                {currentSlide + 1} / {selectedProject.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}