import React, { useEffect, useRef } from "react";
import { staticData } from '../data/staticData';

const Home = () => {
  const data = staticData.home;

  // Ref for animated counters in MD Section
  const countersRef = useRef([]);

  // Animation for MD Section (Counter + Progress Bar)
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

    // Observe all counters
    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.header.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              {data.header.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              {data.header.description}
            </p>
            <a
              href="/about"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-105"
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative bg-white py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <img
              src={data.about.image}
              alt="JPK Interio showroom and team"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-medium mb-4 text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="block text-red-600">{data.about.title}</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {data.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 md:py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.why_choose.image}
            alt=""
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/90"></div>
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

      {/* Numbers Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-20 px-6 md:px-16">
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
              <div className="relative">
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

      {/* MD Section - Eye-catching with Animation */}
      <section className="relative bg-white py-16 md:py-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* MD Photo + Info */}
            <div className="lg:w-2/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-8">
                <div className="absolute -inset-6 bg-red-100 rounded-full -rotate-6"></div>
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-white shadow-2xl ring-2 ring-red-600/30">
                  <img
                    src={data.md_section.image}
                    alt="Managing Director of JPK Interio"
                    className="w-full h-full object-cover"
                  />
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
                  {/* Counter */}
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

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-6">
                    <div
                      className="progress-bar h-2 bg-red-600 rounded-full transition-all duration-[2000ms]"
                      style={{ width: "0%" }}
                      data-width={stat.value}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.cta.image}
            alt=""
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
          <span className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium border border-white/30">
            {data.cta.label || "WORLD-CLASS INTERIOR SOLUTIONS"}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
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

      {/* Customers Section */}
      <section className="relative bg-white py-12 md:py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
            WE ARE{" "}
            <span className="text-red-600 underline underline-offset-8 decoration-red-600 decoration-4">
              AUTHORISED DISTRIBUTOR & DEALER!
            </span>
          </h2>

          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-12 md:gap-16">
              {data.customers.map((logo, index) => (
                <img
                  key={`logo-${index}`}
                  src={logo}
                  alt={`Customer logo ${index + 1}`}
                  className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
              {data.customers.map((logo, index) => (
                <img
                  key={`logo2-${index}`}
                  src={logo}
                  alt={`Customer logo ${index + 1}`}
                  className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
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