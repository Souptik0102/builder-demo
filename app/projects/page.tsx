'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { projects, Project } from '@/lib/data'
import {
  Building2, MapPin, Maximize2, Bath, Bed, Car, ChevronRight,
  Search, SlidersHorizontal, Key, PlusCircle, ArrowRight
} from 'lucide-react'

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCity, setSelectedCity] = useState('all')
  const [selectedTag, setSelectedTag] = useState('all')
  const [maxPrice, setMaxPrice] = useState(15000000)

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCity = selectedCity === 'all' || item.city.toLowerCase().includes(selectedCity.toLowerCase())
      const matchesTag = selectedTag === 'all' || item.tag === selectedTag
      const matchesPrice = item.priceValue <= maxPrice

      return matchesSearch && matchesCity && matchesTag && matchesPrice
    })
  }, [searchTerm, selectedCity, selectedTag, maxPrice])

  return (
    <div className="landing-page min-h-screen flex flex-col bg-[#f5fbf8]">
      <SiteHeader />

      <main className="flex-1">
        {/* Dark Hero Header */}
        <section className="bg-[#0f141d] text-white pt-16 pb-24 px-4 sm:px-8 text-center rounded-b-[32px] relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" /> All Properties
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-outfit">
              Check on all properties<br />we have available
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light">
              Explore our curated portfolio of architectural lofts, luxury single-family residences, and oceanfront estates.
            </p>
          </div>
        </section>

        {/* Filter Bar (Floating Container) */}
        <section className="max-w-6xl mx-auto -mt-10 px-4 sm:px-6 relative z-10">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-100 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title, location or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-900 placeholder:text-slate-400"
              />
            </div>

            {/* City Dropdown */}
            <div className="w-full sm:w-48">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              >
                <option value="all">All Locations</option>
                <option value="san francisco">San Francisco</option>
                <option value="los angeles">Los Angeles</option>
                <option value="san diego">San Diego</option>
              </select>
            </div>

            {/* Tag Dropdown */}
            <div className="w-full sm:w-44">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              >
                <option value="all">All Status</option>
                <option value="For rent">For Rent</option>
                <option value="For sale">For Sale</option>
              </select>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <SlidersHorizontal className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-lg font-semibold text-slate-800">No properties found</h3>
              <p className="text-sm text-slate-500">Try adjusting your search terms or filters.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCity('all'); setSelectedTag('all'); }}
                className="inline-flex items-center text-xs font-semibold text-emerald-600 hover:underline pt-2"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <article className="property-v2-card group" key={project.id}>
                  <div className="property-card-image-wrapper">
                    <img src={project.image} alt={project.title} className="property-card-img group-hover:scale-105 transition-transform duration-500" />
                    <div className="property-card-top-bar">
                      <span className="property-tag-badge">
                        <Key className="w-3.5 h-3.5" /> {project.tag}
                      </span>
                      <span className="bg-slate-900/80 backdrop-blur-md text-white font-semibold text-xs px-3 py-1 rounded-full">
                        {project.price}
                      </span>
                    </div>
                  </div>
                  <div className="property-card-info">
                    <Link href={`/projects/${project.id}`}>
                      <h3 className="property-card-title hover:text-emerald-700 transition-colors">{project.title}</h3>
                    </Link>
                    <div className="property-card-location">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span>{project.address}</span>
                    </div>
                    <div className="property-card-divider" />
                    <div className="property-card-footer">
                      <div className="property-amenities">
                        <span className="amenity-item">
                          <Maximize2 className="w-3.5 h-3.5" /> {project.area}
                        </span>
                        <span className="amenity-item">
                          <Bed className="w-3.5 h-3.5" /> {project.beds}
                        </span>
                        <span className="amenity-item">
                          <Bath className="w-3.5 h-3.5" /> {project.baths}
                        </span>
                      </div>
                      <Link href={`/projects/${project.id}`} className="property-contact-link">
                        View project <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
