'use client'

import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useScrollReveal } from '@/lib/utils'
import {
  Building2, ArrowRight, ShieldCheck, MapPin, Phone, Mail,
  Sparkles, CheckCircle2, ChevronRight, Users, Award, Heart,
  Briefcase, Compass, Lightbulb, Shield, Heart as HeartIcon,
  MessageCircle, Bookmark, Globe
} from 'lucide-react'

export default function AboutPage() {
  useScrollReveal()
  const teamMembers = [
    {
      name: 'John Carver',
      role: 'Partner & Senior Broker',
      phone: '+1 (415) 890-3401',
      email: 'john.carver@traumproperties.com',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sophia Mercer',
      role: 'Head of Luxury Sales',
      phone: '+1 (415) 890-3402',
      email: 'sophia.mercer@traumproperties.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Matt Daman',
      role: 'Investment Advisor',
      phone: '+1 (415) 890-3403',
      email: 'matt.daman@traumproperties.com',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Harnessing market analytics, virtual walkthroughs, and AI matching to surface off-market opportunities.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Setting industry benchmarks for luxury residential transactions and bespoke client representation.',
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Uncompromising transparency in every property valuation, disclosure report, and negotiation contract.',
    },
    {
      icon: Compass,
      title: 'Expertise',
      description: 'Decades of combined high-end real estate experience, zoning knowledge, and portfolio advisory.',
    },
    {
      icon: Heart,
      title: 'Client Dedication',
      description: 'Bespoke service tailored precisely to your personal lifestyle vision and financial aspirations.',
    },
    {
      icon: Briefcase,
      title: 'Commitment',
      description: 'Standing alongside you from initial property search to post-acquisition value management.',
    },
  ]

  const instaPosts = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80',
      likes: '1.4k',
      caption: 'Sunlit modern villa living area in San Francisco hills.',
    },
    {
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80',
      likes: '980',
      caption: 'Minimalist lounge chair & accent lighting spotlight.',
    },
    {
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80',
      likes: '2.1k',
      caption: 'Open-concept lounge framing panoramic garden views.',
    },
    {
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80',
      likes: '1.8k',
      caption: 'Spa-inspired luxury bathroom sanctuary.',
    },
  ]

  return (
    <div className="landing-page min-h-screen flex flex-col bg-[#f8fafc]">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 space-y-12 reveal-on-scroll">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 font-outfit tracking-tight leading-tight">
                About our real<br />estate firm
              </h1>
            </div>

            <div className="space-y-4 max-w-md">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                From luxury villas to urban penthouses, we guide buyers, sellers, and investors through every real estate journey with expertise and tailored advisory.
              </p>
              <div className="flex items-center gap-3">
                <Link href="/projects" className="btn-dark">
                  <span>Explore properties</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#values"
                  className="text-xs font-semibold text-slate-700 hover:text-red-700 transition-colors inline-flex items-center gap-1"
                >
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Dual Photo Gallery & Metrics */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden h-[300px] sm:h-[400px] shadow-lg group relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=85"
                  alt="Real estate consultation with clients"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/50 shadow-md">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Homes purchased</p>
                  <p className="text-xl font-extrabold text-slate-900 font-outfit">10k+</p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden h-[300px] sm:h-[400px] shadow-lg group relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85"
                  alt="Our advisory team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/50 shadow-md">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Active buyers & investors</p>
                  <p className="text-xl font-extrabold text-slate-900 font-outfit">500k</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-100 reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Box */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" /> Our values
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-outfit tracking-tight leading-tight">
                The values that drive everything we do
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We believe acquiring or selling a property should be an empowering experience built on clarity, integrity, and relentless pursuit of excellence.
              </p>
              <Link href="/projects" className="btn-dark">
                <span>Explore properties</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 6 Grid Core Values */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, idx) => {
                const IconComp = val.icon
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{val.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mission Feature Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 reveal-on-scroll">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden h-[280px] sm:h-[340px] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                alt="Our single goal"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                <Compass className="w-3.5 h-3.5 text-red-600" /> Our mission
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-outfit tracking-tight leading-tight">
                We have only one goal: To help you find your dream home
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Finding a home isn't just about square footage or zip codes—it's about matching your lifestyle with a space where you can create lasting memories. Our team works tirelessly to match your unique criteria with premier properties.
              </p>
              <div className="pt-2">
                <Link href="/projects" className="btn-dark">
                  <span>Explore properties</span> <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Offices Section (Dark Card Section) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 reveal-on-scroll">
          <div className="bg-[#0f141d] rounded-3xl p-8 sm:p-12 text-white space-y-8 shadow-xl border border-slate-800 relative overflow-hidden">
            {/* Office Header Row */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-lg">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500 bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20">
                  <Building2 className="w-3.5 h-3.5" /> Our offices
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold font-outfit text-white tracking-tight">
                  Come and visit our offices
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm font-light">
                  Drop by our flagship advisory hubs for private property consultations and portfolio reviews.
                </p>
              </div>

              <Link href="/projects" className="btn-light">
                <span>View on map</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Office Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SF Office */}
              <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-4">
                <div className="rounded-xl overflow-hidden h-44">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                    alt="San Francisco Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-outfit">San Francisco, CA</h3>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500" /> 100 Montgomery St, Suite 1800, San Francisco, CA
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-red-500" /> (415) 890-3400</span>
                  <span className="text-slate-400">Mon - Fri: 8am - 6pm</span>
                </div>
              </div>

              {/* LA Office */}
              <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-4">
                <div className="rounded-xl overflow-hidden h-44">
                  <img
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
                    alt="Los Angeles Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-outfit">Los Angeles, CA</h3>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500" /> 9400 Wilshire Blvd, Beverly Hills, CA 90212
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-red-500" /> (310) 550-1200</span>
                  <span className="text-slate-400">Mon - Sat: 9am - 7pm</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="text-center pt-2">
              <Link href="/projects" className="btn-light">
                <span>Book an appointment</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Meet Our Agents Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-10 reveal-on-scroll">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              <Users className="w-3.5 h-3.5 text-red-600" /> Our team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-outfit tracking-tight">
              Meet our agents
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Dedicated real estate specialists committed to your property success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow group"
              >
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-red-600/20 group-hover:border-red-600 transition-colors">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                  <p className="text-xs text-slate-500">{member.role}</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-slate-400 pt-2 border-t border-slate-100">
                  <a href={`tel:${member.phone}`} className="p-2 rounded-full bg-slate-50 hover:bg-red-50 hover:text-red-600 transition-colors" aria-label="Phone">
                    <Phone className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${member.email}`} className="p-2 rounded-full bg-slate-50 hover:bg-red-50 hover:text-red-600 transition-colors" aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link href="/projects" className="btn-dark">
              <span>Browse properties</span> <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Instagram Showcase */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-8 reveal-on-scroll">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-2">
                <svg className="w-3.5 h-3.5 fill-red-600" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> Social
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-outfit">
                Follow our work on Instagram
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-xs">
              Get an inside look at our latest architectural listings, client walkthroughs, and interior highlights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instaPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="p-3 border-b border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 fill-red-600" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> @traumproperties
                  </span>
                </div>
                <div className="h-52 overflow-hidden">
                  <img src={post.image} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3.5 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <div className="flex items-center gap-2">
                      <HeartIcon className="w-4 h-4 text-rose-500 fill-rose-500" />
                      <span className="font-semibold text-slate-800">{post.likes}</span>
                    </div>
                    <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <p className="text-slate-600 line-clamp-2">{post.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
