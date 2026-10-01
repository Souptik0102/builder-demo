export interface Project {
  id: string
  title: string
  address: string
  city: string
  tag: 'For rent' | 'For sale'
  price: string
  priceValue: number
  area: string
  beds: string
  baths: string
  cars: string
  image: string
  gallery: string[]
  description: string
  bulletPoints: string[]
  amenities: string[]
  agent: {
    name: string
    role: string
    phone: string
    email: string
    avatar: string
  }
}

export interface Article {
  id: string
  title: string
  tag: string
  category: 'all' | 'resource' | 'market' | 'articles' | 'investment' | 'architecture'
  readTime: string
  image: string
  date: string
  author: {
    name: string
    role: string
    avatar: string
  }
  excerpt: string
  content: string[]
  keyTakeaways: string[]
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

export const images = {
  hero: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
  modern: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
  retreat: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85',
  waterfront: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85',
  interior: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
  kitchen: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=85',
  bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=85',
  bathroom: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85',
  living: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=85',
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxury Loft in San Francisco',
    address: '2238 Stradella Rd, SF',
    city: 'San Francisco',
    tag: 'For rent',
    price: '$8,500 / mo',
    priceValue: 8500,
    area: '2,553 sqtf',
    beds: '3',
    baths: '2',
    cars: '3',
    image: images.hero,
    gallery: [images.hero, images.interior, images.bedroom, images.kitchen, images.living],
    description: 'Experience refined urban living in this architectural trophy loft overlooking San Francisco. Featuring double-height ceilings, floor-to-ceiling glass paneling, handcrafted Italian cabinetry, and a private climate-controlled wine gallery.',
    bulletPoints: [
      'Double-height ceiling gallery with custom linear LED illumination',
      'Private motorized terrace with panoramic city sky line views',
      'Sub-Zero & Wolf integrated gourmet kitchen appliances',
      'Direct private elevator access and 24/7 concierge service'
    ],
    amenities: [
      'Air conditioning', 'Cable TV', 'Dishwasher', 'Fireplace', 'Gym', 'Garage',
      'High speed internet', 'Iron', 'Pool', 'Security camera', 'Spa', 'Wine cellar'
    ],
    agent: {
      name: 'Sophie Moore',
      role: 'Senior Real Estate Specialist',
      phone: '(415) 720-4119',
      email: 'sophie@traumproperties.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=350&q=80'
    }
  },
  {
    id: '2',
    title: 'Home in Los Angeles Heart',
    address: '2596 El Segundo, Los Angeles',
    city: 'Los Angeles',
    tag: 'For sale',
    price: '$4,250,000',
    priceValue: 4250000,
    area: '4,120 sqtf',
    beds: '5',
    baths: '4',
    cars: '3',
    image: images.modern,
    gallery: [images.modern, images.living, images.bedroom, images.bathroom, images.kitchen],
    description: 'An architectural sanctuary nestled in prestigious Los Angeles. Blending minimalist indoor-outdoor design with tranquil water cascades, zero-edge infinity pool, and a private screening room.',
    bulletPoints: [
      'Organic travertine and fluted marble interior finishes throughout',
      'Heated zero-edge pool with underwater sound system',
      'Smart home automation controlling lighting, climate, and security',
      'Master retreat with dual spa bathrooms and custom walk-in dressing room'
    ],
    amenities: [
      'Air conditioning', 'Pool', 'Dishwasher', 'Security camera', 'Gym', 'Garage',
      'Balcony', 'Chimney', 'Microwave', 'Outdoor lounge', 'Sauna', 'Wine fridge'
    ],
    agent: {
      name: 'Marcus Vance',
      role: 'Principal Partner',
      phone: '(310) 982-3001',
      email: 'marcus@traumproperties.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=350&q=80'
    }
  },
  {
    id: '3',
    title: 'Modern Loft in San Francisco',
    address: '3335 21 St, SF',
    city: 'San Francisco',
    tag: 'For rent',
    price: '$6,800 / mo',
    priceValue: 6800,
    area: '1,950 sqtf',
    beds: '2',
    baths: '2',
    cars: '1',
    image: images.interior,
    gallery: [images.interior, images.living, images.bedroom, images.kitchen, images.hero],
    description: 'Industrial elegance meets high-end luxury. Exposed concrete accents, warm white oak timber floors, custom Scandinavian lighting, and expansive glass bay windows framed by lush trees.',
    bulletPoints: [
      'Polished concrete floor detailing with radiant floor heating',
      'Custom kitchen island with waterfall marble quartz counters',
      'Private roof deck terrace access',
      'Pet friendly design with dog spa station in building basement'
    ],
    amenities: [
      'Air conditioning', 'Dishwasher', 'Security camera', 'High speed internet',
      'Elevator', 'Pet spa', 'Roof lounge', 'EV charging station'
    ],
    agent: {
      name: 'Sophie Moore',
      role: 'Senior Real Estate Specialist',
      phone: '(415) 720-4119',
      email: 'sophie@traumproperties.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=350&q=80'
    }
  },
  {
    id: '4',
    title: 'Executive Office & Penthouse, San Diego',
    address: '90071 South Grand Avenue, San Diego',
    city: 'San Diego',
    tag: 'For rent',
    price: '$12,000 / mo',
    priceValue: 12000,
    area: '3,800 sqtf',
    beds: '4',
    baths: '4',
    cars: '4',
    image: images.waterfront,
    gallery: [images.waterfront, images.hero, images.kitchen, images.living, images.bathroom],
    description: 'Overlooking San Diego bay, this executive residence offers unmatched waterfront views, commercial-grade fiber internet, private conference gallery, and resort-grade amenities.',
    bulletPoints: [
      'Panoramic ocean and skyline glass window walls',
      'Soundproofed executive office gallery with integrated audiovisual setups',
      'Resort pool, jacuzzi, and private cabana deck',
      'GATED 24-hour guarded security enclave'
    ],
    amenities: [
      'Air conditioning', 'Cable TV', 'Security camera', 'Gym', 'Garage',
      'Pool', 'Conference room', 'Fiber Internet', 'Valet parking'
    ],
    agent: {
      name: 'Elena Rostova',
      role: 'Director of Luxury Acquisitions',
      phone: '(619) 441-9080',
      email: 'elena@traumproperties.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=350&q=80'
    }
  },
  {
    id: '5',
    title: 'Apartment in Downtown, San Diego',
    address: '92071 South Grand Avenue, SD',
    city: 'San Diego',
    tag: 'For sale',
    price: '$2,150,000',
    priceValue: 2150000,
    area: '1,850 sqtf',
    beds: '2',
    baths: '2',
    cars: '2',
    image: images.retreat,
    gallery: [images.retreat, images.interior, images.bedroom, images.kitchen, images.modern],
    description: 'Contemporary coastal apartment with spacious open layout, private sunset terrace, gourmet chef kitchen, and smart automated climate control systems.',
    bulletPoints: [
      'Bespoke oak millwork and integrated designer lighting fixtures',
      'Walking distance to waterfront dining and yacht harbor',
      'Private storage unit and dedicated dual EV charger spots',
      'Fitness club and sky lounge access'
    ],
    amenities: [
      'Air conditioning', 'Dishwasher', 'Balcony', 'Gym', 'EV charging', 'Storage', 'Security camera'
    ],
    agent: {
      name: 'Elena Rostova',
      role: 'Director of Luxury Acquisitions',
      phone: '(619) 441-9080',
      email: 'elena@traumproperties.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=350&q=80'
    }
  },
  {
    id: '6',
    title: 'Home in Downtown, Los Angeles',
    address: '3230 Stradella Rd, LA',
    city: 'Los Angeles',
    tag: 'For rent',
    price: '$9,200 / mo',
    priceValue: 9200,
    area: '3,200 sqtf',
    beds: '3',
    baths: '3',
    cars: '2',
    image: images.kitchen,
    gallery: [images.kitchen, images.living, images.bedroom, images.modern, images.bathroom],
    description: 'Sleek luxury residence featuring floor-to-ceiling glass, custom walnut cabinetry, private swimming pool, and custom outdoor kitchen for entertaining.',
    bulletPoints: [
      'Custom outdoor kitchen with Built-in Lynx gas grill & pizza oven',
      'Master suite featuring freestanding stone tub & steam shower',
      'Integrated Sonos sound system across all interior zones',
      'Automated blackout shades and biometric door access'
    ],
    amenities: [
      'Air conditioning', 'Pool', 'Dishwasher', 'Security camera', 'Garage', 'Outdoor kitchen', 'Sonos system'
    ],
    agent: {
      name: 'Marcus Vance',
      role: 'Principal Partner',
      phone: '(310) 982-3001',
      email: 'marcus@traumproperties.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=350&q=80'
    }
  }
]

