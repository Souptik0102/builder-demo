'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { faqList } from '@/lib/data'
import { useScrollReveal } from '@/lib/utils'
import { HelpCircle, Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react'

export default function FAQPage() {
  useScrollReveal()
  const [openId, setOpenId] = useState<string>('faq-1')

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id))
  }

  return (
    <div className="landing-page min-h-screen flex flex-col bg-[#f8fafc]">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-16">
        {/* Title Header (Matching Screenshot #5) */}
        <div className="text-center space-y-4 mb-12 reveal-on-scroll">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Support & FAQs
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 font-outfit tracking-tight">
            Frequently asked<br />questions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto font-light">
            Everything you need to know about listing, purchasing, off-market advisory, and international acquisitions with HomeIQ.
          </p>
        </div>

        {/* Accordion Container Card (Matching Screenshot #5) */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-100 shadow-sm space-y-2 reveal-on-scroll">
          {faqList.map((item) => {
            const isOpen = openId === item.id

            return (
              <div
                key={item.id}
                className={`border-b border-slate-100 last:border-b-0 transition-colors ${
                  isOpen ? 'bg-slate-50/50 rounded-2xl p-4' : 'p-4'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between text-left font-bold text-slate-900 text-base sm:text-lg focus:outline-none gap-4 group"
                >
                  <span className="group-hover:text-emerald-700 transition-colors font-outfit">
                    {item.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed pr-8 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-[#0f141d] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 reveal-on-scroll">
          <MessageCircle className="w-8 h-8 text-emerald-400 mx-auto" />
          <h2 className="text-2xl font-bold font-outfit text-white">Still have questions?</h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
            Our private acquisitions desk is available 24/7 to answer your specific property inquiries.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-6 py-3 rounded-full transition-colors"
            >
              Contact Us Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
