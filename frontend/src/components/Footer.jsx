import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black mt-10 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Logo + About Section */}
        <div className="lg:col-span-5 flex flex-col -mt-2 lg:-mt-1">
          <Link to="/" className="mb-4 inline-block">
            <img
              src="/images/products/jpk_logo-transformed-removebg-preview-1.webp"
              alt="JPK Interio Logo"
              className="h-14 w-auto"
              loading="lazy"
              decoding="async"
            />
          </Link>

          <h2 className="text-2xl font-bold mb-5 text-black">
            Welcome to <span className="text-red-600">JPK Interio</span>
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            JPK Interio is a leading authorised distributor and dealer of premium
            interior and exterior solutions, including ceiling and flooring systems.
            We are an authorised license partner for <strong>FunderMax HPL Cladding</strong> and a trusted
            distributor for renowned brands such as <strong>VOX Ceiling &amp; Wall Panels</strong>,
            <strong> Knauf Armstrong Ceiling Tiles</strong>, <strong>Action TESA Laminate Flooring</strong>,
            <strong> Responsive Vinyl Flooring</strong>, <strong>Jindal MLC Pipes</strong>,
            <strong> Vivre Interior &amp; Exterior Panels</strong>, <strong>Donaire Carpets</strong>,
            and <strong>Linearsil Metal Ceilings</strong>. Headquartered in Hosur, Tamil Nadu,
            India, we specialise in turnkey interior and exterior project execution
            for commercial, residential, hospitality, healthcare, and industrial
            sectors.
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
            <li><Link to="/terms" className="hover:text-red-600 transition-colors">Terms & Condition</Link></li>
           
            <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <h3 className="text-lg font-semibold mb-4 text-red-600">Our Products</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/products/about-fundermax" className="hover:text-red-600 transition-colors">Fundermax-HPL shades</Link></li>
            <li><Link to="/products/voxindia" className="hover:text-red-600 transition-colors">Vox India</Link></li>
            <li><Link to="/products/vivre-panels" className="hover:text-red-600 transition-colors">Vivre Panels</Link></li>
            <li><Link to="/products/knauf-ceiling-solutions" className="hover:text-red-600 transition-colors">Knauf Armstrong Ceilings</Link></li>
            <li><Link to="/products/action-tesa" className="hover:text-red-600 transition-colors">Action TESA Flooring</Link></li>
            <li><Link to="/products/donaire" className="hover:text-red-600 transition-colors">Donaire Carpets</Link></li>
            <li><Link to="/products/responsive/lvt" className="hover:text-red-600 transition-colors">Responsive Vinyl Flooring</Link></li>
            <li><Link to="/products/jindal" className="hover:text-red-600 transition-colors">Jindal MLC Pipes</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-red-600">Contact Us</h3>
          
          <div className="space-y-5 text-sm text-gray-700">
            {/* Clickable Address (opens Google Maps) */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=47+Taluk+Office+Road,+Next+to+New+Robin+Stores,+Opp.+to+Balaji+Theatre,+Hosur,+Tamil+Nadu+635109"
              target="_blank"
              rel="noopener noreferrer"
              className="block not-italic leading-relaxed hover:text-red-600 transition-colors"
            >
              47, Taluk Office Road,<br />
              Next to New Robin Stores,<br />
              Opp. to Balaji Theatre,<br />
              Hosur, Tamil Nadu 635109
            </a>

            {/* Phone Numbers (already clickable) */}
            <div>
              <p className="font-medium text-red-600 mb-1">Phone:</p>
              <a href="tel:+918015250234" className="block hover:text-red-600 transition-colors">
                +91-80152 50234
              </a>
              <a href="tel:+919080659559" className="block hover:text-red-600 transition-colors">
                +91-90806 59559
              </a>
            </div>

            {/* Professional Domain Emails */}
            <div>
              <p className="font-medium text-red-600 mb-1">Email:</p>
              <div className="space-y-1.5">
                <a 
                  href="mailto:info@jpkinterio.com" 
                  className="block hover:text-red-600 transition-colors break-words"
                >
                  info@jpkinterio.com
                </a>
                <a 
                  href="mailto:sales@jpkinterio.com" 
                  className="block hover:text-red-600 transition-colors break-words"
                >
                  sales@jpkinterio.com
                </a>
                <a 
                  href="mailto:projects@jpkinterio.com" 
                  className="block hover:text-red-600 transition-colors break-words"
                >
                  projects@jpkinterio.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar – Updated Copyright */}
      <div className="bg-red-600 py-4 text-center text-white text-sm">
        Copyright © 2019–{currentYear} JPK Interio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;