export const journalArticles: Article[] = [
  {
    id: 'art-1',
    title: "Here's how decorate your new home from scratch",
    tag: 'Resource',
    category: 'resource',
    readTime: '5 MIN READ',
    image: images.interior,
    date: 'Mar 24, 2025',
    author: {
      name: 'Amelia K.',
      role: 'Head of Property Research',
      avatar: 'A',
    },
    excerpt: 'Starting with a blank canvas can feel overwhelming. Learn how top interior architects curate room proportions, ambient lighting layers, and timeless material palettes.',
    content: [
      'Decorating a newly acquired trophy home from scratch requires a balanced approach between architectural structure and personal curation. Begin by analyzing spatial flow and natural light patterns before making key furniture selections.',
      'Invest in anchor pieces — such as custom sectionals, hand-carved dining tables, and statement lighting — while layering textured textiles and artwork over time to build depth and authentic character.'
    ],
    keyTakeaways: [
      'Establish primary anchor focal points in key reception rooms.',
      'Combine direct architectural lighting with ambient accent lamps.',
      'Prioritize high-touch natural materials like brushed stone and solid wood.'
    ]
  },
  {
    id: 'art-2',
    title: 'Home buying basics: How many bedrooms and bathrooms?',
    tag: 'Market',
    category: 'market',
    readTime: '4 MIN READ',
    image: images.bedroom,
    date: 'Mar 18, 2025',
    author: {
      name: 'Julian T.',
      role: 'Senior Wealth & Real Estate Advisor',
      avatar: 'J',
    },
    excerpt: 'Optimizing bedroom-to-bathroom ratios for maximum family comfort and long-term resale value retention.',
    content: [
      'When evaluating luxury estate floor plans, bathroom accessibility and bedroom suite autonomy are primary drivers of market liquidity. In top tier markets, en-suite bathroom parity (1:1 ratio) is increasingly expected.',
      'Additionally, versatile flex spaces — such as secondary suites that double as private home offices or guest quarters — protect capital growth across shifting family needs.'
    ],
    keyTakeaways: [
      'En-suite bathrooms for primary and guest rooms increase resale demand by 28%.',
      'Flex rooms provide liquidity in changing macroeconomic environments.',
      'Consider soundproofing and layout zoning between active and quiet quarters.'
    ]
  },
  {
    id: 'art-3',
    title: 'First-time homebuyer\'s guide: Steps for beginners',
    tag: 'Articles',
    category: 'articles',
    readTime: '6 MIN READ',
    image: images.kitchen,
    date: 'Mar 12, 2025',
    author: {
      name: 'Elena R.',
      role: 'Managing Director, Global Desk',
      avatar: 'E',
    },
    excerpt: 'A comprehensive step-by-step roadmap navigating private escrow, property inspections, appraisal valuation, and closing.',
    content: [
      'Navigating the acquisition of high-value residential property requires disciplined coordination between advisory teams, tax attorneys, and dedicated buyer representatives.',
      'This guide breaks down essential due-diligence milestones from initial title inspection through final architectural review to safeguard your capital investment.'
    ],
    keyTakeaways: [
      'Assemble accredited legal, tax, and property advisory partners early.',
      'Perform thorough mechanical, roof, and foundation engineering inspections.',
      'Confirm HOA guidelines, property tax assessments, and zoning rights.'
    ]
  },
  {
    id: 'art-4',
    title: 'How to negotiate a house price effectively: 101 guide',
    tag: 'Resource',
    category: 'resource',
    readTime: '5 MIN READ',
    image: images.modern,
    date: 'Mar 05, 2025',
    author: {
      name: 'Marcus Vance',
      role: 'Principal Partner',
      avatar: 'M',
    },
    excerpt: 'Tactical pricing analysis, unearthing seller motivations, and leveraging off-market comps for optimal terms.',
    content: [
      'In private real estate transactions, price is only one component of negotiation. Terms such as flexible closing timelines, seller lease-backs, and turnkey furniture inclusions often yield substantial value.',
      'By grounding negotiations in rigorous recent square-foot price data and land valuation indices, buyers can structure compelling offers that secure target properties.'
    ],
    keyTakeaways: [
      'Analyze comparable sales indices within the immediate micro-neighborhood.',
      'Leverage flexible closing dates to solve seller timeline constraints.',
      'Maintain clear walk-away thresholds based on objective appraisal limits.'
    ]
  },
  {
    id: 'art-5',
    title: 'Ikea announces new furniture for modular homes',
    tag: 'Articles',
    category: 'articles',
    readTime: '4 MIN READ',
    image: images.living,
    date: 'Feb 28, 2025',
    author: {
      name: 'Amelia K.',
      role: 'Head of Property Research',
      avatar: 'A',
    },
    excerpt: 'How space-saving modular design concepts are inspiring contemporary urban apartments and vacation retreats.',
    content: [
      'Modular design principles are increasingly influencing high-end compact living. Smart multi-functional furniture allows residents to effortlessly transition spaces from home office to evening lounge.',
      'We explore how modern minimalist design philosophy maximizes utility without compromising on aesthetic refinement.'
    ],
    keyTakeaways: [
      'Multi-functional furniture optimizes square footage efficiency.',
      'Clean geometric silhouettes create open spatial perception.',
      'Integrated storage eliminates clutter in compact luxury residences.'
    ]
  },
  {
    id: 'art-6',
    title: 'The best art styles to decorate a space in your home',
    tag: 'Resource',
    category: 'resource',
    readTime: '5 MIN READ',
    image: images.waterfront,
    date: 'Feb 20, 2025',
    author: {
      name: 'Elena R.',
      role: 'Managing Director, Global Desk',
      avatar: 'E',
    },
    excerpt: 'Curating fine art, oversized abstract canvases, and sculptural masterpieces that harmonally elevate interior architecture.',
    content: [
      'Art is the soul of luxury interior design. Selecting pieces that complement room scale, lighting temperature, and color tones transforms a house into a gallery-level residence.',
      'From large-scale abstract expressionism to minimalist monochrome photography, discover how to place art for maximum emotional impact.'
    ],
    keyTakeaways: [
      'Scale artwork proportionally to wall height and furniture width.',
      'Use 95+ CRI gallery spot lighting to preserve color integrity.',
      'Mix classical sculptural forms with modern abstract paintings.'
    ]
  }
]

