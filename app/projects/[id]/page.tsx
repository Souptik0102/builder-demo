'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { projects, Project } from '@/lib/data'
import {
  MapPin, Maximize2, Bed, Bath, Car, ArrowRight,
  CheckCircle2, Key, Phone, Mail, ChevronRight, Building2,
  ShieldCheck, Sparkles, Send
} from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const project = projects.find((p) => p.id === resolvedParams.id)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 2)

  return (
    <div className="landing-page min-h-screen flex flex-col bg-[#f8fafc]">
      <SiteHeader />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/projects" className="hover:text-emerald-700">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold truncate">{project.title}</span>
        </div>

        {/* Gallery Grid Section (Matching Screenshot #3) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-md group h-[320px] sm:h-[420px]">
            <img
              src={project.gallery[0] || project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-slate-900/80 backdrop-blur-md text-white font-semibold text-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-emerald-400" /> {project.tag}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[320px] sm:h-[420px]">
            {project.gallery.slice(1, 5).map((imgUrl, idx) => (
              <div className="relative rounded-xl overflow-hidden shadow-sm group h-full" key={idx}>
                <img
                  src={imgUrl}
                  alt={`${project.title} gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Title & Location Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4" /> {project.address}
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 font-outfit">
            {project.title}
          </h1>
        </div>

        {/* Main Content Layout (2-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Details & Amenities */}
          <div className="lg:col-span-2 space-y-10">
            {/* Specs Bar */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-4 text-slate-700 text-sm">
              <div className="flex items-center gap-2 font-medium">
                <Maximize2 className="w-4 h-4 text-emerald-600" /> <span>{project.area}</span>
              </div>
              <div className="w-px h-6 bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2 font-medium">
                <Bed className="w-4 h-4 text-emerald-600" /> <span>{project.beds} Bedrooms</span>
              </div>
              <div className="w-px h-6 bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2 font-medium">
                <Bath className="w-4 h-4 text-emerald-600" /> <span>{project.baths} Bathrooms</span>
              </div>
              <div className="w-px h-6 bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2 font-medium">
                <Car className="w-4 h-4 text-emerald-600" /> <span>{project.cars} Parking Spaces</span>
              </div>
            </div>

            {/* About the property */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-outfit">About the property</h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
              <div className="pt-2 space-y-2.5">
                {project.bulletPoints.map((pt, i) => (
                  <div className="flex items-start gap-3 text-sm text-slate-700" key={i}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 font-outfit">Amenities</h2>
              <p className="text-xs text-slate-500">Curated features designed for high-conviction luxury living.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {project.amenities.map((item, i) => (
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 text-xs font-medium" key={i}>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Price & Inquiry Sidebar */}
          <div className="space-y-6">
            {/* Price Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-2">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Listing Price</span>
              <div className="text-3xl font-extrabold text-slate-900 font-outfit text-emerald-700">
                {project.price}
              </div>
              <p className="text-xs text-slate-500">Property {project.tag.toLowerCase()}</p>
            </div>

            {/* Inquiry Form Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">Get in touch to receive more info</h3>
              <p className="text-xs text-slate-500">Request detailed floor plans, pricing sheets, or private viewing times.</p>
              <form className="space-y-3 pt-1" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-slate-900 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  Request Information <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Agent Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={project.agent.avatar}
                  alt={project.agent.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{project.agent.name}</h4>
                  <p className="text-xs text-slate-500">{project.agent.role}</p>
                </div>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <a href={`tel:${project.agent.phone}`} className="hover:underline font-medium text-slate-900">{project.agent.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  <a href={`mailto:${project.agent.email}`} className="hover:underline">{project.agent.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Banner Section */}
        <section className="my-16 bg-[#0f141d] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-slate-800">
          <div className="space-y-4 max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Get in touch
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-outfit text-white tracking-tight">
              Explore your dream home today
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
              Connect with our private acquisitions team to unlock off-market listings and confidential pricing portfolios.
            </p>
            <div className="pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-emerald-400 font-bold text-xs px-6 py-3.5 rounded-full transition-all duration-200 shadow-md group"
                style={{ color: '#0f141d' }}
              >
                <span className="text-[#0f141d] group-hover:text-slate-950 font-bold">Start exploring</span>
                <ArrowRight className="w-4 h-4 text-[#0f141d] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* More Properties Section */}
        {relatedProjects.length > 0 && (
          <section className="my-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 font-outfit">More properties</h2>
              <Link href="/projects" className="text-xs font-semibold text-emerald-700 hover:underline inline-flex items-center gap-1">
                More properties <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((rel) => (
                <article className="property-v2-card group" key={rel.id}>
                  <div className="property-card-image-wrapper">
                    <img src={rel.image} alt={rel.title} className="property-card-img group-hover:scale-105 transition-transform duration-500" />
                    <div className="property-card-top-bar">
                      <span className="property-tag-badge">
                        <Key className="w-3.5 h-3.5" /> {rel.tag}
                      </span>
                      <span className="bg-slate-900/80 backdrop-blur-md text-white font-semibold text-xs px-3 py-1 rounded-full">
                        {rel.price}
                      </span>
                    </div>
                  </div>
                  <div className="property-card-info">
                    <Link href={`/projects/${rel.id}`}>
                      <h3 className="property-card-title hover:text-emerald-700 transition-colors">{rel.title}</h3>
                    </Link>
                    <div className="property-card-location">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span>{rel.address}</span>
                    </div>
                    <div className="property-card-divider" />
                    <div className="property-card-footer">
                      <div className="property-amenities">
                        <span className="amenity-item">
                          <Maximize2 className="w-3.5 h-3.5" /> {rel.area}
                        </span>
                        <span className="amenity-item">
                          <Bed className="w-3.5 h-3.5" /> {rel.beds}
                        </span>
                      </div>
                      <Link href={`/projects/${rel.id}`} className="property-contact-link">
                        View project <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
