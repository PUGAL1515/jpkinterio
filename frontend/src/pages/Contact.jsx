import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { staticData } from '../data/staticData';

const Contact = () => {
  const data = staticData.contact;
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
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

    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone || 'Not provided',
      message: formData.message,
      to_email: 'jpkinterio@gmail.com',
      reply_to: formData.email
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully:', response);

      setSubmitStatus({
        type: 'success',
        message: `Thank you ${formData.name}! We'll respond to you soon at ${formData.email}`
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later or call us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Get In Touch</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">
            We'd love to hear from you. Send us a message or visit our office.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* LEFT: Contact Us Info - Minimized */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl flex flex-col">
            <div className="p-5 text-white flex-1">
              <h2 className="text-2xl font-bold mb-3">{data.title}</h2>
              <p className="text-red-100 mb-5 text-sm leading-tight">{data.description}</p>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-red-200 text-xs uppercase tracking-wide">Office Address</p>
                    <p className="text-white text-sm mt-1">{data.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-red-200 text-xs uppercase tracking-wide">Phone Numbers</p>
                    <div className="mt-1 space-y-0.5">
                      {data.phone.map((phone, index) => (
                        <a key={index} href={`tel:${phone}`} className="block text-white hover:text-red-200 text-sm">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-red-200 text-xs uppercase tracking-wide">Email Addresses</p>
                    <div className="mt-1 space-y-0.5">
                      {data.emails && data.emails.map((email, index) => (
                        <a key={index} href={`mailto:${email}`} className="block text-white hover:text-red-200 text-sm">
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-1.5 rounded-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-red-200">Business Hours</p>
                      <p className="text-white font-semibold text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Send us a Message - Same Height */}
          <div className="bg-white rounded-2xl shadow-xl flex flex-col">
            <div className="p-5 flex-1 flex flex-col">
              {/* Status Message */}
              {submitStatus.message && (
                <div className={`mb-5 p-3.5 rounded-xl flex items-center gap-3 text-sm ${submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${submitStatus.type === 'success' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                    {submitStatus.type === 'success' ? '✓' : '✕'}
                  </div>
                  <p className="flex-1 leading-tight">{submitStatus.message}</p>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold text-gray-800">Send us a Message</h3>
                <p className="text-gray-500 text-sm mt-1">We'll get back to you within 24 hours</p>
              </div>

              <form ref={formRef} className="flex-1 flex flex-col space-y-4" onSubmit={handleSubmit}>

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 text-sm"
                      placeholder="Optional"
                    />
                  </div>

                  {/* Subject (Optional New Field) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject || ""}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 text-sm"
                      placeholder="Subject"
                    />
                  </div>

                </div>

                {/* Message Full Width */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 resize-none text-sm"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full mt-auto bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl py-3 font-semibold text-sm transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg active:scale-[0.98]'
                    }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-b">
              <h3 className="text-xl font-bold text-gray-800">Find Us Here</h3>
              <p className="text-gray-500 text-sm mt-0.5">Visit our showroom</p>
            </div>
            <div className="h-72">
              <iframe
                src={data.map_url}
                width="100%"
                height="100%"
                className="border-0"
                title="JPK Interio Location"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;