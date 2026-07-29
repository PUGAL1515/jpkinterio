import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import SocialIcons from "./components/SocialIcons.jsx";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const FundermaxIndia = lazy(() => import("./pages/FundermaxIndia.jsx"));
const AboutFundermax = lazy(() => import("./pages/AboutFundermax.jsx"));
const Reference = lazy(() => import("./pages/Reference.jsx"));
const VoxIndia = lazy(() => import("./pages/VoxIndia.jsx"));
const InteriorExterior = lazy(() => import("./pages/InteriorExterior.jsx"));
const ActionTesa = lazy(() => import("./pages/ActionTesa.jsx"));

const AboutResponsive = lazy(() => import("./pages/AboutResponsive.jsx"));
const Lvt = lazy(() => import("./pages/Lvt.jsx"));
const FlooringSegments = lazy(() => import("./pages/FlooringSegments.jsx"));
const DownloadCenter = lazy(() => import("./pages/DownloadCenter.jsx"));
const VinylFlooringCollection = lazy(() =>
  import("./pages/VinylFlooringCollection.jsx")
);

const VivrePanels = lazy(() => import("./pages/VivrePanels.jsx"));
const Donaire = lazy(() => import("./pages/Donaire.jsx"));
const KnaufCeilingSolutions = lazy(() =>
  import("./pages/KnaufCeilingSolutions.jsx")
);
const Jindal = lazy(() => import("./pages/Jindal.jsx"));

const Projects = lazy(() => import("./pages/Projects.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const Awards = lazy(() => import("./pages/Awards.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Nav />

        <main className="pt-16">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[70vh]">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-600 border-t-transparent"></div>
              </div>
            }
          >
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* About */}
              <Route path="/about" element={<About />} />

              {/* Products */}
              <Route path="/products" element={<Products />} />
              <Route
                path="/products/fundermax"
                element={<FundermaxIndia />}
              />
              <Route
                path="/products/about-fundermax"
                element={<AboutFundermax />}
              />
              <Route
                path="/products/reference"
                element={<Reference />}
              />
              <Route
                path="/products/voxindia"
                element={<VoxIndia />}
              />
              <Route
                path="/products/interior-exterior"
                element={<InteriorExterior />}
              />
              <Route
                path="/products/action-tesa"
                element={<ActionTesa />}
              />

              {/* Responsive Flooring */}
              <Route
                path="/products/responsive/project-completed"
                element={<AboutResponsive />}
              />
              <Route
                path="/products/responsive/lvt"
                element={<Lvt />}
              />
              <Route
                path="/products/responsive/flooring-segments"
                element={<FlooringSegments />}
              />
              <Route
                path="/products/responsive/download-center"
                element={<DownloadCenter />}
              />
              <Route
                path="/products/responsive/vinylflooring"
                element={<VinylFlooringCollection />}
              />

              {/* Other Products */}
              <Route
                path="/products/vivre-panels"
                element={<VivrePanels />}
              />
              <Route
                path="/products/donaire"
                element={<Donaire />}
              />
              <Route
                path="/products/knauf-ceiling-solutions"
                element={<KnaufCeilingSolutions />}
              />
              <Route
                path="/products/jindal"
                element={<Jindal />}
              />

              {/* Other Pages */}
              <Route
                path="/projects"
                element={<Projects />}
              />
              <Route
                path="/gallery"
                element={<Gallery />}
              />
              <Route
                path="/awards"
                element={<Awards />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <SocialIcons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;