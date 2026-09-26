'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { projects, journalArticles, images, Article } from '@/lib/data'
import { ArrowRight, Bath, Bed, BookOpen, Building2, Car, ChevronLeft, ChevronRight, Globe, Heart, Info, Key, MapPin, Maximize2, Menu, MessageCircle, PhoneCall, Play, Plus, Share2, ShieldCheck, Sparkles, Star, X } from 'lucide-react'





function Hero() {
  const slides = [images.hero, images.modern, images.retreat]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((slide) => (slide + 1) % slides.length), 5000)
    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <section className="hero" id="discover" style={{ backgroundImage: `linear-gradient(90deg, rgba(2, 43, 34, .72), rgba(2, 43, 34, .05)), url(${slides[activeSlide]})` }}>
      <div className="hero-content">
        <span className="eyebrow inverse">Premium real estate, curated with purpose</span>
        <h1>Smart Way to Find Your<br /><em>Next Home.</em></h1>
        <p>HomeIQ connects you with exceptional residences and extraordinary properties, thoughtfully selected for the life you want to live.</p>
        <div className="hero-actions">
          <Link className="light-button" href="/projects">Explore Projects <ArrowRight /></Link>
          <Link className="play-link" href="/about">
            <span>
              <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </span> Contact us
          </Link>
        </div>
      </div>
      <div className="hero-dots" aria-label="Hero image slides">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === activeSlide ? 'active' : ''}
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

