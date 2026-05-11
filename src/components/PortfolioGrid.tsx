'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Project {
  title: string
  category: string
  location: string
  sqft: string
  img: string
  tag: string
}

interface Props {
  projects: Project[]
  filters: string[]
}

export default function PortfolioGrid({ projects, filters }: Props) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)}
            className={`px-5 py-2 font-display text-xs font-700 uppercase tracking-widest transition-all ${
              active === f ? 'bg-gold text-concrete-900' : 'bg-concrete-800 border border-gold/15 text-cream/50 hover:border-gold/30'
            }`}>
            {f}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden group">
              <Image src={p.img} alt={p.title} width={500} height={380} className="object-cover w-full h-60 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-concrete via-concrete/20 to-transparent" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-gold text-xs font-display uppercase tracking-widest mb-1">{p.category} · {p.tag}</div>
                <h3 className="font-display text-white text-lg font-700 uppercase tracking-wider mb-0.5">{p.title}</h3>
                <div className="text-cream/40 text-xs">{p.location} · {p.sqft}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
