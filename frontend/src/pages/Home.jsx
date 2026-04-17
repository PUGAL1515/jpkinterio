import React, { useState, useEffect, useRef } from "react";
import { staticData } from '../data/staticData';

const Home = () => {
  const data = staticData.home;

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  const headerImages = [
    `${process.env.PUBLIC_URL}/images/header01.png`,
    `${process.env.PUBLIC_URL}/images/header02.png`,
    `${process.env.PUBLIC_URL}/images/header03.png`,
  ];

  // Auto-rotate slides every 5 seconds
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

            // Animate Progress Bar
            const progressBar = counterEl.parentElement.querySelector(".progress-bar");
            if (progressBar) {
              const width = progressBar.getAttribute("data-width");
              setTimeout(() => {
                progressBar.style.width = `${width}%`;
              }, 400);
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative w-full h-screen overflow-hidden">
        {headerImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${img})`,
              transform: index === currentSlide ? "scale(1.08)" : "scale(1)",
            }}
          >
            <div className="absolute inset-0 bg-black/55" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
          <div className="text-center max-w-5xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              WELCOME TO JPK INTERIO
            </h1>

            <div className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-100">
              <p>
                JPK Interio is a leading authorized distributor of premium interior and exterior
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

            <div className="mt-10">
              <a
                href="/about"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {headerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-red-600 w-10" : "bg-white/60 hover:bg-white w-3"
                }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm flex flex-col items-center">
          Scroll to explore
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/60 to-transparent mt-2" />
        </div>
      </section>

      {/* ====================== ABOUT SECTION ====================== */}
      <section className="py-16 md:py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <img
              src={data.about.image}
              alt="JPK Interio showroom and team"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-medium mb-4 text-sm tracking-wider">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              {data.about.title}
            </h2>

            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              {data.about.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== WHY CHOOSE US ====================== */}
      <section className="relative py-16 md:py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.why_choose.image}
            alt=""
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
          <span className="inline-block bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider">
            WHY CHOOSE US?
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {data.why_choose.title}
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
            {data.why_choose.description}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 pt-6">
            {data.why_choose.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-2xl p-8 text-left border-l-8 border-red-600 hover:-translate-y-2 transition-all duration-300 w-full md:w-auto md:min-w-[280px]"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== NUMBERS SECTION ====================== */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {data.numbers.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-xl p-10 text-center overflow-hidden group"
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-all"
              />
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-extrabold text-red-600 mb-3">
                  {item.value}
                </div>
                <div className="text-xl font-semibold text-gray-800 tracking-wide">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== MD SECTION ====================== */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* MD Photo */}
            <div className="lg:w-2/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-12 flex justify-center">
  
  {/* Soft glow background */}
  <div className="absolute w-72 h-72 md:w-80 md:h-80 bg-red-500/10 rounded-full blur-2xl"></div>

  {/* Main Container */}
  <div className="relative group">
    
    {/* Gradient Border Ring */}
    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-red-600 via-orange-500 to-red-700 opacity-80 group-hover:opacity-100 blur-[2px] transition duration-500"></div>

    {/* Image Circle */}
    <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[5px] border-white shadow-2xl">
      
      <img
        src={data.md_section.image}
        alt="Managing Director of JPK Interio"
        className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
      />

      {/* Bottom Gradient Overlay (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

     
    </div>

  </div>
</div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {data.md_section.title}
              </h3>
              <p className="text-red-600 font-medium text-lg">
                {data.md_section.subtitle}
              </p>
            </div>

            {/* Animated Stats */}
            <div className="lg:w-3/5 w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
              {data.md_section.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-8 text-center hover:border-red-300 transition-all group hover:-translate-y-2"
                >
                  <div
                    ref={(el) => (countersRef.current[index] = el)}
                    data-target={stat.value}
                    className="text-5xl md:text-6xl font-extrabold text-red-600 mb-4 group-hover:scale-110 transition-transform"
                  >
                    0%
                  </div>
                  <div className="font-semibold text-gray-800 text-lg leading-tight">
                    {stat.label}
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-6">
                    <div
                      className="progress-bar h-2 bg-red-600 rounded-full transition-all duration-[2000ms]"
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
      <section className="relative py-16 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.cta.image}
            alt=""
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
          <span className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium border border-white/30">
            {data.cta.label || "WORLD-CLASS INTERIOR SOLUTIONS"}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {data.cta.title}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            {data.cta.description}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 px-12 py-4 rounded-2xl font-semibold text-lg shadow-2xl transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* ====================== CUSTOMERS SECTION ====================== */}
      <section className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
            WE ARE{" "}
            <span className="text-red-600 underline underline-offset-8 decoration-red-600 decoration-4">
              AUTHORISED DISTRIBUTOR & DEALER!
            </span>
          </h2>

          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-12 md:gap-16 items-center">

              {/* First Loop */}
              {data.customers.map((logo, index) => (
                <img
                  key={`logo-${index}`}
                  src={logo}
                  alt={`Customer logo ${index + 1}`}
                  className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition duration-300 transform hover:scale-110"
                />
              ))}

              {/* Duplicate Loop for infinite scroll */}
              {data.customers.map((logo, index) => (
                <img
                  key={`logo2-${index}`}
                  src={logo}
                  alt={`Customer logo ${index + 1}`}
                  className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition duration-300 transform hover:scale-110"
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