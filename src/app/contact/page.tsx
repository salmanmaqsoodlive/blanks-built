'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-concrete min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <span className="font-display text-gold text-xs tracking-[0.4em] uppercase block mb-4">Let's Build Together</span>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase font-900 tracking-wider leading-none mb-4">
            CONTACT US
          </h1>
          <p className="text-cream/50 text-lg max-w-xl">
            Ready to start your project? We'd love to hear about it. Reach out and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-display text-gold text-xs tracking-widest uppercase block mb-2">Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full bg-concrete-800 border border-gold/15 focus:border-gold/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-display text-gold text-xs tracking-widest uppercase block mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full bg-concrete-800 border border-gold/15 focus:border-gold/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-display text-gold text-xs tracking-widest uppercase block mb-2">Phone</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        className="w-full bg-concrete-800 border border-gold/15 focus:border-gold/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm"
                        placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className="font-display text-gold text-xs tracking-widest uppercase block mb-2">Project Type</label>
                      <select value={form.projectType} onChange={e => setForm({...form, projectType: e.target.value})}
                        className="w-full bg-concrete-800 border border-gold/15 focus:border-gold/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm">
                        <option value="">Select type</option>
                        <option>New Construction</option>
                        <option>Remodel</option>
                        <option>Commercial</option>
                        <option>Custom Home</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-display text-gold text-xs tracking-widest uppercase block mb-2">Budget Range</label>
                    <select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}
                      className="w-full bg-concrete-800 border border-gold/15 focus:border-gold/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm">
                      <option value="">Select budget</option>
                      <option>Under $50,000</option>
                      <option>$50,000 - $150,000</option>
                      <option>$150,000 - $500,000</option>
                      <option>$500,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-gold text-xs tracking-widest uppercase block mb-2">Tell Us About Your Project *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full bg-concrete-800 border border-gold/15 focus:border-gold/40 text-cream px-4 py-3.5 outline-none transition-colors text-sm resize-none"
                      placeholder="Describe your project, timeline, location..." />
                  </div>
                  <button type="submit" className="w-full py-5 bg-gold hover:bg-gold-light text-concrete-900 font-display font-900 uppercase tracking-widest text-sm transition-all hover:-translate-y-0.5">
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-concrete-800 border border-gold/20 p-12 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-3 font-900">Message Received</h3>
                  <p className="text-cream/50">We'll be in touch within 24 hours to discuss your project.</p>
                </motion.div>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-concrete-800 border border-gold/10 p-6">
                <div className="font-display text-gold text-xs tracking-widest uppercase mb-3">License</div>
                <div className="text-white font-display text-2xl font-900">#1079334</div>
                <div className="text-cream/40 text-sm mt-1">Licensed General Contractor</div>
              </div>
              <div className="bg-concrete-800 border border-gold/10 p-6">
                <div className="font-display text-gold text-xs tracking-widest uppercase mb-3">Email</div>
                <a href="mailto:info@blanksbuilt.com" className="text-cream/70 hover:text-gold transition-colors text-sm">info@blanksbuilt.com</a>
              </div>
              <div className="bg-concrete-800 border border-gold/10 p-6">
                <div className="font-display text-gold text-xs tracking-widest uppercase mb-3">Response Time</div>
                <div className="text-white text-sm">Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
