'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { journalArticles, Article } from '@/lib/data'
import {
  BookOpen, Search, Calendar, ChevronRight, ArrowRight,
  Sparkles, Tag, PlusCircle
} from 'lucide-react'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'resource', label: 'Resource' },
    { id: 'market', label: 'Market' },
    { id: 'articles', label: 'Articles' },
  ]

  const filteredArticles = useMemo(() => {
    return journalArticles.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCat =
        selectedCategory === 'all' ||
        item.category === selectedCategory ||
        item.tag.toLowerCase().includes(selectedCategory.toLowerCase())

      return matchesSearch && matchesCat
    })
  }, [searchTerm, selectedCategory])

  const topTwoFeatured = journalArticles.slice(0, 2)

  return (
    <div className="landing-page min-h-screen flex flex-col bg-[#f8fafc]">
      <SiteHeader />

      <main className="flex-1">
        {/* Dark Hero Header with Featured Cards */}
        <section className="bg-[#0f141d] text-white pt-16 pb-20 px-4 sm:px-8 rounded-b-[32px]">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" /> Editorial & Insights
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-outfit">
                News & articles
              </h1>
              <p className="text-slate-300 text-sm max-w-xl mx-auto font-light">
                Curated architectural stories, market analysis, tax structuring, and luxury real estate insights.
              </p>
            </div>

            {/* Top 2 Featured Article Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {topTwoFeatured.map((feat) => (
                <Link
                  href={`/blog/${feat.id}`}
                  key={feat.id}
                  className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feat.image}
                      alt={feat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {feat.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="flex items-center text-slate-400 text-xs gap-2">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" /> {feat.date}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {feat.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content: Sidebar + Latest Posts */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar (Search & Categories - Compact & Responsive) */}
            <aside className="lg:space-y-6">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                {/* Search */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Search</h3>
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search for articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Categories</h3>
                  {/* Horizontal Scrollable Pills on Mobile, Vertical Stack on Desktop */}
                  <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-1 lg:pb-0 no-scrollbar">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`shrink-0 lg:w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between gap-2.5 ${
                          selectedCategory === cat.id
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="flex items-center gap-2 whitespace-nowrap">
                          <Tag className="w-3.5 h-3.5 opacity-70" /> {cat.label}
                        </span>
                        {selectedCategory === cat.id && <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Articles List */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 font-outfit">Latest posts</h2>
                <p className="text-xs text-slate-500 mt-1">Explore our complete collection of insights.</p>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 p-8 space-y-2">
                  <p className="text-slate-600 text-sm font-medium">No articles matched your criteria.</p>
                  <button
                    onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                    className="text-xs font-semibold text-emerald-600 hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredArticles.map((art) => (
                    <article
                      key={art.id}
                      className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group flex flex-col sm:flex-row gap-6 p-4 sm:p-5"
                    >
                      <div className="sm:w-56 h-44 shrink-0 rounded-xl overflow-hidden relative">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                          {art.tag}
                        </span>
                      </div>

                      <div className="flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center text-xs text-slate-400 gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-emerald-600" /> {art.date}
                            </span>
                            <span>•</span>
                            <span>{art.readTime}</span>
                          </div>

                          <Link href={`/blog/${art.id}`}>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                              {art.title}
                            </h3>
                          </Link>

                          <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                            {art.excerpt}
                          </p>
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center">
                              {art.author.avatar}
                            </span>
                            <span className="text-xs text-slate-700 font-medium">{art.author.name}</span>
                          </div>

                          <Link
                            href={`/blog/${art.id}`}
                            className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
                          >
                            Read more <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
