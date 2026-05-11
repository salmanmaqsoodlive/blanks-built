import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | Blanks Built — Licensed General Contractor #1079334',
  description: 'Learn the story behind Blanks Built — premium general contracting built on integrity, quality, and precision.',
}

export default function About() {
  return (
    <main className="bg-concrete min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <span className="font-display text-gold text-xs tracking-[0.4em] uppercase block mb-4">Our Story</span>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase font-900 tracking-wider leading-none mb-6">
            BUILT ON<br /><span className="text-gold-gradient">INTEGRITY</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-cream/60 text-lg leading-relaxed mb-6">
                Blanks Built was founded on a simple but powerful belief: that exceptional construction requires exceptional integrity. Every project we take on is a reflection of our name — and we take that seriously.
              </p>
              <p className="text-cream/60 leading-relaxed mb-6">
                With over a decade of experience in residential and commercial construction, our team has built a reputation for delivering projects that exceed expectations — on time, on budget, and with uncompromising quality.
              </p>
              <p className="text-cream/60 leading-relaxed mb-8">
                As a fully licensed general contractor (License #1079334), we hold ourselves to the highest professional and ethical standards in the industry.
              </p>
              <div className="flex items-center gap-4 border border-gold/25 p-5">
                <div>
                  <div className="font-display text-gold text-sm font-700 uppercase tracking-widest">Licensed General Contractor</div>
                  <div className="text-cream/40 text-xs mt-1">California License #1079334</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Construction team"
                width={600}
                height={500}
                className="object-cover w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-6 text-center">
                <div className="font-display text-concrete-900 text-4xl font-900">12+</div>
                <div className="font-display text-concrete-700 text-sm font-700 uppercase">Years</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {[
              { icon: '🏆', title: 'Quality', desc: 'We use premium materials and employ skilled craftspeople who take pride in their work.' },
              { icon: '🤝', title: 'Integrity', desc: 'Transparent communication and honest dealings at every stage of every project.' },
              { icon: '⏱', title: 'Reliability', desc: 'We deliver what we promise, when we promise it — no excuses.' },
              { icon: '💡', title: 'Innovation', desc: 'Modern techniques and materials to build better, smarter, and more efficiently.' },
            ].map((v) => (
              <div key={v.title} className="bg-concrete-800 p-6 border border-gold/10 hover:border-gold/20 transition-colors">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display text-gold text-sm uppercase tracking-wider font-700 mb-2">{v.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-concrete-900 font-display text-sm font-700 uppercase tracking-widest transition-all hover:-translate-y-0.5">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
