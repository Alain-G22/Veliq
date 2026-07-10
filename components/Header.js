'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">V</span>
            </div>
            <span className="font-display font-bold text-xl text-secondary hidden sm:inline">
              Veliq
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/cars" className="text-secondary hover:text-primary transition-colors">
              Cars
            </Link>
            <Link href="/compare" className="text-secondary hover:text-primary transition-colors">
              Compare
            </Link>
            <Link href="/blog" className="text-secondary hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-secondary hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-secondary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/cars" className="text-secondary hover:text-primary">
              Cars
            </Link>
            <Link href="/compare" className="text-secondary hover:text-primary">
              Compare
            </Link>
            <Link href="/blog" className="text-secondary hover:text-primary">
              Blog
            </Link>
            <Link href="/about" className="text-secondary hover:text-primary">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
