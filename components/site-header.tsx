'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Building2, ChevronRight, Info, BookOpen, PhoneCall,
  Menu, X, HelpCircle, ArrowRight
} from 'lucide-react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="site-header-wrapper">
      <header className={open ? 'site-header has-open-menu' : 'site-header'}>
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          HomeIQ<span>²</span>
        </Link>

        <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <Link
            href="/projects"
            className={isActive('/projects') ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            <span className="mobile-nav-label">
              <Building2 className="w-4 h-4 text-emerald-400" /> Projects
            </span>
            <ChevronRight className="mobile-nav-arrow" />
          </Link>
          <Link
            href="/blog"
            className={isActive('/blog') ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            <span className="mobile-nav-label">
              <BookOpen className="w-4 h-4 text-emerald-400" /> Our Blogs
            </span>
            <ChevronRight className="mobile-nav-arrow" />
          </Link>
          <Link
            href="/faq"
            className={isActive('/faq') ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            <span className="mobile-nav-label">
              <HelpCircle className="w-4 h-4 text-emerald-400" /> FAQ
            </span>
            <ChevronRight className="mobile-nav-arrow" />
          </Link>
          <Link
            href="/about"
            className={isActive('/about') ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            <span className="mobile-nav-label">
              <Info className="w-4 h-4 text-emerald-400" /> About
            </span>
            <ChevronRight className="mobile-nav-arrow" />
          </Link>
        </nav>

        <div className="header-actions social-links" aria-label="Social media links">
          <Link href="/projects" className="start-exploring-btn">
            Start exploring <span className="arrow-circle"><ArrowRight className="w-3.5 h-3.5" /></span>
          </Link>
        </div>

        <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </div>
  )
}
