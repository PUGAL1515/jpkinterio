import React, { useState } from 'react';

const ActionTesa = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSection, setActiveSection] = useState('products'); // 'products' or product name

  // All Product Data
  const products = [
   {
  id: 'mdf',
  name: 'MDF Board',
  shortName: 'MDF',
  description: 'Medium Density Fiberboard - Versatile, smooth surface board ideal for furniture, interiors, and decorative applications.',
  fullDescription: `Medium Density Fiberboard is an excellent choice for making modern-age furniture. It has a better resistance against temperature change and humidity than solid wood and ply. A lighter and more durable Engineering Wood option is actually ideal to produce price-less furniture. Action TESA uses German Technology and Hard Wood precisely to manufacture MDF boards. With its homogenous structure and consistent quality, the Action TESA MDF board has a unique edge over available products in the marketplace.

Interior and Exterior Grade MDF
Action TESA produces Interior and Exterior Grade MDF boards. They are engineered to meet the vivid needs of customers and remain great in changing Indian weather. They are resistant to termites, borers, fungus and moisture. They are eco-friendly and a perfect choice to produce quality furniture.

Choose CARB Certified, E1 & E2 grade Action TESA MDF board
Emission classes E1 and E2 were created by European Standard EN 13986 for use in construction where formaldehyde-containing resins have been added to products and, most importantly, it is a necessary term when organizations export products to European nations. Action TESA manufactures the necessary CARB-certified EO, E1 & E2 quality MDF boards.`,
  features: [
    'Better resistance against temperature change and humidity',
    'Lighter and more durable than solid wood and ply',
    'German Technology with Hard Wood manufacturing',
    'Homogenous structure with consistent quality',
    'Termite, borer, fungus and moisture resistant',
    'Eco-friendly and CARB certified',
    'E1 & E2 grade quality MDF boards'
  ],
  applications: [
    'Kitchen Shutters',
    'Wall Paneling',
    'Furniture',
    'Fixtures',
    'Modular Kitchen',
    'Wardrobes',
    'Decorative Display Panels',
    'Door manufacturing',
    'Shoe Heel & lasts',
    'Railway Cushion Base'
  ],
  grades: ['CARB Certified EO', 'E1 Grade', 'E2 Grade'],
  types: ['Interior Grade', 'Exterior Grade'],
  thickness: ['2.5mm', '3mm', '4mm', '6mm', '9mm', '12mm', '15mm', '18mm', '25mm'],
  sizes: ['6x3 ft', '7x4 ft', '8x4 ft', '8x6 ft'],
  images: [
    '/images/products/actiontesa/mdf1.webp',
    '/images/products/actiontesa/mdf2.webp',
    '/images/products/actiontesa/mdf3.webp'
  ],
  bgColor: 'from-amber-600 to-amber-800',
  icon: '🪵'
},
   {
  id: 'abraze',
  name: 'Abraze Board',
  shortName: 'Abraze',
  description: 'Super Scratch Resistant Pre-Laminated MDF Board with 999+ revolutions abrasion value - a cost-effective alternative to stone and granite.',
  fullDescription: `Sick of Faded Designs? Choose ABRAZE with 999+ enhanced ABRAZE Value. Ordinary laminate boards disappoint you with low abrasion values (150–450 revolutions), exposing your furniture to wear and tear. Embrace Action TESA ABRAZE, a Super Scratch Resistant Pre-Laminated MDF Board boasting an unbeatable abrasion value of 999+ revolutions, ensuring lasting aesthetics.

Beyond Scratch Resistance: Borer and Termite Protection

ABRAZE doesn't stop at durability; it's borer and termite-resistant, offering comprehensive protection. More than an upgrade, it's a cost-effective alternative to stone and granite, making it the preferred choice for users and manufacturers.

ABRAZE – Recrafting Excellence

Don't settle for the ordinary – Own the extraordinary with Action TESA ABRAZE. Affordable, durable, and visually stunning, ABRAZE sets a new standard for laminate boards.

Upgrade your furniture, choose ABRAZE, and let your style bloom.`,
  features: [
    '999+ revolutions abrasion value - unbeatable scratch resistance',
    'Borer and termite resistant',
    'Cost-effective alternative to stone and granite',
    'Super scratch resistant pre-laminated MDF board',
    'Ensures lasting aesthetics',
    'Affordable and durable'
  ],
  applications: [
    'Office Furniture',
    'Residential Furniture',
    'Cafeteria',
    'Kitchen',
    'Shutters',
    'Desk',
    'Hospital'
  ],
  thickness: ['6mm', '9mm', '12mm', '15mm', '18mm'],
  sizes: ['8x4 ft', '8x6 ft'],
  images: [
    '/images/products/actiontesa/Abraze.png',
    '/images/products/actiontesa/Abraze1.png',
    '/images/products/actiontesa/Abraze2.png'
  ],
  bgColor: 'from-gray-700 to-gray-900',
  icon: '🛡️'
},
    {
  id: 'particle',
  name: 'Particle Board',
  shortName: 'Particle',
  description: 'Premium engineered wood board manufactured with German technology featuring ClassiForm Chip Grading system and in-house glue for uniform quality.',
  fullDescription: `Action TESA Particle boards are manufactured with great precision using Best-of-the-Breed technology. The process includes many checks just to make sure that output will be perfect. Even the Glue used for binding is produced in-house to ensure uniform quality, in each & every lot.

Be it the ClassiForm Chip Grading system, the most modern Drying System, Sanding, Calibration, Smooth finishing, or the Pre-lamination process, all the steps are monitored by a highly qualified team.

Interior and Exterior Grade Particle Board

Action TESA produces both i.e. the Interior and Exterior Grade boards. They are engineered to meet the vivid needs of customers and remain great in the changing Indian weather.

Choose CARB Certified, E1 & E2 grade Action TESA Particleboard

Emission classes E1 and E2 were created by European Standard EN 13986 for use in construction where formaldehyde-containing resins have been added to products and, most importantly, it is a necessary term when organizations export products to the European Union.

Highlights

• Dome (Digital Optimum Moisture Equilibrium) – Moisture content Control during production, less moisture absorption (Dimensional Stability), Superior Strength, Surface Finish

• Class former Technology – Perfect Gradation of particles for better screw holding capacity & no warp age

• Truth Calibrated Panel (±5%) – Uniform Thickness across the boards, excellent laminate pasting with zero bubbles

• Zero Wastage Panel – 8 ft. x 6 ft. or 9 ft. x 6 ft. size facilitates various cut size variants

• Borer & Termite Resistance

• Ready to use Panel – cut it and fix it, huge savings in terms of raw material, time & labor cost`,
  features: [
    'Dome Technology - Digital Optimum Moisture Equilibrium for dimensional stability',
    'Class former Technology - Perfect gradation for better screw holding capacity',
    'Truth Calibrated Panel (±5%) - Uniform thickness with zero bubble lamination',
    'Zero Wastage Panel - 8x6 ft & 9x6 ft sizes for various cut sizes',
    'Borer & Termite resistant',
    'Ready to use - cut and fix, saving raw material, time & labor',
    'In-house glue production for uniform quality',
    'CARB Certified, E1 & E2 grade available'
  ],
  applications: ['Interior Furniture', 'Exterior Furniture', 'Cabinets', 'Modular Furniture', 'Shelving', 'Partition Walls'],
  grades: ['CARB Certified', 'E1 Grade', 'E2 Grade'],
  types: ['Interior Grade', 'Exterior Grade'],
  thickness: ['6mm', '9mm', '12mm', '15mm', '18mm', '25mm'],
  sizes: ['6x3 ft', '7x4 ft', '8x4 ft', '8x6 ft', '9x6 ft'],
  images: [
    '/images/products/actiontesa/particle1.jpg',
    '/images/products/actiontesa/particle2.jpg'
  ],
  bgColor: 'from-orange-600 to-orange-800',
  icon: '🔲'
},
    {
  id: 'moistmaster',
  name: 'Moist Master',
  shortName: 'Moist Master',
  description: 'High-density moisture resistant particle board (750+ kg/m³) with superior strength, borer & termite resistance, and strong screw-holding capacity.',
  fullDescription: `Presenting Moist Master (Density above 750 kg/m³) strength to withstand tough conditions. Moist Master stands tall with its moisture resistance, borer and termite resistance, and strong screw-holding capacity, making it an ideal choice—all while remaining budget-friendly.

Think twice before settling for an ordinary board—choose the Moist Master!

Key Features:

High Density (>750 kg/m³): Moist Master has a high density, providing exceptional strength and stability to your creations. Now let go all your worries regarding weak areas and experience a particle board that gives you stability beyond compare.

Borer & Termite Resistant: Moist Master's advanced resistance to borers and termites helps you protect your boards from the evils of borers and termites.

Greater Durability: Moist Master gives you more durability, ensuring that your particle board stands the test of time. Moist Master is undoubtedly the most reliable option for long-lasting furniture.

Odourless and Pleasant: Forget unpleasant odours associated with woodworking materials. Moist Master is composed to be odourless, providing you with a comfortable and pleasant working environment.

Environment Friendly: Moist Master has been created with the environment in mind, providing a green alternative without compromising on performance.

Take your woodworking game to the next level with Moist Master – a blend of strength, resilience, and environmental consciousness. Always use Moist Master and stay happy.`,
  features: [
    'High Density (>750 kg/m³) - exceptional strength and stability',
    'Borer & Termite resistant - advanced protection',
    'Greater durability - stands the test of time',
    'Odourless and pleasant working environment',
    'Environment friendly - green alternative',
    'Strong screw-holding capacity',
    'Budget-friendly premium quality'
  ],
  specifications: {
    density: '>750 Kg/m³',
    mor: '>15 N/mm²',
    moe: '>2500 N/mm²',
    ib: '>0.70 N/mm²',
    screwWithdrawalFace: '>2500 N',
    screwWithdrawalEdge: '>1500 N',
    thicknessSwelling2hrs: '<6%',
    thicknessSwelling24hrs: '<12%',
    moistureContent: '5-15%',
    thicknessTolerance: '±0.30 mm'
  },
  applications: [
    'Kitchen Shutters',
    'Office Furniture',
    'School Furniture',
    'Hospital Furniture',
    'Home Furniture',
    'Wall Paneling',
    'Fixtures',
    'Wardrobes',
    'Decorative Display Panels'
  ],
  whyChoose: [
    'Performance: Experience superior performance with enhanced strength and screw grip',
    'Protection: Safeguard your projects against termites, borers, and moisture',
    "Durability: Enjoy the longevity of your creations with Moist Master's greater durability"
  ],
  thickness: ['6mm', '9mm', '12mm', '15mm', '18mm'],
  sizes: ['8x4 ft', '8x6 ft'],
  images: [
    '/images/products/actiontesa/moist1.png',
    '/images/products/actiontesa/moist2.png',
    '/images/products/actiontesa/moist3.png'
  ],
  bgColor: 'from-blue-600 to-blue-800',
  icon: '💧'
},
    {
  id: 'hdhmr',
  name: 'HDHMR Board',
  shortName: 'HDHMR',
  description: 'High Density High Moisture Resistant board (850+ kg/m³) - tougher than plywood with German technology, ideal for extreme moist climatic conditions.',
  fullDescription: `Action TESA HDHMR is a registered trademark of Balaji Action Buildwell Pvt. Ltd. It has many characteristics which make it apparently the first choice of consumers and influencers. HDHMR characteristics include High Density, High Moisture Resistance, Borer Resistance, Termite Resistance, and a ready-to-use smooth surface.

HDHMR is manufactured using hardwood and its density is over 850 kg/m3, it has a uniform density gradient & a compact core which gives it the best routing characteristics. This is achieved by using special German Technology for MAT formation & 8 cylinders, and 18 daylight press-the 1st in India.

Action TESA HDHMR is tougher than any available plywood in the market and it is moisture resistant too, which makes it an ideal board in extremely moist climatic conditions.

Action TESA actually revolutionized the interior infrastructure industry by extending fore-stated inherent properties at a very nominal cost, thus replacing plywood rapidly across PAN India. The excellent performance of these boards has succeeded in overcoming the traditional myth regarding plywood pertaining to toughness & longevity. It is needless to mention that Action TESA HDHMR is real value for money & certainly a better option.`,
  features: [
    'High Density - over 850 kg/m³',
    'High Moisture Resistance',
    'Borer & Termite Resistant',
    'Ready-to-use smooth surface',
    'Uniform density gradient & compact core',
    'Best routing characteristics',
    'Tougher than any available plywood',
    'German Technology for MAT formation',
    'First in India - 8 cylinders & 18 daylight press',
    'Real value for money'
  ],
  applications: [
    'Cafeteria',
    'Gyms',
    'Desk & Lockers',
    'Hospital',
    'Kitchen Shutters',
    'Furniture where risk of moisture exists',
    'Door Shutters',
    'Packing Industry',
    'Partitions'
  ],
  thickness: ['6mm', '9mm', '12mm', '15mm', '18mm', '25mm'],
  sizes: ['8x4 ft', '8x6 ft'],
  images: [
    '/images/products/actiontesa/HDHMR.webp',
    '/images/products/actiontesa/HDHMR1.jpg',
    '/images/products/actiontesa/HDHMR2.jpg'
  ],
  bgColor: 'from-green-600 to-green-800',
  icon: '💪'
},
   {
  id: 'boilo',
  name: 'Boilo-BWP-FR-HDF Board',
  shortName: 'Boilo BWP',
  description: 'Boiling Water Proof & Fire Retardant HDF Board (1000+ kg/m³ density) - Born tough for kitchens, damp areas, high load bearing surfaces, and high traffic zones.',
  fullDescription: `Boilo-BWP-FR-HDF Board. Boiling Water Proof, FR is Born Tough HDF Board. It is developed to cater to specific needs of Kitchen and Damp areas. It is Fire Retardant too and tested against national and international standards to ensure better safety. Its density is above 1000 kg/m3 and makes it suitable for the interior application having wet conditions, high load bearing surfaces, high traffic and high temperature areas. Boilo is actually a great product for all seasons.

Choose from the wide range of available shades and even new colors can be made, if required. Action TESA actually revolutionized the interior infrastructure industry by extending fore stated inherent properties at a very nominal cost, thus replacing plywood rapidly across PAN India. Excellent performance of these boards has succeeded in overcoming the traditional myth regarding plywood pertaining to toughness & longevity.`,
  features: [
    'BWP - Boiling Water Proof',
    'Fire retardant property confirming to IS:5509 Standard',
    'Borer Proof',
    'Termite proof (1 Year testing Certificate from IPRITI)',
    'High Density - above 1000 kg/m3',
    'High strength - makes multi-dimensional routing and carving possible',
    'Smooth Surface - best suited for painting and polishing',
    'High surface density of 1180 kg/m3',
    'High impact resistance & high resistance to dents',
    'High paint coverage due to less surface absorption',
    'Lower glue consumption for post-lamination',
    'Low flammability – FR properties',
    'Uniform Thickness - bubble free Pre-Lamination & Post-lamination',
    'Homogenous structure - no core gaps or core overlaps',
    'Grey color - can be polished & used as coloured HDF',
    'Available in 8\'x6\' (12mm) - reduction in cutting wastage',
    'High rigidity (6 times higher than requirement of structural plywood IS:10701)',
    'High load bearing strength',
    'High bonding strength - long lasting product',
    'High internal bonding and excellent screw holding/withdrawal strength unaffected even in boiling water',
    'High Dimensional Stability - much lower water absorption, lesser thickness swelling, much lower linear expansion'
  ],
  specifications: {
    density: '1000+ kg/m³',
    surfaceDensity: '1180 kg/m³',
    standard: 'IS:5509 Standard for Fire Retardant',
    termiteProof: '1 Year testing Certificate from IPRITI',
    rigidity: '6 times higher than structural plywood IS:10701'
  },
  applications: [
    'Restroom Toilet Cubicle',
    'Thermal Insulation',
    'Load Bearing Area – Decking / Warehouse Shelves / Staircases',
    'Container Floor',
    'Truck Floor',
    'Bus Body Floor',
    'Bathroom Partition',
    'Fire Retardant Application',
    'Flooring',
    'Wall Paneling',
    'Furniture',
    'Fixtures',
    'Modular Kitchen',
    'Wardrobes',
    'Moist Area Furniture'
  ],
  thickness: ['6mm', '9mm', '12mm', '15mm', '18mm'],
  sizes: ['8x4 ft', '8x6 ft'],
  images: [
    '/images/products/actiontesa/Boilo1.jpg',
    '/images/products/actiontesa/Boilo2.jpg',
    '/images/products/actiontesa/Boilo3.jpg'
  ],
  bgColor: 'from-teal-600 to-teal-800',
  icon: '💦'
},
    {
  id: 'moistro-door',
  name: 'Moistro Door',
  shortName: 'Moistro',
  description: 'Doors with Dual Power - Moist Master core with HDHMR on all sides. High strength, lightweight, moisture resistant, and borer & termite proof.',
  fullDescription: `A new chapter in door technology begins. For the first time in India, Action TESA introduces Moistro, a breakthrough door construction that brings together strength, stability, and lightweight performance in one problem-free solution.

Developed for modern spaces where performance, durability, and finish matter equally, Moistro is built with a Moist Master core and HDHMR on all sides, delivering high strength while remaining lightweight. The HDHMR outer layers provide a smooth, even surface ideal for veneers, laminates, paint, and other finishes, ensuring consistent results.

Designed for reliable, trouble-free use, Moistro offers strong resistance to moisture, borers, and termites, along with excellent screw-holding strength, resistance to bending, and lasting stability. The ready-made door base further reduces on-site work and speeds up installation.

Moistro is not just a door. It is a smarter, stronger, and more dependable foundation for modern spaces, built to perform, built to last, and built to redefine expectations.

Built Different. Built Ahead.
Action TESA is one of India's largest manufacturers of engineered wood panel products and a brand known for bringing meaningful innovation to the interior infrastructure industry. Over the years, it has introduced industry-defining products like HDHMR, Boilo, Moist Master, amongst others that have gone on to set new benchmarks in performance, durability, and reliability. With a strong focus on technology, quality, and understanding real on-site needs, Action TESA has consistently stayed ahead of the curve. This approach is captured in its belief, "Koi Nahi Aisa" – a reflection of its commitment to creating products that truly stand apart and continue to move the industry forward.`,
  features: [
    'Moist Master core with HDHMR on all sides',
    'High strength with lightweight performance',
    'Moisture resistant – highly resistant, no swelling or warping',
    'Built-in termite protection – no external treatments needed',
    'High & uniform core density – no inconsistency or hollow gaps',
    "Long-term structural stability – doesn't weaken over time",
    "Strong & reliable screw/hinge grip – doesn't loosen over time",
    'Low maintenance',
    '150+ finishes available',
    'Smooth surface – ideal for veneers, laminates, paint & finishes',
    'Ready-made door base – reduces on-site work',
    'Excellent resistance to bending'
  ],
  comparisonTable: {
    moistureResistance: { moistro: 'Highly Resistant', ordinary: 'Swells & Warps' },
    termiteProtection: { moistro: 'Built-in Protection', ordinary: 'Requires External Treatments' },
    coreDensity: { moistro: 'High & Uniform Density', ordinary: 'Inconsistent & Hollow' },
    durability: { moistro: 'Long-term Structural Stability', ordinary: 'Weakens Over Time' },
    screwHingeGrip: { moistro: 'Strong & Reliable', ordinary: 'Loosens Over Time' },
    maintenance: { moistro: 'Low', ordinary: 'High' },
    shadeOptions: { moistro: '150+ Finishes', ordinary: 'Limited' },
    finish: { moistro: 'Smooth - Ideal For Veneers & Paint', ordinary: 'Rough & Uneven' }
  },
  applications: [
    'Residential Doors',
    'Commercial Doors',
    'Modern Spaces',
    'High Humidity Areas',
    'Premium Interiors'
  ],
  thickness: ['25mm', '30mm', '32mm'],
  sizes: [
    '78x27 inch', '78x30 inch', '78x33 inch', '78x36 inch', '78x39 inch', '78x42 inch', '78x45 inch', '78x48 inch',
    '81x27 inch', '81x30 inch', '81x33 inch', '81x36 inch', '81x39 inch', '81x42 inch', '81x45 inch', '81x48 inch',
    '84x27 inch', '84x30 inch', '84x33 inch', '84x36 inch', '84x39 inch', '84x42 inch', '84x45 inch', '84x48 inch',
    '96x27 inch', '96x30 inch', '96x33 inch', '96x36 inch', '96x39 inch', '96x42 inch', '96x45 inch', '96x48 inch'
  ],
  images: [
    '/images/products/actiontesa/door1.webp',
    '/images/products/actiontesa/door2.png',
    '/images/products/actiontesa/door3.png'
  ],
  bgColor: 'from-indigo-600 to-indigo-800',
  icon: '🚪'
},
   {
  id: 'hdf_flooring',
  name: 'HDF Laminated Flooring',
  shortName: 'HDF Flooring',
  description: 'Premium wooden flooring made of High Density Fiber (HDF) board available in 8mm & 12mm thickness with AC3, AC4 & AC5 quality versions - features unique Isometric Locking System.',
  fullDescription: `Action TESA presents a comprehensive world of choices, offering consumers a wide range of wooden Flooring that spans from cost-effective flooring options to a meticulously crafted value-added selection. Every segment is meticulously designed to meet consumer needs with utmost satisfaction.

It is needless to mention that Action TESA Flooring is made of High Density Fiber (HDF) board and available in two thicknesses, 8mm & 12mm and that is not all it is also available in AC 3, AC 4 and AC 5 quality version to suit every need.

The Construction of Laminate Flooring Has Essentially Four Layers:

HDF Laminated Flooring Composition Layer:
1. A wear-resistant surface layer: This layer comprises an aluminum oxide-coated tissue, providing laminate flooring with resistance to impact, scratches, burns, and stains. This layer is crucial for determining the lifespan of laminate flooring.
2. A printed decorative paper layer: This layer gives the flooring its decorative wood grain or patterned appearance.
3. The core: Made up of HDF (High-Density Fiberboard) available in 8mm and 12mm thicknesses.
4. Balancing paper: This layer adds balance to the construction, preventing warping.
5. All 4 profiles of Action TESA Flooring are fortified with a molten wax sealant, safeguarding against moisture seepage.

What makes Action TESA Wooden Flooring the preferred choice?

1. A uniquely designed Isometric Locking System offers an effortless CLICK mechanism for achieving a flawless fit.

2. All 4 profiles of Action TESA Flooring are fortified with a molten wax sealant, safeguarding against moisture seepage—an issue commonly observed in laminate flooring lacking such protection, resulting in edge swelling and joint weakening.

3. Made of True High Density Fiber Board

4. Action TESA Wooden Flooring is complemented by matching Accessories crafted from High Density High Moisture Resistant (HDHMR) material, providing an additional layer of protection.

5. We meet the European standard EN 13329. A Genuine AC3, AC4 & AC5 Laminate Flooring with quality abrasion resistant/wear resistant AI2O3 layer surpassing the European Standards specified for Abrasion Resistance.

6. Equipped with a 6 Cylindered Direct Pressure Laminating (DPL) Press to ensuring "Zero Bubble Lamination".

7. Revolutionary DOME Technology makes Action TESA Wooden Flooring dimensionally stable.

8. Our state-of-the-art, in-house GLUE KITCHEN guarantees optimal glue compositions with a high solid content, ensuring superior adhesive quality. With 10% more glue content, consistency is maintained, resulting in a high internal bond for enhanced product durability.`,
  features: [
    'Available in 8mm & 12mm thicknesses',
    'AC3, AC4 & AC5 quality versions to suit every need',
    'Uniquely designed Isometric Locking System - effortless CLICK mechanism',
    'Molten wax sealant on all 4 profiles - protects against moisture seepage',
    'Made of True High Density Fiber Board',
    'Matching HDHMR accessories for additional protection',
    'Meets European standard EN 13329',
    'AI2O3 layer surpassing European Standards for Abrasion Resistance',
    '6 Cylindered Direct Pressure Laminating (DPL) Press - Zero Bubble Lamination',
    'Revolutionary DOME Technology for dimensional stability',
    'In-house GLUE KITCHEN with 10% more glue content for superior adhesive quality'
  ],
  constructionLayers: [
    'Wear-resistant surface layer: Aluminum oxide-coated tissue for impact, scratch, burn & stain resistance',
    'Printed decorative paper layer: Decorative wood grain or patterned appearance',
    'Core: HDF (High-Density Fiberboard) in 8mm & 12mm thicknesses',
    'Balancing paper: Prevents warping',
    'Molten wax sealant on all 4 profiles: Safeguards against moisture seepage'
  ],
  specifications: {
    standards: 'EN 13329 European Standard',
    technology: 'Isometric Locking System, DOME Technology, DPL Press',
    accessories: 'HDHMR material',
    glue: 'In-house GLUE KITCHEN with 10% more glue content'
  },
  applications: [
    'Living rooms',
    'Bedrooms',
    'Commercial spaces',
    'Retail stores',
    'Offices',
    'Residential spaces'
  ],
  thickness: ['8mm', '12mm'],
  grades: ['AC3', 'AC4', 'AC5'],
  sizes: ['8mm thickness', '12mm thickness'],
  images: [
    '/images/products/actiontesa/laminated.jpg'
  ],
  bgColor: 'from-amber-600 to-amber-800',
  icon: '🪵'
},
    {
  id: 'highgloss',
  name: 'High Gloss Acrylic Board',
  shortName: 'High Gloss',
  description: 'Premium UV coated high gloss acrylic surface MDF board with near mirror-quality finish - ready to use, no further finishing required.',
  fullDescription: `TESA UV Boards are ready to use panels with no further finishing required on surface. Europium Decorative paper being used on the surface of Exterior Grade MDF Board & a special kind of prelamination process being adopted to make boards before UV coatings. A series of 9 layer coating being done on prelaminated boards.

Keeping pace with growth and with commitment to serve the rapidly growing interiors industry, Action TESA adds another superior interior product in its basket by introducing High Gloss Acrylic Surface MDF Boards. TESA Acrylic Faced MDF combines the look and feel of a solid surface acrylic with an ultra high gloss surface in a contemporary range of designs and effects.

All TESA Acrylic Surface Boards have a near mirror quality surface (just like a glass mirror) and are easy to install and clean. All they need is a soft, wet cloth. TESA Acrylic Boards have natural colour and unique designs. The collection includes 49 exotic designs suited for any interior and furniture design application.`,
  features: [
    'Ready to use panels - no further finishing required',
    'Europium Decorative paper on Exterior Grade MDF Board',
    'Series of 9 layer coating on prelaminated boards',
    'Near mirror-quality surface (just like a glass mirror)',
    'Ultra high gloss acrylic finish',
    'Look and feel of solid surface acrylic',
    'Easy to install and clean - just a soft, wet cloth',
    'Natural colours and unique designs',
    '49 exotic designs available',
    'Contemporary range of designs and effects'
  ],
  specifications: {
    coating: '9 layer coating',
    baseMaterial: 'Exterior Grade MDF Board',
    decorativePaper: 'Europium Decorative paper',
    finish: 'Ultra high gloss acrylic / Near mirror quality',
    designs: '49 exotic designs'
  },
  applications: [
    'Kitchen Shutters',
    'Wall Paneling',
    'Sliding Wardrobe',
    'Fixtures',
    'Modular Kitchen',
    'Furniture Panels',
    'Decorative Display Panels',
    'Product Display Units',
    'Wall Cladding',
    'Bedroom Furniture',
    'Living Room Furniture',
    'Wardrobe Shutters',
    'Household Decoration Furniture'
  ],
  thickness: ['12mm', '15mm', '18mm'],
  sizes: ['8x4 ft', '8x6 ft'],
  images: [
    '/images/products/actiontesa/high1.jpg'
  ],
  bgColor: 'from-purple-600 to-purple-800',
  icon: '✨'
},
    {
  id: 'ornamatte',
  name: 'OrnaMatte',
  shortName: 'OrnaMatte',
  description: 'Premium matte finish range with Anti-Fingerprint technology, 3H scratch resistance, and velvety smooth satin finish - where sophistication meets elegance.',
  fullDescription: `Expose yourself to OrnaMatte, a remarkable range of Matte finishes that fills you with a world of creativity and limitless possibilities. OrnaMatte is a harmonious blend of sophistication and elegance, that gives you an exquisite realm of serene peace of mind.

Key Attributes of OrnaMatte:

Anti-Fingerprint: Close your eyes and run your hand gently across OrnaMatte's surface, and then open your eyes to see a captivating spectrum of colours. As your hands feel the velvety Smooth Satin Finish, you'll be happy to find that there are no ugly fingerprints to disturb its beauty. OrnaMatte feels luxurious and also is flawless.

Surface Coating Deactivation Technology: OrnaMatte employs cutting-edge technology that takes your imagination to new heights. A diverse range of OrnaMatte shades are at your disposal. Now you have the creative freedom to design without any limitation. It's time to let the artist in you fly knowing that OrnaMatte's unique technology will turn your vision into a reality.

3H Scratch Resistance: OrnaMatte has an exceptional scratch resistance composition, offering a level of durability that makes it a winner. Its near-zero gloss level ensures that your OrnaMatte creation remains elegant and pristine, ensuring you enjoy furniture that remains so close to your heart.

Add OrnaMatte into your lifestyle and observe a world where aesthetics, functionality, and elegance resonate in unison.

OrnaMatte will elevate your designs and bring your imagination to life in the most compelling and pleasant way.`,
  features: [
    'Anti-Fingerprint - no ugly fingerprints to disturb its beauty',
    'Velvety Smooth Satin Finish - feels luxurious and flawless',
    'Surface Coating Deactivation Technology - limitless creative freedom',
    '3H Scratch Resistance - exceptional durability',
    'Near-zero gloss level - remains elegant and pristine',
    'Wide range of captivating shades',
    'Perfect blend of aesthetics, functionality, and elegance'
  ],
  applications: [
    'Kitchen Shutters',
    'Wall Paneling',
    'Sliding Wardrobe',
    'Fixtures',
    'Modular Kitchen',
    'Furniture Panels',
    'Decorative Display Panels',
    'Product Display Units',
    'Wall Cladding'
  ],
  thickness: ['12mm', '15mm', '18mm'],
  sizes: ['8x4 ft', '8x6 ft'],
  images: [
    '/images/products/actiontesa/OrnaMatte.webp',
    '/images/products/actiontesa/OrnaMatte1.webp',
    '/images/products/actiontesa/OrnaMatte2.webp'
  ],
  bgColor: 'from-slate-600 to-slate-800',
  icon: '🎨'
},
    {
  id: 'embossed',
  name: 'Embossed HDF Boards',
  shortName: 'Embossed HDF',
  description: 'HDF based wall, ceiling & furniture embellishment panel (2.3mm thickness) with embossed designs deeper than 0.6mm - wider range of 36+ designs.',
  fullDescription: `A HDF based wall, ceiling & furniture embellishment panel with a thickness of 2.3mm having Embossed designed on the surface that can be polished with stain & lacquer. Manufactured from an intricate process where HDF is pressed under very pressure with precisely etched design plates to render exotic designs. Embossed HDF can easily be pasted & nailed on to any substrate. To add a finish, a simple 2 tone polish with stain & lacquer can liven up the embossed designs.

Action Tesa Embossed on HDF sheet at its semi cure stage while other manufactured embossed designs are available on MDF sheet.

Action Tesa has more depth in Embossed HDF sheets and the depth is normally higher than 0.6mm whereas the others are just 0.2, 0.3mm. This results in a much more beautiful panel on Tesa HDF.

Action TESA HDF Embossed Panels are ideally suitable for polishing, painting, PVC film pressing, membrane pressing etc.

Action Tesa is using DOME technology so the moisture content is distributed equally in panels while other panels having high moisture content & moisture is not equally distributed, resulting more complaint. Action Tesa HDF Board which is being specially manufactured in-house with wax so that the paint consumption is much less as compared to any other panel available.

The molecular structure & IB in Tesa Panels is better than other Embossed Panels because Tesa is Embossing in semi cure (After the Mat formation) while other panels give the Pressure on surface after the MDF get completely cure thus creating destruction in molecular structure.

Action Tesa has the widest range of more than 36 Designs.`,
  features: [
    '2.3mm thickness HDF based embellishment panel',
    'Embossed depth higher than 0.6mm (others only 0.2-0.3mm)',
    'More than 36 designs - widest range available',
    'DOME technology for equal moisture distribution',
    'Semi-cure stage embossing - better molecular structure & IB',
    'In-house wax manufacturing - lower paint consumption',
    'Easily pasted & nailed to any substrate',
    'Suitable for 2 tone polish with stain & lacquer',
    'Ideal for polishing, painting, PVC film pressing, membrane pressing'
  ],
  specifications: {
    thickness: '2.3mm',
    size: '8ft x 4ft',
    coreMaterial: 'HDF (Raw Unpolished)',
    suitableForPolish: 'Dual Tone with Antique Effect / DUCO Finish / PU Finish',
    fixing: 'Similar to the way veneer is fixed'
  },
  applications: [
    'Wall Cladding',
    'Ceiling Cladding',
    'Shutter Cladding',
    'Furniture Embellishments'
  ],
  thickness: ['2.3mm'],
  sizes: ['8x4 ft'],
  images: [
    '/images/products/actiontesa/Embossed1.jpg',
    '/images/products/actiontesa/Embossed2.png'
  ],
  bgColor: 'from-stone-600 to-stone-800',
  icon: '🔨'
}
  ];

  // Product Detail Component
