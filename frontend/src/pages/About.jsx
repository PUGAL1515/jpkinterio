import React, { useEffect } from 'react';
import { staticData } from '../data/staticData';
import { Link } from "react-router-dom";

const About = () => {
  const data = staticData.about;

  useEffect(() => {
    const corners = document.querySelectorAll(".corner");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });
    corners.forEach(corner => observer.observe(corner));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <img
              src={data.hero.image}
              alt="JPK Interio team and showroom"
              className="w-full h-full object-cover object-center rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-black leading-tight">
              <span className="block text-red-600">{data.hero.title}</span>
            </h1>
            <p className="text-black text-base md:text-lg mb-6 leading-relaxed">{data.hero.content}</p>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="relative w-full py-24 px-6 md:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.excellence.image}
            alt=""
            className="w-full h-full object-cover object-center brightness-75"
            onError={(e) => {
              e.target.src = '/images/why-choose-jpkinterio.webp';
            }}
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wider">
            WHY CHOOSE US?
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {data.excellence.title}
          </h2>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-800 font-medium leading-relaxed tracking-wide">
            {data.excellence.description}
            <span className="block mt-4 text-red-600 font-bold">
              Perfection, attention to detail, and care—every time.
            </span>
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {data.excellence.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 shadow-lg rounded-xl px-6 py-6 text-left border-l-8 border-red-600 w-full md:max-w-xs"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: MD Section + Enhanced Numbers */}
      <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/30"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-200/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-flex items-center bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-extrabold tracking-[0.15em] uppercase shadow-lg border border-red-300/30 mb-3 sm:mb-4">
              OUR STRENGTH
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Numbers That Speak & Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
            {/* Left Column – MD Profile */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 bg-red-500/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>

                <div className="relative group">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-red-600 via-orange-500 to-red-700 opacity-90 group-hover:opacity-100 blur-[2px] transition duration-500 group-hover:scale-105"></div>

                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src="/images/md.webp"
                      alt="Managing Director of JPK Interio"
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700"
                      width="600"
                      height="600"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                {data.md_section?.title || 'Managing Director'}
              </h3>
              <p className="text-red-600 font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                {data.md_section?.subtitle || 'JPK Interio'}
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mb-4 sm:mb-5"></div>

              <div className="space-y-2 sm:space-y-3 text-left w-full max-w-sm">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-red-600 flex-shrink-0"></div>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                    South India projects delivered across Hosur, Bengaluru, Krishnagiri & more
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-red-600 flex-shrink-0"></div>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                    Turnkey expertise for residential & commercial spaces
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column – Numbers + Brand Card */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="group relative bg-white rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 mb-1.5 leading-none group-hover:scale-110 transition-transform duration-500">
                      6+
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 leading-snug">
                      Years of Industry Experience
                    </div>
                    <div className="mt-2 sm:mt-3 w-8 sm:w-10 h-1 bg-red-500 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 mb-1.5 leading-none group-hover:scale-110 transition-transform duration-500">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 leading-snug">
                      Completed Installations
                    </div>
                    <div className="mt-2 sm:mt-3 w-8 sm:w-10 h-1 bg-red-500 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 mb-1.5 leading-none group-hover:scale-110 transition-transform duration-500">
                      8+
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 leading-snug">
                      Premium Authorised Brands
                    </div>
                    <div className="mt-2 sm:mt-3 w-8 sm:w-10 h-1 bg-red-500 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-4 sm:p-6 md:p-7 text-white text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-2">
                    Authorized Partner for Premium Brands
                  </div>
                  <p className="text-red-100 text-xs sm:text-sm md:text-base leading-relaxed">
                    FunderMax • VOX • Knauf Armstrong • Action TESA • Responsive • Jindal MLC • Vivre • Donaire & more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 px-4 md:px-10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.cta.image}
            alt=""
            className="w-full h-full object-cover object-center brightness-75"
            onError={(e) => {
              e.target.src = '/images/cta-bg-inspire-interior.webp';
            }}
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold mb-5">
            {data.cta.label}
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
            {data.cta.title}
          </h2>

          <p className="text-lg text-black mb-8">
            {data.cta.description}
          </p>

          <Link
            to={data.cta.link}
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition"
          >
            {data.cta.buttonText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;