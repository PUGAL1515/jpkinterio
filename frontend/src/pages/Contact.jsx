import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { staticData } from '../data/staticData';

// Your EmailJS Credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_p4b7njv',
  TEMPLATE_ID: 'template_7lgmts4',
  PUBLIC_KEY: 'nu1amZC9cHkt-6s1Y'
};

const Contact = () => {
  const data = staticData.contact;
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const locations = [
    'Hosur',
    'Krishnagiri',
    'Dharmapuri',
    'Sarjapur',
    'Malur',
    'Electronic City',
    'Bengaluru',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitStatus.message) setSubmitStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone || 'Not provided',
      subject: formData.subject || 'No subject',
      message: formData.message,
      to_email: 'info@jpkinterio.com',
      reply_to: formData.email,
    };

    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      setSubmitStatus({
        type: 'success',
        message: `Thank you ${formData.name}! We'll reply soon.`,
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email failed:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative py-10 px-4 sm:px-6">
        {/* Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-red-600" />
              <span className="text-red-500 font-medium tracking-widest text-xs bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full">
                CONNECT WITH US
              </span>
              <div className="w-8 h-px bg-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-lg mb-2">
              Get In Touch
            </h1>
            <p className="text-white/75 text-sm md:text-base">
              We'd love to hear from you
            </p>
          </div>

          {/* Main Grid - Left & Right Cards */}
          <div className="grid lg:grid-cols-5 gap-5 lg:gap-6 items-stretch">

            {/* ========== LEFT CARD - Contact Info ========== */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 h-full shadow-xl flex flex-col">
                
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white">Contact Us</h2>
                  <p className="text-white/70 text-sm mt-1">
                    For more details, reach out to us
                  </p>
                </div>

                {/* Info Items */}
                <div className="space-y-5 flex-1">

                  {/* Address */}
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                      📍
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium mb-1.5">
                        Experience Our Designs
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=47+Taluk+Office+Road,+Next+to+New+Robin+Stores,+Opp.+to+Balaji+Theatre,+Hosur,+Tamil+Nadu+635109"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 text-sm leading-relaxed hover:text-white transition-colors block"
                      >
                        47, Taluk Office Road,<br />
                        Next to New Robin Stores,<br />
                        Opp. Balaji Theatre,<br />
                        Hosur, Tamil Nadu 635109
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                      📞
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium mb-1.5">
                        Call Us
                      </p>
                      <div className="space-y-1">
                        <a
                          href="tel:+918015250234"
                          className="block text-white/90 text-sm hover:text-white transition-colors"
                        >
                          +91 80152 50234
                        </a>
                        <a
                          href="tel:+919080659559"
                          className="block text-white/90 text-sm hover:text-white transition-colors"
                        >
                          +91 90806 59559
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                      ✉️
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium mb-1.5">
                        Email Us
                      </p>
                      <div className="space-y-1">
                        <a
                          href="mailto:info@jpkinterio.com"
                          className="block text-white/90 text-sm hover:text-white transition-colors"
                        >
                          info@jpkinterio.com
                        </a>
                        <a
                          href="mailto:sales@jpkinterio.com"
                          className="block text-white/90 text-sm hover:text-white transition-colors"
                        >
                          sales@jpkinterio.com
                        </a>
                        <a
                          href="mailto:projects@jpkinterio.com"
                          className="block text-white/90 text-sm hover:text-white transition-colors"
                        >
                          projects@jpkinterio.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* We Serve */}
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                      🗺️
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium mb-2">
                        We Serve
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {locations.map((loc) => (
                          <span
                            key={loc}
                            className="inline-block bg-white/10 border border-white/20 text-white/90 text-xs px-2.5 py-1 rounded-full"
                          >
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours - Bottom */}
                <div className="mt-6 pt-5 border-t border-white/20">
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                      🕒
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium mb-1">
                        Working Hours
                      </p>
                      <p className="text-white/90 text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== RIGHT CARD - Contact Form ========== */}
            <div className="lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 h-full shadow-xl flex flex-col">
                
                {/* Header */}
                <div className="mb-5">
                  <h3 className="text-xl font-semibold text-white">Send Message</h3>
                  <p className="text-white/65 text-sm mt-1">
                    We usually reply within 24 hours
                  </p>
                </div>

                {/* Status Message */}
                {submitStatus.message && (
                  <div
                    className={`mb-5 p-3.5 rounded-xl flex items-start gap-2.5 text-sm border ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 border-green-400/30 text-green-100'
                        : 'bg-red-500/20 border-red-400/30 text-red-100'
                    }`}
                  >
                    <span className="text-base mt-0.5">
                      {submitStatus.type === 'success' ? '🎉' : '⚠️'}
                    </span>
                    <p>{submitStatus.message}</p>
                  </div>
                )}

                {/* Form - 1 Field Per Row */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs text-white/70 mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/45 focus:outline-none focus:ring-2 focus:ring-red-500/25 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs text-white/70 mb-1.5 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/45 focus:outline-none focus:ring-2 focus:ring-red-500/25 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs text-white/70 mb-1.5 font-medium">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/45 focus:outline-none focus:ring-2 focus:ring-red-500/25 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs text-white/70 mb-1.5 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/45 focus:outline-none focus:ring-2 focus:ring-red-500/25 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-white/70 mb-1.5 font-medium">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full min-h-[80px] bg-white/10 border border-white/20 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/45 resize-none focus:outline-none focus:ring-2 focus:ring-red-500/25 transition-all"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 mt-2
                      ${
                        isSubmitting
                          ? 'bg-white/15 text-white/50 cursor-not-allowed'
                          : 'bg-red-600 hover:bg-red-700 text-white active:scale-[0.98] shadow-lg shadow-red-900/30'
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl">
              <div className="px-5 py-4 border-b border-white/15">
                <h3 className="text-lg font-semibold text-white">Our Location</h3>
                <p className="text-white/65 text-sm mt-0.5">Hosur, Tamil Nadu</p>
              </div>
              <div className="h-60 sm:h-72">
                <iframe
                  src={data.map_url}
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  title="JPK Interio Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;