import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { journalArticles } from '@/lib/data'
import {
  Calendar, Clock, ChevronRight, CheckCircle2,
  ArrowRight, Tag, BookOpen, Share2
} from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const article = journalArticles.find((a) => a.id === resolvedParams.id)

  if (!article) {
    notFound()
  }

  const relatedArticles = journalArticles.filter((a) => a.id !== article.id).slice(0, 2)

  return (
    <div className="landing-page min-h-screen flex flex-col bg-[#f8fafc]">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-emerald-700">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold truncate">{article.title}</span>
        </div>

        {/* Article Header Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 shadow-sm space-y-6 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
              <Tag className="w-3.5 h-3.5" /> {article.tag}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 font-outfit leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                {article.author.avatar}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{article.author.name}</h4>
                <p className="text-xs text-slate-500">{article.author.role}</p>
              </div>
            </div>

            <button className="p-2.5 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden shadow-md mb-8 h-[300px] sm:h-[420px]">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base mb-10">
          <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed border-l-4 border-emerald-500 pl-4 py-1 italic bg-emerald-50/50 rounded-r-xl">
            "{article.excerpt}"
          </p>

          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* Key Takeaways */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="mt-8 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600" /> Key Takeaways
              </h3>
              <ul className="space-y-2.5">
                {article.keyTakeaways.map((takeaway, i) => (
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800" key={i}>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="my-12 space-y-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  href={`/blog/${rel.id}`}
                  key={rel.id}
                  className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block">
                      {rel.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs text-slate-400">
                    <span>{rel.date}</span>
                    <span className="font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read story <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
