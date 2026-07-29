import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  Building2,
  Globe,
  BadgeDollarSign,
  PackageCheck,
  Copyright,
  ShieldCheck,
  Scale,
  ChevronRight,
  AlertCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const termsSections = [
  {
    id: "1",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing, browsing, or using the website of <strong>JPK Interio</strong> 
          (hereinafter referred to as “we”, “us”, or “our”), you acknowledge that you 
          have read, understood, and agree to be bound by these Terms & Conditions. 
          If you do not agree with any part of these terms, you must discontinue use 
          of this website immediately.
        </p>
        <p className="mt-3">
          These terms apply to all visitors, users, and others who access or use the 
          website, request quotations, or engage with our products and services.
        </p>
      </>
    ),
  },
  {
    id: "2",
    title: "2. About JPK Interio",
    content: (
      <p>
        JPK Interio is an authorised distributor, stockist, installation partner, 
        and turnkey project specialist for premium interior, exterior, ceiling, 
        flooring, and architectural products. We cater to both residential and 
        commercial projects across India, with primary operations based in 
        Hosur, Tamil Nadu.
      </p>
    ),
  },
  {
    id: "3",
    title: "3. Website Information",
    content: (
      <>
        <p>
          All content published on this website — including product descriptions, 
          images, specifications, colours, dimensions, and pricing — is provided 
          in good faith for general informational purposes only.
        </p>
        <p className="mt-3">
          Product specifications, availability, finishes, and prices are subject 
          to change without prior notice. We do not guarantee that the information 
          on the website is always complete, accurate, or up-to-date.
        </p>
      </>
    ),
  },
  {
    id: "4",
    title: "4. Quotations & Pricing",
    content: (
      <>
        <p>
          Any quotation shared via website enquiry forms, WhatsApp, phone, email, 
          or in-person is <strong>indicative only</strong> and does not constitute 
          a binding offer.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1.5">
          <li>Final pricing is confirmed only after site inspection, measurement, and discussion of project requirements.</li>
          <li>Quotations may vary based on transportation, taxes (GST), installation complexity, product availability, and site conditions.</li>
          <li>We reserve the right to revise or withdraw any quotation at any time before written confirmation of order.</li>
        </ul>
      </>
    ),
  },
  {
    id: "5",
    title: "5. Orders, Payments & Installation",
    content: (
      <>
        <p>
          An order is considered confirmed only after written approval from 
          JPK Interio and receipt of the agreed advance/payment as per the 
          commercial terms shared.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1.5">
          <li>Installation timelines are estimates and may vary due to site readiness, weather, logistics, manpower, or product lead times.</li>
          <li>The customer is responsible for ensuring the site is ready (civil work, electrical, etc.) before installation begins.</li>
          <li>Any additional work or material required due to site conditions will be charged extra.</li>
          <li>Payments are non-refundable once materials are ordered or work has commenced, except as specifically agreed in writing.</li>
        </ul>
      </>
    ),
  },
  {
    id: "6",
    title: "6. Intellectual Property",
    content: (
      <p>
        All text, graphics, logos, photographs, product images, layout, and other 
        content on this website are the intellectual property of JPK Interio or 
        their respective owners. You may not copy, reproduce, distribute, modify, 
        or use any content without our prior written permission.
      </p>
    ),
  },
  {
    id: "7",
    title: "7. Third-Party Brands & Trademarks",
    content: (
      <p>
        All brand names, trademarks, logos, and product names appearing on this 
        website belong to their respective owners. Their presence on our website 
        is solely for identification and authorised business representation. 
        JPK Interio does not claim ownership of any third-party trademarks.
      </p>
    ),
  },
  {
    id: "8",
    title: "8. Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, JPK Interio and its 
          directors, employees, or agents shall not be liable for any direct, 
          indirect, incidental, consequential, or special damages arising out of 
          or in connection with:
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1.5">
          <li>Your use of or inability to use this website</li>
          <li>Reliance on any information published on the website</li>
          <li>Any product, service, or installation performed by us or our partners</li>
        </ul>
        <p className="mt-3">
          Our total liability, if any, shall be limited to the amount paid by you 
          for the specific product or service giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    id: "9",
    title: "9. Product Variations",
    content: (
      <p>
        Natural variations in colour, texture, grain, and finish may occur between 
        product samples, website images, and actual delivered materials due to 
        manufacturing batches, lighting conditions, and material characteristics. 
        Such variations do not constitute a defect.
      </p>
    ),
  },
  {
    id: "10",
    title: "10. Governing Law",
    content: (
      <p>
        These Terms & Conditions shall be governed by and construed in accordance 
        with the laws of India. Any disputes arising out of or relating to these 
        terms or our services shall be subject to the exclusive jurisdiction of 
        the courts in Hosur / Krishnagiri District, Tamil Nadu.
      </p>
    ),
  },
  {
    id: "11",
    title: "11. Changes to Terms",
    content: (
      <p>
        We reserve the right to modify, update, or replace these Terms & Conditions 
        at any time without prior notice. The updated version will be effective 
        immediately upon posting on this website. Continued use of the website 
        after changes constitutes acceptance of the revised terms.
      </p>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ================= COMPACT HEADER ================= */}
      <section className="bg-gradient-to-r from-[#8B0000] to-[#C1121F] text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-10 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-white/75 mb-5">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Terms & Conditions</span>
          </nav>

          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div className="flex items-center gap-2 text-sm text-white/80 mb-3">
              <FileText size={16} />
              <span>Last Updated: 29 July 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Terms & Conditions
            </h1>

            <p className="mt-3 text-white/90 text-base sm:text-lg max-w-2xl leading-relaxed">
              Please read these terms carefully before using our website or engaging 
              our services. By continuing, you agree to the conditions below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          {/* Important Notice */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-5 sm:p-6 flex gap-4"
          >
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={22} />
            <div>
              <h2 className="font-semibold text-amber-900 text-lg">Important Notice</h2>
              <p className="mt-1.5 text-amber-800/90 text-[15px] leading-relaxed">
                Product colours, textures and dimensions may vary from website images. 
                Final quotations and installation schedules are confirmed only after 
                site inspection and project discussion with our team.
              </p>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="px-5 sm:px-7 py-5 sm:py-6">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 text-[15px] sm:text-base leading-7">
                    {section.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Box */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#8B0000] to-[#C1121F] px-5 sm:px-7 py-5">
              <h2 className="text-xl font-bold text-white">
                Questions about these Terms?
              </h2>
              <p className="mt-1 text-white/85 text-sm">
                Our team is happy to clarify any points before you place an enquiry or order.
              </p>
            </div>

            <div className="p-5 sm:p-7 grid sm:grid-cols-3 gap-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Address</p>
                  <p className="mt-0.5 text-sm text-gray-800 font-medium">
                    Hosur, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Phone</p>
                  <p className="mt-0.5 text-sm text-gray-800 font-medium">
                    +91 XXXXXXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email</p>
                  <p className="mt-0.5 text-sm text-gray-800 font-medium">
                    info@jpkinterio.com
                  </p>
                </div>
              </div>
            </div>

            <div className="px-5 sm:px-7 pb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Footer note */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
              By accessing or using this website, you acknowledge that you have read, 
              understood, and agree to abide by these Terms & Conditions. 
              JPK Interio reserves the right to update these terms at any time.
            </p>
            <p className="mt-4 text-xs text-gray-400">
              © 2019–2026 JPK Interio. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;