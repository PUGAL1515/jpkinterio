import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    product: '',
    requirement: ''
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

    // ========== UPDATE THESE WITH YOUR REAL EmailJS CREDENTIALS ==========
    const serviceId = 'service_p4b7njv';
    const templateId = 'template_7lgmts4';
    const publicKey = 'nu1amZC9cHkt-6s1Y';
    // =====================================================================

    const templateParams = {
      from_name: formData.name,
      from_phone: formData.phone,
      location: formData.location,
      preferred_product: formData.product || 'Not specified',
      message: formData.requirement,
      to_email: 'info@jpkinterio.com',
      subject: `Free Quote Request - ${formData.name}`
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus({
        type: 'success',
        message: `Thank you ${formData.name}! We have received your enquiry. Our team will call you shortly.`
      });

      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          location: '',
          product: '',
          requirement: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus({ type: '', message: '' });
        }, 1800);
      }, 1200);
    } catch (error) {
      console.error('Quote request failed:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or call us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full transform transition-all">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-5 rounded-t-2xl">
            <h2 className="text-2xl font-bold text-white">Get a Free Quote</h2>
            <p className="text-red-100 text-sm mt-1">Quick enquiry – we will call you back soon</p>
          </div>

          {/* Form Body */}
          <div className="p-6">
            {/* Success / Error Message */}
            {submitStatus.message && (
              <div
                className={`mb-5 p-4 rounded-xl flex items-start gap-3 text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                <span className="text-lg mt-0.5">
                  {submitStatus.type === 'success' ? '✓' : '⚠'}
                </span>
                <p>{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Row 2: Location + Preferred Product */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Location / City *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                    placeholder="Hosur, Bengaluru, Krishnagiri..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Preferred Product
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                  >
                    <option value="">Select a product (optional)</option>
                    <option value="FunderMax HPL">FunderMax HPL</option>
                    <option value="VOX Panels">VOX Panels</option>
                    <option value="Action TESA Flooring">Action TESA Flooring</option>
                    <option value="Knauf Armstrong Ceiling">Knauf Armstrong Ceiling</option>
                    <option value="Responsive Flooring">Responsive Flooring</option>
                    <option value="Vivre Panels">Vivre Panels</option>
                    <option value="Donaire Carpets">Donaire Carpets</option>
                    <option value="Jindal MLC Pipes">Jindal MLC Pipes</option>
                    <option value="Multiple / Other">Multiple / Other</option>
                  </select>
                </div>
              </div>

              {/* Full width: Requirement */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Your Requirement *
                </label>
                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition resize-none"
                  placeholder="Briefly tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-red-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Enquiry'
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