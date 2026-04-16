import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-10 border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
        
        {/* Logo + About */}
        <div className="flex flex-col items-start">
          <Link to="/" className="mb-4">
            <img
              src="/images/products/jpk_logo-transformed-removebg-preview-1.png"
              alt="JPK Interio Logo"
              className="h-12 w-auto animate-bounce"
            />
          </Link>

          <h2 className="text-xl font-bold mb-2 text-black">
            <span className="animate-pulse text-red-600">
              Welcome to JPK Interio
            </span>
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            The foremost authorized distributor and dealer for FunderMax HPL
            cladding, VOX Ceiling and Wall panels, Knauf Armstrong Ceiling
            tiles, Action TESA laminate flooring, Responsive Vinyl Flooring,
            Jindal MLC Pipes, Vivre Panels, and Donaire Carpets. Based in
            Hosur, Tamil Nadu, India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">
            <span className="animate-pulse text-red-600">Quick Links</span>
          </h2>

          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-600 transition">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-red-600 transition">Projects</Link></li>
            <li><Link to="/gallery" className="hover:text-red-600 transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-red-600 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Products (FIXED: no more href="#" ) */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">
            <span className="animate-pulse text-red-600">Products</span>
          </h2>

          <ul className="space-y-2 text-sm">
            <li><Link to="/fundermax" className="hover:text-red-600 transition">Fundermax India</Link></li>
            <li><Link to="/vox-india" className="hover:text-red-600 transition">Vox India</Link></li>
            <li><Link to="/action-tesa" className="hover:text-red-600 transition">Action TESA</Link></li>
            <li><Link to="/responsive-flooring" className="hover:text-red-600 transition">Responsive Flooring</Link></li>
            <li><Link to="/knauf-ceilings" className="hover:text-red-600 transition">Knauf Ceilings</Link></li>
            <li><Link to="/jindal-pipes" className="hover:text-red-600 transition">Jindal Pipes</Link></li>
            <li><Link to="/vivre-panels" className="hover:text-red-600 transition">Vivre Panels</Link></li>
            <li><Link to="/donaire" className="hover:text-red-600 transition">Donaire</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">
            <span className="animate-pulse text-red-600">Contact</span>
          </h2>

          <div className="flex flex-col space-y-2 text-sm text-gray-700">
            
            <address className="not-italic leading-relaxed">
              47, Taluk Office Road,<br />
              Next to New Robin Stores,<br />
              Opp. to Balaji Theatre,<br />
              Hosur, Tamil Nadu 635109
            </address>

            <p>
              <strong className="text-red-600">Phone:</strong>{" "}
              <a href="tel:+918015250234" className="hover:text-red-600 transition">
                +91-80152 50234
              </a>{" "}
              |{" "}
              <a href="tel:+919080659559" className="hover:text-red-600 transition">
                +91-90806 59559
              </a>
            </p>

            <p>
              <strong className="text-red-600">Email:</strong>{" "}
              <a href="mailto:jpkinterio.hsr@gmail.com" className="hover:text-red-600 transition">
                jpkinterio.hsr@gmail.com
              </a>
            </p>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-red-600 text-center text-sm py-3 mt-6 text-white">
        © 2026 JPK Interio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;