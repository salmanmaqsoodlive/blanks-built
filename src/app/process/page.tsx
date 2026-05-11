import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Process | Blanks Built',
  description: 'How Blanks Built approaches every construction project — from consultation through final delivery.',
}

const phases = [
  {
    num: '01',
    title: 'Initial Consultation',
    timeframe: 'Week 1',
    desc: 'We begin with an in-depth consultation to understand the full scope of your project. No assumptions, no rushed estimates — we listen first.',
    deliverables: ['Project brief', 'Site assessment', 'Feasibility review', 'Preliminary timeline'],
  },
  {
    num: '02',
    title: 'Design & Engineering',
    timeframe: 'Weeks 2–6',
    desc: 'Our team reviews architectural plans, engineers structural solutions, and selects materials that balance performance with budget. All permit applications handled.',
    deliverables: ['Structural review', 'Material specifications', 'Permit applications', 'Subcontractor selection'],
  },
  {
    num: '03',
    title: 'Proposal & Agreement',
    timeframe: 'Week 7',
    desc: 'You receive a transparent, itemized proposal with no surprises. Our contracts are clear on scope, schedule, and payment milestones.',
    deliverables: ['Itemized cost proposal', 'Project schedule', 'Payment milestone plan', 'Signed agreement'],
  },
  {
    num: '04',
    title: 'Site Mobilization',
    timeframe: 'Week 8',
    desc: 'We mobilize crews, establish site safety protocols, coordinate material deliveries, and begin work on schedule — not when it\'s convenient.',
    deliverables: ['Site prep & safety setup', 'First material deliveries', 'Crew scheduling', 'Kickoff walk-through'],
  },
  {
    num: '05',
    title: 'Active Construction',
    timeframe: 'Project Duration',
    desc: 'Weekly progress updates keep you informed without overwhelming you. We maintain clean sites, manage subs tightly, and document everything.',
    deliverables: ['Weekly progress reports', 'Photo documentation', 'Change order tracking', 'Regular owner briefings'],
  },
  {
    num: '06',
    title: 'Quality Control & Closeout',
    timeframe: 'Final Phase',
    desc: 'Internal quality inspection followed by a formal owner walkthrough. Every punch list item is resolved before we consider a project complete.',
    deliverables: ['Quality inspection', 'Punch list resolution', 'Final walkthrough', 'Warranty package'],
  },
]

export default function Process() {
  return (
    <main className="bg-concrete min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <span className="font-display text-gold text-xs tracking-[0.4em] uppercase block mb-4">How We Work</span>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase font-900 tracking-wider leading-none">
            THE PROCESS
          </h1>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-cream/50 text-lg max-w-2xl">
              Six phases. Zero ambiguity. From first call to final key handoff — here's exactly what working with Blanks Built looks like.
            </p>
          </div>

          <div className="space-y-0">
            {phases.map((phase, i) => (
              <div key={phase.num} className={`grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-gold/10 py-12 ${i === 0 ? 'border-t' : ''}`}>
                <div className="lg:col-span-1">
                  <span className="font-display text-gold/30 text-7xl font-900 leading-none">{phase.num}</span>
                </div>
                <div className="lg:col-span-5 lg:px-8">
                  <div className="flex items-center gap-4 mb-3">
                    <h2 className="font-display text-2xl text-white uppercase font-900 tracking-wider">{phase.title}</h2>
                    <span className="text-gold text-xs font-display uppercase tracking-widest bg-gold/10 px-3 py-1">{phase.timeframe}</span>
                  </div>
                  <p className="text-cream/50 leading-relaxed">{phase.desc}</p>
                </div>
                <div className="lg:col-span-6 lg:pl-8 mt-4 lg:mt-0">
                  <div className="grid grid-cols-2 gap-3">
                    {phase.deliverables.map(d => (
                      <div key={d} className="flex items-center gap-2 text-cream/40 text-sm">
                        <div className="w-1.5 h-1.5 bg-gold/50 rounded-full flex-shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-concrete-800 border border-gold/10 p-12 text-center">
            <div className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-3">Licensed General Contractor #1079334</div>
            <h3 className="font-display text-3xl text-white uppercase font-900 tracking-wider mb-4">Start with a Consultation</h3>
            <p className="text-cream/40 mb-8">The first conversation is free. Let's talk about what you want to build.</p>
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
