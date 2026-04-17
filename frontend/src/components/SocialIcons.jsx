import React from "react";

const SocialIcons = () => {
  return (
    <div className="fixed top-1/3 right-0 flex flex-col items-end z-50 space-y-3 pr-4">

      {/* Facebook - Original Blue */}
      <a
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-l-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-f text-2xl text-[#1877F2] group-hover:scale-110 transition-transform" />
      </a>

      {/* Instagram - Original Gradient */}
      <a
        href="https://www.instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-l-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram text-2xl bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#405de6] bg-clip-text text-transparent group-hover:scale-110 transition-transform" />
      </a>

      {/* LinkedIn - Original Blue */}
      <a
        href="https://www.linkedin.com/in/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-l-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin-in text-2xl text-[#0A66C2] group-hover:scale-110 transition-transform" />
      </a>

      {/* WhatsApp - Original Green */}
      <a
        href="https://wa.me/yourwhatsapplink"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-l-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl text-[#25D366] group-hover:scale-110 transition-transform" />
      </a>

    </div>
  );
};

export default SocialIcons;