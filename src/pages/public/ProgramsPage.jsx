import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, HeartPulse, TrendingUp, Star, Shield, Leaf } from 'lucide-react'
import { SEOHead, SectionHeader, PageHero } from '@components/ui'
import { PROGRAMS } from '@lib/content'
import { cn } from '@lib/utils'

const ICON_MAP = { BookOpen, HeartPulse, TrendingUp, Star, Shield, Leaf }

export default function ProgramsPage() {
  return (
    <>
      <SEOHead
        title="Programs"
        description="Explore MUMSA Initiative's six integrated program areas: Education & Skills, Health & Wellbeing, Youth Economic Empowerment, Women Empowerment, Human Rights & Social Inclusion, and Climate Action."
      />

      <PageHero
        label="Our Programs"
        title="Programs That Transform Lives and Communities"
        subtitle="Six integrated program areas designed to address the most pressing development challenges facing communities across Nigeria."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Programs' }]}
      />

      <section className="section bg-white" aria-label="Programs listing">
        <div className="container">
          <SectionHeader
            label="What We Do"
            title="Integrated, Community-Driven Programs"
            subtitle="Each program is designed with communities, grounded in evidence, and linked to national and global development frameworks."
            centered
            className="mb-14"
          />

          <div className="space-y-8">
            {PROGRAMS.map((prog, i) => {
              const Icon = ICON_MAP[prog.icon] || BookOpen
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card p-6 flex flex-col lg:flex-row gap-6 items-start"
                >
                  {/* Icon / number */}
                  <div className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0',
                    prog.color === 'primary' ? 'bg-primary-600' : 'bg-secondary-900'
                  )}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-xl font-bold text-slate-900">{prog.title}</h2>
                      <span className="badge-slate flex-shrink-0">
                        {prog.subprograms.length} sub-programs
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-5">{prog.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      {prog.subprograms.map((sp) => (
                        <div key={sp} className={cn(
                          'flex items-center gap-2 p-3 rounded-lg text-sm font-medium',
                          prog.color === 'primary' ? 'bg-primary-50 text-primary-700' : 'bg-secondary-50 text-secondary-700'
                        )}>
                          <span className={cn('w-2 h-2 rounded-full flex-shrink-0', prog.color === 'primary' ? 'bg-primary-500' : 'bg-secondary-600')} />
                          {sp}
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/programs/${prog.id}`}
                      id={`programs-detail-${prog.id}`}
                      className={cn('btn-sm flex items-center gap-1.5 w-fit', prog.color === 'primary' ? 'btn-primary' : 'btn-secondary')}
                    >
                      Explore Program
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-50" aria-label="Program CTA">
        <div className="container">
          <div className="bg-gradient-primary rounded-3xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Partner With Us to Scale These Programs</h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              We are always looking for strategic partners, donors, and collaborators to expand program reach and deepen community impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partnerships" className="btn-white btn-lg" id="programs-partner-btn">Become a Partner</Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 btn-lg" id="programs-contact-btn">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
