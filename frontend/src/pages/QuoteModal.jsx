import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
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

    // EmailJS configuration - Replace with your credentials
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_QUOTE_TEMPLATE_ID'; // Create a separate template for quotes
    const publicKey = 'YOUR_PUBLIC_KEY';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      project_type: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,
      to_email: 'jpkinterio@gmail.com',
      reply_to: formData.email,
      subject: `Quote Request from ${formData.name}`
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus({ 
        type: 'success', 
        message: `Thank you ${formData.name}! We've received your quote request. Our team will contact you within 24 hours.` 
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus({ type: '', message: '' });
        }, 2000);
      }, 1500);
    } catch (error) {
      console.error('Quote request failed:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Sorry, something went wrong. Please try again later or call us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10 bg-white rounded-full p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold text-white">Request a Quote</h2>
            <p className="text-red-100 mt-1">Tell us about your project and we'll provide a customized quote</p>
          </div>

          {/* Form Body */}
          <div className="p-6">
            {/* Success/Error Message */}
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  submitStatus.type === 'success' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </div>
                <p className="flex-1">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type *</label>
                  <select 
                    name="projectType" 
                    value={formData.projectType} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                  >
                    <option value="">Select project type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                  <select 
                    name="budget" 
                    value={formData.budget} 
                    onChange={handleChange} 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under ₹5 Lakhs">Under ₹5 Lakhs</option>
                    <option value="₹5-10 Lakhs">₹5-10 Lakhs</option>
                    <option value="₹10-25 Lakhs">₹10-25 Lakhs</option>
                    <option value="₹25-50 Lakhs">₹25-50 Lakhs</option>
                    <option value="Above ₹50 Lakhs">Above ₹50 Lakhs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Timeline</label>
                  <select 
                    name="timeline" 
                    value={formData.timeline} 
                    onChange={handleChange} 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediate (Within 1 month)">Immediate (Within 1 month)</option>
                    <option value="Short-term (1-3 months)">Short-term (1-3 months)</option>
                    <option value="Medium-term (3-6 months)">Medium-term (3-6 months)</option>
                    <option value="Long-term (6+ months)">Long-term (6+ months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                <textarea 
                  rows="4" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition resize-none"
                  placeholder="Please describe your project requirements, preferred products, or any specific needs..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg px-6 py-3 font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:scale-105 transform'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;