import React, { useState, useEffect, useRef } from "react";
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

  // Counter Animation Ref
  const countersRef = useRef([]);

  // Counter & Progress Bar Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counterEl = entry.target;
            const target = parseInt(counterEl.getAttribute("data-target"));
            let count = 0;
            const increment = Math.ceil(target / 50);

            const animateCounter = () => {
              count += increment;
              if (count < target) {
                counterEl.textContent = count + "%";
                requestAnimationFrame(animateCounter);
              } else {
                counterEl.textContent = target + "%";
              }
            };
            animateCounter();

            const progressBar = counterEl.parentElement?.querySelector(".progress-bar");
            if (progressBar) {
              setTimeout(() => {
                progressBar.style.width = `${progressBar.getAttribute("data-width")}%`;
              }, 400);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    countersRef.current.forEach((counter) => counter && observer.observe(counter));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Slide 1 - Strong Dark Overlay (as requested) */}
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

        {/* Slide 2 & 3 - Brighter */}
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
          <div className="text-center max-w-4xl text-white w-full">
            <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-6 leading-tight tracking-tight">
              WELCOME TO JPK INTERIO
            </h1>

            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 text-base xs:text-lg sm:text-lg md:text-base lg:text-base xl:text-lg leading-relaxed text-gray-100 px-1 sm:px-4">
              <p>
                JPK Interio is a leading authorized distributors & dealer of premium interior and exterior
                solutions, including ceiling and flooring systems. We are an authorized license partner
                for FunderMax HPL cladding and a trusted distributor for renowned brands such as VOX
                Ceiling & Wall Panels, Knauf Armstrong ceiling tiles, Action TESA laminate flooring,
                Responsive vinyl flooring, Jindal MLC Pipes, Vivre interior and exterior panels, Donaire
                carpets, and Linearsil metal ceilings.
              </p>
              <p>
                Headquartered in Hosur, Tamil Nadu, India, JPK Interio is committed to delivering
                aesthetically appealing and highly functional spaces that create a lasting impact.
                We specialize in turnkey project execution for both interior and exterior works across
                diverse sectors, including commercial, residential, hospitality, healthcare, and industrial
                projects.
              </p>
            </div>

            <div className="mt-6 sm:mt-10">
              <a
                href="/about"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 md:px-8 lg:px-8 py-3 sm:py-4 md:py-4 lg:py-4 rounded-xl font-semibold text-base xs:text-lg sm:text-lg md:text-base lg:text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
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
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-red-600 w-5 sm:w-10" : "bg-white/60 hover:bg-white w-2 sm:w-3"
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
              {data.about.description.split('\n\n').map((paragraph, index) => (
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
            WHY CHOOSE US?
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
                <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-base xs:text-lg sm:text-lg md:text-xl leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== NUMBERS SECTION ====================== */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-10 sm:py-16 md:py-20 px-3 sm:px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
          {data.numbers.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-xl p-6 sm:p-10 text-center overflow-hidden group"
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-all"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="relative z-10">
                <div className="text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-red-600 mb-2 sm:mb-3">
                  {item.value}
                </div>
                <div className="text-lg xs:text-xl sm:text-xl md:text-2xl font-semibold text-gray-800 tracking-wide">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== MD SECTION ====================== */}
      <section className="bg-white py-10 sm:py-16 md:py-20 px-3 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            <div className="lg:w-2/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-8 sm:mb-12 flex justify-center">
                <div className="absolute w-48 xs:w-56 sm:w-72 md:w-80 h-48 xs:h-56 sm:h-72 md:h-80 bg-red-500/10 rounded-full blur-2xl"></div>
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-red-600 via-orange-500 to-red-700 opacity-80 group-hover:opacity-100 blur-[2px] transition duration-500"></div>
                  <div className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[5px] border-white shadow-2xl">
                    <img
                      src={data.md_section.image}
                      alt="Managing Director of JPK Interio"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                      width="600"
                      height="600"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
                {data.md_section.title}
              </h3>
              <p className="text-red-600 font-medium text-lg xs:text-xl sm:text-xl md:text-2xl">
                {data.md_section.subtitle}
              </p>
            </div>

            <div className="lg:w-3/5 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {data.md_section.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-4 sm:p-8 text-center hover:border-red-300 transition-all group hover:-translate-y-2"
                >
                  <div
                    ref={(el) => (countersRef.current[index] = el)}
                    data-target={stat.value}
                    className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
                  >
                    0%
                  </div>
                  <div className="font-semibold text-gray-800 text-base xs:text-lg sm:text-lg md:text-xl leading-tight">
                    {stat.label}
                  </div>
                  <div className="w-full h-2 sm:h-2.5 bg-gray-200 rounded-full mt-4 sm:mt-6">
                    <div
                      className="progress-bar h-2 sm:h-2.5 bg-red-600 rounded-full transition-all duration-[2000ms]"
                      style={{ width: "0%" }}
                      data-width={stat.value}
                    />
                  </div>
                </div>
              ))}
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
              AUTHORISED DISTRIBUTOR & DEALER for
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
      </section>
    </div>
  );
};

export default Home;