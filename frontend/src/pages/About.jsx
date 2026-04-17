import React, { useEffect } from 'react';
import { staticData } from '../data/staticData';

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
            />
          </div>
          <div className="md:w-1/2 w-full">
            {/* <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full font-medium mb-3 text-xs shadow-lg">About Us</span> */}
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
        e.target.src = '/images/why-choose-jpkinterio.png';
      }}
    />

    {/* Light overlay (reduced) */}
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

      {/* Numbers Section */}
      <section className="relative bg-gradient-to-r from-gray-100 to-gray-50 py-20 px-4 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {data.numbers.map((item, index) => (
            <div key={index} className="relative bg-white/80 rounded-3xl shadow-lg p-8 text-center overflow-hidden">
              <img
                src={item.image}
                alt=""                    // Empty alt - decorative background image
                className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-3xl"
              />
              <div className="relative text-6xl sm:text-7xl font-extrabold text-red-600">{item.value}</div>
              <div className="relative mt-4 text-xl font-semibold text-gray-800">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team/Leadership Section */}
      <section className="relative bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 w-full flex flex-col items-center text-center lg:text-left space-y-4">
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-red-600 shadow-2xl">
  <img
    src={data.team.image}
    alt="Leadership team at JPK Interio"
    className="w-full h-full object-cover object-top"
  />
</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{data.team.title}</h3>
            <p className="text-gray-700 text-base md:text-lg">{data.team.subtitle}</p>
          </div>
          <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.team.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
                <span className="text-4xl md:text-5xl font-extrabold text-red-600">{stat.value}%</span>
                <span className="mt-2 text-lg font-semibold text-gray-900">{stat.label}</span>
              </div>
            ))}
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
        e.target.src = '/images/cta-bg-inspire-interior.png';
      }}
    />

    {/* Overlay (reduced) */}
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

    <a
      href={data.cta.link}
      className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition"
    >
      {data.cta.buttonText}
    </a>

  </div>
</section>
    </div>
  );
};

export default About;