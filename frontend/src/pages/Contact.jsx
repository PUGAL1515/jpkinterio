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
      to_email: 'jpkinterio@gmail.com',
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
      {/* Contact Section with Background and Glass Effect */}
      <div className="relative py-8 px-4">
        {/* Background Image with Overlay - Only for this section */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto">

          {/* Hero - Compact with Glass Effect */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-1.5 h-px bg-red-600" />
              <span className="text-red-600 font-medium tracking-widest text-[10px] bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">CONNECT WITH US</span>
              <div className="w-1.5 h-px bg-red-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 text-white drop-shadow-lg">Get In Touch</h1>
            <p className="text-white/80 text-xs drop-shadow">We'd love to hear from you</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-4">

            {/* Contact Info Card - Glass Effect */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 h-full shadow-xl relative overflow-hidden flex flex-col">
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <h2 className="text-lg font-bold text-white">Contact Us</h2>
                    <p className="text-white/80 text-sm">For More Details Contact Us!</p>
                  </div>

                  <div className="space-y-4 text-xs flex-1">
                    {/* Address */}
                    <div className="flex gap-3">
                      <div className="w-7 h-7 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center justify-center flex-shrink-0 text-lg">📍</div>
                      <div>
                        <p className="uppercase text-[9px] tracking-widest text-white/70 font-medium mb-0.5">VISIT OUR STUDIO</p>
                        <p className="leading-tight text-white/90 text-[10px]">
                          47, Taluk Office Road, Next to New Robin Stores, Opp. Balaji Theatre,<br />
                          Hosur, Tamil Nadu 635109
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-3">
                      <div className="w-7 h-7 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center justify-center flex-shrink-0 text-lg">📞</div>
                      <div>
                        <p className="uppercase text-[9px] tracking-widest text-white/70 font-medium mb-0.5">CALL US</p>
                        <div className="space-y-0.5 text-white/90">
                          <a href="tel:+918015250234" className="block hover:text-white transition-colors">+91 80152 50234</a>
                          <a href="tel:+919080659559" className="block hover:text-white transition-colors">+91 90806 59559</a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-3">
                      <div className="w-7 h-7 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center justify-center flex-shrink-0 text-lg">✉️</div>
                      <div>
                        <p className="uppercase text-[9px] tracking-widest text-white/70 font-medium mb-0.5">EMAIL US</p>
                        <div className="space-y-0.5 text-white/90 text-[10px]">
                          <a href="mailto:jpkinterio.hsr@gmail.com" className="block hover:text-white transition-colors">jpkinterio.hsr@gmail.com</a>
                          <a href="mailto:info@jpkinterio@gmail.com" className="block hover:text-white transition-colors">info@jpkinterio@gmail.com</a>
                          <a href="mailto:contact@jpkinterio@gmail.com" className="block hover:text-white transition-colors">contact@jpkinterio@gmail.com</a>
                        </div>
                      </div>
                    </div>

                    {/* Timing */}
                    <div className="flex gap-3 pt-3 border-t border-white/30 mt-auto">
                      <div className="w-7 h-7 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center justify-center flex-shrink-0 text-lg">🕒</div>
                      <div>
                        <p className="uppercase text-[9px] tracking-widest text-white/70 font-medium mb-0.5">WORKING HOURS</p>
                        <p className="text-white/90 text-xs">Mon – Sat: 9AM – 7PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card - Glass Effect */}
            <div className="lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl relative">
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none rounded-2xl"></div>
                
                <div className="relative">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white">Send Message</h3>
                    <p className="text-white/70 text-xs">Reply within 24 hours</p>
                  </div>

                  {submitStatus.message && (
                    <div className={`mb-4 p-3 rounded-xl flex items-start gap-2 text-xs border backdrop-blur-sm ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-500/20 border-green-400/30 text-green-100' 
                        : 'bg-red-500/20 border-red-400/30 text-red-100'
                    }`}>
                      <span className="text-base mt-px">
                        {submitStatus.type === 'success' ? '🎉' : '⚠️'}
                      </span>
                      <p>{submitStatus.message}</p>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-white/70 mb-1 font-medium">FULL NAME *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-white/70 mb-1 font-medium">EMAIL *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-white/70 mb-1 font-medium">PHONE</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-white/70 mb-1 font-medium">SUBJECT</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all"
                          placeholder="Project Inquiry"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-white/70 mb-1 font-medium">MESSAGE *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 focus:border-red-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2
                        ${isSubmitting 
                          ? 'bg-white/20 text-white/50 cursor-not-allowed backdrop-blur-sm' 
                          : 'bg-red-600 hover:bg-red-700 text-white active:scale-[0.97] shadow-lg'
                        }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section - Glass Effect */}
          <div className="mt-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-4 border-b border-white/20">
                <h3 className="text-base font-semibold text-white">Our Studio Location</h3>
                <p className="text-white/70 text-xs">Hosur, Tamil Nadu</p>
              </div>
              <div className="h-56">
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