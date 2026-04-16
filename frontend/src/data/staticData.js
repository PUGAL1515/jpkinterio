const publicPath = process.env.PUBLIC_URL || '';

export const staticData = {
  home: {
    header: {
      title: 'WELCOME TO JPK INTERIO',
      description: 'JPK Interio is a trusted distributor for premium interior solutions including FunderMax HPL cladding, VOX panels, Armstrong ceiling tiles, Tesa laminate flooring, vinyl flooring, Jindal MLC pipes, Vivre panels, and Donaire carpets. Based in Hosur, we specialize in turnkey projects across South India, delivering stylish, functional, and customized spaces that inspire.',
      image: `${publicPath}/images/header01.png`
    },
    about: {
      title: 'TRANSFORMING SPACES WITH EXCELLENCE',
      description: 'JPK Interio is the foremost authorized distributor and dealer for FunderMax HPL cladding, VOX Ceiling and Wall panels, Knauf Armstrong Ceiling tiles, TESA laminate flooring, Responsive Vinyl Flooring, Jindal MLC Pipes, Vivre Panels, and Donaire Carpets. Based in Hosur, Tamil Nadu, India, we are dedicated to creating stunning and functional spaces that leave a lasting impression.',
      image: `${publicPath}/images/about-jpkinterio.png`
    },
    why_choose: {
      title: 'EXCELLENCE IN DESIGN & INSTALLATION',
      description: 'At JPK Interio, excellence drives every project. We blend aesthetics with functionality, using only premium materials for installations that last. With our expert team and customer-focused approach, your vision comes to life, whether it\'s a home, commercial space, or large-scale development.',
      features: [
        { title: 'Premium Materials', description: 'We select only the best for durability and elegance in every space.' },
        { title: 'Expert Team', description: 'Our experienced professionals ensure precise, attentive project handling.' },
        { title: 'Tailored Service', description: 'Every project is personalized for your vision, from residential to commercial.' }
      ],
      image: `${publicPath}/images/why-choose-jpkinterio.png`
    },
    numbers: [
      { value: 100, label: 'Objects', image: `${publicPath}/images/image01.png` },
      { value: 55000, label: 'Projects', image: `${publicPath}/images/image02.png` },
      { value: 3000, label: 'Completed', image: `${publicPath}/images/image03.png` }
    ],
    md_section: {
      title: 'Our Spends',
      subtitle: 'We Design and Build Your Dream Home!',
      image: `${publicPath}/images/owner-jpkinterio.png`,
      stats: [
        { value: 97, label: 'Best Performance' },
        { value: 54, label: 'High Quality' },
        { value: 68, label: 'Top Team' }
      ]
    },
    cta: {
      title: 'TRANSFORM YOUR SPACE WITH JPK INTERIO',
      description: 'Innovative designs that inspire and elevate every corner of your space.',
      image: `${publicPath}/images/cta-bg-inspire-interior.png`
    },
    customers: [
      `${publicPath}/images/customers/01.png`,
      `${publicPath}/images/customers/02.png`,
      `${publicPath}/images/customers/03.png`,
      `${publicPath}/images/customers/04.png`,
      `${publicPath}/images/customers/05.png`,
      `${publicPath}/images/customers/06.png`,
      `${publicPath}/images/customers/07.png`,
      `${publicPath}/images/customers/08.png`
    ]
  },
  about: {
    hero: {
      title: 'About Us',
      content: 'JPK Interio is the foremost authorized distributor and dealer for FunderMax HPL cladding, VOX Ceiling and Wall panels, Knauf Armstrong Ceiling tiles, TESA laminate flooring, Responsive Vinyl Flooring, Jindal MLC Pipes, Vivre Panels, and Donaire Carpets. Based in Hosur, Tamil Nadu, India, we are dedicated to creating stunning and functional spaces that leave a lasting impression.',
      image: `${publicPath}/images/about-jpkinterio.png`
    },
    // features: [
    //   { title: 'Premium Mats', description: 'We select only the best for durability and elegance in every space.' },
    //   { title: 'Trusted Installation', description: 'From planning to execution, every project is handled by experienced professionals.' },
    //   { title: 'Customized Solutions', description: 'Every space is unique, and our solutions are tailored to your requirements.' }
    // ],
    // In your staticData.js file
excellence: {
  title: 'EXCELLENCE IN DESIGN & INSTALLATION',
  description: 'At JPK Interio, excellence drives every project. We blend aesthetics with functionality, using only premium materials for installations that last. With our expert team and customer-focused approach, your vision comes to life, whether it\'s a home, commercial space, or large-scale development.',
  features: [
    { title: 'Premium Materials', description: 'We select only the best for durability and elegance in every space.' },
    { title: 'Expert Team', description: 'Our experienced professionals ensure precise, attentive project handling.' },
    { title: 'Tailored Service', description: 'Every project is personalized for your vision, from residential to commercial.' }
  ],
  image: '/images/why-choose-jpkinterio.png'  // Direct path, no publicPath needed
},
    numbers: [
      { value: 100, label: 'Objects', image: `${publicPath}/images/image01.png` },
      { value: 55000, label: 'Projects', image: `${publicPath}/images/image02.png` },
      { value: 3000, label: 'Completed', image: `${publicPath}/images/image03.png` }
    ],
    team: {
      title: 'Our Leadership',
      subtitle: 'We Design and Build Your Dream Home!',
      image: `${publicPath}/images/owner-jpkinterio.png`,
      stats: [
        { value: 97, label: 'Best Performance' },
        { value: 54, label: 'High Quality' },
        { value: 68, label: 'Top Team' }
      ]
    },
    cta: {
      label: 'WORLD-CLASS INTERIOR SOLUTIONS',
      title: 'TRANSFORM YOUR SPACE WITH JPK INTERIO',
      description: 'Innovative designs that inspire and elevate every corner of your space.',
      buttonText: 'CONTACT US',
      link: '/contact',
      image: `${publicPath}/images/cta-bg-inspire-interior.png`
    }
  },
  contact: {
    title: 'Contact Us',
    description: 'For More Details Contact Us!',
    address: '47, Taluk Office Road, Next to New Robin Stores, Opp. to Balaji theatre, Hosur, Tamil Nadu 635109',
    officeImage: `${publicPath}/images/shopimg.png`,
    phone: ['+91-80152 50234', '+91-90806 59559'],
    emails: ['jpkinterio.hsr@gmail.com', 'info@jpkinterio@gmail.com', 'contact@jpkinterio@gmail.com'],
    email: 'jpkinterio.hsr@gmail.com',
    map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.7272900428936!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7148386baf93%3A0x4d46e05154c34fee!2sJPK%20Interio%20-FunderMax%20HPL!5e0!3m2!1sen!2sin!4v1758620605122!5m2!1sen!2sin'
  },
  products: {
    hero: {
      title: 'Our Premium Product Range',
      description: 'Premium interior solutions from trusted global brands. Explore our comprehensive collection of materials and systems.',
      image: `${publicPath}/images/header02.png`
    },
    items: [
      {
        id: 1,
        name: 'Fundermax HPL',
        category: 'Cladding & Laminates',
        description: 'High-quality wood-based materials and compact laminates in a wide range of decors. Fundermax offers robust and diverse product portfolio for exterior facades and architectural interiors.',
        image: `${publicPath}/images/pngtree-contemporary-living-room-picture-image_2763138.jpg`,
        exterior: {
          title: 'Exterior Products - Fundermax',
          description: 'Highly durable exterior wall cladding solutions with rear ventilated facade system, constantly undergoing development for superior performance and aesthetic diversity.',
          sections: [
            {
              name: 'Max Exterior',
              description: 'Max Exterior from Fundermax is a highly durable exterior wall cladding product that is constantly undergoing further development to ensure both of these aspects can be depended upon. The range of rainscreen applications is becoming increasingly diverse, with continuously new dimensions in terms of nuances and variety. Now you can choose your very own individual decor for your rainscreen cladding to express your creativity. FunderMax exterior wall cladding collection stands for consistent protection and uncompromising strength. As a contemporary, cost effective rainscreen facade it is resistant in the face of all external influences.'
            },
            {
              name: 'M.look',
              description: 'M.look is an architectural facade panel with heavy duty, reinforced glass fiber, predominantly mineral, non-combustible core with a highly weather resistant decorative surface. The decorative surface is characterized above all by high scratch resistance, light fastness, impact resistance, anti-graffiti properties, ease of cleaning and hail resistance. The greatest degree of freedom and creativity in fire-resistant material for architecturally limitless ideas. m.look Exterior stands up to even the most adverse weather and environmental influences and skillfully combines the required safety with style. Suitable for all applications that must adhere to the reaction to fire classification of A2-s1,d0 according to EN 13501-1.'
            },
            {
              name: 'Other Exterior Products',
              items: ['Max Lato', 'Facade Lapsiding', 'Soffit', 'Perforation', 'Signage', 'Gates', 'Facade', 'Balcony']
            }
          ],
          features: [
            'Highly durable exterior wall cladding',
            'Rear ventilated facade system',
            'Weather resistant and impact resistant',
            'Anti-graffiti properties',
            'Fire-resistant material (A2-s1,d0 certified)',
            'Heavy-duty reinforced core',
            'High scratch resistance',
            'Easy to clean and maintain',
            'Continuous innovation in decor options',
            'Individual customization available'
          ],
          applications: [
            'Building facades',
            'Rainscreen cladding systems',
            'Exterior wall cladding',
            'Architectural exteriors',
            'Commercial buildings',
            'Residential complexes',
            'Fire-resistant applications',
            'Anti-graffiti requirements'
          ],
          images: [
            `${publicPath}/images/gallery/New-Project-1.jpg.jpeg`,
            `${publicPath}/images/gallery/New-Project-21.jpg.jpeg`,
            `${publicPath}/images/gallery/New-Project-22.jpg.jpeg`,
            `${publicPath}/images/gallery/New-Project-23.jpg.jpeg`,
            `${publicPath}/images/gallery/New-Project-24.jpg.jpeg`
          ]
        },
        interior: {
          title: 'Interior Products - Fundermax',
          description: 'Comprehensive interior solutions including Max Interior compact panels, Max Resistance for laboratories, and Star Favorit melamine panels for furniture.',
          sections: [
            {
              name: 'Max Interior',
              description: 'Max Compact panels are high-pressure laminates (HPL) in accordance with EN 438-4 Type CGS for heavy-duty areas of application (e.g., wet rooms, wall cladding, office furniture, etc.). Classification according to EN 13501-1: Euroclass D-s2, d0 (CWFT).'
            },
            {
              name: 'Max RE2',
              description: 'Max Resistance is a duromer high pressure laminate (HPL), produced in laminate presses, under high pressure at high temperature, in accordance with EN 438-4, type CGS. Due to its scientifically developed, double-cured polyurethane acrylic coating, Max Resistance stands up to the toughest tests unaffected by solvents, most acids and the harshest chemicals. Easy-to-clean and disinfect and at the same time wear and scratch resistant, this innovative material significantly extends the life cycle of your laboratory work surface.'
            },
            {
              name: 'Star Favorit',
              description: 'Fundermax Star Favorit panels are melamine resin laminated flat-pressed panels of type MFB in compliance with EN 14322 and 14323. In their standard implementation, they are produced from E1 P2 chipboard and resin-impregnated decor films. Star Favorit panels are suitable for interior applications for all types of carcass furniture in apartment and commercial buildings.',
              applications: ['Restroom Cubicles', 'Fumehoods', 'Laboratory Table Tops']
            }
          ],
          features: [
            'Max Interior panels for partitioning and wall claddings',
            'High-pressure laminates (HPL) for heavy-duty areas',
            'Max Resistance for chemical-resistant laboratory surfaces',
            'Star Favorit melamine panels for furniture',
            'Easy to clean and disinfect',
            'Moisture resistant',
            'Wear and scratch resistant',
            'Double-cured polyurethane acrylic coating',
            'E1 P2 chipboard with resin-impregnated films',
            'Suitable for wet rooms and office furniture'
          ],
          applications: [
            'Internal wall claddings',
            'Partitioning systems',
            'Furniture applications',
            'Kitchen surfaces',
            'Laboratory tabletops',
            'Office furniture',
            'Restroom cubicles',
            'Fumehoods',
            'Wet rooms',
            'Commercial interiors'
          ],
          images: [
            `${publicPath}/images/products/interior/image.png`,
            `${publicPath}/images/products/interior/image copy.png`,
            `${publicPath}/images/products/interior/image copy 2.png`,
            `${publicPath}/images/products/interior/image copy 3.png`,
            `${publicPath}/images/products/interior/image copy 4.png`,
            `${publicPath}/images/products/interior/celing/image.png`,
            `${publicPath}/images/products/interior/celing/image copy.png`,
            `${publicPath}/images/products/interior/celing/image copy 2.png`,
            `${publicPath}/images/products/interior/flooring/image.png`,
            `${publicPath}/images/products/interior/flooring/image copy.png`,
            `${publicPath}/images/products/interior/flooring/image copy 2.png`,
            `${publicPath}/images/products/interior/wall/image.png`,
            `${publicPath}/images/products/interior/wall/image copy.png`,
            `${publicPath}/images/products/interior/wall/image copy 2.png`
          ]
        },
        features: [
          'Raw chipboard and coated chipboard',
          'Laminate panels and compact panels',
          'Biofiber panels available',
          'Wide range of decors (32,000+ SKUs)',
          'Easy to process and clean',
          'Exterior and interior applications',
          'CNC customization available',
          'Rear ventilated facade system',
          'High-pressure laminates',
          'Melamine resin laminated options'
        ],
        applications: [
          'Exterior Facades',
          'Architectural Interiors',
          'Furniture',
          'Kitchen Surfaces',
          'Laboratory Workspaces',
          'Office Environments',
          'Restroom Cubicles',
          'Packaging',
          'Automotive',
          'Healthcare Facilities'
        ]
      },
      {
        id: 2,
        name: 'VOX Panels',
        category: 'Ceiling & Wall Solutions',
        description: 'Premium VOX ceiling and wall panels for superior interior aesthetics. Offers elegant design options with superior acoustic and thermal properties.',
        image: `${publicPath}/images/products/gal_1661842132-1.jpg.jpeg`,
        features: [
          'Acoustic panels',
          'Thermal insulation',
          'Lightweight design',
          'Easy installation',
          'Various finishes available',
          'Moisture resistant',
          'Fire rated options',
          'Eco-friendly materials'
        ],
        applications: [
          'Residential spaces',
          'Commercial buildings',
          'Offices',
          'Healthcare facilities',
          'Educational institutions',
          'Retail spaces'
        ]
      },
      {
        id: 3,
        name: 'Knauf Armstrong',
        category: 'Ceiling Tiles',
        description: 'Premium Armstrong ceiling tiles providing superior acoustic performance and visual appeal for any interior space.',
        image: `${publicPath}/images/products/gal_1661846409-1.jpg.jpeg`,
        features: [
          'Superior acoustic performance',
          'Fire resistant',
          'Moisture resistant',
          'Easy to maintain',
          'Various patterns available',
          'Eco-friendly composition',
          'Lightweight installation',
          'Long-lasting durability'
        ],
        applications: [
          'Office buildings',
          'Educational institutions',
          'Healthcare facilities',
          'Hospitality',
          'Retail spaces',
          'Residential areas'
        ]
      },
      {
        id: 4,
        name: 'TESA Laminate Flooring',
        category: 'Flooring Solutions',
        description: 'High-quality laminate flooring with elegant designs and superior durability. Perfect for residential and commercial applications.',
        image: '/images/products/gal_1661846437-1.jpg.jpeg',
        features: [
          'Scratch-resistant surface',
          'Water-resistant treatment',
          'UV protection',
          'Easy installation',
          'Wide color range',
          'AC rated durability',
          'Anti-slip surface',
          'Sustainable sourcing'
        ],
        applications: [
          'Living rooms',
          'Bedrooms',
          'Kitchens',
          'Commercial spaces',
          'Offices',
          'Retail stores',
          'Hospitality'
        ]
      },
      {
        id: 5,
        name: 'Responsive Vinyl Flooring',
        category: 'Vinyl & LVT Flooring',
        description: 'Modern luxury vinyl flooring combining aesthetic appeal with practical durability and comfort. Perfect for high-traffic areas.',
        image: '/images/products/gal_1681890466.jpg.jpeg',
        features: [
          'Waterproof design',
          'Comfortable underfoot',
          'Sound dampening',
          'Stain resistant',
          'Easy maintenance',
          'Wide design options',
          'Furniture glide friendly',
          'Long lifespan'
        ],
        applications: [
          'Kitchens',
          'Bathrooms',
          'Entryways',
          'Commercial spaces',
          'Healthcare facilities',
          'Hospitality venues',
          'Basement areas'
        ]
      },
      {
        id: 6,
        name: 'Jindal MLC Pipes',
        category: 'Plumbing & Infrastructure',
        description: 'Premium multi-layer composite pipes for reliable water supply and distribution. Durability and quality assured.',
        image: `${publicPath}/images/header03.png`,
        features: [
          'Multi-layer composition',
          'Corrosion resistant',
          'High pressure rating',
          'Long service life',
          'Easy installation',
          'Thermal stability',
          'NSF certified',
          'Warranty backed'
        ],
        applications: [
          'Residential water supply',
          'Commercial buildings',
          'Industrial applications',
          'Agricultural irrigation',
          'Hot water distribution',
          'Cold water systems'
        ]
      },
      {
        id: 7,
        name: 'Vivre Panels',
        category: 'Wall Coverings',
        description: 'Elegant and durable Vivre wall panels for sophisticated interior designs. Premium finishes and textures available.',
        image: '/images/products/gal_1661846452-1.jpg.jpeg',
        features: [
          'Premium finishes',
          'Textured surfaces',
          'Easy installation',
          'Hygenic design',
          'Multiple color options',
          'Stain resistant',
          'Long-lasting beauty',
          'Eco-friendly options'
        ],
        applications: [
          'Feature walls',
          'Bedrooms',
          'Living areas',
          'Commercial spaces',
          'Healthcare settings',
          'Hospitality venues'
        ]
      },
      {
        id: 8,
        name: 'Donaire Carpets',
        category: 'Carpeting Solutions',
        description: 'Premium Donaire carpets combining luxury, comfort, and durability for elegant interior spaces.',
        image: '/images/products/hotelareas.webp',
        features: [
          'Premium wool blend',
          'Stain protection treatment',
          'Anti-static properties',
          'Sound absorption',
          'Soil resistant',
          'Hypoallergenic',
          'Fade resistant colors',
          'Eco-friendly options'
        ],
        applications: [
          'Living rooms',
          'Bedrooms',
          'Office spaces',
          'Hotels and resorts',
          'Commercial buildings',
          'High-traffic areas',
          'Formal settings'
        ]
      }
    ]
  },
  projects: {
    ongoing: [
      {
        id: 1,
        title: 'Residential Complex Development',
        description: 'Modern residential complex with premium interiors featuring FunderMax HPL cladding, VOX ceiling panels, and elegant flooring solutions. Currently in construction phase with an estimated completion in Q3 2026.',
        image: '/images/gallery/New-Project-21.jpg.jpeg',
        date: '2026-01-15',
        status: 'Ongoing'
      },
      {
        id: 2,
        title: 'Commercial Office Space Renovation',
        description: 'Complete office space renovation with cutting-edge interior design, including Armstrong ceiling tiles, vinyl flooring, and modern wall coverings. Project scope includes workspace optimization and sustainable materials.',
        image: '/images/gallery/New-Project-22.jpg.jpeg',
        date: '2026-02-10',
        status: 'Ongoing'
      },
      {
        id: 3,
        title: 'Luxury Hotel Interior Upgrade',
        description: 'Five-star hotel interior enhancement project featuring premium VOX panels, Donaire carpets, and custom architectural elements. Aims to elevate guest experience with sophisticated design and premium materials.',
        image: '/images/gallery/New-Project-23.jpg.jpeg',
        date: '2025-12-20',
        status: 'Ongoing'
      },
      {
        id: 4,
        title: 'Healthcare Facility Modernization',
        description: 'State-of-the-art healthcare facility interior setup with hygienic materials, easy-clean surfaces, and accessible design. Features Knauf ceiling solutions and specialized antimicrobial flooring.',
        image: '/images/gallery/New-Project-24.jpg.jpeg',
        date: '2026-01-25',
        status: 'Ongoing'
      },
      {
        id: 5,
        title: 'Retail Shopping Mall Expansion',
        description: 'Shop mall expansion project with modern storefronts, premium finishes, and attractive display areas. Incorporates latest interior trends with FunderMax HPL and responsive vinyl flooring.',
        image: '/images/gallery/New-Project-25.jpg.jpeg',
        date: '2025-11-30',
        status: 'Ongoing'
      },
      {
        id: 6,
        title: 'Educational Institute Campus Upgrade',
        description: 'College campus interior renovation including classrooms, labs, and common areas. Strategic use of acoustic panels and sustainable materials for optimal learning environment.',
        image: '/images/gallery/New-Project-26.jpg.jpeg',
        date: '2026-02-05',
        status: 'Ongoing'
      }
    ],
    finished: [
      {
        id: 101,
        title: 'Premium Residential Villa',
        description: 'Beautifully designed residential villa featuring FunderMax HPL cladding, TESA laminate flooring, and elegant wall panels. Project successfully completed with client satisfaction exceeding expectations.',
        image: '/images/gallery/New-Project-1.jpg.jpeg',
        date: '2025-08-30',
        status: 'Finished'
      },
      {
        id: 102,
        title: 'Corporate Headquarters Office',
        description: 'State-of-the-art corporate office with modern design, efficient workspace utilization, and premium interior materials. Successfully completed with all specifications met and on-time delivery.',
        image: '/images/gallery/New-Project-30.jpg.jpeg',
        date: '2025-09-15',
        status: 'Finished'
      },
      {
        id: 103,
        title: 'Boutique Restaurant Interior',
        description: 'Sophisticated restaurant interior design featuring ambient lighting, premium finishes, and comfortable seating arrangements. Project delivered ahead of schedule with outstanding aesthetic appeal.',
        image: '/images/gallery/New-Project-31.jpg.jpeg',
        date: '2025-07-20',
        status: 'Finished'
      },
      {
        id: 104,
        title: 'Luxury Apartment Complex',
        description: 'High-end apartment complex with premium interiors, modern amenities, and sophisticated design elements. Successfully completed with all 50 units featuring premium materials and finishes.',
        image: '/images/gallery/New-Project-32.jpg.jpeg',
        date: '2025-06-10',
        status: 'Finished'
      },
      {
        id: 105,
        title: 'Modern Showroom Design',
        description: 'Innovative showroom design for product display with optimal lighting, showcase areas, and customer-friendly layout. Project completed with excellent design execution and client satisfaction.',
        image: '/images/gallery/New-Project-33.jpg.jpeg',
        date: '2025-05-25',
        status: 'Finished'
      },
      {
        id: 106,
        title: 'Residential Townhouses Project',
        description: 'Set of modern townhouses with duplex design, premium interiors, and contemporary finishes. All 20 units completed successfully with premium materials and timely delivery.',
        image: '/images/gallery/New-Project-34.jpg.jpeg',
        date: '2025-04-18',
        status: 'Finished'
      },
      {
        id: 107,
        title: 'Hospitality Resort Interior',
        description: 'Complete interior design for luxury resort featuring guest rooms, dining areas, and recreation spaces. Successfully delivered with premium finishes and resort-quality experience.',
        image: '/images/gallery/New-Project-35.jpg.jpeg',
        date: '2025-03-12',
        status: 'Finished'
      },
      {
        id: 108,
        title: 'Industrial Facility Upgrade',
        description: 'Industrial facility interior upgrade focusing on functionality, durability, and worker comfort. Project completed with specialized flooring and efficient space utilization.',
        image: '/images/gallery/New-Project-36.jpg.jpeg',
        date: '2025-02-28',
        status: 'Finished'
      }
    ]
  },
  gallery: {
    featured: [
      { id: 1, image: `${publicPath}/images/gallery/gal_1661841759.jpg.jpeg`, title: 'Interior Design' },
      { id: 2, image: `${publicPath}/images/gallery/gal_1661841778.jpg.jpeg`, title: 'Premium Finish' },
      { id: 3, image: `${publicPath}/images/gallery/gal_1661842089.jpg.jpeg`, title: 'Modern Space' },
      { id: 4, image: `${publicPath}/images/gallery/gal_1661842094.jpg.jpeg`, title: 'Elegant Design' },
      { id: 5, image: `${publicPath}/images/gallery/gal_1661842100.jpg.jpeg`, title: 'Contemporary' }
    ],
    all: [
      `${publicPath}/images/gallery/3081.webp`,
      `${publicPath}/images/gallery/3086.webp`,
      `${publicPath}/images/gallery/3565.webp`,
      '/images/gallery/3574.webp',
      '/images/gallery/3593.webp',
      '/images/gallery/3604-Harmony-Walnut.webp',
      '/images/gallery/Africa-wood-247x247-1.jpg.jpeg',
      '/images/gallery/Ash-wood-247x247-1.jpg.jpeg',
      '/images/gallery/banner1-2-1.webp',
      '/images/gallery/basalt_oak_newImg-247x247-1.webp',
      '/images/gallery/Black_SV-08_packshot_medium-247x247.jpg.webp',
      '/images/gallery/brown_oak_medium_newIMg-247x247-1.webp',
      '/images/gallery/ceilingvox-1020x529-1.jpg.webp',
      '/images/gallery/Concrete-247x247.jpg.webp',
      '/images/gallery/csm_RS_AMF_THERMATEX_Acoustic_944883f5df.jpg.jpeg',
      '/images/gallery/csm_RS_AMF_THERMATEX_Feinstratos_Micro_Complete_0587bce78a.jpg.jpeg',
      '/images/gallery/csm_RS_Armstrong_Ultima_IN_16627801a2-1.jpg.jpeg',
      '/images/gallery/csm_RS_Armstrong_Ultima_OP_IN_4f609f6dc9-1.jpg.jpeg',
      '/images/gallery/csm_RS_Armstrong_Ultima_OP_IN_4f609f6dc9.jpg.jpeg',
      '/images/gallery/csm_RS_UV-C_Luftreiniger_28b31325ab.jpg.jpeg',
      '/images/gallery/csm_RS_WoodWorks_Grille_Tegular_IN_bab22ed5d3.jpg.jpeg',
      '/images/gallery/FLC-1-267x400.jpg.webp',
      '/images/gallery/FLC-10-267x400.jpg.webp',
      '/images/gallery/FLC-12-267x400.jpg.webp',
      '/images/gallery/FLC-3-267x400.jpg.webp',
      '/images/gallery/FLC-35-267x400.jpg.webp',
      '/images/gallery/FLC-40-267x400.jpg.webp',
      '/images/gallery/FLC-44-600x400.jpg.webp',
      '/images/gallery/FLC-8-267x400.jpg.webp',
      '/images/gallery/FLC-9-267x400.jpg.webp',
      '/images/gallery/gal_1661841759.jpg.jpeg',
      '/images/gallery/gal_1661841778.jpg.jpeg',
      '/images/gallery/gal_1661842089.jpg.jpeg',
      '/images/gallery/gal_1661842094.jpg.jpeg',
      '/images/gallery/gal_1661842100.jpg.jpeg',
      '/images/gallery/gal_1661842105-1.jpg.jpeg',
      '/images/gallery/gal_1661842105.jpg.jpeg',
      '/images/gallery/gal_1661842110.jpg.jpeg',
      '/images/gallery/gal_1661842132.jpg.jpeg',
      '/images/gallery/gal_1661846409.jpg.jpeg',
      '/images/gallery/gal_1661846425.jpg.jpeg',
      '/images/gallery/gal_1661846437.jpg.jpeg',
      '/images/gallery/gal_1661846452.jpg.jpeg',
      '/images/gallery/jpk_logo-transformed-removebg-preview-1.png',
      '/images/gallery/laminated-plywood-cover.jpg.jpeg',
      '/images/gallery/loft_concrete1-247x247-1.jpeg',
      '/images/gallery/Mahogany_SVPU-08_packshot_medium-247x247.jpg.webp',
      '/images/gallery/malaysian-solid-wood-door-cover.jpg.jpeg',
      '/images/gallery/Mbott-247x247-1.jpg.jpeg',
      '/images/gallery/Monstera-247x247.jpg.webp',
      '/images/gallery/New-Project-1-1.png',
      '/images/gallery/New-Project-1.jpg.jpeg',
      '/images/gallery/New-Project-1.png',
      '/images/gallery/New-Project-2.jpg.jpeg',
      '/images/gallery/New-Project-21.jpg.jpeg',
      '/images/gallery/New-Project-22.jpg.jpeg',
      '/images/gallery/New-Project-23.jpg.jpeg',
      '/images/gallery/New-Project-24.jpg.jpeg',
      '/images/gallery/New-Project-25.jpg.jpeg',
      '/images/gallery/New-Project-26.jpg.jpeg',
      '/images/gallery/New-Project-27.jpg.jpeg',
      '/images/gallery/New-Project-28.jpg.jpeg',
      '/images/gallery/New-Project-30.jpg.jpeg',
      '/images/gallery/New-Project-31.jpg.jpeg',
      '/images/gallery/New-Project-32.jpg.jpeg',
      '/images/gallery/New-Project-33.jpg.jpeg',
      '/images/gallery/New-Project-34.jpg.jpeg',
      '/images/gallery/New-Project-35.jpg.jpeg',
      '/images/gallery/New-Project-36.jpg.jpeg',
      '/images/gallery/New-Project-37.jpg.jpeg',
      '/images/gallery/New-Project-38.jpg.jpeg',
      '/images/gallery/New-Project-39.jpg.jpeg',
      '/images/gallery/New-Project-40.jpg.jpeg',
      '/images/gallery/New-Project-41.jpg.jpeg',
      '/images/gallery/New-Project-42.jpg.jpeg',
      '/images/gallery/New-Project-43.jpg.jpeg',
      '/images/gallery/New-Project-44.jpg.jpeg',
      '/images/gallery/New-Project-45.jpg.jpeg',
      '/images/gallery/New-Project-46.jpg.jpeg',
      '/images/gallery/New-Project-47.jpg.jpeg',
      '/images/gallery/New-Project-48.jpg.jpeg',
      '/images/gallery/New-Project-49.jpg.jpeg',
      '/images/gallery/New-Project-50.jpg.jpeg',
      '/images/gallery/New-Project.jpg.jpeg',
      '/images/gallery/Nord_Wood_Gold_large-247x247.jpg.webp',
      '/images/gallery/pipe-4.jpg.jpeg',
      '/images/gallery/pipe-5.jpg.jpeg',
      '/images/gallery/pipe-6.jpg.jpeg',
      '/images/gallery/pipe-7-2.jpg.jpeg',
      '/images/gallery/podbitka-dachowa-vox-bialy-sv083-247x247.jpeg.webp',
      '/images/gallery/Primerra_Caramel_Oak_medium-247x247.jpg.webp',
      '/images/gallery/Primerra_Cherry_Oak_medium-247x247.jpg.webp',
      '/images/gallery/Primerra_Concrete_Oak_medium-247x247.jpg.webp',
      '/images/gallery/Primerra_Golden_Oak_medium-1-247x247.jpg.webp',
      '/images/gallery/Primerra_Imperial_Oak_medium-1-247x247.jpg.webp',
      '/images/gallery/Primerra_Malt_Oak_medium-247x247.jpg.webp',
      '/images/gallery/Primerra_Nature_Oak_medium-1-247x247.jpg.webp',
      '/images/gallery/Primerra_Nordic_Oak_medium-247x247.jpg.webp',
      '/images/gallery/Primerra_Oak_Ebony_medium-247x247.jpg.webp',
      '/images/gallery/Primerra_Oak_Mist_medium-1-247x247.jpg.webp',
      '/images/gallery/Primerra_Walnut_Oak_medium-247x247.jpg.webp',
      '/images/gallery/Primerra_Western_Oak_medium-247x247.jpg.webp',
      '/images/gallery/product-cover-1.jpg.jpeg',
      '/images/gallery/product-cover-2.jpg.jpeg',
      '/images/gallery/product-cover-3.jpg.jpeg',
      '/images/gallery/product-cover-4.jpg.jpeg',
      '/images/gallery/product-cover-5.jpg.jpeg',
      '/images/gallery/product-cover-6.jpg.jpeg',
      '/images/gallery/product-cover-9.jpg.jpeg',
      '/images/gallery/roof-system-white_small-247x247.jpg.webp',
      '/images/gallery/Rosewood_SVP-08_packshot_small-247x247.jpg.webp',
      '/images/gallery/Scandinavian_wood-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-desert-stone2020-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-geometric-green2020-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-geometric-light2020-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-grey-stone-247x247.jpg.webp',
      '/images/gallery/sciana-kerradeco-houses-2020-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-houses-2020-247x247-2.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-loft-rusty2020-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-stone-ivory2020big-247x247.jpg.webp',
      '/images/gallery/sciana-kerradeco-stone-misty2020-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-stone-moon-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-terazzo2020-1-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-testile-tweed-2020-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-textile-blue-tartan2020-247x247-1.jpg.jpeg',
      '/images/gallery/sciana-kerradeco-textile-retro-grey2020-247x247-1.jpg.jpeg',
      '/images/gallery/slider_0001_SVP_06_fronto_oak_terrace_medium-247x247.jpg.webp',
      '/images/gallery/Snowy_wood-247x247.jpg.webp',
      '/images/gallery/soffit_08_Black_medium-247x247.jpg.webp',
      '/images/gallery/soffit_08_Dark_Mahogany_medium-1-247x247.jpg.webp',
      '/images/gallery/soffit_08_Rosewood_medium-1-247x247.jpg.webp',
      '/images/gallery/soffit_09_walnut_balcony_medium-scaled-247x247-1.jpg.jpeg',
      '/images/gallery/Stone_Anthracite-247x247.jpg.webp',
      '/images/gallery/SVP-08_Basalt_Oak_packshot_medium-247x247.jpg.webp',
      '/images/gallery/SVP_08_nut_small-247x247.jpg.webp',
      '/images/gallery/SVP_09_oak_medium_800px-247x247.jpeg.webp',
      '/images/gallery/system-scienny-kerradeco-art-247x247-1.jpg.jpeg',
      '/images/gallery/system-scienny-kerradeco-scotch-247x247-1.jpeg',
      '/images/gallery/WhatsApp-Image-2023-01-17-at-16.23.25-247x247-1.jpg.jpeg',
      '/images/gallery/Wood-Brandy-247x247-1.jpg.jpeg',
      '/images/gallery/Wood_carbon-247x247.jpg.webp',
      '/images/gallery/Wood_vintage1-247x247.jpg.webp',
      '/images/gallery/Zeebeede-01.jpeg',
      '/images/gallery/Zeebeede-02.jpeg',
      '/images/gallery/Zeebeede-03.jpeg',
      '/images/gallery/Zeebeede-04.jpeg',
      '/images/gallery/Zeebeede-05-scaled-1.webp',
      '/images/gallery/Zeebeede-05.jpeg',
      '/images/gallery/Zeebeede-06.jpeg'
    ]
  },
  awards: {
    featured: [
      { id: 1, image: `${publicPath}/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1.jpeg`, title: 'Best Interior Design 2024' },
      { id: 2, image: `${publicPath}/images/awards/WhatsApp-Image-2024-10-28-at-2.37.04-PM-1-1.jpeg`, title: 'Excellence in Innovation' },
      { id: 3, image: `${publicPath}/images/awards/vecteezy_ai-generated-podium-with-golden-light-rays-background_36042916-scaled.jpeg`, title: 'Customer Choice Award' },
      { id: 4, image: `${publicPath}/images/awards/New_Project__83_-removebg-preview-225x300.png`, title: 'Premium Quality Award' },
      { id: 5, image: `${publicPath}/images/awards/jpk_logo-transformed-removebg-preview-1.png`, title: 'JPK Excellence' }
    ],
    all: [
      `${publicPath}/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1-1024x684.jpeg`,
      `${publicPath}/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1-1536x1025.jpeg`,
      `${publicPath}/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1-300x200.jpeg`,
      `${publicPath}/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1-768x513.jpeg`,
      `${publicPath}/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1-1-225x300.jpeg`,
      `${publicPath}/images/awards/WhatsApp-Image-2024-10-28-at-2.25.37-PM-1-1-768x1024.jpeg`,
      `${publicPath}/images/awards/WhatsApp_Image_2024-10-28_at_2.38.01_PM__1_-removebg-preview-224x300.png`,
      `${publicPath}/images/awards/WhatsApp_Image_2024-10-28_at_2.38.01_PM__1_-removebg-preview.png`
    ]
  }
};
