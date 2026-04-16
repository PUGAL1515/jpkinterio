import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import SocialIcons from './components/SocialIcons.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import AboutFundermax from './pages/AboutFundermax.jsx';
import FundermaxIndia from './pages/FundermaxIndia.jsx';
import Reference from './pages/Reference.jsx';
import VoxIndia from './pages/VoxIndia.jsx';
import InteriorExterior from './pages/InteriorExterior.jsx';
import ActionTesa from './pages/ActionTesa.jsx';
import AboutResponsive from './pages/AboutResponsive.jsx';
import Lvt from './pages/Lvt.jsx';
import FlooringSegments from './pages/FlooringSegments.jsx';
import DownloadCenter from './pages/DownloadCenter.jsx';
import VivrePanels from './pages/VivrePanels.jsx';
import Donaire from './pages/Donaire.jsx';
import KnaufCeilingSolutions from './pages/KnaufCeilingSolutions.jsx';
import Jindal from './pages/Jindal.jsx';
import Contact from './pages/Contact.jsx';
import Products from './pages/Products.jsx';
import Projects from './pages/Projects.jsx';
import Gallery from './pages/Gallery.jsx';
import Awards from './pages/Awards.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Nav />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Products */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/fundermax" element={<FundermaxIndia />} />
            <Route path="/products/about-fundermax" element={<AboutFundermax />} />
            <Route path="/products/reference" element={<Reference />} />
            <Route path="/products/voxindia" element={<VoxIndia />} />
            <Route path="/products/interior-exterior" element={<InteriorExterior />} />
            <Route path="/products/action-tesa" element={<ActionTesa />} />

            {/* Responsive */}
            <Route path="/products/responsive/about-responsive" element={<AboutResponsive />} />
            <Route path="/products/responsive/lvt" element={<Lvt />} />
            <Route path="/products/responsive/flooring-segments" element={<FlooringSegments />} />
            <Route path="/products/responsive/download-center" element={<DownloadCenter />} />

            {/* Others */}
            <Route path="/products/vivre-panels" element={<VivrePanels />} />
            <Route path="/products/donaire" element={<Donaire />} />
            <Route path="/products/knauf-ceiling-solutions" element={<KnaufCeilingSolutions />} />
            <Route path="/products/jindal" element={<Jindal />} />

            {/* Pages */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <SocialIcons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;