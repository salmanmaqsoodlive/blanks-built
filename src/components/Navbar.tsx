'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-concrete-900/95 backdrop-blur-xl border-b border-gold/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-900 text-white tracking-widest uppercase">BLANKS</span>
              <span className="font-display text-2xl font-900 text-gold tracking-widest uppercase -mt-1">BUILT</span>
            </div>
          </Link>

          {/* License badge desktop */}
          <div className="hidden xl:flex items-center gap-2 border border-gold/20 px-3 py-1 rounded-sm">
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="font-body text-gold/70 text-xs tracking-widest uppercase">Lic. #1079334</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-body text-sm font-medium tracking-wide transition-colors gold-underline ${
                  pathname === link.href ? 'text-gold' : 'text-cream/60 hover:text-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gold text-concrete-900 font-display text-sm font-700 uppercase tracking-widest hover:bg-gold-light transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-gold block" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-cream/60 block" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-gold block" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-concrete-900/98 backdrop-blur-2xl flex flex-col items-start justify-center px-12"
          >
            <div className="flex flex-col gap-6 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-5xl font-900 text-white/80 hover:text-gold transition-colors uppercase tracking-wider block border-b border-concrete-700 pb-4"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <span className="font-body text-gold/60 text-sm tracking-widest uppercase">Lic. #1079334</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
