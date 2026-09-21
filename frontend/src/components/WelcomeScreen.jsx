import React from "react";

const WelcomeScreen = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/logo.png"
            alt="JPK Interio"
            className="w-48 sm:w-56 md:w-64 h-auto object-contain"
          />
        </div>

        {/* Welcome Text */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Welcome to JPK Interio
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Premium Interior & Exterior Solutions
        </p>

      </div>
    </div>
  );
};

export default WelcomeScreen;