// Product Detail Component
const ProductDetailPage = ({ product }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Split fullDescription into paragraphs for better readability
  const descriptionParagraphs = product.fullDescription ? product.fullDescription.split('\n\n') : [product.description];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <button 
          onClick={() => setActiveSection('products')}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Products
        </button>
      </div>

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r ${product.bgColor} py-16 md:py-20 px-6 mt-4`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white">
              <div className="text-5xl mb-4">{product.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-white/90 max-w-xl">{product.description}</p>
            </div>
            <div className="flex gap-4">
              {product.types && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">{product.types.length}</div>
                  <div className="text-sm">Grades Available</div>
                </div>
              )}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white text-center">
                <div className="text-2xl font-bold">{product.images.length}+</div>
                <div className="text-sm">Product Variants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name}
                className="w-full h-96 object-contain bg-gray-100 p-4"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Image+Coming+Soon';
                }}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition ${
                    activeImageIndex === idx ? 'border-red-600 shadow-md' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-24 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/100x80?text=Image';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                Product Overview
                <span className="text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Premium Quality</span>
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-3">
                {descriptionParagraphs.map((para, idx) => (
                  <p key={idx}>{para.trim()}</p>
                ))}
              </div>
            </div>

            {/* Grades & Types Section */}
            {(product.grades || product.types) && (
              <div className="grid grid-cols-2 gap-4">
                {product.grades && (
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Certified Grades</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.grades.map((grade, idx) => (
                        <span key={idx} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {product.types && (
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Available Types</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.types.map((type, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-600 text-lg mt-0.5">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Application Areas</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Available Thickness</h3>
                <div className="flex flex-wrap gap-2">
                  {product.thickness.map((thick, idx) => (
                    <span key={idx} className="bg-red-50 text-red-700 px-2 py-1 rounded text-sm">
                      {thick}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition shadow-md">
                Get Quote
              </button>
              <button className="flex-1 border-2 border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 py-3 rounded-xl font-semibold transition">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related/Similar Products */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Explore Other Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedProduct(p);
                  setActiveSection(p.id);
                }}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition group"
              >
                <div className="text-3xl mb-2">{p.icon}</div>
                <h3 className="font-semibold text-gray-800 group-hover:text-red-600 text-sm">{p.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

  // Products Grid Component
  const ProductsGrid = () => {
    const categories = [
      { title: 'Engineered Wood Boards', products: products.filter(p => ['mdf', 'particle', 'hdhmr', 'boilo'].includes(p.id)), color: 'from-amber-500 to-orange-600' },
      { title: 'Specialty Boards', products: products.filter(p => ['abraze', 'moistmaster', 'highgloss', 'ornamatte'].includes(p.id)), color: 'from-purple-500 to-pink-600' },
      { title: 'Flooring & Doors', products: products.filter(p => ['hdf_flooring', 'moistro-door', 'embossed'].includes(p.id)), color: 'from-green-500 to-teal-600' }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20 px-6">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Action TESA</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Premium Engineered Wood Products for Modern Living
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">ISO Certified</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Eco Friendly</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Made in India</span>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      setSelectedProduct(product);
                      setActiveSection(product.id);
                    }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`h-40 bg-gradient-to-r ${product.bgColor} flex items-center justify-center relative`}>
                      <div className="text-6xl">{product.icon}</div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">{product.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.features.slice(0, 2).map((f, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            {f.split(' ').slice(0, 2).join(' ')}
                          </span>
                        ))}
                      </div>
                      <button className="w-full bg-gray-100 group-hover:bg-red-600 text-gray-700 group-hover:text-white py-2 rounded-lg font-semibold text-sm transition">
                        Explore {product.shortName}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing the Right Product?</h2>
            <p className="text-lg mb-8 text-white/90">Our experts are here to guide you through our product range</p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
              Contact Our Team
            </button>
          </div>
        </section>
      </div>
    );
  };

  // Render based on active section
  const renderContent = () => {
    if (activeSection === 'products') {
      return <ProductsGrid />;
    }
    const product = products.find(p => p.id === activeSection);
    if (product) {
      return <ProductDetailPage product={product} />;
    }
    return <ProductsGrid />;
  };

  return renderContent();
};

export default ActionTesa;