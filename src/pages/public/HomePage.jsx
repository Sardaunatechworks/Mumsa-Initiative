import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  ArrowRight, Heart, ChevronDown, CheckCircle2,
  BookOpen, Users, MapPin, Handshake, Shield,
  Award, Globe, GraduationCap, HeartPulse, Sparkles,
  TrendingUp, FileText, ChevronRight, Bookmark
} from 'lucide-react'
import { SEOHead } from '@components/ui'
import { SITE, PROGRAMS, EXPERTISE_AREAS, GET_INVOLVED_OPTIONS } from '@lib/content'
import { supabase } from '@lib/supabase'

// Animations
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

export default function HomePage() {
  const [activeExpertise, setActiveExpertise] = useState(0)
  const [featuredProjects, setFeaturedProjects] = useState([])
  const [successStories, setSuccessStories] = useState([])
  const [partners, setPartners] = useState([])
  const [publications, setPublications] = useState([])
  const [focusAreas, setFocusAreas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const [projRes, storyRes, partRes, pubRes, focusRes] = await Promise.all([
          supabase.from('projects').select('*').eq('is_published', true).order('created_at', { ascending: false }).limit(2),
          supabase.from('success_stories').select('*').eq('is_published', true).order('created_at', { ascending: false }).limit(1),
          supabase.from('partners').select('*').eq('is_published', true).order('order_index', { ascending: true }).limit(8),
          supabase.from('publications').select('*').eq('is_published', true).order('year', { ascending: false }).limit(2),
          supabase.from('focus_areas').select('*').eq('is_published', true).order('order_index', { ascending: true })
        ])

        if (!projRes.error) setFeaturedProjects(projRes.data || [])
        if (!storyRes.error) setSuccessStories(storyRes.data || [])
        if (!partRes.error) setPartners(partRes.data || [])
        if (!pubRes.error) setPublications(pubRes.data || [])
        if (!focusRes.error) setFocusAreas(focusRes.data || [])
      } catch (err) {
        console.warn('Failed to load dynamic home data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchHomeData()
  }, [])

  return (
    <>
      <SEOHead
        title="MUMSA Initiative — Minimal Development Platform"
        description="MUMSA Initiative is a youth-led nonprofit empowering women, youth, and children through inclusive education, skills development, healthcare, climate action, and digital innovation."
      />

      {/* ================= SECTION 1: IMMERSIVE HERO ================= */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center bg-white text-navy overflow-hidden noise-overlay border-b border-brand-border"
        aria-label="Hero Introduction"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,101,192,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(8,200,75,0.05),transparent_50%)]" />
        </div>

        <div className="container relative z-10 pt-32 pb-20 flex flex-col justify-between min-h-[calc(100vh-80px)]">
          <div className="max-w-5xl mt-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-brand-border text-xs font-semibold uppercase tracking-wider text-secondary-600 mb-6"
            >
              Youth-led Nonprofit Organization Founded in 2020
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-display text-navy mb-8"
            >
              Building <span className="text-primary-600">Inclusive Communities</span> Through Innovation and Livelihoods
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-body-large text-slate-gray max-w-3xl mb-12 leading-relaxed"
            >
              We empower women, youth, children, and underserved populations through inclusive education, vocational TVET skills, healthcare, climate action, and digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/about" className="btn btn-primary btn-lg">
                Explore Our Model <ArrowRight className="w-5 h-5 text-navy" />
              </Link>
              <Link to="/donate" className="btn btn-secondary btn-lg">
                Support Our Mission <Heart className="w-5 h-5 text-white" />
              </Link>
            </motion.div>
          </div>

          {/* Hero Integrated Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-brand-border pt-12 mt-16"
          >
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-primary-600">35,000+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-semibold">Lives Impacted</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-navy">23,000+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-semibold">Children Supported</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-navy">40+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-semibold">Communities Reached</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-extrabold text-secondary-600">25+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-semibold">Partnerships</p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-navy/30 animate-bounce pointer-events-none hidden md:block">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ================= SECTION 2: IMPACT AT A GLANCE ================= */}
      <section id="impact-at-a-glance" className="section bg-white text-navy">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-label mb-3 justify-center">Our Footprint</div>
            <h2 className="text-h2 text-navy mb-6">Real Change, Measurable Footprints</h2>
            <p className="text-body-large text-slate-gray">
              Our operations span multiple local government areas across Bauchi State and the wider Northern Nigeria region, addressing deep-rooted socio-economic disparities through data-backed development models.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { value: '35,000+', label: 'Beneficiaries Reached' },
              { value: '23,000+', label: 'Children Supported' },
              { value: '3,500+', label: 'Youth & Women Trained' },
              { value: '40+', label: 'Communities Reached' },
              { value: '25+', label: 'Strategic Partnerships' },
              { value: '350+', label: 'Volunteers Annually' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-slate-50 p-6 rounded-xl border border-brand-border text-center shadow-card"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              >
                <div className="text-2xl md:text-3xl font-extrabold text-secondary-600 mb-2">{stat.value}</div>
                <div className="text-2xs font-bold text-slate-gray uppercase tracking-wider leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: WHO WE SERVE ================= */}
      <section id="who-we-serve" className="section bg-white text-navy border-t border-brand-border">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-label mb-3">Our Focus</div>
            <h2 className="text-h2">Empowering Vulnerable Populations</h2>
            <p className="text-body-large text-slate-gray mt-4">
              We design human-centered interventions that address the unique challenges of specific target demographics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.length === 0 && !loading ? (
              <div className="col-span-full text-center py-10 bg-slate-50 border border-dashed border-slate-200 rounded-xl">
                <p className="text-sm text-slate-500 font-medium">No focus areas listed at this time.</p>
              </div>
            ) : (
              (focusAreas.length > 0 ? focusAreas : [
                {
                  title: 'Women',
                  description: 'Unlocking economic independence, leadership potential, and access to financial systems for mothers and young girls.',
                  image_url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
                  border: 'card-green-top'
                },
                {
                  title: 'Youth',
                  description: 'Equipping young minds with technical, vocational, digital, and entrepreneurship capabilities to tackle unemployment.',
                  image_url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80',
                  border: 'card-blue-top'
                },
                {
                  title: 'Children',
                  description: 'Supporting basic education access, nutritional support, and safety guidelines for vulnerable and out-of-school kids.',
                  image_url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80',
                  border: 'card-black-top'
                },
                {
                  title: 'Underserved Communities',
                  description: 'Strengthening health systems, environmental climate resilience, and infrastructure inside marginalized rural areas.',
                  image_url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
                  border: 'card-green-top'
                }
              ]).map((target) => (
                <motion.div
                  key={target.title}
                  className={`card ${target.border || 'card-green-top'} overflow-hidden flex flex-col`}
                  {...fadeUp}
                >
                  <div className="h-48 overflow-hidden border-b border-brand-border bg-slate-50">
                    {target.image_url && (
                      <img
                        src={target.image_url}
                        alt={target.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-navy mb-2">{target.title}</h3>
                      <p className="text-xs text-slate-gray leading-relaxed">{target.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: AREAS OF EXPERTISE ================= */}
      <section id="expertise" className="section bg-white text-navy border-t border-brand-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <div className="section-label mb-3">Sectors of Action</div>
              <h2 className="text-h2">Areas of Core Expertise</h2>
              <p className="text-body-large text-slate-gray my-6">
                Our multi-sectoral expertise enables MUMSA Initiative to design systems-level solutions, delivering measurable outcomes across Northern Nigeria.
              </p>

              <div className="space-y-3">
                {EXPERTISE_AREAS.slice(0, 5).map((exp, idx) => (
                  <button
                    key={exp.title}
                    onClick={() => setActiveExpertise(idx)}
                    className={`w-full text-left p-4 rounded border transition-all flex items-center justify-between group ${activeExpertise === idx
                        ? 'bg-secondary-50 border-secondary-600 text-secondary-600 font-bold'
                        : 'bg-white border-brand-border text-slate-gray hover:bg-slate-50 hover:border-black'
                      }`}
                  >
                    <span className="text-sm font-semibold">{exp.title}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeExpertise === idx ? 'translate-x-1' : 'group-hover:translate-x-0.5'
                      }`} />
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div className="lg:col-span-7 card card-blue-top p-6 flex flex-col self-start w-full" {...fadeUp}>
              <div>
                <div className="w-10 h-10 rounded bg-secondary-100 flex items-center justify-center mb-4 text-secondary-600">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{EXPERTISE_AREAS[activeExpertise]?.title}</h3>
                <p className="text-sm text-slate-gray leading-relaxed">
                  {EXPERTISE_AREAS[activeExpertise]?.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-brand-border flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">MUMSA Capability</span>
                <Link to="/about#expertise" className="text-xs font-bold text-secondary-600 hover:underline flex items-center gap-1">
                  View Full Framework <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: FEATURED PROGRAMS ================= */}
      <section id="featured-programs" className="section bg-white text-navy border-t border-brand-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="section-label mb-3">Our Core Pillars</div>
              <h2 className="text-h2">Featured Flagship Programs</h2>
            </div>
            <Link to="/programs" className="btn btn-outline">
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.slice(0, 3).map((prog, idx) => {
              const borderClass = idx % 3 === 0 ? 'card-green-top' : idx % 3 === 1 ? 'card-blue-top' : 'card-black-top';
              return (
                <motion.div
                  key={prog.id}
                  className={`card ${borderClass} p-6 flex flex-col justify-between`}
                  {...fadeUp}
                >
                  <div>
                    <div className="w-10 h-10 rounded bg-slate-100 text-navy flex items-center justify-center mb-4 font-bold">
                      {prog.title.charAt(0)}
                    </div>
                    <h3 className="text-sm font-bold text-navy mb-2">{prog.title}</h3>
                    <p className="text-xs text-slate-gray mb-4 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  <div className="border-t border-brand-border pt-4 mt-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Sub-Programs</p>
                    <ul className="space-y-1.5 mb-4">
                      {prog.subprograms.map((sub) => (
                        <li key={sub} className="flex items-center gap-2 text-xs text-slate-gray">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/programs/${prog.id}`} className="text-xs font-bold text-secondary-600 hover:underline inline-flex items-center gap-1">
                      Read Program Strategy <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: FEATURED PROJECTS ================= */}
      <section id="featured-projects" className="section bg-white text-navy border-t border-brand-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="section-label mb-3">Portfolio</div>
              <h2 className="text-h2">Featured Field Projects</h2>
            </div>
            <Link to="/projects" className="btn btn-outline">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 col-span-full">
                <p className="text-slate-500 font-medium text-sm">No featured projects available at the moment.</p>
              </div>
            ) : (
              featuredProjects.map((project, idx) => {
                const borderClass = idx % 2 === 0 ? 'card-green-top' : 'card-blue-top';
                return (
                  <motion.div
                    key={project.id || project.title}
                    className={`card ${borderClass} flex flex-col justify-between`}
                    {...fadeUp}
                  >
                    <div className="h-64 overflow-hidden border-b border-brand-border">
                      <img
                        src={project.cover_url || project.image_url || 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80'}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="badge badge-green mb-3">Active Project</span>
                        <h3 className="text-sm font-bold text-navy mb-3">{project.title}</h3>

                        <div className="grid grid-cols-2 gap-3 mb-4 text-2xs">
                          <div className="bg-slate-50 p-2.5 rounded border border-brand-border">
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Donor / Sponsor</p>
                            <p className="text-xs font-bold text-navy mt-0.5">{project.donor || 'MUMSA Partners'}</p>
                          </div>
                          <div className="bg-slate-50 p-2.5 rounded border border-brand-border">
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Location</p>
                            <p className="text-xs font-bold text-navy mt-0.5 truncate">{project.location || 'Bauchi State'}</p>
                          </div>
                        </div>

                        <p className="text-xs text-slate-gray mb-4 leading-relaxed line-clamp-3">
                          {project.outcomes || project.description}
                        </p>
                      </div>

                      <Link to="/projects" className="btn btn-secondary btn-sm w-full flex items-center justify-center gap-1.5 mt-auto">
                        View Project Details <ArrowRight className="w-4 h-4 text-white" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })
            )}
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: SUCCESS STORIES ================= */}
      <section id="success-stories" className="section bg-white text-navy border-t border-brand-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3">Voices of Change</div>
            <h2 className="text-h2">Human-Centered Stories</h2>
          </div>

          {successStories.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 max-w-2xl mx-auto">
              <p className="text-slate-500 font-medium text-sm">No success stories available at the moment.</p>
            </div>
          ) : (
            successStories.map((story) => (
              <motion.div
                key={story.id || story.name || story.title}
                className="card card-green-top p-8 lg:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                {...fadeUp}
              >
                <div className="lg:col-span-4">
                  <div className="w-full h-72 rounded overflow-hidden border border-brand-border bg-white flex items-center justify-center">
                    <img
                      src={story.image_url || 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=800&q=80'}
                      alt={story.title || story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <span className="badge badge-blue mb-4">{story.metrics || 'Impact Story'}</span>
                  <blockquote className="text-h3 text-navy font-bold italic leading-relaxed mb-6">
                    {story.content || story.text}
                  </blockquote>
                  <div>
                    <p className="font-extrabold text-navy text-sm">{story.author || story.name || 'Beneficiary'}</p>
                    <p className="text-xs text-slate-gray mt-0.5">{story.category || 'MUMSA Beneficiary'}</p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* ================= SECTION 8: PARTNERSHIP ECOSYSTEM ================= */}
      <section id="partnerships" className="section bg-white text-navy border-t border-brand-border">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-label mb-3">Institutional Trust</div>
            <h2 className="text-h2">Partnership Ecosystem</h2>
            <p className="text-body-large text-slate-gray mt-4">
              Collaborating across government agency levels, academic groups, and global entities to expand community programs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {partners.length === 0 ? (
              <div className="text-center py-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200 col-span-full">
                <p className="text-slate-500 font-medium text-xs">No partner logos published at the moment.</p>
              </div>
            ) : (
              partners.map((partner) => (
                <motion.div
                  key={partner.id || partner.name}
                  className="bg-slate-50 p-4 rounded border border-brand-border h-24 flex items-center justify-center hover:bg-white hover:border-slate-400 transition-colors"
                  {...fadeUp}
                >
                  {partner.logo_url ? (
                    <img src={partner.logo_url} alt={partner.name} className="max-h-full max-w-full object-contain" />
                  ) : (
                    <div className="text-center">
                      <p className="text-xs font-bold text-navy truncate max-w-[100px]">{partner.name}</p>
                      <span className="inline-block mt-1 px-1.5 py-0.5 rounded bg-slate-200/50 text-[9px] text-slate-gray font-semibold uppercase tracking-wider">
                        {partner.category || 'Partner'}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: PUBLICATIONS & REPORTS ================= */}
      <section id="reports" className="section bg-white text-navy border-t border-brand-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="section-label mb-3">Knowledge Sharing</div>
              <h2 className="text-h2">Publications & Policy Briefs</h2>
            </div>
            <Link to="/resources" className="btn btn-outline">
              Open Library <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 col-span-full">
                <p className="text-slate-500 font-medium text-sm">No publications available at the moment.</p>
              </div>
            ) : (
              publications.map((pub, idx) => {
                const borderClass = idx % 2 === 0 ? 'card-blue-top' : 'card-black-top';
                return (
                  <motion.div
                    key={pub.id || pub.title}
                    className={`card ${borderClass} p-6 flex flex-col justify-between h-full`}
                    {...fadeUp}
                  >
                    <div>
                      <span className="badge badge-blue mb-3">{pub.type}</span>
                      <h3 className="text-sm font-bold text-navy mb-2">{pub.title}</h3>
                      <p className="text-xs text-slate-gray leading-relaxed mb-4 line-clamp-3">
                        {pub.description || pub.desc}
                      </p>
                    </div>
                    {pub.file_url ? (
                      <a href={pub.file_url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-secondary-600 hover:underline flex items-center gap-1 mt-auto">
                        Download Document (PDF) <FileText className="w-4 h-4 text-primary-500" />
                      </a>
                    ) : (
                      <Link to="/resources" className="text-xs font-bold text-secondary-600 hover:underline flex items-center gap-1 mt-auto">
                        View Resources <FileText className="w-4 h-4 text-primary-500" />
                      </Link>
                    )}
                  </motion.div>
                )
              })
            )}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: GET INVOLVED ================= */}
      <section id="get-involved" className="section bg-[#000000] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(8,200,75,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(21,101,192,0.1),transparent_50%)]" />

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-label text-primary-400 mb-3 justify-center">
              <span className="w-6 h-px bg-current inline-block" />
              Take Action
            </div>
            <h2 className="text-h2 text-white">Join the Community Movement</h2>
            <p className="text-body-large text-slate-300 mt-4">
              Explore engagement channels: volunteer, partner, intern, or support child programs financially.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {GET_INVOLVED_OPTIONS.map((opt, idx) => {
              const borderClass = idx % 3 === 0 ? 'card-green-top' : idx % 3 === 1 ? 'card-blue-top' : 'card-black-top';
              return (
                <motion.div
                  key={opt.title}
                  className={`card ${borderClass} p-5 flex flex-col justify-between hover:border-black transition-colors`}
                  {...fadeUp}
                >
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-2">{opt.title}</h3>
                    <p className="text-xs text-slate-gray leading-relaxed mb-4">
                      {opt.description}
                    </p>
                  </div>
                  <Link to={opt.href} className="text-xs font-bold text-secondary-600 hover:underline flex items-center gap-1 mt-auto">
                    Learn More <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
