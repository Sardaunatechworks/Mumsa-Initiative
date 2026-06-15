import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, HeartPulse, TrendingUp, Star, Shield, Leaf, GraduationCap, Globe, Award } from 'lucide-react'
import { SEOHead, SectionHeader, PageHero } from '@components/ui'
import { cn } from '@lib/utils'
import { supabase } from '@lib/supabase'

const ICON_MAP = { BookOpen, HeartPulse, TrendingUp, Star, Shield, Leaf, GraduationCap, Globe, Award }

export default function ProgramsPage() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const { data, error } = await supabase
          .from('programs')
          .select('*')
          .eq('is_published', true)
          .order('order_index', { ascending: true })
        
        if (!error && data) {
          setPrograms(data)
        }
      } catch (err) {
        console.warn('Failed to fetch programs:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPrograms()
  }, [])

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

          {loading ? (
            <div className="flex justify-center py-20">
              <span className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : programs.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 max-w-xl mx-auto">
              <p className="text-slate-500 font-medium text-sm">No programs published at the moment.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {programs.map((prog, i) => {
                const Icon = ICON_MAP[prog.icon] || BookOpen
                return (
                  <motion.div
                    key={prog.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="card p-6 flex flex-col lg:flex-row gap-6 items-start"
                  >
                    {/* Icon */}
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
                          {(prog.subprograms || []).length} sub-programs
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-5">{prog.description}</p>

                      {(prog.subprograms && prog.subprograms.length > 0) && (
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
                      )}

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
          )}
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
