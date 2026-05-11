import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Testimonials | Blanks Built',
  description: 'What clients say about working with Blanks Built — Licensed General Contractor #1079334.',
}

const testimonials = [
  {
    quote: "Blanks Built handled our 12,000 sq ft office complex start to finish. On time, on budget, and the quality was exceptional. Our team moved in without a single punch list item outstanding.",
    name: 'Thomas Adler',
    role: 'President, Adler Property Group',
    project: 'Riverside Office Complex',
    value: '$2.4M',
  },
  {
    quote: "We've used other contractors before. The difference with Blanks Built is communication. Weekly reports, no surprises, and they flagged a structural concern before it became a problem. That's the team you want.",
    name: 'Rachel Kim',
    role: 'Development Director, Keystone REIT',
    project: 'Multi-Tenant Retail Strip',
    value: '$1.8M',
  },
  {
    quote: "Our kitchen remodel came out exactly as planned — actually better. The crew was respectful of our home, the work was clean, and the finish quality rivals anything I've seen at this price point.",
    name: 'Steven & Laura Park',
    role: 'Homeowners',
    project: 'Full Kitchen Renovation',
    value: '$148,000',
  },
  {
    quote: "Custom home build from the ground up. Blanks Built was the most organized contractor I've worked with in 20 years of development. The schedules were kept and the craftsmanship speaks for itself.",
    name: 'Warren Hughes',
    role: 'Real Estate Developer',
    project: '4,800 sq ft Custom Home',
    value: '$890,000',
  },
  {
    quote: "We're a repeat client — three phases of our warehouse expansion. Consistent quality every time. We won't use anyone else.",
    name: 'Carol Voss',
    role: 'VP of Operations, Voss Distribution',
    project: 'Warehouse Expansion (3 Phases)',
    value: '$4.1M total',
  },
  {
    quote: "As an architect, I'm picky about who builds my designs. Blanks Built reads the plans, asks the right questions, and executes with precision. That's rare.",
    name: 'Derek Fontaine, AIA',
    role: 'Principal, Fontaine Architecture',
    project: 'Multiple Projects',
    value: 'Ongoing',
  },
]

export default function Testimonials() {
  return (
    <main className="bg-concrete min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <span className="font-display text-gold text-xs tracking-[0.4em] uppercase block mb-4">Client Stories</span>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase font-900 tracking-wider leading-none">
            TESTIMONIALS
          </h1>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-concrete-800 border border-gold/10 p-8 hover:border-gold/25 transition-all">
                <blockquote className="text-cream/60 leading-relaxed text-lg italic mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-gold/10 pt-5 flex justify-between items-end">
                  <div>
                    <div className="font-display text-white font-700 uppercase tracking-wider">{t.name}</div>
                    <div className="text-cream/40 text-sm mt-0.5">{t.role}</div>
                    <div className="text-gold text-xs font-display uppercase tracking-widest mt-2">{t.project}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold/60 text-xs font-display uppercase tracking-wider">Project Value</div>
                    <div className="text-cream/80 font-display text-sm font-700">{t.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-concrete-800 border border-gold/10 p-12 text-center">
            <div className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-3">Lic. #1079334</div>
            <h3 className="font-display text-3xl text-white uppercase font-900 tracking-wider mb-4">Build With Us</h3>
            <p className="text-cream/40 mb-8">Contact us for a free project consultation and estimate.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-concrete-900 font-display text-sm font-700 uppercase tracking-widest transition-all">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
