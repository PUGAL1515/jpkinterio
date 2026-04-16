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
    // Clear status when user starts typing again
    if (submitStatus.message) setSubmitStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // EmailJS configuration - Replace with your credentials
    const serviceId = 'YOUR_SERVICE_ID'; // Get from EmailJS dashboard
    const templateId = 'YOUR_TEMPLATE_ID'; // Get from EmailJS dashboard
    const publicKey = 'YOUR_PUBLIC_KEY'; // Get from EmailJS dashboard

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone || 'Not provided',
      message: formData.message,
      to_email: 'jpkinterio@gmail.com', // Your business email
      reply_to: formData.email
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully:', response);
      
      setSubmitStatus({ 
        type: 'success', 
        message: `Thank you ${formData.name}! We'll respond to you soon at ${formData.email}` 
      });
      
      // Reset form
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
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-0 md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Left Side - Contact Info with Image */}
          <div className="p-10 bg-gradient-to-b from-red-600 to-red-700 text-white space-y-6">
            {/* Office Image */}
            {data.officeImage && (
              <img 
                src={data.officeImage} 
                alt="Office" 
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/header02.png`; }}
              />
            )}
            
            <h1 className="text-4xl font-bold">{data.title}</h1>
            <p className="text-lg">{data.description}</p>
            
            <div className="space-y-4 text-sm">
              {/* Address */}
              <div>
                <p className="font-semibold text-red-200">Office Address</p>
                <p className="text-white">{data.address}</p>
              </div>
              
              {/* Phone */}
              <div>
                <p className="font-semibold text-red-200">Phone Numbers</p>
                <div className="space-y-1">
                  {data.phone.map((phone, index) => <p key={index}>{phone}</p>)}
                </div>
              </div>
              
              {/* Emails */}
              <div>
                <p className="font-semibold text-red-200">Email Addresses</p>
                <div className="space-y-1">
                  {data.emails && data.emails.map((email, index) => (
                    <p key={index}>
                      <a href={`mailto:${email}`} className="underline hover:text-red-200">
                        {email}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="p-10">
            {/* Success/Error Message */}
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-semibold mb-2">Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" 
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Message *</label>
                <textarea 
                  rows="5" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`bg-red-600 text-white rounded-full px-12 py-3 font-semibold transition ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 h-96 rounded-lg overflow-hidden shadow-xl">
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
  );
};

export default Contact;