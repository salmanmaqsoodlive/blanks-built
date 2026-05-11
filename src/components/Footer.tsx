import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-concrete-900 border-t border-gold/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-display text-4xl font-900 text-white tracking-widest uppercase leading-none">BLANKS</span>
              <span className="font-display text-4xl font-900 text-gold tracking-widest uppercase leading-none">BUILT</span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-6 max-w-xs">
              Premium general contracting services built on integrity, delivered with precision. Licensed and insured for your peace of mind.
            </p>
            <div className="flex items-center gap-3 border border-gold/25 px-4 py-3 w-fit">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <div>
                <div className="text-gold font-display text-sm font-700 uppercase tracking-widest">Licensed Contractor</div>
                <div className="text-cream/40 text-xs">License #1079334</div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-gold text-sm uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Home','About','Services','Portfolio','Process','Testimonials','Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-cream/50 text-sm hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-gold text-sm uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3">
              {['New Construction','Commercial Projects','Residential Remodel','Custom Builds','Project Management','Design-Build'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-cream/50 text-sm hover:text-gold transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-sm">
            © {new Date().getFullYear()} Blanks Built. <span className="text-gold/50">License #1079334</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-cream/30 text-xs hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-cream/30 text-xs hover:text-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
