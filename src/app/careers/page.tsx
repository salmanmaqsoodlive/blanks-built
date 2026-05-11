import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Careers | Blanks Built',
  description: 'Join the Blanks Built team. Open positions in construction, project management, and field operations.',
}

const openings = [
  {
    title: 'Senior Project Manager',
    type: 'Full-Time',
    dept: 'Operations',
    exp: '7+ years',
    desc: 'Lead complex commercial and residential projects from pre-construction through closeout. Manage subcontractors, client relationships, and project schedules.',
    requirements: ['7+ years GC project management', 'Commercial experience required', 'Proficient in Procore or similar', 'Strong communication skills'],
  },
  {
    title: 'Site Superintendent',
    type: 'Full-Time',
    dept: 'Field Operations',
    exp: '5+ years',
    desc: 'Oversee daily on-site operations, coordinate subcontractors, enforce safety protocols, and ensure quality standards are met throughout the build.',
    requirements: ['5+ years as superintendent', 'OSHA 30 certification', 'Strong subcontractor management', 'Reading blueprints required'],
  },
  {
    title: 'Estimator',
    type: 'Full-Time',
    dept: 'Pre-Construction',
    exp: '3+ years',
    desc: 'Prepare detailed cost estimates for commercial and residential projects. Solicit subcontractor bids and maintain accurate material and labor databases.',
    requirements: ['3+ years construction estimating', 'Experience with Planswift or Bluebeam', 'Strong math and analytical skills', 'Knowledge of local labor markets'],
  },
  {
    title: 'Field Carpenter / Framer',
    type: 'Full-Time',
    dept: 'Field Operations',
    exp: '2+ years',
    desc: 'Perform high-quality rough and finish carpentry work on residential and light commercial projects. Work alongside experienced crews in a professional environment.',
    requirements: ['2+ years carpentry experience', 'Own reliable transportation', 'Positive attitude and reliability', 'Willing to travel to job sites'],
  },
]

const perks = [
  { icon: '💰', label: 'Competitive Pay', desc: 'Above-market wages based on experience and performance.' },
  { icon: '🏥', label: 'Health Benefits', desc: 'Medical, dental, and vision coverage for full-time employees.' },
  { icon: '🔧', label: 'Quality Tools', desc: 'We provide tools and equipment. No nickel-and-diming.' },
  { icon: '📈', label: 'Growth Path', desc: 'Clear advancement tracks from field to management.' },
  { icon: '🏖️', label: 'Paid Time Off', desc: 'Vacation, sick leave, and paid holidays.' },
  { icon: '🏗️', label: 'Great Projects', desc: 'Work on exciting commercial and custom residential builds.' },
]

export default function Careers() {
  return (
    <main className="bg-concrete min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <span className="font-display text-gold text-xs tracking-[0.4em] uppercase block mb-4">Join the Team</span>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase font-900 tracking-wider leading-none">
            CAREERS
          </h1>
          <p className="text-cream/50 text-lg mt-6 max-w-2xl">
            We're always looking for experienced, motivated people who take pride in their craft.
          </p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {perks.map(p => (
              <div key={p.label} className="bg-concrete-800 border border-gold/10 p-5 text-center">
                <div className="text-3xl mb-2">{p.icon}</div>
                <div className="font-display text-cream text-sm uppercase tracking-wider mb-1">{p.label}</div>
                <div className="text-cream/40 text-xs">{p.desc}</div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl text-white uppercase font-900 tracking-wider mb-8">Open Positions</h2>
          <div className="space-y-4 mb-20">
            {openings.map(job => (
              <div key={job.title} className="bg-concrete-800 border border-gold/10 p-8 hover:border-gold/25 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-white text-xl uppercase font-900 tracking-wider">{job.title}</h3>
                    <div className="flex gap-3 mt-2">
                      <span className="text-gold text-xs font-display uppercase tracking-widest">{job.dept}</span>
                      <span className="text-cream/30 text-xs">·</span>
                      <span className="text-cream/40 text-xs">{job.type}</span>
                      <span className="text-cream/30 text-xs">·</span>
                      <span className="text-cream/40 text-xs">{job.exp} experience</span>
                    </div>
                  </div>
                  <Link href="/contact" className="px-5 py-2 bg-gold hover:bg-gold-light text-concrete-900 font-display text-xs font-700 uppercase tracking-widest transition-all">
                    Apply
                  </Link>
                </div>
                <p className="text-cream/50 mb-4 leading-relaxed">{job.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {job.requirements.map(r => (
                    <li key={r} className="flex items-center gap-2 text-cream/40 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-concrete-800 border border-gold/10 p-12 text-center">
            <div className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-3">Don't See Your Role?</div>
            <h3 className="font-display text-3xl text-white uppercase font-900 tracking-wider mb-4">Let's Talk Anyway</h3>
            <p className="text-cream/40 mb-8">If you're exceptional at what you do, we'll find a place for you. Send us your resume and tell us why you'd be a great fit.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-concrete-900 font-display text-sm font-700 uppercase tracking-widest transition-all">
              Send Your Resume
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
