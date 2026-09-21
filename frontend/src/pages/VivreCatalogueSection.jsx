// VivreCatalogueSection.jsx
import React from 'react';

const VivreCatalogueSection = ({ onViewDetails }) => {
  const catalogueProducts = [
    {
      id: 1,
      name: "VIVRE Axis",
      src: "/images/products/vivre/axis-cover.webp",
      description: "A statement in linear precision with clean lines and controlled depth.",
      longDescription: "Meet Axis — a statement in linear precision, designed for walls that thrive on rhythm and order. These 9.5 ft panels are defined by clean lines and controlled depth, creating bold yet disciplined surfaces. Crafted with high-grade PS construction.",
      features: [
        "9.5ft Linear PS Panels",
        "Vertical Alignment with Defined Ribs",
        "Seamless, Quick Installation",
        "Textured Architectural Finishes",
        "Water & Borer Proof"
      ],
      specs: {
        "Height": "9.5 ft",
        "Width": "1 ft",
        "Thickness": "Upto 10mm",
        "Coverage per panel": "9.5 sq ft",
        "Total Designs": "20",
        "Panels per package": "As per requirement"
      },
      pdfUrl: "/pdf/Vivre APEX - 9.5 ft PS Louvers for New Heights (High) 26-9-24 (1) (1) (1).pdf",
      galleryImages: [
        "/images/products/vivre/axis/axisgallery1.webp",
        "/images/products/vivre/axis/axisgallery2.webp",
        "/images/products/vivre/axis/axisgallery3.webp"
      ],
      designImages: Array.from({ length: 20 }, (_, i) => ({
        src: `/images/products/vivre/axis/axisdesign${i + 1}.webp`,
        code: String(i + 1).padStart(4, '0')
      }))
    },
    {
      id: 2,
      name: "VIVRE Forte",
      src: "/images/products/vivre/vivreforte.webp",
      description: "Refined expression of wooden textures with depth and restraint.",
      longDescription: "Meet Forte — a refined expression of wooden textures, designed as a collection that plays with depth and restraint. Spanning flat panels and louvered formats, these 9.5 ft systems bring controlled grain, balanced tones, and layered dimensionality to architectural walls. Crafted with high-grade PS construction, Forte offers the warmth of wood with the precision of engineered surfaces. From subtle neutrals to richer wood expressions, it enables seamless compositions that shift between calm planes and structured relief.",
      features: [
        "9.5ft Wooden Textured PS Panels",
        "Available in Flat Panels & Louvered Formats",
        "Seamless, Quick Installation",
        "Natural Grain with Controlled Finish",
        "Minimal Overlap, Reduced Wastage",
        "Water & Borer Proof"
      ],
      specs: {
        "Height": "8 ft x 2 ft Charcoal Panels, 9 ft x 6 in Sleek Panels, 9.5 ft x 4.75 in PS Panels",
        "Thickness": "4mm, 6mm, 12 mm",
        "Coverage per panel": "16 sq ft, 4.5 sq ft, 3.8 sq ft",
        "Total Designs": "23"
      },
      // pdfUrl: "/catalogues/vivre-forte.pdf",
      galleryImages: [
        "/images/products/vivre/forte/fortegallery1.webp",
        "/images/products/vivre/forte/fortegallery2.webp",
        "/images/products/vivre/forte/fortegallery3.webp"
      ],
      designImages: [
        { src: "/images/products/vivre/forte/8203.webp", code: "8203" },
        { src: "/images/products/vivre/forte/8204.webp", code: "8204" },
        { src: "/images/products/vivre/forte/8237.webp", code: "8237" },
        { src: "/images/products/vivre/forte/8238.webp", code: "8238" },
        { src: "/images/products/vivre/forte/8239.webp", code: "8239" },
        { src: "/images/products/vivre/forte/8240.webp", code: "8240" },
        { src: "/images/products/vivre/forte/8241.webp", code: "8241" },
        { src: "/images/products/vivre/forte/10002.webp", code: "10002" },
        { src: "/images/products/vivre/forte/10005.webp", code: "10005" },
        { src: "/images/products/vivre/forte/VAP976.webp", code: "VAP976" },
        { src: "/images/products/vivre/forte/VF601.webp", code: "VF601" },
        { src: "/images/products/vivre/forte/VF602.webp", code: "VF602" },
        { src: "/images/products/vivre/forte/VF617.webp", code: "VF617" },
        { src: "/images/products/vivre/forte/VF618.webp", code: "VF618" },
        { src: "/images/products/vivre/forte/VF621.webp", code: "VF621" },
        { src: "/images/products/vivre/forte/VF622.webp", code: "VF622" },
        { src: "/images/products/vivre/forte/VF623.webp", code: "VF623" },
        { src: "/images/products/vivre/forte/VF631.webp", code: "VF631" },
        { src: "/images/products/vivre/forte/Vf638.webp", code: "VF638" },
        { src: "/images/products/vivre/forte/VL01.webp", code: "VL01" },
        { src: "/images/products/vivre/forte/VL03.webp", code: "VL03" },
        { src: "/images/products/vivre/forte/VL04.webp", code: "VL04" },
        { src: "/images/products/vivre/forte/VL09.webp", code: "VL09" }
      ]
    },
    {
      id: 3,
      name: "VIVRE Quarry",
      src: "/images/products/vivre/quarry/Quarry-cover.webp",
      description: "Aurora Marble Texture Series with misty veins and vibrant hues.",
      longDescription: "The Quarry series unveils the Aurora collection, a visual of misty veins, vibrant hues, and golden undertones. Made from premium PS material, these 3D marble-textured panels elevate interiors with an artistic sense of luxury.",
      features: [
        "Sleek, Chiseled Marble Texture",
        "Premium PS Construction",
        "Double Foiling & Color Core",
        "Less Overlap for Seamless Finish",
        "Water, Termite & Borer Resistant"
      ],
      specs: {
        "Height": "9.5 ft",
        "Width": "6 inches (152 mm)",
        "Thickness": "upto 6mm",
        "Coverage per panel": "4.75 sq. ft",
        "Total Designs": "28+",
        "Panels per package": "10 pcs"
      },
      // pdfUrl: "/catalogues/vivre-quarry.pdf",
      
      galleryImages: [
        "/images/products/vivre/quarry/Quarrygallery1.webp",
        "/images/products/vivre/quarry/Quarrygallery2.webp",
        "/images/products/vivre/quarry/Quarrygallery3.webp"
      ],
      designImages: [
        { src: "/images/products/vivre/quarry/VQ-701.webp", code: "VQ-701" },
        { src: "/images/products/vivre/quarry/VQ-702.webp", code: "VQ-702" },
        { src: "/images/products/vivre/quarry/VQ-703.webp", code: "VQ-703" },
        { src: "/images/products/vivre/quarry/VQ-704.webp", code: "VQ-704" },
        { src: "/images/products/vivre/quarry/VQ-705.webp", code: "VQ-705" },
        { src: "/images/products/vivre/quarry/VQ-706.webp", code: "VQ-706" },
        { src: "/images/products/vivre/quarry/VQ-707.webp", code: "VQ-707" },
        { src: "/images/products/vivre/quarry/VQ-708.webp", code: "VQ-708" },
        { src: "/images/products/vivre/quarry/VQ-709.webp", code: "VQ-709" },
        { src: "/images/products/vivre/quarry/VQ-710.webp", code: "VQ-710" },
        { src: "/images/products/vivre/quarry/VQ-711.webp", code: "VQ-711" },
        { src: "/images/products/vivre/quarry/VQ-712.webp", code: "VQ-712" },
        { src: "/images/products/vivre/quarry/VQ-713.webp", code: "VQ-713" },
        { src: "/images/products/vivre/quarry/VQ-714.webp", code: "VQ-714" },
        { src: "/images/products/vivre/quarry/VQ-715.webp", code: "VQ-715" },
        { src: "/images/products/vivre/quarry/VQ-716.webp", code: "VQ-716" },
        { src: "/images/products/vivre/quarry/VQ-717.webp", code: "VQ-717" },
        { src: "/images/products/vivre/quarry/VQ-718.webp", code: "VQ-718" },
        { src: "/images/products/vivre/quarry/VQ-719.webp", code: "VQ-719" },
        { src: "/images/products/vivre/quarry/VQ-720.webp", code: "VQ-720" },
        { src: "/images/products/vivre/quarry/VQ-721.webp", code: "VQ-721" },
        { src: "/images/products/vivre/quarry/VQ-722.webp", code: "VQ-722" },
        { src: "/images/products/vivre/quarry/VQ-723.webp", code: "VQ-723" },
        { src: "/images/products/vivre/quarry/VQ-724.webp", code: "VQ-724" },
        { src: "/images/products/vivre/quarry/VQ-725.webp", code: "VQ-725" },
        { src: "/images/products/vivre/quarry/VQ-726.webp", code: "VQ-726" },
        { src: "/images/products/vivre/quarry/VQ-727.webp", code: "VQ-727" },
        { src: "/images/products/vivre/quarry/VQ-728.webp", code: "VQ-728" }
      ]
    },
    {
  id: 4,
  name: "VIVRE Adonis",
  src: "/images/products/vivre/adonis/Adonis-cover.webp",
  description: "Bold yet sophisticated 8×2 ft sculpted designer PS panels.",
  longDescription: "Bold yet sophisticated, Vivre Adonis introduces a new scale of design with 8×2 ft sculpted PS panels. These exclusive designer formats blend texture and artistry, turning walls into feature statements. Seamlessly interlocking and made from durable, high-grade polymer, Adonis elevates interior applications with precision and grandeur.",
  features: [
    "Exclusive 8×2 Designer PS Panels",
    "Sophisticated Abstract Textures",
    "Seamless, Interlocking Fit",
    "Water & Borer Resistant"
  ],
  specs: {
    "Height": "8 ft",
    "Width": "2 ft (600 mm)",
    "Thickness": "upto 5mm",
    "Coverage per panel": "16 sq ft",
    "Total Designs": "36",
    "Panels per package": "5"
  },
  // pdfUrl: "/catalogues/vivre-adonis.pdf",
  
  galleryImages: [
    "/images/products/vivre/adonis/Adonisgallery1.webp",
    "/images/products/vivre/adonis/Adonisgallery2.webp",
    "/images/products/vivre/adonis/Adonisgallery3.webp"
  ],
  designImages: [
    { src: "/images/products/vivre/adonis/8201.webp", code: "8201" },
    { src: "/images/products/vivre/adonis/8202.webp", code: "8202" },
    { src: "/images/products/vivre/adonis/8203.webp", code: "8203" },
    { src: "/images/products/vivre/adonis/8204.webp", code: "8204" },
    { src: "/images/products/vivre/adonis/8205.webp", code: "8205" },
    { src: "/images/products/vivre/adonis/8206.webp", code: "8206" },
    { src: "/images/products/vivre/adonis/8207.webp", code: "8207" },
    { src: "/images/products/vivre/adonis/8208.webp", code: "8208" },
    { src: "/images/products/vivre/adonis/8209.webp", code: "8209" },
    { src: "/images/products/vivre/adonis/8210.webp", code: "8210" },
    { src: "/images/products/vivre/adonis/8211.webp", code: "8211" },
    { src: "/images/products/vivre/adonis/8212.webp", code: "8212" },
    { src: "/images/products/vivre/adonis/8213.webp", code: "8213" },
    { src: "/images/products/vivre/adonis/8214.webp", code: "8214" },
    { src: "/images/products/vivre/adonis/8215.webp", code: "8215" },
    { src: "/images/products/vivre/adonis/8216.webp", code: "8216" },
    { src: "/images/products/vivre/adonis/8217.webp", code: "8217" },
    { src: "/images/products/vivre/adonis/8218.webp", code: "8218" },
    { src: "/images/products/vivre/adonis/8219.webp", code: "8219" },
    { src: "/images/products/vivre/adonis/8220.webp", code: "8220" },
    { src: "/images/products/vivre/adonis/8221.webp", code: "8221" },
    { src: "/images/products/vivre/adonis/8222.webp", code: "8222" },
    { src: "/images/products/vivre/adonis/8223.webp", code: "8223" },
    { src: "/images/products/vivre/adonis/8224.webp", code: "8224" },
    { src: "/images/products/vivre/adonis/8225.webp", code: "8225" },
    { src: "/images/products/vivre/adonis/8226.webp", code: "8226" },
    { src: "/images/products/vivre/adonis/8227.webp", code: "8227" },
    { src: "/images/products/vivre/adonis/8228.webp", code: "8228" },
    { src: "/images/products/vivre/adonis/8229.webp", code: "8229" },
    { src: "/images/products/vivre/adonis/8230.webp", code: "8230" },
    { src: "/images/products/vivre/adonis/8231.webp", code: "8231" },
    { src: "/images/products/vivre/adonis/8232.webp", code: "8232" },
    { src: "/images/products/vivre/adonis/8233.webp", code: "8233" },
    { src: "/images/products/vivre/adonis/8234.webp", code: "8234" },
    { src: "/images/products/vivre/adonis/8235.webp", code: "8235" },
    { src: "/images/products/vivre/adonis/8236.webp", code: "8236" }
  ]
},
{
  id: 5,
  name: "VIVRE Sculpt",
  src: "/images/products/vivre/sculpt/Sculpt-COVER.webp",

  description:
    "Precisely embossed designer panels with a tactile hand-carved look.",

  longDescription:
    "Vivre Sculpt panels are precisely embossed panels that bring artistry to the surface, quite literally. With visuals that appear etched or hand-carved, these panels feature deep tactile contours that feel as rich as they look. Designed to interlock seamlessly like tiles (but without grout), Sculpt adds emotional and material depth to any setting.",

  features: [
    "1st Time in India",
    "Precisely Embossed Panels",
    "Tactile, Hand-Carved Look",
    "Precision Interlocking",
    "Water, Termite & Borer Resistant"
  ],

  specs: {
    "Height": "8 ft",
    "Width": "12 inches (300 mm)",
    "Thickness": "Upto 6mm",
    "Coverage per panel": "8 sq. ft",
    "Total Designs": "24",
    "Panels per package": "10 pcs"
  },

  // pdfUrl: "/catalogues/vivre-sculpt.pdf",

  galleryImages: [
    "/images/products/vivre/sculpt/Sculptgallery1.webp",
    "/images/products/vivre/sculpt/Sculptgallery2.webp",
    "/images/products/vivre/sculpt/Sculptgallery3.webp",
    "/images/products/vivre/sculpt/Sculptgallery4.webp",
    "/images/products/vivre/sculpt/Sculptgallery5.webp"
  ],

  designImages: [
    { src: "/images/products/vivre/sculpt/1201.webp", code: "1201" },
    { src: "/images/products/vivre/sculpt/1202.webp", code: "1202" },
    { src: "/images/products/vivre/sculpt/1203.webp", code: "1203" },
    { src: "/images/products/vivre/sculpt/1204.webp", code: "1204" },
    { src: "/images/products/vivre/sculpt/1205.webp", code: "1205" },
    { src: "/images/products/vivre/sculpt/1206.webp", code: "1206" },
    { src: "/images/products/vivre/sculpt/1207.webp", code: "1207" },
    { src: "/images/products/vivre/sculpt/1208.webp", code: "1208" },
    { src: "/images/products/vivre/sculpt/1209.webp", code: "1209" },
    { src: "/images/products/vivre/sculpt/1210.webp", code: "1210" },
    { src: "/images/products/vivre/sculpt/1211.webp", code: "1211" },
    { src: "/images/products/vivre/sculpt/1212.webp", code: "1212" },
    { src: "/images/products/vivre/sculpt/1213.webp", code: "1213" },
    { src: "/images/products/vivre/sculpt/1214.webp", code: "1214" },
    { src: "/images/products/vivre/sculpt/1215.webp", code: "1215" },
    { src: "/images/products/vivre/sculpt/1216.webp", code: "1216" },
    { src: "/images/products/vivre/sculpt/1217.webp", code: "1217" },
    { src: "/images/products/vivre/sculpt/1218.webp", code: "1218" },
    { src: "/images/products/vivre/sculpt/1219.webp", code: "1219" },
    { src: "/images/products/vivre/sculpt/1220.webp", code: "1220" },
    { src: "/images/products/vivre/sculpt/1221.webp", code: "1221" },
    { src: "/images/products/vivre/sculpt/1222.webp", code: "1222" },
    { src: "/images/products/vivre/sculpt/1223.webp", code: "1223" },
    { src: "/images/products/vivre/sculpt/1224.webp", code: "1224" }
  ]
},
{
  id: 6,
  name: "VIVRE Acrypedia",
  src: "/images/products/vivre/acrypedia/acrypedia.webp",

  description:
    "A refined collection where gloss, metal matt and matt finishes unite into one premium acrylic surface.",

  longDescription:
    "Acrypedia is a refined expression of surface duality, where brilliance meets composure in perfect balance. Born from the luminous clarity of Acryvibe and the composed elegance of Vivasaa, Acrypedia unites Gloss, Metal Matt, and Matt finishes into one cohesive design language. Each sheet reflects visual expansion and depth, balancing radiance with restraint, smooth polish with tactile subtlety. Engineered for wardrobes, feature walls, and bespoke furniture applications, Acrypedia transforms acrylic and polymer into seamless interior statements. From reflective brilliance to muted sophistication, it builds surfaces that hold presence without excess.",

  features: [
    "Single Sheet",
    "6H Anti-Scratch Panels",
    "Anti-Finger Print",
    "1.5 mm Thickness",
    "200 Designs",
    "Available in Solid Colors, Sparkles, Marble, Pearl, Mirror, 1.5 mm & 2 mm"
  ],

  specs: {
    "Height": "8 ft",
    "Width": "4 ft (1200 mm)",
    "Thickness": "Upto 2 mm",
    "Coverage per panel": "32 sq. ft",
    "Total Designs": "200",
    "Packaging": "Single Sheet"
  },

 pdfUrl: "/pdf/Vivre AcryVibe 6H Acrylic Laminates Anti Scratch.pdf",

  galleryImages: [
    "/images/products/vivre/acrypedia/acrypediagallery1.webp",
    "/images/products/vivre/acrypedia/acrypediagallery2.webp",
    "/images/products/vivre/acrypedia/acrypediagallery3.webp"
  ],

//   designImages: []
},{
  id: 7,
  name: "VIVRE Elewood",
  src: "/images/products/vivre/Elewood/ELEWOOD-cover.webp",

  description:
    "Premium 12mm HDF timber louvers with classic wood aesthetics and double-foiled finish.",

  longDescription:
    "Step into the warmth of timber with Vivre Elewood — a sophisticated 12mm HDF louver series inspired by classic woodcraft. With its signature three-slat design, Elewood channels artisanal textures and timeless aesthetics into any space. Double-foiled for a flawless finish, each panel reflects precision and natural elegance, redefining modern interiors with the charm of classic wood.",

  features: [
    "12 mm HDF Louvers in Timber Finish",
    "Not PVC or Charcoal — Pure Wooden Core",
    "Vinyl Foiling (Front) and White Membrane (Back)",
    "Double Foiling for Seamless Finish",
    "Termite & Borer Resistant",
    "Available in Slats and Fluted Formats"
  ],

  specs: {
    "Height": "9 ft",
    "Width": "4.75 inch (122 mm)",
    "Thickness": "Upto 12 mm",
    "Coverage per panel": "3.6 sq ft",
    "Total Designs": "18",
    "Panels per package": "6 pcs"
  },

  // pdfUrl: "/catalogues/vivre-elewood.pdf",

  galleryImages: [
    "/images/products/vivre/Elewood/Elewoodgallery1.webp",
    "/images/products/vivre/Elewood/Elewoodgallery2.webp",
    "/images/products/vivre/Elewood/Elewoodgallery3.webp"
  ],

  designImages: [
  {
    src: "/images/products/vivre/Elewood/1300-(111-nogal).webp",
    code: "1300-(111-nogal)"
  },
  {
    src: "/images/products/vivre/Elewood/1300-(112-oak).webp",
    code: "1300-(112-oak)"
  },
  {
    src: "/images/products/vivre/Elewood/1300-(113-smoked-walnut).webp",
    code: "1300-(113-smoked-walnut)"
  },
  {
    src: "/images/products/vivre/Elewood/1300-(115-rift-oak).webp",
    code: "1300-(115-rift-oak)"
  },
  {
    src: "/images/products/vivre/Elewood/1300-(116-flamed-teak).webp",
    code: "1300-(116-flamed-teak)"
  },
  {
    src: "/images/products/vivre/Elewood/1300-(117-striped-teak).webp",
    code: "1300-(117-striped-teak)"
  },

  {
    src: "/images/products/vivre/Elewood/1500-(111-nogal).webp",
    code: "1500-(111-nogal)"
  },
  {
    src: "/images/products/vivre/Elewood/1500-(112-oak).webp",
    code: "1500-(112-oak)"
  },
  {
    src: "/images/products/vivre/Elewood/1500-(113-smoked-walnut).webp",
    code: "1500-(113-smoked-walnut)"
  },
  {
    src: "/images/products/vivre/Elewood/1500-(115-rift-oak).webp",
    code: "1500-(115-rift-oak)"
  },
  {
    src: "/images/products/vivre/Elewood/1500-(116-flamed-teak).webp",
    code: "1500-(116-flamed-teak)"
  },
  {
    src: "/images/products/vivre/Elewood/1500-(117-striped-teak).webp",
    code: "1500-(117-striped-teak)"
  },

  {
    src: "/images/products/vivre/Elewood/1800-(111-nogal).webp",
    code: "1800-(111-nogal)"
  },
  {
    src: "/images/products/vivre/Elewood/1800-(112-oak).webp",
    code: "1800-(112-oak)"
  },
  {
    src: "/images/products/vivre/Elewood/1800-(113-smoked-walnut).webp",
    code: "1800-(113-smoked-walnut)"
  },
  {
    src: "/images/products/vivre/Elewood/1800-(115-rift-oak).webp",
    code: "1800-(115-rift-oak)"
  },
  {
    src: "/images/products/vivre/Elewood/1800-(116-flamed-teak).webp",
    code: "1800-(116-flamed-teak)"
  },
  {
    src: "/images/products/vivre/Elewood/1800-(117-striped-teak).webp",
    code: "1800-(117-striped-teak)"
  }
]
},
{
  id: 8,
  name: "VIVRE Vivasaa",
  src: "/images/products/vivre/Vivasaa/Vivasaa-cover.webp",

  description:
    "Premium metal matt laminates with a soft-touch finish, engineered for modern interiors.",

  longDescription:
    "Vivasaa Metal Matt laminates are engineered for performance with a 1 mm polymer core and a luxe metal-finish matte surface. Built for high-traffic environments, these laminates resist heat, scratches, fingerprints, and bacteria, while offering a soft-touch finish and exceptional color depth. Suitable for wardrobes, modular furniture, feature walls, and both vertical and curved surface applications, Vivasaa delivers timeless elegance with outstanding durability.",

  features: [
    "Scratch & Heat Resistant",
    "Soft-Touch Matte Surface",
    "Anti-Fingerprint & Anti-Bacterial",
    "90° Bendable Acrylic Core",
    "Guaranteed Color Retention"
  ],

  specs: {
    "Height": "8 ft",
    "Width": "4 ft (1219 mm)",
    "Thickness": "Upto 1 mm",
    "Coverage per panel": "32 sq. ft",
    "Total Designs": "VMG - 12, VMM - 22, VMT - 15",
    "Panels per package": "Single Sheet"
  },

pdfUrl: "/pdf/Vivre VIVASAA ASA Deco Sheets E-Catalogue March 2024 (1).pdf",

  galleryImages: [
    "/images/products/vivre/Vivasaa/Vivasaagallery1.webp",
    "/images/products/vivre/Vivasaa/Vivasaagallery2.webp",
    "/images/products/vivre/Vivasaa/Vivasaagallery3.webp"
  ],

  designImages: []
},
{
  id: 9,
  name: "VIVRE Ceil Up",
  src: "/images/products/vivre/Ceilup/Ceil-up-cover.webp",

  description:
    "Premium waterproof soffit ceiling and wall panels with natural wood textures and seamless installation.",

  longDescription:
    "Vivre CEIL-UP redefines semi-exterior soffit paneling with elegance and structure. Designed for ceilings and interior walls, these 9.5 ft waterproof panels combine the warmth of natural wood textures with scratch resistance and dimensional consistency. Whether installed vertically or horizontally, CEIL-UP delivers architectural finesse with seamless finishes and timeless tones.",

  features: [
    "Sophisticated Soffit Ceiling & Wall Panels",
    "Natural Wood Textures",
    "Click System for Simple and Quick Installation",
    "Lightweight",
    "Vinyl Membrane Finish",
    "Waterproof & Scratch Resistant"
  ],

  specs: {
    "Height": "9.5 ft",
    "Width": "12 inch (300 mm)",
    "Thickness": "1.2 mm",
    "Coverage per panel": "9.5 sq. ft",
    "Total Designs": "VST - 6, VSF - 4, J-Trim - 6, H-Trim - 6, L-Trim - 6",
    "Panels per package": "10"
  },

  // pdfUrl: "/catalogues/vivre-ceil-up.pdf",

  galleryImages: [
    "/images/products/vivre/Ceilup/Ceilgallery1.webp",
    "/images/products/vivre/Ceilup/Ceilgallery2.webp",
    "/images/products/vivre/Ceilup/Ceilgallery3.webp"
  ],

 designImages: [
  {
    src: "/images/products/vivre/Ceilup/VSF-2.webp",
    code: "VSF-2"
  },
  {
    src: "/images/products/vivre/Ceilup/VSF-3.webp",
    code: "VSF-3"
  },
  {
    src: "/images/products/vivre/Ceilup/VSF-4.webp",
    code: "VSF-4"
  },
  {
    src: "/images/products/vivre/Ceilup/VSF-5.webp",
    code: "VSF-5"
  },
  {
    src: "/images/products/vivre/Ceilup/VST-1.webp",
    code: "VST-1"
  },
  {
    src: "/images/products/vivre/Ceilup/VST-2.webp",
    code: "VST-2"
  },
  {
    src: "/images/products/vivre/Ceilup/VST-3.webp",
    code: "VST-3"
  },
  {
    src: "/images/products/vivre/Ceilup/VST-4.webp",
    code: "VST-4"
  },
  {
    src: "/images/products/vivre/Ceilup/VST-5.webp",
    code: "VST-5"
  },
  {
    src: "/images/products/vivre/Ceilup/VST-6.webp",
    code: "VST-6"
  }
]
},
{
  id: 10,
  name: "VIVRE Woodness",
  src: "/images/products/vivre/woodness/Woodness-cover.webp",

  description:
    "Bold sculpted wall panels designed to create depth, texture, and architectural elegance.",

  longDescription:
    "Woodness is a collection of bold, sculpted wall panels designed to bring walls to life through form, shadow, and detail. With deep grooves, dynamic patterns, minimal joints, and a seamless finish, it's crafted with precision and built to last. A premium surface solution that's as durable as it is distinctive. Easy to install and impossible to ignore, Woodness transforms ordinary walls into architectural statements with rich textures and timeless appeal.",

  features: [
    "Deep, Sculpted Wall Design",
    "Seamless, Ready-to-Use",
    "Easy to Cut and Install",
    "Termite & Borer Proof",
    "Waterproof & Low Maintenance"
  ],

  specs: {
    "Height": "9.5 ft",
    "Width": "4.75 inches (122 mm)",
    "Thickness": "Upto 12 mm",
    "Coverage per panel": "3.8 sq. ft",
    "Total Designs": "30",
    "Panels per package": "10 pcs"
  },

  // pdfUrl: "/catalogues/vivre-woodness.pdf",

  galleryImages: [
    "/images/products/vivre/woodness/woodnessgallery1.webp",
    "/images/products/vivre/woodness/woodnessgallery2.webp",
    "/images/products/vivre/woodness/woodnessgallery3.webp"
  ],

  designImages: [
  { src: "/images/products/vivre/woodness/9101.webp", code: "9101" },
  { src: "/images/products/vivre/woodness/9102.webp", code: "9102" },
  { src: "/images/products/vivre/woodness/9103.webp", code: "9103" },
  { src: "/images/products/vivre/woodness/9104.webp", code: "9104" },
  { src: "/images/products/vivre/woodness/9105.webp", code: "9105" },
  { src: "/images/products/vivre/woodness/9106.webp", code: "9106" },
  { src: "/images/products/vivre/woodness/9107.webp", code: "9107" },
  { src: "/images/products/vivre/woodness/9108.webp", code: "9108" },
  { src: "/images/products/vivre/woodness/9109.webp", code: "9109" },
  { src: "/images/products/vivre/woodness/9110.webp", code: "9110" },
  { src: "/images/products/vivre/woodness/9111.webp", code: "9111" },
  { src: "/images/products/vivre/woodness/9112.webp", code: "9112" },
  { src: "/images/products/vivre/woodness/9113.webp", code: "9113" },
  { src: "/images/products/vivre/woodness/9114.webp", code: "9114" },
  { src: "/images/products/vivre/woodness/9115.webp", code: "9115" },
  { src: "/images/products/vivre/woodness/9116.webp", code: "9116" },
  { src: "/images/products/vivre/woodness/9117.webp", code: "9117" },
  { src: "/images/products/vivre/woodness/9118.webp", code: "9118" },
  { src: "/images/products/vivre/woodness/9119.webp", code: "9119" },
  { src: "/images/products/vivre/woodness/9120.webp", code: "9120" },
  { src: "/images/products/vivre/woodness/9121.webp", code: "9121" },
  { src: "/images/products/vivre/woodness/9122.webp", code: "9122" },
  { src: "/images/products/vivre/woodness/9123.webp", code: "9123" },
  { src: "/images/products/vivre/woodness/9124.webp", code: "9124" },
  { src: "/images/products/vivre/woodness/9125.webp", code: "9125" },
  { src: "/images/products/vivre/woodness/9126.webp", code: "9126" },
  { src: "/images/products/vivre/woodness/9127.webp", code: "9127" },
  { src: "/images/products/vivre/woodness/9128.webp", code: "9128" },
  { src: "/images/products/vivre/woodness/9129.webp", code: "9129" },
  { src: "/images/products/vivre/woodness/9130.webp", code: "9130" }
]
},
{
  id: 11,
  name: "VIVRE Splash",
  src: "/images/products/vivre/Splash/Splash-cover.webp",

  description:
    "Premium sleek coloured PS panels that bring vibrant character and modern elegance to interior walls.",

  longDescription:
    "Meet Splash — a vibrant take on sleek wall paneling, where colour becomes character. These 9.5 ft panels are designed for visual impact, offering high-grade PS construction in a wide spectrum of modern, saturated shades. From earthy neutrals to expressive hues, Splash transforms surfaces with minimal overlap and maximum personality. Built for quick installations and lasting impressions.",

  features: [
    "9.5 ft Sleek Colored PS Panels",
    "Seamless, Quick Installation",
    "Vibrant Matte Options",
    "Minimal Overlap, Less Wastage",
    "Water & Borer Proof"
  ],

  specs: {
    "Height": "9.5 ft",
    "Width": "6 inches (152 mm)",
    "Thickness": "Upto 7 mm",
    "Coverage per panel": "4.75 sq. ft",
    "Total Designs": "40",
    "Panels per package": "10 pcs"
  },

  // pdfUrl: "/catalogues/vivre-splash.pdf",

  galleryImages: [
    "/images/products/vivre/Splash/splashgallery1.webp",
    "/images/products/vivre/Splash/splashgallery2.webp",
    "/images/products/vivre/Splash/splashgallery3.webp",
    "/images/products/vivre/Splash/splashgallery4.webp",
    "/images/products/vivre/Splash/splashgallery5.webp"
  ],

 designImages: [
  { src: "/images/products/vivre/Splash/3601.webp", code: "3601" },
  { src: "/images/products/vivre/Splash/3602.webp", code: "3602" },
  { src: "/images/products/vivre/Splash/3603.webp", code: "3603" },
  { src: "/images/products/vivre/Splash/3604.webp", code: "3604" },
  { src: "/images/products/vivre/Splash/3605.webp", code: "3605" },
  { src: "/images/products/vivre/Splash/3606.webp", code: "3606" },
  { src: "/images/products/vivre/Splash/3607.webp", code: "3607" },
  { src: "/images/products/vivre/Splash/3608.webp", code: "3608" },
  { src: "/images/products/vivre/Splash/3609.webp", code: "3609" },
  { src: "/images/products/vivre/Splash/3610.webp", code: "3610" },
  { src: "/images/products/vivre/Splash/3611.webp", code: "3611" },
  { src: "/images/products/vivre/Splash/3612.webp", code: "3612" },
  { src: "/images/products/vivre/Splash/3613.webp", code: "3613" },
  { src: "/images/products/vivre/Splash/3614.webp", code: "3614" },
  { src: "/images/products/vivre/Splash/3615.webp", code: "3615" },
  { src: "/images/products/vivre/Splash/3616.webp", code: "3616" },
  { src: "/images/products/vivre/Splash/3617.webp", code: "3617" },
  { src: "/images/products/vivre/Splash/3618.webp", code: "3618" },
  { src: "/images/products/vivre/Splash/3619.webp", code: "3619" },
  { src: "/images/products/vivre/Splash/3620.webp", code: "3620" },
  { src: "/images/products/vivre/Splash/3621.webp", code: "3621" },
  { src: "/images/products/vivre/Splash/3622.webp", code: "3622" },
  { src: "/images/products/vivre/Splash/3623.webp", code: "3623" },
  { src: "/images/products/vivre/Splash/3624.webp", code: "3624" },
  { src: "/images/products/vivre/Splash/3625.webp", code: "3625" },
  { src: "/images/products/vivre/Splash/3626.webp", code: "3626" },
  { src: "/images/products/vivre/Splash/3627.webp", code: "3627" },
  { src: "/images/products/vivre/Splash/3628.webp", code: "3628" },
  { src: "/images/products/vivre/Splash/3629.webp", code: "3629" },
  { src: "/images/products/vivre/Splash/3630.webp", code: "3630" },
  { src: "/images/products/vivre/Splash/3631.webp", code: "3631" },
  { src: "/images/products/vivre/Splash/3632.webp", code: "3632" },
  { src: "/images/products/vivre/Splash/3633.webp", code: "3633" },
  { src: "/images/products/vivre/Splash/3634.webp", code: "3634" },
  { src: "/images/products/vivre/Splash/3635.webp", code: "3635" },
  { src: "/images/products/vivre/Splash/3636.webp", code: "3636" },
  { src: "/images/products/vivre/Splash/3637.webp", code: "3637" },
  { src: "/images/products/vivre/Splash/3638.webp", code: "3638" },
  { src: "/images/products/vivre/Splash/3639.webp", code: "3639" },
  { src: "/images/products/vivre/Splash/3640.webp", code: "3640" }
]
},
{
  id: 12,
  name: "VIVRE EdgeX",
  src: "/images/products/vivre/edgex/Edge-X-cover.webp",

  description:
    "India's first engraved metal-edge decorative wall panel with seamless installation and premium architectural finishes.",

  longDescription:
    "First time in India, a panel that blends engraved metal grooves with high-performance surface design — meet EdgeX. This isn't your typical fluted panel; it's a hybrid innovation where sleek metal trims and designer textures converge. With no need for carpentry-led finishing or stainless-steel add-ons, EdgeX panels come ready to install — simply interlock them and the polished, pre-embedded metallic groove reveals itself. Built to make a bold architectural statement, EdgeX sets a new standard for detail, durability, and distinction.",

  features: [
    "First Time in India",
    "Engraved Stainless Metal Edges",
    "Seamless, Ready-to-Install",
    "Quick Application",
    "100% Waterproof",
    "Termite & Borer Resistant",
    "Unique Foil and Texture Options"
  ],

  specs: {
    "Height": "8 ft",
    "Width": "12 inches (300 mm)",
    "Thickness": "Upto 6 mm",
    "Coverage per panel": "8 sq. ft",
    "Total Designs": "20",
    "Panels per package": "10 pcs"
  },

  // pdfUrl: "/catalogues/vivre-edgex.pdf",

  galleryImages: [
    "/images/products/vivre/edgex/edgex-app-2.webp",
    "/images/products/vivre/edgex/edgex-app-3.webp",
    "/images/products/vivre/edgex/edgex-app-4.webp"
  ],

  designImages: [
    { src: "/images/products/vivre/edgex/1401.webp", code: "1401" },
    { src: "/images/products/vivre/edgex/1402.webp", code: "1402" },
    { src: "/images/products/vivre/edgex/1403.webp", code: "1403" },
    { src: "/images/products/vivre/edgex/1404.webp", code: "1404" },
    { src: "/images/products/vivre/edgex/1405.webp", code: "1405" },
    { src: "/images/products/vivre/edgex/1406.webp", code: "1406" },
    { src: "/images/products/vivre/edgex/1407.webp", code: "1407" },
    { src: "/images/products/vivre/edgex/1408.webp", code: "1408" },
    { src: "/images/products/vivre/edgex/1409.webp", code: "1409" },
    { src: "/images/products/vivre/edgex/1410.webp", code: "1410" },
    { src: "/images/products/vivre/edgex/1411.webp", code: "1411" },
    { src: "/images/products/vivre/edgex/1412.webp", code: "1412" },
    { src: "/images/products/vivre/edgex/1413.webp", code: "1413" },
    { src: "/images/products/vivre/edgex/1414.webp", code: "1414" },
    { src: "/images/products/vivre/edgex/1415.webp", code: "1415" },
    { src: "/images/products/vivre/edgex/1416.webp", code: "1416" },
    { src: "/images/products/vivre/edgex/1417.webp", code: "1417" },
    { src: "/images/products/vivre/edgex/1418.webp", code: "1418" },
    { src: "/images/products/vivre/edgex/1419.webp", code: "1419" },
    { src: "/images/products/vivre/edgex/1420.webp", code: "1420" }
  ]
},
{
  id: 13,
  name: "VIVRE Flow",
  src: "/images/products/vivre/flow/Flow-cover.webp",

  description:
    "Premium parametric sculptural PS panels that create fluid architectural walls with depth, movement, and acoustic benefits.",

  longDescription:
    "Flow is crafted in parametric, sculptural designs using premium PS material. These sculptural panels create a wave-like rhythm across walls, blending acoustic benefits with striking visual movement. With multiple design options and a fluid, modern aesthetic, Flow transforms ordinary surfaces into signature architectural elements. This is where parametric design meets practical elegance, delivering seamless installation, long-lasting durability, and bold contemporary interiors.",

  features: [
    "Parametric, Sculptural Designs in High-Grade PS",
    "Seamless Hidden Interlocks",
    "Acoustic Friendly",
    "Water, Termite & Borer Resistant",
    "Low Maintenance"
  ],

  specs: {
    "Height": "8 ft",
    "Width": "10 inches (250 mm)",
    "Thickness": "Upto 20 mm",
    "Coverage per panel": "6.66 sq. ft",
    "Total Designs": "20",
    "Panels per package": "6 pcs"
  },

  // pdfUrl: "/catalogues/vivre-flow.pdf",

  galleryImages: [
    "/images/products/vivre/flow/flow-app-3.webp",
    "/images/products/vivre/flow/flow-app-4.webp",
    "/images/products/vivre/flow/flow-app-5.webp"
  ],

  designImages: [
    { src: "/images/products/vivre/flow/1301.webp", code: "1301" },
    { src: "/images/products/vivre/flow/1302.webp", code: "1302" },
    { src: "/images/products/vivre/flow/1303.webp", code: "1303" },
    { src: "/images/products/vivre/flow/1304.webp", code: "1304" },
    { src: "/images/products/vivre/flow/1305.webp", code: "1305" },
    { src: "/images/products/vivre/flow/1306.webp", code: "1306" },
    { src: "/images/products/vivre/flow/1307.webp", code: "1307" },
    { src: "/images/products/vivre/flow/1308.webp", code: "1308" },
    { src: "/images/products/vivre/flow/1309.webp", code: "1309" },
    { src: "/images/products/vivre/flow/1310.webp", code: "1310" },
    { src: "/images/products/vivre/flow/1311.webp", code: "1311" },
    { src: "/images/products/vivre/flow/1312.webp", code: "1312" },
    { src: "/images/products/vivre/flow/1313.webp", code: "1313" },
    { src: "/images/products/vivre/flow/1314.webp", code: "1314" },
    { src: "/images/products/vivre/flow/1315.webp", code: "1315" },
    { src: "/images/products/vivre/flow/1316.webp", code: "1316" },
    { src: "/images/products/vivre/flow/1317.webp", code: "1317" },
    { src: "/images/products/vivre/flow/1318.webp", code: "1318" },
    { src: "/images/products/vivre/flow/1319.webp", code: "1319" },
    { src: "/images/products/vivre/flow/1320.webp", code: "1320" }
  ]
},
{
  id: 14,
  name: "VIVRE Finesse",
  src: "/images/products/vivre/Finesse/Finesse-cover.webp",

  description:
    "Premium textured fluted PS panels with realistic wood, stone and metallic finishes inside every groove.",

  longDescription:
    "Finesse brings texture to life — both inside and out. For the first time in India, Vivre introduces fluted panels with textures not only on the surface but embedded within the grooves. Whether wood-inspired or stone-like, Finesse panels offer realism that engages both sight and touch, bringing organic materiality into every design story. Engineered with high-grade PS construction, Finesse combines elegant aesthetics with exceptional durability, making it an ideal solution for sophisticated residential and commercial interiors.",

  features: [
    "Textured Grooves (Interior & Exterior Surfaces)",
    "Wood, Stone & Metallic Finishes",
    "High-Grade PS Construction",
    "Water Resistant",
    "Quick Installation",
    "Termite & Borer Resistant"
  ],

  specs: {
    "Height": "9 ft",
    "Width": "6 inches (152 mm)",
    "Thickness": "Upto 6 mm",
    "Coverage per panel": "4.5 sq. ft",
    "Total Designs": "38",
    "Panels per package": "10 pcs"
  },

 pdfUrl: "/pdf/Vivre Finesse - 9ft x 6 inch Chiselled Sleek Panels (1).pdf",

  galleryImages: [
    "/images/products/vivre/Finesse/Finesse-Shot-2.webp",
    "/images/products/vivre/Finesse/Finesse-shot-4.webp",
    "/images/products/vivre/Finesse/Finesse-shot-5.webp"
  ],

  designImages: [
  { src: "/images/products/vivre/Finesse/VF601(Flutes).webp", code: "VF601 (Flutes)" },
  { src: "/images/products/vivre/Finesse/VF602(Flutes).webp", code: "VF602 (Flutes)" },
  { src: "/images/products/vivre/Finesse/VF603(Flutes).webp", code: "VF603 (Flutes)" },
  { src: "/images/products/vivre/Finesse/VF604(Flutes).webp", code: "VF604 (Flutes)" },
  { src: "/images/products/vivre/Finesse/VF605(Flutes).webp", code: "VF605 (Flutes)" },
  { src: "/images/products/vivre/Finesse/VF606(Flutes).webp", code: "VF606 (Flutes)" },

  { src: "/images/products/vivre/Finesse/VF607(spirals).webp", code: "VF607 (Spirals)" },
  { src: "/images/products/vivre/Finesse/VF608(Flutes).webp", code: "VF608 (Flutes)" },
  { src: "/images/products/vivre/Finesse/VF609(spirals).webp", code: "VF609 (Spirals)" },
  { src: "/images/products/vivre/Finesse/VF610(Flutes).webp", code: "VF610 (Flutes)" },
  { src: "/images/products/vivre/Finesse/VF611(spirals).webp", code: "VF611 (Spirals)" },

  { src: "/images/products/vivre/Finesse/VF612(Thick-Slats).webp", code: "VF612 (Thick Slats)" },
  { src: "/images/products/vivre/Finesse/VF613.(Thick-Slats).webp", code: "VF613 (Thick Slats)" },
  { src: "/images/products/vivre/Finesse/VF614(Thick-Slats).webp", code: "VF614 (Thick Slats)" },
  { src: "/images/products/vivre/Finesse/VF615(Thick-Slats).webp", code: "VF615 (Thick Slats)" },

  { src: "/images/products/vivre/Finesse/VF616(spirals).webp", code: "VF616 (Spirals)" },
  { src: "/images/products/vivre/Finesse/VF617(Thick-Slats).webp", code: "VF617 (Thick Slats)" },
  { src: "/images/products/vivre/Finesse/VF618(spirals).webp", code: "VF618 (Spirals)" },
  { src: "/images/products/vivre/Finesse/VF619(spirals).webp", code: "VF619 (Spirals)" },
  { src: "/images/products/vivre/Finesse/VF620(Spirals).webp", code: "VF620 (Spirals)" },
  { src: "/images/products/vivre/Finesse/VF621(spirals).webp", code: "VF621 (Spirals)" },
  { src: "/images/products/vivre/Finesse/VF622(Spirals).webp", code: "VF622 (Spirals)" },

  { src: "/images/products/vivre/Finesse/VF623(Thick-Slats).webp", code: "VF623 (Thick Slats)" },
  { src: "/images/products/vivre/Finesse/VF624(Thick-Slats).webp", code: "VF624 (Thick Slats)" },

  { src: "/images/products/vivre/Finesse/VF625(Thin-slats).webp", code: "VF625 (Thin Slats)" },
  { src: "/images/products/vivre/Finesse/VF626(Thin-slats).webp", code: "VF626 (Thin Slats)" },
  { src: "/images/products/vivre/Finesse/VF627(Thin-slats).webp", code: "VF627 (Thin Slats)" },
  { src: "/images/products/vivre/Finesse/VF628(Thin-slats).webp", code: "VF628 (Thin Slats)" },
  { src: "/images/products/vivre/Finesse/VF629(Thin-slats).webp", code: "VF629 (Thin Slats)" },
  { src: "/images/products/vivre/Finesse/VF630(Thin-slats).webp", code: "VF630 (Thin Slats)" },

  { src: "/images/products/vivre/Finesse/VF631(Peaks).webp", code: "VF631 (Peaks)" },
  { src: "/images/products/vivre/Finesse/VF632(Peaks).webp", code: "VF632 (Peaks)" },
  { src: "/images/products/vivre/Finesse/VF633(Peaks).webp", code: "VF633 (Peaks)" },

  { src: "/images/products/vivre/Finesse/Vf634(Thinnest-Slat).webp", code: "VF634 (Thinnest Slat)" },
  { src: "/images/products/vivre/Finesse/VF635(Peaks).webp", code: "VF635 (Peaks)" },
  { src: "/images/products/vivre/Finesse/Vf636(Thinnest-Slat).002.webp", code: "VF636 (Thinnest Slat)" },
  { src: "/images/products/vivre/Finesse/Vf637(Thinnest-Slat).webp", code: "VF637 (Thinnest Slat)" },
  { src: "/images/products/vivre/Finesse/Vf638(Thinnest-Slat).webp", code: "VF638 (Thinnest Slat)" }
]
},
{
  id: 15,
  name: "VIVRE Profiles",
  src: "/images/products/vivre/Profiles/Profiles.webp",

  description:
    "Premium engineered wood decorative panels with luxurious timber, marble, metal, leather and soft-touch finishes.",

  longDescription:
    "Profiles by Vivre are engineered wood panels designed for those who seek structure with soul. With finishes that emulate timber, marble, soft colour, metal, and leather series, these panels bring global design textures to Indian interiors. Built with an 18 mm European-grade HMR engineered wood core, Vivre Profiles deliver exceptional strength, moisture resistance, and long-lasting performance. Designed for luxury residences, hospitality, and elite commercial interiors, Profiles combines premium craftsmanship with timeless architectural appeal.",

  features: [
    "100% Engineered Wood Core (Not PVC / Charcoal)",
    "High-End Textured PVC Finishes",
    "European HMR Grade (High Moisture Resistance)",
    "Termite & Borer Proof",
    "Ideal for High-Traffic Interiors"
  ],

  specs: {
    "Height": "9 ft",
    "Width": "4.75 inch (122 mm)",
    "Thickness": "Upto 18 mm",
    "Coverage per panel": "3.6 sq. ft",
    "Total Designs": "30",
    "Panels per package": "4 pcs"
  },

  pdfUrl: "/pdf/Vivre Profiles II 2022 (1).pdf",

  galleryImages: [
    "/images/products/vivre/Profiles/profiles-app-2.webp",
    "/images/products/vivre/Profiles/profiles-app-3.webp",
    "/images/products/vivre/Profiles/profiles-app-5.webp",
    "/images/products/vivre/Profiles/profiles-app-6.webp",
    "/images/products/vivre/Profiles/profiles-app-4.webp"
  ],

  designImages: [
    {
      src: "/images/products/vivre/Profiles/1001-Ribbed-Slats-201-Statuario.webp",
      code: "1001 Ribbed Slats - 201 Statuario"
    },
    {
      src: "/images/products/vivre/Profiles/1001-Ribbed-Slats-202-Neo-Armani.webp",
      code: "1001 Ribbed Slats - 202 Neo Armani"
    },
    {
      src: "/images/products/vivre/Profiles/2050-2-Flutes-201-Statuario.webp",
      code: "2050-2 Flutes - 201 Statuario"
    },
    {
      src: "/images/products/vivre/Profiles/2050-2-Flutes-208-Sahara-Noir.webp",
      code: "2050-2 Flutes - 208 Sahara Noir"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-101-Dark-Teak.webp",
      code: "3771 Slats - 101 Dark Teak"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-102-Light-Teak.webp",
      code: "3771 Slats - 102 Light Teak"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-103-American-Walnut.webp",
      code: "3771 Slats - 103 American Walnut"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-105-Nordic-Oak.webp",
      code: "3771 Slats - 105 Nordic Oak"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-108-Black-Walnut.webp",
      code: "3771 Slats - 108 Black Walnut"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-109-Textured-Teak.webp",
      code: "3771 Slats - 109 Textured Teak"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-110-White-Oak.webp",
      code: "3771 Slats - 110 White Oak"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-301-Soft-Touch-Black.webp",
      code: "3771 Slats - 301 Soft Touch Black"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-302-Soft-Touch-White.webp",
      code: "3771 Slats - 302 Soft Touch White"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-303-Soft-Touch-Mint.webp",
      code: "3771 Slats - 303 Soft Touch Mint"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-304-Soft-Touch-Beige-Grey.webp",
      code: "3771 Slats - 304 Soft Touch Beige Grey"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-305-Soft-Carbon.webp",
      code: "3771 Slats - 305 Soft Carbon"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-306-Soft-Touch-Pastel-Pink.webp",
      code: "3771 Slats - 306 Soft Touch Pastel Pink"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-307-Soft-Tuscany.webp",
      code: "3771 Slats - 307 Soft Tuscany"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-308-Soft-Touch-Grigio.webp",
      code: "3771 Slats - 308 Soft Touch Grigio"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-401-Concrete.webp",
      code: "3771 Slats - 401 Concrete"
    },
    {
      src: "/images/products/vivre/Profiles/3771-Slats-601-Faux-Crocodile.webp",
      code: "3771 Slats - 601 Faux Crocodile"
    },
    {
      src: "/images/products/vivre/Profiles/3786-XL-Slats-101-Dark-Teak.webp",
      code: "3786 XL Slats - 101 Dark Teak"
    },
    {
      src: "/images/products/vivre/Profiles/3786-XL-Slats-103-American-Walnut.webp",
      code: "3786 XL Slats - 103 American Walnut"
    },
    {
      src: "/images/products/vivre/Profiles/3786-XL-Slats-201-Statuario.webp",
      code: "3786 XL Slats - 201 Statuario"
    },
    {
      src: "/images/products/vivre/Profiles/3786-XL-Slats-207-Travertine.webp",
      code: "3786 XL Slats - 207 Travertine"
    },
    {
      src: "/images/products/vivre/Profiles/3786-XL-Slats-210-Breche-De-Vendrome.webp",
      code: "3786 XL Slats - 210 Breche De Vendrome"
    },
    {
      src: "/images/products/vivre/Profiles/3993-Barcode-106-Brazilian-Rosewood.webp",
      code: "3993 Barcode - 106 Brazilian Rosewood"
    },
    {
      src: "/images/products/vivre/Profiles/5050-Peaks-201-Statuario.webp",
      code: "5050 Peaks - 201 Statuario"
    },
    {
      src: "/images/products/vivre/Profiles/5151-Flutes-101-Dark-Teak.webp",
      code: "5151 Flutes - 101 Dark Teak"
    },
    {
      src: "/images/products/vivre/Profiles/5151-Flutes-205-Saint-Laurent.webp",
      code: "5151 Flutes - 205 Saint Laurent"
    },
    {
      src: "/images/products/vivre/Profiles/5151-Flutes-403-Dark-Concrete.webp",
      code: "5151 Flutes - 403 Dark Concrete"
    }
  ]
},
{
  id: 16,
  name: "VIVRE AluClad",

  src: "/images/products/vivre/AluClad/Aluclad-cover.webp",

  description:
    "India's first dual-layer reinforced Aluminium Composite Louver system for premium interior and exterior cladding.",

  longDescription:
    "Redefining cladding, Vivre AluClad is India's first dual-layer reinforced Aluminium Composite Louver system. Built for extreme durability and wrapped in true-wood vinyl foils, these panels bring unmatched strength and natural aesthetics to both interiors and exteriors. Available in louvered and lap siding formats, AluClad delivers superior weather resistance, premium aesthetics, and long-lasting performance for modern architectural applications.",

  features: [
    "Dual-Layer Reinforced Aluminium Composite Louvers",
    "Authentic Timber Foil Finish",
    "100% Weatherproof",
    "European-Grade Durability",
    "Available in Louvers & Lap Siding Formats"
  ],

  specs: {
    "AX Series":
      "9 ft × 5.35 inches (136 mm) | Upto 20 mm | 4 sq.ft | 3 Designs | 4 Panels",
    "AY Series":
      "9 ft × 4.5 inches (115 mm) | Upto 14.5 mm | 3.4 sq.ft | 4 Designs | 4 Panels",
    "AZ Series":
      "9 ft × 4.5 inches (115 mm) | Upto 14.5 mm | 3.4 sq.ft | 5 Designs | 4 Panels",
    "AW Series":
      "9 ft × 4.5 inches (115 mm) | Upto 16 mm | 3.4 sq.ft | 5 Designs | 4 Panels",
    "L-Profile":
      "9 ft × 22 inches (17 mm) | Upto 2 mm | All Series | Pack of 40",
    "VPEX Series":
      "9 ft × 8.62 inches (219 mm) | Upto 26 mm | 6.46 sq.ft | 3 Designs | 4 Panels"
  },

  // pdfUrl: "/catalogues/vivre-aluclad.pdf",

  galleryImages: [
    "/images/products/vivre/AluClad/Aluclad-app-2.webp",
    "/images/products/vivre/AluClad/Aluclad-app-3.webp",
    "/images/products/vivre/AluClad/Aluclad-app-5.webp"
  ],

  designImages: [
    {
      src: "/images/products/vivre/AluClad/AW-09-(Siberian-Pine).webp",
      code: "AW-09 (Siberian Pine)"
    },
    {
      src: "/images/products/vivre/AluClad/AW-10-(Golden-Oak).webp",
      code: "AW-10 (Golden Oak)"
    },
    {
      src: "/images/products/vivre/AluClad/AW-11-(Natural-Teak).webp",
      code: "AW-11 (Natural Teak)"
    },
    {
      src: "/images/products/vivre/AluClad/AW12-Planked-walnut-siding-board.webp",
      code: "AW12 (Planked Walnut Siding Board)"
    },
    {
      src: "/images/products/vivre/AluClad/AW13-Natural-Oak-siding-board.webp",
      code: "AW13 (Natural Oak Siding Board)"
    },
    {
      src: "/images/products/vivre/AluClad/AX-06-(Planked-Walnut).webp",
      code: "AX-06 (Planked Walnut)"
    },
    {
      src: "/images/products/vivre/AluClad/AX-07-(Golden-Oak).webp",
      code: "AX-07 (Golden Oak)"
    },
    {
      src: "/images/products/vivre/AluClad/AX-08-(Super-Black).webp",
      code: "AX-08 (Super Black)"
    },
    {
      src: "/images/products/vivre/AluClad/AY19-Latin-Walnut-5-slats.webp",
      code: "AY19 (Latin Walnut - 5 Slats)"
    },
    {
      src: "/images/products/vivre/AluClad/AY20-Planked-walnut-5-slats.webp",
      code: "AY20 (Planked Walnut - 5 Slats)"
    },
    {
      src: "/images/products/vivre/AluClad/AY21-Golden-Oak-5-slats.webp",
      code: "AY21 (Golden Oak - 5 Slats)"
    },
    {
      src: "/images/products/vivre/AluClad/AY22-Nogal-5-slats.webp",
      code: "AY22 (Nogal - 5 Slats)"
    },
    {
      src: "/images/products/vivre/AluClad/AZ14-Planked-walnut-3-slat-green.webp",
      code: "AZ14 (Planked Walnut - 3 Slat Green)"
    },
    {
      src: "/images/products/vivre/AluClad/AZ15-Golden-oak-3-slat-green.webp",
      code: "AZ15 (Golden Oak - 3 Slat Green)"
    },
    {
      src: "/images/products/vivre/AluClad/AZ16-Nogal-3-slat-orange.webp",
      code: "AZ16 (Nogal - 3 Slat Orange)"
    },
    {
      src: "/images/products/vivre/AluClad/AZ17-Latin-walnut-3-slat-orange.webp",
      code: "AZ17 (Latin Walnut - 3 Slat Orange)"
    },
    {
      src: "/images/products/vivre/AluClad/AZ18-Natural-Oak-3-slat-orange.webp",
      code: "AZ18 (Natural Oak - 3 Slat Orange)"
    }
  ]
},
{
  id: 17,

  name: "VIVRE Louvers OG",

  src: "/images/products/vivre/LouversOG/Louvers-OG-cover.webp",

  description:
    "The original and ultimate high-grade PS louver collection with timeless grooves and contemporary finishes.",

  longDescription:
    "The original and ultimate louver series, Louvers OG unifies three iconic catalogues — Louvers, Louvers 2, and Archi Louvers — into one master collection. Crafted from high-grade Polystyrene (PS) and designed with timeless grooves, bold woodgrain finishes, and contemporary detailing, every panel reflects years of design evolution. Engineered for seamless installation and long-lasting durability, Louvers OG delivers premium aesthetics for modern interior wall paneling.",

  features: [
    "100% High-Grade Polystyrene",
    "Seamless Installation",
    "Prefinished, Ready-to-Use Panels",
    "Waterproof & Termite Proof",
    "Suitable for Interior Wall Paneling"
  ],

  specs: {
    "Height": "8 ft",
    "Width": "4.75 inches (122 mm)",
    "Thickness": "Upto 12 mm",
    "Coverage per panel": "3.16 sq. ft",
    "Total Designs": "38",
    "Panels per package": "10 pcs"
  },

  pdfUrl: "/pdf/Vivre Louvers by Vivre Panels.pdf",

  galleryImages: [
    "/images/products/vivre/LouversOG/louversOG-2.webp",
    "/images/products/vivre/LouversOG/louversOG-4.webp",
    "/images/products/vivre/LouversOG/louversOG-5.webp"
  ],

  designImages: [
    { src: "/images/products/vivre/LouversOG/AL-2001.webp", code: "AL-2001" },
    { src: "/images/products/vivre/LouversOG/AL-2003.webp", code: "AL-2003" },
    { src: "/images/products/vivre/LouversOG/AL-2005.webp", code: "AL-2005" },
    { src: "/images/products/vivre/LouversOG/AL-2006.webp", code: "AL-2006" },
    { src: "/images/products/vivre/LouversOG/AL-2007.webp", code: "AL-2007" },
    { src: "/images/products/vivre/LouversOG/AL-2010.webp", code: "AL-2010" },
    { src: "/images/products/vivre/LouversOG/AL-2012.webp", code: "AL-2012" },
    { src: "/images/products/vivre/LouversOG/AL-2013.webp", code: "AL-2013" },
    { src: "/images/products/vivre/LouversOG/AL-2015.webp", code: "AL-2015" },
    { src: "/images/products/vivre/LouversOG/AL-2016.webp", code: "AL-2016" },
    { src: "/images/products/vivre/LouversOG/AL-2018.webp", code: "AL-2018" },
    { src: "/images/products/vivre/LouversOG/AL-2021.webp", code: "AL-2021" },
    { src: "/images/products/vivre/LouversOG/AL-2024.webp", code: "AL-2024" },
    { src: "/images/products/vivre/LouversOG/AL-2031.webp", code: "AL-2031" },
    { src: "/images/products/vivre/LouversOG/AL-2034.webp", code: "AL-2034" },
    { src: "/images/products/vivre/LouversOG/AL-2035.webp", code: "AL-2035" },
    { src: "/images/products/vivre/LouversOG/AL-2036.webp", code: "AL-2036" },

    { src: "/images/products/vivre/LouversOG/VL-01,AL-2002.webp", code: "VL-01 / AL-2002" },
    { src: "/images/products/vivre/LouversOG/VL-03.webp", code: "VL-03" },
    { src: "/images/products/vivre/LouversOG/VL-04.webp", code: "VL-04" },
    { src: "/images/products/vivre/LouversOG/VL-06.webp", code: "VL-06" },
    { src: "/images/products/vivre/LouversOG/VL-09,AL-2009.webp", code: "VL-09 / AL-2009" },
    { src: "/images/products/vivre/LouversOG/VL-14.webp", code: "VL-14" },
    { src: "/images/products/vivre/LouversOG/VL-15.webp", code: "VL-15" },
    { src: "/images/products/vivre/LouversOG/VL-18.webp", code: "VL-18" },
    { src: "/images/products/vivre/LouversOG/VL-19.webp", code: "VL-19" },
    { src: "/images/products/vivre/LouversOG/VL-25.webp", code: "VL-25" },
    { src: "/images/products/vivre/LouversOG/VL-28,AL-2028.webp", code: "VL-28 / AL-2028" },
    { src: "/images/products/vivre/LouversOG/VL-30,-AL-2030.webp", code: "VL-30 / AL-2030" },
    { src: "/images/products/vivre/LouversOG/VL-40.webp", code: "VL-40" },
    { src: "/images/products/vivre/LouversOG/VL-41.webp", code: "VL-41" },
    { src: "/images/products/vivre/LouversOG/VL-42.webp", code: "VL-42" },
    { src: "/images/products/vivre/LouversOG/VL-52.webp", code: "VL-52" },
    { src: "/images/products/vivre/LouversOG/VL-53.webp", code: "VL-53" },
    { src: "/images/products/vivre/LouversOG/VL-55.webp", code: "VL-55" },
    { src: "/images/products/vivre/LouversOG/VL-56.webp", code: "VL-56" },
    { src: "/images/products/vivre/LouversOG/VL-59.webp", code: "VL-59" }
  ]
},
{
  id: 18,

  name: "VIVRE Apex",

  src: "/images/products/vivre/apex/Apex-Cover.webp",

  description:
    "Premium 9.5 ft sleek vinyl wall panels with click-lock installation and exclusive designer moulds.",

  longDescription:
    "Meet Apex — where precision meets elegance in wall paneling. Standing tall at 9.5 ft with a streamlined 300 mm width, Apex panels bring structure, style, and effortless installation together. Featuring lightweight vinyl membrane finishes and exclusive moulds, Apex is crafted for interiors that demand both sophistication and speed. Its click system ensures hassle-free installation, while matching profile trims complete every detail with a seamless architectural finish.",

  features: [
    "9.5 ft Sleek Vinyl Panels",
    "Click System for Simple & Quick Installation",
    "Exclusive Moulds & Designs",
    "Lightweight, Durable Construction",
    "Matching Profile Trims for a Complete Look",
    "Seamless Vinyl Membrane Finish"
  ],

  specs: {
    "Height": "9.5 ft",
    "Width": "300 mm",
    "Thickness": "Upto 1.2 mm",
    "Coverage per panel": "9.5 sq. ft",
    "Panels per package": "VST - 10 Pcs, VSF - 10 Pcs"
  },

  pdfUrl: "/pdf/Vivre APEX - 9.5 ft PS Louvers for New Heights (High) 26-9-24 (1) (1) (1).pdf",

  galleryImages: [
    "/images/products/vivre/apex/apex-app-2.webp",
    "/images/products/vivre/apex/apex-app-3.webp",
    "/images/products/vivre/apex/apex-app-4.webp"
  ],

  designImages: [
    { src: "/images/products/vivre/apex/VAP-951.webp", code: "VAP-951" },
    { src: "/images/products/vivre/apex/VAP-952.webp", code: "VAP-952" },
    { src: "/images/products/vivre/apex/VAP-953.webp", code: "VAP-953" },
    { src: "/images/products/vivre/apex/VAP-954.webp", code: "VAP-954" },
    { src: "/images/products/vivre/apex/VAP-955.webp", code: "VAP-955" },
    { src: "/images/products/vivre/apex/VAP-956.webp", code: "VAP-956" },
    { src: "/images/products/vivre/apex/VAP-957.webp", code: "VAP-957" },
    { src: "/images/products/vivre/apex/VAP-958.webp", code: "VAP-958" },
    { src: "/images/products/vivre/apex/VAP-959.webp", code: "VAP-959" },
    { src: "/images/products/vivre/apex/VAP-960.webp", code: "VAP-960" },
    { src: "/images/products/vivre/apex/VAP-961.webp", code: "VAP-961" },
    { src: "/images/products/vivre/apex/VAP-962.webp", code: "VAP-962" },
    { src: "/images/products/vivre/apex/VAP-963.webp", code: "VAP-963" },
    { src: "/images/products/vivre/apex/VAP-964.webp", code: "VAP-964" },
    { src: "/images/products/vivre/apex/VAP-965.webp", code: "VAP-965" },
    { src: "/images/products/vivre/apex/VAP-966.webp", code: "VAP-966" },
    { src: "/images/products/vivre/apex/VAP-967.webp", code: "VAP-967" },
    { src: "/images/products/vivre/apex/VAP-968.webp", code: "VAP-968" },
    { src: "/images/products/vivre/apex/VAP-969.webp", code: "VAP-969" },
    { src: "/images/products/vivre/apex/VAP-970.webp", code: "VAP-970" },
    { src: "/images/products/vivre/apex/VAP-971.webp", code: "VAP-971" },
    { src: "/images/products/vivre/apex/VAP-972.webp", code: "VAP-972" },
    { src: "/images/products/vivre/apex/VAP-973.webp", code: "VAP-973" },
    { src: "/images/products/vivre/apex/VAP-974.webp", code: "VAP-974" },
    { src: "/images/products/vivre/apex/VAP-975.webp", code: "VAP-975" },
    { src: "/images/products/vivre/apex/VAP-976.webp", code: "VAP-976" },
    { src: "/images/products/vivre/apex/VAP-977.webp", code: "VAP-977" },
    { src: "/images/products/vivre/apex/VAP-978.webp", code: "VAP-978" },
    { src: "/images/products/vivre/apex/VAP-979.webp", code: "VAP-979" },
    { src: "/images/products/vivre/apex/VAP-980.webp", code: "VAP-980" }
  ]
},
  ];

 return (
  <section className="bg-white py-16 px-6 md:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          FULL CATALOGUE
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Vivre Complete Collection
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover all premium designs with detailed specifications and downloadable PDFs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {catalogueProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
          >
            {/* Image Section - Fixed Height */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               loading="lazy" decoding="async" />
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                Design {product.id}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              <h3 className="font-bold text-2xl mb-3 text-black line-clamp-2 min-h-[3.2rem]">
                {product.name}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-4 mb-8">
                {product.description}
              </p>

              {/* FIXED BUTTONS SECTION - Always at bottom */}
              {/* FIXED BUTTONS SECTION - Always at bottom */}
<div className="mt-auto pt-6 border-t border-gray-100">
  <div className="flex gap-3">
    <button
      onClick={() => onViewDetails(product)}
      className={`bg-gray-900 hover:bg-black text-white py-3.5 rounded-2xl text-sm font-medium transition-all active:scale-95 ${
        product.pdfUrl ? "flex-1" : "w-full"
      }`}
    >
      View Details
    </button>

    {product.pdfUrl && (
      <a
        href={product.pdfUrl}
        download
        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-2xl text-sm font-medium flex items-center justify-center gap-2 transition-all active:scale-95"
      >
        PDF
      </a>
    )}
  </div>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default VivreCatalogueSection;