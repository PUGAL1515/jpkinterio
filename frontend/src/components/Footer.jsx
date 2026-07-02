import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-10 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Logo + About Section - Moved Up */}
        <div className="lg:col-span-5 flex flex-col -mt-2 lg:-mt-1">
          <Link to="/" className="mb-4 inline-block">
            <img
              src="/images/products/jpk_logo-transformed-removebg-preview-1.png"
              alt="JPK Interio Logo"
              className="h-14 w-auto"
            />
          </Link>

          <h2 className="text-2xl font-bold mb-5 text-black">
            Welcome to <span className="text-red-600">JPK Interio</span>
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            JPK Interio is a leading authorized distributors and dealer of premium
            interior and exterior solutions, including ceiling and flooring systems.
            We are an authorized license partner for <strong>FunderMax HPL Cladding</strong> and a trusted
            distributor for renowned brands such as <strong>VOX Ceiling &amp; Wall Panels</strong>,
            <strong> Knauf Armstrong Ceiling Tiles</strong>, <strong>Action TESA Laminate Flooring</strong>,
            <strong> Responsive Vinyl Flooring</strong>, <strong>Jindal MLC Pipes</strong>,
            <strong> Vivre Interior &amp; Exterior Panels</strong>, <strong>Donaire Carpets</strong>,
            and <strong>Linearsil Metal Ceilings</strong>. Headquartered in Hosur, Tamil Nadu,
            India, we specialize in turnkey interior and exterior project execution
            for commercial, residential, hospitality, healthcare, and industrial
            sectors, delivering aesthetically appealing and highly functional spaces
            that create a lasting impact.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-red-600">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-red-600 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-red-600 transition-colors">Projects</Link></li>
            <li><Link to="/gallery" className="hover:text-red-600 transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <h3 className="text-lg font-semibold mb-4 text-red-600">Our Products</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/products/about-fundermax" className="hover:text-red-600 transition-colors">Fundermax-HPL</Link></li>
            <li><Link to="/products/voxindia" className="hover:text-red-600 transition-colors">Vox India</Link></li>
            <li><Link to="/products/vivre-panels" className="hover:text-red-600 transition-colors">Vivre Panels</Link></li>
            <li><Link to="/products/knauf-ceiling-solutions" className="hover:text-red-600 transition-colors">Knauf Ceilings</Link></li>
            <li><Link to="/products/action-tesa" className="hover:text-red-600 transition-colors">Action TESA Flooring</Link></li>
            <li><Link to="/products/donaire" className="hover:text-red-600 transition-colors">Donaire Corpets</Link></li>
            <li><Link to="/products/responsive/lvt" className="hover:text-red-600 transition-colors">Responsive Vinyl Flooring</Link></li>
            <li><Link to="/products/jindal" className="hover:text-red-600 transition-colors">Jindal MLC Pipes</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-red-600">Contact Us</h3>
          
          <div className="space-y-4 text-sm text-gray-700">
            <address className="not-italic leading-relaxed">
              47, Taluk Office Road,<br />
              Next to New Robin Stores,<br />
              Opp. to Balaji Theatre,<br />
              Hosur, Tamil Nadu 635109
            </address>

            <div>
              <p className="font-medium text-red-600 mb-1">Phone:</p>
              <a href="tel:+918015250234" className="block hover:text-red-600 transition-colors">
                +91-80152 50234
              </a>
              <a href="tel:+919080659559" className="block hover:text-red-600 transition-colors">
                +91-90806 59559
              </a>
            </div>

            <div>
              <p className="font-medium text-red-600 mb-1">Email:</p>
              <a 
                href="mailto:jpkinterio.hsr@gmail.com" 
                className="hover:text-red-600 transition-colors break-words"
              >
                jpkinterio.hsr@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-600 py-4 text-center text-white text-sm">
        © {new Date().getFullYear()} JPK Interio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;