export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can I post my house for sale or rent?',
    answer: 'Posting your property with Traum Properties Pvt Ltd is seamless. Simply submit your property details through our portal or connect directly with one of our private advisors. Our team will conduct a comprehensive valuation, schedule professional architectural photography and 3D virtual tours, and launch targeted off-market or public marketing campaigns across our global buyer network.',
    category: 'Listing'
  },
  {
    id: 'faq-2',
    question: 'What is your realtor sale commission structure?',
    answer: 'Traum Properties Pvt Ltd operates on a transparent, competitive advisory fee model tailored to the scope and exclusivity of the estate. Standard listings feature clear commission structures with zero hidden fees. For ultra-high-net-worth trophy estates and private off-market listings, we provide custom advisory retainers aligned with transaction goals.',
    category: 'Fees'
  },
  {
    id: 'faq-3',
    question: 'Which type of house do you take for promoting?',
    answer: 'We specialize in premium residential properties including modern urban lofts, trophy penthouses, architectural single-family estates, waterfront retreats, and master-planned developments. Every property passes our quality curation standard evaluating location, design provenance, and construction standards.',
    category: 'Properties'
  },
  {
    id: 'faq-4',
    question: 'What’s the average time to sale a house with Traum Properties Pvt Ltd?',
    answer: 'Our average match-to-contract duration is just 18 days — significantly faster than the industry benchmark. By leveraging predictive buyer matching algorithms and our confidential global network, we connect qualified buyers with luxury sellers swiftly and discreetly.',
    category: 'Process'
  },
  {
    id: 'faq-5',
    question: 'How do I schedule a private viewing or virtual tour?',
    answer: 'You can request a private viewing directly from any property page by clicking "View project" or reaching out via WhatsApp/email. Our dedicated listing agents will arrange an exclusive in-person private showing or a live guided high-definition virtual tour at your convenience.',
    category: 'Showings'
  },
  {
    id: 'faq-6',
    question: 'Can international buyers acquire properties through Traum Properties Pvt Ltd?',
    answer: 'Yes! Over 35% of our client portfolio consists of international buyers and family offices. We provide complete end-to-end concierge services including multi-currency escrow guidance, international tax advisory coordination, remote biometric closing, and turnkey property management.',
    category: 'International'
  }
]
