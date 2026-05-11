'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categories = ['All', 'Residential', 'Commercial', 'Renovation']

const projects = [
  { id: 1, title: 'Lakewood Luxury Estate', cat: 'Residential', year: '2024', sqft: '4,200', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80' },
  { id: 2, title: 'Meridian Office Complex', cat: 'Commercial', year: '2024', sqft: '12,000', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80' },
  { id: 3, title: 'Park Hill Kitchen Remodel', cat: 'Renovation', year: '2023', sqft: '850', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80' },
  { id: 4, title: 'Ridgecrest Custom Home', cat: 'Residential', year: '2023', sqft: '3,600', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80' },
  { id: 5, title: 'Westfield Retail Center', cat: 'Commercial', year: '2023', sqft: '8,500', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80' },
  { id: 6, title: 'Birchwood Master Bath', cat: 'Renovation', year: '2022', sqft: '480', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80' },
  { id: 7, title: 'Hillcrest Modern Home', cat: 'Residential', year: '2022', sqft: '2,800', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80' },
  { id: 8, title: 'Harbor View Condos', cat: 'Commercial', year: '2022', sqft: '22,000', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active)

  return (
    <main className="bg-concrete min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <span className="font-display text-gold text-xs tracking-[0.4em] uppercase block mb-4">Our Work</span>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase font-900 tracking-wider leading-none">PORTFOLIO</h1>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 font-display text-xs uppercase tracking-widest font-700 transition-all ${
                  active === cat ? 'bg-gold text-concrete-900' : 'border border-gold/20 text-cream/50 hover:text-gold hover:border-gold/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group relative overflow-hidden cursor-pointer"
                  style={{ aspectRatio: '4/3' }}
                >
                  <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-concrete-900 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-concrete-900/0 group-hover:bg-concrete-900/30 transition-colors duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-gold text-xs font-display tracking-widest uppercase">{p.cat}</span>
                    <h3 className="text-white font-display text-xl uppercase tracking-wider font-700 mt-1">{p.title}</h3>
                    <div className="flex gap-3 mt-1">
                      <span className="text-cream/40 text-xs">{p.year}</span>
                      <span className="text-cream/40 text-xs">{p.sqft} sq ft</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-concrete-900 font-display text-sm font-700 uppercase tracking-widest transition-all">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
