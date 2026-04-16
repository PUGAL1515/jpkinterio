import React from "react";

const SocialIcons = () => {
  return (
    <div className="fixed top-1/3 right-0 flex flex-col items-end z-50 space-y-3">

      {/* Facebook */}
      <a
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-white text-red-600 border border-red-600 rounded-l-lg shadow-md transition transform hover:-translate-x-2 hover:bg-red-600 hover:text-white"
      >
        <i className="fab fa-facebook-f text-xl"></i>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-white text-red-600 border border-red-600 rounded-l-lg shadow-md transition transform hover:-translate-x-2 hover:bg-red-600 hover:text-white"
      >
        <i className="fab fa-instagram text-xl"></i>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-white text-red-600 border border-red-600 rounded-l-lg shadow-md transition transform hover:-translate-x-2 hover:bg-red-600 hover:text-white"
      >
        <i className="fab fa-linkedin-in text-xl"></i>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/yourwhatsapplink"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-white text-red-600 border border-red-600 rounded-l-lg shadow-md transition transform hover:-translate-x-2 hover:bg-red-600 hover:text-white"
      >
        <i className="fab fa-whatsapp text-xl"></i>
      </a>

    </div>
  );
};

export default SocialIcons;