import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from '../pages/QuoteModal';

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Use timers to prevent premature closing
  let closeTimeout;

  // Desktop states
  const [productsOpen, setProductsOpen] = useState(false);
  const [fundermaxOpen, setFundermaxOpen] = useState(false);
  const [responsiveOpen, setResponsiveOpen] = useState(false);

  // Mobile states
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileFundermaxOpen, setMobileFundermaxOpen] = useState(false);
  const [mobileResponsiveOpen, setMobileResponsiveOpen] = useState(false);

  // Refs for dropdown containers
  const productsDropdownRef = useRef(null);
  const productsButtonRef = useRef(null);

  // Handle mouse enter for products dropdown
  const handleProductsMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setProductsOpen(true);
  };

  // Handle mouse leave for products dropdown
  const handleProductsMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setProductsOpen(false);
      setFundermaxOpen(false);
      setResponsiveOpen(false);
    }, 150);
  };

  // Handle mouse enter for submenus
  const handleFundermaxMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setFundermaxOpen(true);
  };

  const handleFundermaxMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setFundermaxOpen(false);
    }, 150);
  };

  const handleResponsiveMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setResponsiveOpen(true);
  };

  const handleResponsiveMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setResponsiveOpen(false);
    }, 150);
  };

  // Toggle function for click (optional - keeps both click and hover)
  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
    if (productsOpen) {
      setFundermaxOpen(false);
      setResponsiveOpen(false);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="JPK Interio Logo"
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="relative text-black font-medium hover:text-red-600 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all hover:after:w-3/4">
                Home
              </Link>
              <Link to="/about" className="relative text-black font-medium hover:text-red-600 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all hover:after:w-3/4">
                About Us
              </Link>

              {/* Products Dropdown (Desktop) */}
              <div
                className="relative"
                ref={productsDropdownRef}
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <button
                  ref={productsButtonRef}
                  onClick={toggleProducts}
                  className="flex items-center text-black font-medium hover:text-red-600 focus:outline-none"
                >
                  Products
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.586l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {productsOpen && (
                  <div
                    className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-3 z-50 border border-gray-100"
                  >
                    <div className="text-sm text-gray-800">
                      {/* Fundermax */}
                      <div
                        className="relative"
                        onMouseEnter={handleFundermaxMouseEnter}
                        onMouseLeave={handleFundermaxMouseLeave}
                      >
                        <button
                          onClick={() => setFundermaxOpen(!fundermaxOpen)}
                          className="flex w-full justify-between items-center px-5 py-2.5 hover:bg-red-50 text-left"
                        >
                          Fundermax
                          <svg className={`w-3 h-3 transition-transform ${fundermaxOpen ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6l6 4-6 4V6z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {fundermaxOpen && (
                          <div className="absolute top-0 left-full ml-2 w-52 bg-white rounded-xl shadow-xl py-2 border border-gray-100 z-50">
                            <Link to="/products/about-fundermax" className="block px-5 py-2 hover:bg-red-50">About Fundermax</Link>
                            <Link to="/products/interior-exterior" className="block px-5 py-2 hover:bg-red-50">Interior / Exterior</Link>
                          </div>
                        )}
                      </div>

                      <Link to="/products/voxindia" className="block px-5 py-2.5 hover:bg-red-50">Vox India</Link>
                      <Link to="/products/action-tesa" className="block px-5 py-2.5 hover:bg-red-50">Action TESA</Link>

                      {/* Responsive */}
                      <div
                        className="relative"
                        onMouseEnter={handleResponsiveMouseEnter}
                        onMouseLeave={handleResponsiveMouseLeave}
                      >
                        <button
                          onClick={() => setResponsiveOpen(!responsiveOpen)}
                          className="flex w-full justify-between items-center px-5 py-2.5 hover:bg-red-50 text-left"
                        >
                          Responsive
                          <svg className={`w-3 h-3 transition-transform ${responsiveOpen ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6l6 4-6 4V6z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {responsiveOpen && (
                          <div className="absolute top-0 left-full ml-2 w-52 bg-white rounded-xl shadow-xl py-2 border border-gray-100 z-50">
                            <Link to="/products/responsive/lvt" className="block px-5 py-2 hover:bg-red-50">LVT Overview</Link>
                            <Link to="/products/responsive/flooring-segments" className="block px-5 py-2 hover:bg-red-50">Flooring Segments</Link>
                            <Link to="/products/responsive/vinylflooring" className="block px-5 py-2 hover:bg-red-50">vinyl Flooring</Link>
                            <Link to="/products/responsive/project-completed" className="block px-5 py-2 hover:bg-red-50">Project Completed</Link>

                          </div>
                        )}
                      </div>

                      <Link to="/products/vivre-panels" className="block px-5 py-2.5 hover:bg-red-50">Vivre Panels</Link>
                      <Link to="/products/donaire" className="block px-5 py-2.5 hover:bg-red-50">Donaire</Link>
                      <Link to="/products/knauf-ceiling-solutions" className="block px-5 py-2.5 hover:bg-red-50">Knauf Ceiling Solutions</Link>
                      <Link to="/products/jindal" className="block px-5 py-2.5 hover:bg-red-50">Jindal</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/projects" className="relative text-black font-medium hover:text-red-600 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all hover:after:w-3/4">
                Projects
              </Link>
              <Link to="/gallery" className="relative text-black font-medium hover:text-red-600 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all hover:after:w-3/4">
                Gallery
              </Link>
              <Link to="/awards" className="relative text-black font-medium hover:text-red-600 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all hover:after:w-3/4">
                Awards
              </Link>
              <Link to="/contact" className="relative text-black font-medium hover:text-red-600 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all hover:after:w-3/4">
                Contact Us
              </Link>

              {/* Updated Get a Quote button - opens modal */}
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-red-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-red-700 transition shadow-sm"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-black focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-xl fixed top-16 left-0 w-full z-50 border-t">
            <nav className="px-6 py-8 space-y-1 text-base">
              <Link to="/" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/about" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>About Us</Link>

              {/* Products Mobile */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex justify-between items-center py-3 px-4 hover:bg-red-50 rounded-xl"
                >
                  Products
                  <svg className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.586l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                {mobileProductsOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    <div>
                      <button
                        onClick={() => setMobileFundermaxOpen(!mobileFundermaxOpen)}
                        className="w-full flex justify-between py-3 px-4 hover:bg-red-50 rounded-xl"
                      >
                        Fundermax
                        <svg className={`w-4 h-4 transition-transform ${mobileFundermaxOpen ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6l6 4-6 4V6z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {mobileFundermaxOpen && (
                        <div className="pl-6 space-y-1">
                          <Link to="/products/fundermax" className="block py-2.5 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Fundermax India</Link>
                          <Link to="/products/about-fundermax" className="block py-2.5 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>About Fundermax</Link>
                          <Link to="/products/interior-exterior" className="block py-2.5 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Interior / Exterior</Link>
                          <Link to="/products/reference" className="block py-2.5 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Reference</Link>
                        </div>
                      )}
                    </div>

                    <Link to="/products/voxindia" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Vox India</Link>
                    <Link to="/products/action-tesa" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Action TESA</Link>

                    <div>
                      <button
                        onClick={() => setMobileResponsiveOpen(!mobileResponsiveOpen)}
                        className="w-full flex justify-between py-3 px-4 hover:bg-red-50 rounded-xl"
                      >
                        Responsive
                        <svg className={`w-4 h-4 transition-transform ${mobileResponsiveOpen ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6l6 4-6 4V6z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {mobileResponsiveOpen && (
                        <div className="pl-6 space-y-1">
                          <Link to="/products/responsive/lvt" className="block py-2.5 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>LVT Overview</Link>
                          <Link to="/products/responsive/flooring-segments" className="block py-2.5 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Flooring Segments</Link>
                          <Link to="/products/responsive/vinylflooring" className="block py-2.5 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>vinyl Flooring</Link>
                          <Link to="/products/responsive/project-completed" className="block py-2.5 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Project Completed</Link>

                        </div>
                      )}
                    </div>

                    <Link to="/products/vivre-panels" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Vivre Panels</Link>
                    <Link to="/products/donaire" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Donaire</Link>
                    <Link to="/products/knauf-ceiling-solutions" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Knauf Ceiling Solutions</Link>
                    <Link to="/products/jindal" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Jindal</Link>
                  </div>
                )}
              </div>

              <Link to="/projects" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Projects</Link>
              <Link to="/gallery" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Gallery</Link>
              <Link to="/awards" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Awards</Link>
              <Link to="/contact" className="block py-3 px-4 hover:bg-red-50 rounded-xl" onClick={() => setMobileOpen(false)}>Contact Us</Link>

              {/* Updated mobile Get a Quote button - opens modal */}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="block text-center w-full mt-6 bg-red-600 text-white py-3 px-6 rounded-2xl font-medium hover:bg-red-700"
              >
                Get a Quote
              </button>
            </nav>
          </div>
        )}
      </nav>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default Nav;