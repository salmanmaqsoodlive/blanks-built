'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 2200, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const portfolioItems = [
  { id: 1, title: 'Lakewood Luxury Estate', category: 'Residential', year: '2024', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80' },
  { id: 2, title: 'Meridian Office Complex', category: 'Commercial', year: '2024', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80' },
  { id: 3, title: 'Oak Hill Kitchen Remodel', category: 'Renovation', year: '2023', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80' },
  { id: 4, title: 'Westfield Custom Home', category: 'Residential', year: '2023', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80' },
]

const services = [
  { num: '01', title: 'New Construction', desc: 'Ground-up builds executed with precision from foundation to finish.' },
  { num: '02', title: 'Commercial Projects', desc: 'Office, retail, and industrial builds engineered for durability and function.' },
  { num: '03', title: 'Residential Remodel', desc: 'Kitchen, bath, whole-home transformations that elevate everyday living.' },
  { num: '04', title: 'Custom Homes', desc: 'Bespoke residences built around your vision, timeline, and lifestyle.' },
  { num: '05', title: 'Project Management', desc: 'End-to-end oversight ensuring on-time, on-budget delivery every time.' },
  { num: '06', title: 'Design-Build', desc: 'One integrated team from concept through final walkthrough.' },
]

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We meet, listen, and understand your vision and budget.' },
  { step: '02', title: 'Design', desc: 'Our team creates detailed plans and renderings.' },
  { step: '03', title: 'Planning', desc: 'Permits, timelines, and contractor scheduling finalized.' },
  { step: '04', title: 'Build', desc: 'Construction begins with regular updates and walkthroughs.' },
  { step: '05', title: 'Deliver', desc: 'Final inspection, punch list, and handover.' },
]

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className="overflow-x-hidden bg-concrete">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-concrete-900 via-concrete-900/70 to-concrete-900/30" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-gold" />
              <span className="font-display text-gold text-xs tracking-[0.4em] uppercase font-600">Licensed Contractor • #1079334</span>
            </motion.div>

            {['WE BUILD', 'EXTRAORDINARY', 'THINGS.'].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.div
                  initial={{ y: 120 }}
                  animate={loaded ? { y: 0 } : {}}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.18 }}
                >
                  <h1 className={`font-display text-6xl sm:text-8xl md:text-[7rem] leading-none uppercase tracking-widest font-900 ${
                    i === 1 ? 'text-gold-gradient' : 'text-white'
                  }`}>
                    {word}
                  </h1>
                </motion.div>
              </div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-light text-concrete-900 font-display text-sm font-700 uppercase tracking-widest transition-all hover:-translate-y-0.5">
                View Our Work
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-cream/20 text-cream/80 hover:text-cream hover:border-gold/50 font-display text-sm font-600 uppercase tracking-widest transition-all">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-concrete-700 border-y border-gold/10 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            {[
              { val: 12, suf: '+', label: 'Years of Excellence' },
              { val: 200, suf: '+', label: 'Projects Completed' },
              { val: 100, suf: '%', label: 'Licensed & Insured' },
              { val: 5, suf: '★', label: 'Star Rated' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl text-gold font-900">
                  <AnimatedCounter target={s.val} suffix={s.suf} />
                </div>
                <div className="text-cream/40 text-xs tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="font-display text-gold text-xs tracking-[0.4em] uppercase block mb-3">What We Do</span>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-widest font-900 leading-none">
              WHAT WE<br /><span className="text-gold-gradient">BUILD</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete-700">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-concrete p-8 group cursor-pointer hover:bg-concrete-800 transition-colors"
              >
                <div className="text-[5rem] font-display font-900 text-gold/6 absolute top-4 right-4 leading-none select-none">{s.num}</div>
                <span className="font-display text-gold/40 text-xs tracking-widest mb-4 block">{s.num}</span>
                <h3 className="font-display text-2xl text-white uppercase tracking-wider font-700 mb-3 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-cream/40 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-gold/0 group-hover:text-gold/70 transition-all duration-300 text-xs font-display tracking-widest uppercase">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-24 bg-concrete-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <span className="font-display text-gold text-xs tracking-[0.4em] uppercase block mb-3">Featured Work</span>
              <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider font-900">OUR WORK<br />SPEAKS</h2>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-gold font-display text-xs tracking-widest uppercase hover:text-cream transition-colors">
              View All
              <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group overflow-hidden cursor-pointer"
                style={{ aspectRatio: i === 0 ? '16/10' : '4/3' }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-concrete-900 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-gold text-xs font-display tracking-widest uppercase">{item.category}</span>
                  <h3 className="text-white font-display text-xl uppercase tracking-wider font-700 mt-1">{item.title}</h3>
                  <span className="text-cream/40 text-xs">{item.year}</span>
                </div>
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Construction team"
                width={600}
                height={500}
                className="object-cover w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-6">
                <div className="font-display text-concrete-900 text-3xl font-900">LIC.</div>
                <div className="font-display text-concrete-900 text-lg font-700">#1079334</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-display text-gold text-xs tracking-[0.4em] uppercase block mb-4">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider font-900 leading-none mb-6">
                BUILT ON<br />
                <span className="text-gold-gradient">INTEGRITY</span>
              </h2>
              <p className="text-cream/50 leading-relaxed mb-6">
                Blanks Built has been delivering premium construction services for over a decade. We combine meticulous craftsmanship with transparent communication to deliver projects that exceed expectations — on time and on budget.
              </p>
              <p className="text-cream/50 leading-relaxed mb-8">
                As a fully licensed and insured general contractor (#1079334), we hold ourselves to the highest standards of quality, integrity, and professionalism in everything we build.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 text-gold font-display text-sm uppercase tracking-widest hover:text-cream transition-colors">
                Our Story
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-concrete-800 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider font-900">HOW WE BUILD</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center relative"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 w-full h-px bg-gold/20" />
                )}
                <div className="relative w-12 h-12 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-gold text-sm font-700">{step.step}</span>
                </div>
                <h3 className="font-display text-white uppercase tracking-wider text-sm font-700 mb-2">{step.title}</h3>
                <p className="text-cream/40 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-concrete relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80" alt="bg" fill className="object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest font-900 mb-4">
              READY TO BUILD?
            </h2>
            <p className="text-cream/40 text-lg mb-10">Let's turn your vision into reality.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-concrete-900 font-display text-sm font-700 uppercase tracking-widest transition-all hover:-translate-y-0.5">
              Start Your Project
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
