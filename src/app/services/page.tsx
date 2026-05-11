import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services | Blanks Built — Licensed General Contractor #1079334',
  description: 'Full-service general contracting — new construction, remodeling, commercial projects, and custom homes.',
}

const services = [
  {
    title: 'New Construction',
    desc: 'Ground-up builds from foundation to final finish. We handle every aspect of new construction — site prep, structural work, mechanical systems, and all finishes.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    features: ['Site preparation & excavation', 'Foundation & structural framing', 'MEP rough-in and finish', 'Interior finishes & millwork', 'Exterior cladding & roofing', 'Final inspections & punch list'],
  },
  {
    title: 'Commercial Projects',
    desc: 'Office buildings, retail spaces, restaurants, and industrial facilities built to the highest commercial standards, on time and within budget.',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80',
    features: ['Commercial tenant improvements', 'Ground-up commercial builds', 'ADA compliance', 'Fire suppression systems', 'Commercial mechanical systems', 'Project management'],
  },
  {
    title: 'Residential Remodeling',
    desc: 'Kitchen remodels, bathroom renovations, room additions, and whole-home transformations that elevate your space and increase your property value.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    features: ['Kitchen remodels', 'Bathroom renovations', 'Room additions', 'Master suite upgrades', 'Basement finishing', 'Whole-home renovations'],
  },
  {
    title: 'Custom Homes',
    desc: 'Your dream home, built exactly the way you envision it. We work closely with your architect or offer design-build services to bring your vision to life.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    features: ['Design-build services', 'Custom millwork & cabinetry', 'Premium material sourcing', 'Energy-efficient construction', 'Smart home integration', 'Luxury finishes'],
  },
]

export default function Services() {
  return (
    <main className="bg-concrete min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <span className="font-display text-gold text-xs tracking-[0.4em] uppercase block mb-4">What We Do</span>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase font-900 tracking-wider leading-none">
            SERVICES
          </h1>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((s, i) => (
              <div key={s.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden group">
                    <Image src={s.img} alt={s.title} width={600} height={450} className="object-cover w-full transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-concrete-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <span className="font-display text-gold/30 text-8xl font-900 block leading-none mb-2 -ml-2">0{i+1}</span>
                  <h2 className="font-display text-4xl text-white uppercase font-900 tracking-wider mb-4">{s.title}</h2>
                  <p className="text-cream/50 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-cream/60 text-sm">
                        <div className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-gold text-sm font-display uppercase tracking-widest hover:text-cream transition-colors">
                    Get a Quote
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-concrete-800 border border-gold/10 p-12">
            <div className="font-display text-gold text-sm font-700 uppercase tracking-widest mb-2">Licensed General Contractor #1079334</div>
            <h3 className="font-display text-3xl text-white uppercase font-900 tracking-wider mb-4">Ready to Build?</h3>
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