function HeroStatsBlock() {
  return (
    <section className="hero-stats-section reveal-on-scroll">
      <div className="hero-stats-container">
        <div className="hero-stats-left">
          <div className="hero-stat-item">
            <h4>Homes purchased</h4>
            <div className="hero-stat-number">
              10k<span className="suffix">+</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur fermentum</p>
          </div>
          <div className="hero-stat-item">
            <h4>Published properties</h4>
            <div className="hero-stat-number">
              200<span className="suffix">k</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur fermentum</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <article className="property-v2-card reveal-on-scroll">
      <div className="property-card-image-wrapper">
        <img src={project.image} alt={project.title} className="property-card-img" />
        <div className="property-card-top-bar">
          <span className="property-tag-badge">
            <Key className="w-3.5 h-3.5" /> {project.tag}
          </span>
        </div>
      </div>
      <div className="property-card-info">
        <Link href={`/projects/${project.id}`}>
          <h3 className="property-card-title hover:text-emerald-700 transition-colors">{project.title}</h3>
        </Link>
        <div className="property-card-location">
          <MapPin className="w-4 h-4 text-gray-900" />
          <span>{project.address}</span>
        </div>
        <div className="property-card-divider" />
        <div className="property-card-footer">
          <div className="property-amenities">
            <span className="amenity-item">
              <Maximize2 className="w-4 h-4" /> {project.area}
            </span>
            <span className="amenity-item">
              <Bath className="w-4 h-4" /> {project.baths}
            </span>
            <span className="amenity-item">
              <Bed className="w-4 h-4" /> {project.beds}
            </span>
            <span className="amenity-item">
              <Car className="w-4 h-4" /> {project.cars}
            </span>
          </div>
          <Link href={`/projects/${project.id}`} className="property-contact-link">
            View project <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}

function FeaturedProjects() {
  return (
    <section className="properties-section reveal-on-scroll" id="projects">
      <div className="properties-container">
        <div className="properties-top-content">
          <div className="properties-badge">
            <Building2 className="w-3.5 h-3.5" /> Ongoing projects
          </div>
          <h2>Check on all properties<br />we have available</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus
            in eu vel morbi dui nunc tellus. Non a massa maecenas massa.
          </p>
        </div>

        <div className="properties-grid-v2">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        <div className="properties-bottom-actions">
          <Link href="/projects" className="start-exploring-btn">
            Start exploring <span className="arrow-circle"><ArrowRight className="w-3.5 h-3.5" /></span>
          </Link>
          <Link href="/projects" className="browse-all-link">
            Browse all properties <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const upcomingProjectsList = [
  {
    id: 'up-1',
    title: 'The Aurelia Glass Tower',
    location: 'Tribeca, New York',
    completion: 'Q4 2026',
    price: 'From $8.5M',
    tag: 'Pre-Sales Open',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=85',
    area: '4,800 sqtf',
    beds: '4',
    baths: '5',
  },
  {
    id: 'up-2',
    title: 'Solana Bayfront Villas',
    location: 'Miami Beach, Florida',
    completion: 'Q2 2027',
    price: 'From $14.2M',
    tag: 'Private Island',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=85',
    area: '6,500 sqtf',
    beds: '6',
    baths: '7',
  },
  {
    id: 'up-3',
    title: 'The Alpine Crest Retreat',
    location: 'Aspen, Colorado',
    completion: 'Q1 2027',
    price: 'From $11.0M',
    tag: 'Mountain Estate',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85',
    area: '5,200 sqtf',
    beds: '5',
    baths: '6',
  },
  {
    id: 'up-4',
    title: 'Bel Air Horizon Pavilion',
    location: 'Los Angeles, California',
    completion: 'Q3 2026',
    price: 'From $16.8M',
    tag: 'Architectural Landmark',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85',
    area: '7,100 sqtf',
    beds: '6',
    baths: '8',
  },
  {
    id: 'up-5',
    title: 'The Century Sky Penthouse',
    location: 'Century City, Los Angeles',
    completion: 'Q4 2026',
    price: 'From $9.8M',
    tag: 'Sky Residence',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85',
    area: '3,900 sqtf',
    beds: '3',
    baths: '4',
  },
]

function UpcomingProjects() {
  const [carouselEl, setCarouselEl] = useState<HTMLDivElement | null>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselEl) {
      const scrollAmount = direction === 'left' ? -380 : 380
      carouselEl.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="upcoming-projects-section" id="upcoming">
      <div className="upcoming-projects-container">
        <div className="upcoming-header-row">
          <div>
            <div className="properties-badge">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Future developments
            </div>
            <h2>Upcoming Projects</h2>
            <p>Exclusive preview of architectural landmarks currently in development.</p>
          </div>
          <div className="upcoming-scroll-controls">
            <button
              className="circle-control"
              aria-label="Scroll left"
              onClick={() => handleScroll('left')}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="circle-control dark"
              aria-label="Scroll right"
              onClick={() => handleScroll('right')}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="upcoming-carousel" ref={setCarouselEl}>
          {upcomingProjectsList.map((item) => (
            <article className="upcoming-card reveal-on-scroll" key={item.id}>
              <div className="upcoming-image-wrapper">
                <img src={item.image} alt={item.title} className="upcoming-img" />
                <span className="upcoming-tag">{item.tag}</span>
                <span className="upcoming-completion">{item.completion}</span>
              </div>
              <div className="upcoming-card-body">
                <h3>{item.title}</h3>
                <p className="upcoming-location">
                  <MapPin className="w-3.5 h-3.5" /> {item.location}
                </p>
                <div className="upcoming-divider" />
                <div className="upcoming-card-footer">
                  <div className="upcoming-specs">
                    <span><Maximize2 className="w-3.5 h-3.5" /> {item.area}</span>
                    <span><Bed className="w-3.5 h-3.5" /> {item.beds}</span>
                    <span><Bath className="w-3.5 h-3.5" /> {item.baths}</span>
                  </div>
                  <Link href={`/projects/${item.id === 'up-1' ? '1' : item.id === 'up-2' ? '2' : '3'}`} className="upcoming-link">
                    View <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AwardLaurel({ side }: { side: 'left' | 'right' }) {
  const leaves = [
    'M37 116C25 115 17 109 13 101C23 100 31 104 37 116Z',
    'M33 96C21 94 14 88 11 80C21 80 29 85 33 96Z',
    'M32 76C20 73 14 67 13 59C23 60 29 65 32 76Z',
    'M34 57C23 53 18 47 18 39C27 41 32 47 34 57Z',
    'M39 39C30 34 27 28 29 21C37 24 40 30 39 39Z',
    'M45 24C39 18 39 12 43 7C49 12 50 17 45 24Z',
  ]
  return (
    <svg className={`award-laurel-svg ${side}`} viewBox="0 0 70 150" fill="none" aria-hidden="true">
      <path d="M52 145C38 120 31 93 32 67C33 42 42 20 55 5" stroke="currentColor" strokeWidth="2" />
      {leaves.map((d) => (
        <path key={d} d={d} fill="currentColor" />
      ))}
    </svg>
  )
}

function Excellence() {
  const awards = [
    ['FEATURED', 'Pearlist', 'Premier Listing'],
    ['TOP 10', 'Architizer', 'Property Design'],
    ['WINNER', 'Houzz', 'Home Design'],
    ['5 STAR', 'Luxury Lifestyle', 'Property Awards'],
    ['BEST IN CLASS', 'RICS', 'Real Estate Excellence'],
    ['TOP BROKERAGE', 'Robb Report', 'Luxury Real Estate'],
    ['GLOBAL AFFILIATE', 'Christies', 'International Real Estate'],
    ['EXCELLENCE', 'Architectural Digest', 'Design Heritage'],
  ]
  return (
    <section className="awards-noise reveal-on-scroll" id="about" aria-label="Awards and recognition">
      <div className="awards-intro">
        <div className="eyebrow-line-wrapper">
          <span className="header-horizontal-line left" />
          <span className="eyebrow">Industry recognition</span>
          <span className="header-horizontal-line right" />
        </div>
        <h2 suppressHydrationWarning>Recognized Excellence</h2>
        <p suppressHydrationWarning>Celebrating higher standards in real estate.</p>
      </div>
      <section className="awards-section">
        <div className="awards-grid">
          {[...awards, ...awards, ...awards].map(([kicker, brand, title], index) => (
            <article className="award-badge" key={`${brand}-${title}-${index}`}>
              <div className="award-laurel-group left">
                <AwardLaurel side="left" />
                <AwardLaurel side="left" />
              </div>
              <div className="award-badge-text">
                <span className="award-kicker">{kicker}</span>
                <strong className="award-brand">{brand}</strong>
                <em className="award-title">{title}</em>
              </div>
              <div className="award-laurel-group right">
                <AwardLaurel side="right" />
                <AwardLaurel side="right" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

// ---------------- ARTICLE READER MODAL ----------------
function ArticleModal({ article, onClose }: { article: Article | null; onClose: () => void }) {
  if (!article) return null

  return (
    <div className="article-modal-backdrop" onClick={onClose}>
      <div className="article-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="article-modal-close" onClick={onClose} aria-label="Close article">
          <X size={18} />
        </button>

        <div style={{ padding: 'clamp(24px, 4vw, 44px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span className="image-tag" style={{ margin: 0 }}>{article.tag}</span>
            <span className="read-time-pill">{article.readTime}</span>
            <span style={{ fontSize: '9px', color: 'var(--muted)', marginLeft: 'auto' }}>{article.date}</span>
          </div>

          <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 38px)', color: 'var(--foreground)', lineHeight: 1.1, marginBottom: '16px', fontWeight: 700 }}>
            {article.title}
          </h2>

          <div className="author" style={{ marginBottom: '24px', paddingBottom: '18px', borderBottom: '1px solid var(--border)' }}>
            <span className="avatar">{article.author.avatar}</span>
            <div>
              <span>{article.author.name}</span>
              <small>{article.author.role}</small>
            </div>
          </div>

          <div style={{ height: '240px', borderRadius: '14px', overflow: 'hidden', marginBottom: '24px' }}>
            <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'var(--foreground)', fontWeight: 600, marginBottom: '20px' }}>
            {article.excerpt}
          </p>

          {article.content.map((paragraph, i) => (
            <p key={i} style={{ fontSize: '12px', lineHeight: '1.65', color: 'var(--muted)', marginBottom: '16px' }}>
              {paragraph}
            </p>
          ))}

          <div style={{ background: '#eaf6f1', border: '1px solid #d8ebe3', padding: '18px', borderRadius: '12px', marginTop: '24px' }}>
            <h4 style={{ margin: '0 0 10px', color: 'var(--forest)', fontSize: '12px', fontWeight: 700 }}>Key Article Insights</h4>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '11px', color: 'var(--foreground)', lineHeight: 1.6 }}>
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} style={{ marginBottom: '6px' }}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------- UPGRADED INTERACTIVE JOURNAL / BLOG HIGHLIGHTS SECTION ----------------
function Journal() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)

  const featured = journalArticles[0]
  const gridItems = journalArticles.slice(1, 4)

  return (
    <section className="section journal reveal-on-scroll" id="journal">
      <div className="section-heading journal-heading-row">
        <div>
          <div className="properties-badge mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" /> Editorial & Insights
          </div>
          <h2 className="journal-title">Blog Highlights</h2>
          <p className="journal-subtext">
            Curated architectural stories, market analysis, and luxury real estate insights.
          </p>
        </div>
        <Link className="start-exploring-btn" href="/blog">
          View all stories <span className="arrow-circle"><ArrowRight className="w-3.5 h-3.5" /></span>
        </Link>
      </div>

      {/* Main Large Featured Article Card */}
      <Link href={`/blog/${featured.id}`} className="journal-feature reveal-on-scroll">
        <div className="journal-image-wrapper">
          <div className="journal-image" style={{ backgroundImage: `url(${featured.image})` }} />
        </div>
        <div className="journal-copy">
          <div className="journal-copy-header">
            <span className="image-tag">{featured.tag}</span>
            <span className="read-time-pill">{featured.readTime}</span>
          </div>
          <h3>{featured.title}</h3>
          <p>{featured.excerpt}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
            <span className="author">
              <span className="avatar">{featured.author.avatar}</span>
              <span>
                {featured.author.name}
                <small>{featured.author.role}</small>
              </span>
            </span>
            <span className="read-more-link">
              Read Story <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </Link>

      {/* 3-Card Interactive Grid Below Featured Article */}
      <div className="journal-grid">
        {gridItems.map((article) => (
          <Link
            className="journal-card"
            key={article.id}
            href={`/blog/${article.id}`}
          >
            <div className="journal-card-bg" style={{ backgroundImage: `url(${article.image})` }} />
            <div className="journal-card-overlay" />

            <div className="journal-card-top">
              <span className="journal-card-tag">{article.tag}</span>
              <span className="journal-card-readtime">{article.readTime}</span>
            </div>

            <div className="journal-card-bottom">
              <span className="journal-card-title">{article.title}</span>
              <div className="journal-card-arrow">
                <ArrowRight />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Interactive Article Modal Reader */}
      <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
    </section>
  )
}

function Stats() {
  const stats = [
    {
      value: '$4.2B',
      label: 'Total Estate Volume',
      copy: 'Exceptional growth from a commitment to the best.',
      icon: <Building2 className="w-5 h-5 text-emerald-600" />,
      badge: '+34% YoY',
    },
    {
      value: '99.4%',
      label: 'Satisfaction & Retention',
      copy: 'Our clients return because the details matter.',
      icon: <Star className="w-5 h-5 text-emerald-600" />,
      badge: 'Top Tier',
    },
    {
      value: '18 Days',
      label: 'Avg. Match-to-Contract',
      copy: 'The right home, with a process that respects your time.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      badge: 'Speed',
    },
    {
      value: '42+',
      label: 'Markets & Networks',
      copy: 'Local expertise with a truly global point of view.',
      icon: <Globe className="w-5 h-5 text-emerald-600" />,
      badge: 'Global',
    },
  ]

  return (
    <section className="stats-section-v2 reveal-on-scroll" id="about">
      <div className="stats-container">
        <div className="stats-header">
          <span className="stats-eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Proven Track Record
          </span>
          <h2>Institutional Scale, Bespoke Precision</h2>
          <p>
            Powering high-conviction acquisitions and private sales across the world&apos;s most sought-after architectural enclaves.
          </p>
        </div>

        <div className="stats-grid-v2">
          {stats.map((item) => (
            <div className="stat-card-v2 reveal-on-scroll" key={item.label}>
              <div className="stat-card-top">
                <div className="stat-icon-wrapper">
                  {item.icon}
                </div>
                <span className="stat-pill">{item.badge}</span>
              </div>
              <div className="stat-value">{item.value}</div>
              <h3 className="stat-label">{item.label}</h3>
              <p className="stat-copy">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonialsData = [
  {
    id: 't-1',
    name: 'Andy Smith',
    location: 'Los Angeles, CA',
    quote: '“Navigating properties made easy, unbeatable USA options.”',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    column: 'left',
  },
  {
    id: 't-2',
    name: 'Sandy Houston',
    location: 'San Francisco, CA',
    quote: '“Found perfect home swiftly, unbeatable real estate platform.”',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    column: 'left',
  },
  {
    id: 't-3',
    name: 'Kathie Corl',
    location: 'New York, NY',
    quote: '“Exceptional service, unmatched real estate opportunities in USA.”',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    column: 'right',
  },
  {
    id: 't-4',
    name: 'Matt Cannon',
    location: 'Los Angeles, CA',
    quote: '“Ultimate real estate hub, unmatched quality and service.”',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
    column: 'right',
  },
]

function TestimonialCardItem({ item }: { item: typeof testimonialsData[number] }) {
  return (
    <article className="testimonial-v2-card">
      <img src={item.avatar} alt={item.name} className="testimonial-avatar-v2" />
      <div className="testimonial-v2-body">
        <p className="testimonial-quote-v2">{item.quote}</p>
        <div className="testimonial-author-v2">
          <strong>{item.name}</strong>
          <span>{item.location}</span>
        </div>
      </div>
    </article>
  )
}

function Testimonials() {
  const leftCards = testimonialsData.filter((t) => t.column === 'left')
  const rightCards = testimonialsData.filter((t) => t.column === 'right')

  return (
    <section className="testimonials-v2-section reveal-on-scroll" id="testimonials">
      <div className="testimonials-v2-container">
        {/* Left Column: Top Content Header + Left Cards */}
        <div className="testimonials-column-left">
          <div className="testimonials-top-content">
            <div className="properties-badge">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> Testimonials
            </div>
            <h2>Look at what<br />people say about us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam
              ultrices augue convallis nunc ultrices amet consequat adipiscing.
            </p>
          </div>

          <div className="testimonials-cards-stack">
            {leftCards.map((item) => (
              <TestimonialCardItem item={item} key={item.id} />
            ))}
          </div>
        </div>

        {/* Right Column: Staggered Cards + Bottom CTA Button */}
        <div className="testimonials-column-right">
          <div className="testimonials-cards-stack">
            {rightCards.map((item) => (
              <TestimonialCardItem item={item} key={item.id} />
            ))}
          </div>

          <div className="testimonials-cta-row">
            <a href="#projects" className="start-exploring-btn">
              Start exploring <span className="arrow-circle"><ArrowRight className="w-3.5 h-3.5" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta" id="contact" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 35, 28, .94), rgba(0, 35, 28, .3)), url(${images.hero})` }}>
      <div className="cta-card">
        <span className="eyebrow">Smart home discovery</span>
        <h2>Ready to Find Your Perfect Home?</h2>
        <p>Experience a smarter, more personal approach to real estate. Let&apos;s find a place that feels like it was made for you.</p>
        <a className="dark-button" href="mailto:hello@homeiq.example">
          Connect with us <ArrowRight />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-card reveal-on-scroll">
        <div className="footer-brand-header">
          <a className="footer-brand" href="#top">
            <Building2 className="w-5 h-5 text-emerald-400" />
            <span>HomeIQ<sup className="text-emerald-400 font-semibold">2</sup></span>
          </a>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright © 2025 HomeIQ² | Exclusive Luxury Real Estate
          </p>
          <div className="footer-social-links">
            <a href="#top" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#top" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#top" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#top" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="#contact"
      className={`floating-whatsapp-btn ${visible ? 'is-visible' : ''}`}
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-ping" />
      <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
      <span className="floating-whatsapp-tooltip">Chat with us</span>
    </a>
  )
}

export function LandingPage() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    })

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="landing-page" id="top">
      <SiteHeader />
      <main>
        <Hero />
        <HeroStatsBlock />
        <Excellence />
        <FeaturedProjects />
        <UpcomingProjects />
        <Journal />
        <Stats />
        <Testimonials />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}

export { images }
