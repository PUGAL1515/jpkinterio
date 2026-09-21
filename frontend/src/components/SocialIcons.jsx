import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuoteModal from "../pages/QuoteModal"; // Adjust the path if needed

const FloatingEnquiry = () => {
  const [isOpen, setIsOpen] = useState(false);       // Mobile menu
  const [showQuote, setShowQuote] = useState(false); // Quote Modal

  // ========== UPDATE THESE ==========
  const phoneNumber = "918015250234";
  const whatsappNumber = "918015250234";
  const showroomMapLink = "https://maps.app.goo.gl/WjJ1vFLeRxBpJudp8";
  const catalogueLink = "/products/vivre-panels"; // ← changed
  // ==================================

  const buttons = [
    {
      id: "call",
      label: "Call Now",
      icon: "fas fa-phone-alt",
      href: `tel:+${phoneNumber}`,
      bg: "bg-green-600 hover:bg-green-700",
    },
    {
      id: "whatsapp",
      label: "WhatsApp Us",
      icon: "fab fa-whatsapp",
      href: `https://wa.me/${whatsappNumber}?text=Hi%20JPK%20Interio%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products.`,
      bg: "bg-[#25D366] hover:bg-[#1da851]",
      external: true,
    },
    {
      id: "quote",
      label: "Get a Free Quote",
      icon: "fas fa-file-invoice",
      action: () => setShowQuote(true),
      bg: "bg-red-600 hover:bg-red-700",
    },
    {
      id: "showroom",
      label: "Visit Our Hosur Showroom",
      icon: "fas fa-map-marker-alt",
      href: showroomMapLink,
      bg: "bg-blue-600 hover:bg-blue-700",
      external: true,
    },
    {
      id: "catalogue",
      label: "Download Catalogue",
      icon: "fas fa-download",
      href: catalogueLink,
      bg: "bg-gray-800 hover:bg-gray-900",
      // no external → same tab navigation
    },
  ];

  return (
    <>
      {/* ========== DESKTOP / TABLET - Right Side Floating Stack ========== */}
      <div className="hidden sm:flex fixed top-1/2 right-0 -translate-y-1/2 flex-col items-end z-50 pr-3 space-y-3">
        {buttons.map((btn) =>
          btn.action ? (
            <button
              key={btn.id}
              onClick={btn.action}
              className={`group flex items-center ${btn.bg} text-white rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 overflow-hidden`}
            >
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <i className={`${btn.icon} text-xl`} />
              </div>
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:px-4 whitespace-nowrap font-medium text-sm transition-all duration-300">
                {btn.label}
              </span>
            </button>
          ) : btn.external ? (
            <a
              key={btn.id}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center ${btn.bg} text-white rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 overflow-hidden`}
            >
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <i className={`${btn.icon} text-xl`} />
              </div>
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:px-4 whitespace-nowrap font-medium text-sm transition-all duration-300">
                {btn.label}
              </span>
            </a>
          ) : (
            <Link
              key={btn.id}
              to={btn.href}
              className={`group flex items-center ${btn.bg} text-white rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 overflow-hidden`}
            >
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <i className={`${btn.icon} text-xl`} />
              </div>
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:px-4 whitespace-nowrap font-medium text-sm transition-all duration-300">
                {btn.label}
              </span>
            </Link>
          )
        )}
      </div>

      {/* ========== MOBILE - Bottom Floating Button ========== */}
      <div className="sm:hidden fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
        {/* Expanded Buttons */}
        <div
          className={`flex flex-col items-end gap-3 transition-all duration-300 origin-bottom ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-4 pointer-events-none"
          }`}
        >
          {buttons.map((btn) =>
            btn.action ? (
              <button
                key={btn.id}
                onClick={() => {
                  btn.action();
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 ${btn.bg} text-white pl-4 pr-3 py-3 rounded-full shadow-lg`}
              >
                <span className="text-sm font-medium whitespace-nowrap">{btn.label}</span>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <i className={`${btn.icon} text-lg`} />
                </div>
              </button>
            ) : btn.external ? (
              <a
                key={btn.id}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 ${btn.bg} text-white pl-4 pr-3 py-3 rounded-full shadow-lg`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-sm font-medium whitespace-nowrap">{btn.label}</span>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <i className={`${btn.icon} text-lg`} />
                </div>
              </a>
            ) : (
              <Link
                key={btn.id}
                to={btn.href}
                className={`flex items-center gap-3 ${btn.bg} text-white pl-4 pr-3 py-3 rounded-full shadow-lg`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-sm font-medium whitespace-nowrap">{btn.label}</span>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <i className={`${btn.icon} text-lg`} />
                </div>
              </Link>
            )
          )}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-all duration-300 ${
            isOpen ? "bg-gray-800 rotate-45" : "bg-red-600"
          }`}
          aria-label="Enquiry options"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-comments"} text-xl`} />
        </button>
      </div>

      {/* ========== QUOTE MODAL ========== */}
      <QuoteModal 
        isOpen={showQuote} 
        onClose={() => setShowQuote(false)} 
      />
    </>
  );
};

export default FloatingEnquiry;