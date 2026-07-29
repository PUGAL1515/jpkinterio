import React, { useState, useEffect } from "react";
import { staticData } from '../data/staticData';
import { Link } from "react-router-dom";

const Home = () => {
  const data = staticData.home;

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const headerImages = [
    `${process.env.PUBLIC_URL}/images/header01.webp`,
    `${process.env.PUBLIC_URL}/images/header02.webp`,
    `${process.env.PUBLIC_URL}/images/header03.webp`,
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % headerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [headerImages.length]);

  return (
    <div className="overflow-hidden">
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Slide 1 - Strong Dark Overlay */}
        <img
          src={headerImages[0]}
          alt="JPK Interio - Premium Interior & Exterior Solutions"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out"
          style={{
            opacity: currentSlide === 0 ? 1 : 0,
            transform: currentSlide === 0 ? "scale(1.08)" : "scale(1)",
          }}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
          sizes="100vw"
        />
        <div className={`absolute inset-0 bg-black/55 transition-all duration-700 ${currentSlide === 0 ? "opacity-100" : "opacity-0"}`} />

        {/* Slide 2 & 3 */}
        {headerImages.slice(1).map((img, idx) => {
          const slideIndex = idx + 1;
          const isActive = slideIndex === currentSlide;
          return (
            <div
              key={slideIndex}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${isActive ? "opacity-100" : "opacity-0"}`}
              style={{
                backgroundImage: `url(${img})`,
                transform: isActive ? "scale(1.08)" : "scale(1)",
              }}
            >
              <div className={`absolute inset-0 transition-all duration-700 ${isActive ? "bg-black/35" : "bg-black/55"}`} />
            </div>
          );
        })}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-6 z-20">
          <div className="text-center max-w-5xl text-white w-full">
            <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight">
              Premium Interior, Exterior, Ceiling & Flooring Solutions in Hosur
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl font-medium text-gray-100 mb-5 sm:mb-7 max-w-4xl mx-auto leading-relaxed px-2">
              Authorised distributors and project specialists for FunderMax, VOX, Action TESA, 
              Responsive Flooring, Knauf Ceiling Solutions, Vivre Panels, Donaire Carpets and Jindal MLC Pipes.
            </p>

            <div className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 px-2 space-y-3">
              <p>
                JPK Interio is a leading authorised distributor & dealer of premium interior and exterior solutions. 
                Headquartered in Hosur, Tamil Nadu, we specialise in turnkey project execution for commercial, 
                residential, hospitality, healthcare and industrial spaces across South India.
              </p>
            </div>

            <div className="mt-6 sm:mt-10">
              <a
                href="/about"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-3 z-30">
          {headerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-red-600 w-5 sm:w-10"
                  : "bg-white/60 hover:bg-white w-2 sm:w-3"
              }`}
            />
          ))}
        </div>

        {/* Scroll to Explore */}
        <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm flex-col items-center z-30">
          Scroll to explore
          <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-transparent via-white/60 to-transparent mt-2" />
        </div>
      </section>

      {/* ====================== ABOUT SECTION ====================== */}
      <section className="py-10 sm:py-16 md:py-20 px-3 sm:px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-12">
          <div className="md:w-1/2 w-full">
            <img
              src={data.about.image}
              alt="JPK Interio showroom and team"
              className="w-full rounded-2xl shadow-2xl"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <span className="inline-block bg-red-600 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium mb-3 sm:mb-4 text-sm sm:text-base tracking-wider">
              ABOUT US
            </span>
            <h2 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
              {data.about.title}
            </h2>
            <div className="text-gray-700 text-base xs:text-lg sm:text-lg md:text-xl leading-relaxed space-y-4 sm:space-y-6">
              {data.about.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== WHY CHOOSE US ====================== */}
      <section className="relative py-10 sm:py-16 md:py-20 px-3 sm:px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.why_choose.image}
            alt=""
            className="w-full h-full object-cover brightness-75"
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-5 sm:space-y-10">
          <span className="inline-block bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold tracking-wider">
            WHY CHOOSE JPK INTERIO?
          </span>
          <h2 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            {data.why_choose.title}
          </h2>
          <p className="max-w-3xl mx-auto text-base xs:text-lg sm:text-lg md:text-2xl text-gray-700 px-2">
            {data.why_choose.description}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-8 pt-3 sm:pt-6">
            {data.why_choose.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 text-left border-l-8 border-red-600 hover:-translate-y-2 transition-all duration-300 w-full md:w-auto md:min-w-[280px]"
              >
                <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base xs:text-lg sm:text-lg md:text-xl leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== STRENGTH + MD SECTION ====================== */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/30"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-200/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-extrabold tracking-[0.15em] uppercase shadow-lg border border-red-300/30 mb-4">
              OUR STRENGTH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Numbers That Speak & Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column – MD Profile */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute inset-0 w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 bg-red-500/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>

                <div className="relative group">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-red-600 via-orange-500 to-red-700 opacity-90 group-hover:opacity-100 blur-[2px] transition duration-500 group-hover:scale-105"></div>
                  
                  <div className="relative w-50 h-50 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src={data.md_section.image}
                      alt="Managing Director of JPK Interio"
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700"
                      width="700"
                      height="700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1.5">
                {data.md_section.title}
              </h3>
              <p className="text-red-600 font-semibold text-base sm:text-lg md:text-xl mb-4">
                {data.md_section.subtitle}
              </p>
              <div className=" bg-gradient-to-r from-red-600 to-orange-500 rounded-full mb-6"></div>                
                   
            </div>

            {/* Right Column – Numbers + Brand Card */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                <div className="group relative bg-white rounded-2xl p-6 sm:p-7 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-red-600 mb-2 leading-none group-hover:scale-110 transition-transform duration-500">
                      6+
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                      Years of Industry Experience
                    </div>
                    <div className="mt-3 w-10 h-1 bg-red-500 mx-auto rounded-full group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl p-6 sm:p-7 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-red-600 mb-2 leading-none group-hover:scale-110 transition-transform duration-500">
                      500+
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                      Completed Installations
                    </div>
                    <div className="mt-3 w-10 h-1 bg-red-500 mx-auto rounded-full group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl p-6 sm:p-7 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-red-600 mb-2 leading-none group-hover:scale-110 transition-transform duration-500">
                      8+
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                      Premium Authorised Brands
                    </div>
                    <div className="mt-3 w-10 h-1 bg-red-500 mx-auto rounded-full group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 sm:p-8 text-white text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    Authorized Partner for Premium Brands
                  </div>
                  <p className="text-red-100 text-sm sm:text-base leading-relaxed">
                    FunderMax • VOX • Knauf Armstrong • Action TESA • Responsive • Jindal MLC • Vivre • Donaire & more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <marquee behavior="slide" direction="left" scrollamount="5"  className=" bottom-0 left-0 w-full bg-red-600 text-black text-sm sm:text-base font-semibold tracking-wide">
                    South India projects delivered across Hosur, Bengaluru, Krishnagiri & more || 
                           Turnkey expertise for residential & commercial spaces
                    </marquee>
      </section>

      {/* ====================== TRUST & CREDENTIALS SECTION ====================== */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wider mb-4">
              TRUSTED BY CLIENTS & BRANDS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Authorised Partner You Can Rely On
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              We are official authorised distributors and dealers for leading international and Indian brands, 
              backed by real projects, showroom experience and transparent business credentials.
            </p>
          </div>

          {/* Brand Partnership Grid with Caption */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16">
  {[
    { name: "Fundermax-HPL shades", status: "Authorised License Partner – HPL Cladding" },
    { name: "Vox India", status: "Authorised Distributor – Ceiling & Wall Panels" },
    { name: "Vivre Panels", status: "Authorised Distributor – Interior & Exterior Panels" },
    { name: "Knauf Armstrong Ceilings", status: "Authorised Dealer – Ceiling Solutions" },
    { name: "Action TESA Flooring", status: "Authorised Distributor – Laminate Flooring" },
    { name: "Donaire Carpets", status: "Authorised Dealer – Carpets" },
    { name: "Responsive Vinyl Flooring", status: "Authorised Dealer – Vinyl Flooring" },
    { name: "Jindal MLC Pipes", status: "Authorised Distributor – MLC Pipes" },
  ].map((brand, index) => (
    <div 
      key={index}
      className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition-all border border-gray-100"
    >
      <div className="h-16 flex items-center justify-center mb-3">
        <span className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
          {brand.name}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-red-600 font-medium leading-tight">
        {brand.status}
      </p>
    </div>
  ))}
</div>
          {/* Trust Stats */}
<div className="grid md:grid-cols-3 gap-8 mb-16">
  {/* Completed Installations */}
  <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-t-4 border-red-600">
    <div className="text-5xl font-extrabold text-red-600 mb-2">500+</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">Completed Installations</h3>
    <p className="text-gray-600 text-sm">
      Residential, commercial, hospitality & industrial projects across South India
    </p>
  </div>

  {/* Service Locations - Updated */}
  <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-t-4 border-red-600">
    <div className="text-5xl font-extrabold text-red-600 mb-2">7+</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">Service Locations</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      Hosur • Krishnagiri • Dharmapuri • Sarjapur • Malur • Electronic City • Bengaluru
    </p>
  </div>

  {/* Years of Experience */}
  <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-t-4 border-red-600">
    <div className="text-5xl font-extrabold text-red-600 mb-2">6+</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">Years of Experience</h3>
    <p className="text-gray-600 text-sm">
      Delivering premium interior & exterior solutions since 2019
    </p>
  </div>
</div>

          {/* Certificates + Business Details */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left - Certificates Preview */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authorisation Certificates</h3>
              <p className="text-gray-600 mb-6">
                We proudly display official authorisation certificates from our partner brands. 
                You can request copies or view them at our Hosur showroom.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-xl h-40 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-500 text-sm text-center px-2">FunderMax Certificate</span>
                </div>
                <div className="bg-gray-100 rounded-xl h-40 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-500 text-sm text-center px-2">VOX / Knauf Certificate</span>
                </div>
              </div>
            </div>

            {/* Right - Business Identity */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Credentials</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <div>
                    <strong>GST Registered Business</strong>
                    <p className="text-sm text-gray-500">GSTIN: XX XXXX XXXX XXXX (Add your real GSTIN)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <div>
                    <strong>Registered Office</strong>
                    <p className="text-sm text-gray-500">47, Taluk Office Road, Hosur, Tamil Nadu – 635109</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <div>
                    <strong>Warranty & Installation Support</strong>
                    <p className="text-sm text-gray-500">
                      Manufacturer warranty + professional installation and after-sales support
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <div>
                    <strong>Showroom Experience</strong>
                    <p className="text-sm text-gray-500">
                      Visit our Hosur showroom to see real product samples and completed displays
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CTA SECTION ====================== */}
      <section className="relative py-10 sm:py-16 md:py-20 px-3 sm:px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.cta.image}
            alt=""
            className="w-full h-full object-cover brightness-75"
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-4 sm:space-y-8">
          <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium border border-white/30">
            {data.cta.label || "WORLD-CLASS INTERIOR SOLUTIONS"}
          </span>
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-extrabold leading-tight px-2">
            {data.cta.title}
          </h2>
          <p className="text-base xs:text-lg sm:text-lg md:text-2xl max-w-2xl mx-auto opacity-90 px-2">
            {data.cta.description}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 px-8 sm:px-12 py-3 sm:py-4 md:py-5 rounded-2xl font-semibold text-base xs:text-lg sm:text-lg md:text-xl shadow-2xl transition-all hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* ====================== CUSTOMERS SECTION ====================== */}
      <section className="bg-white py-10 sm:py-12 md:py-16 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-10 px-2">
            WE ARE{" "}
            <span className="text-red-600 underline underline-offset-4 sm:underline-offset-8 decoration-4 decoration-red-600">
              AUTHORISED DISTRIBUTOR & DEALER FOR
            </span>
          </h2>
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-8 sm:gap-12 md:gap-16 items-center">
              {data.customers.map((logo, index) => (
                <img
                  key={`logo-${index}`}
                  src={logo}
                  alt={`Customer logo ${index + 1}`}
                  className="h-12 xs:h-14 sm:h-14 md:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition duration-300 transform hover:scale-110"
                  width="200"
                  height="100"
                  loading="lazy"
                  decoding="async"
                />
              ))}
              {data.customers.map((logo, index) => (
                <img
                  key={`logo2-${index}`}
                  src={logo}
                  alt={`Customer logo ${index + 1}`}
                  className="h-12 xs:h-14 sm:h-14 md:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition duration-300 transform hover:scale-110"
                  width="200"
                  height="100"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </div>
     <img
  src={`${process.env.PUBLIC_URL}/images/map.png`}
  alt="JPK Interio Service Locations"
  className="w-full h-200 rounded-3xl shadow-2xl"
/>
      </section>
    </div>
  );
};

export default Home;