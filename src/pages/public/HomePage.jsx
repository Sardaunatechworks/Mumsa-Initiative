import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  ArrowRight, Heart, ChevronDown, CheckCircle2,
  BookOpen, Users, MapPin, Handshake, Shield,
  Award, Globe, GraduationCap, HeartPulse, Sparkles,
  TrendingUp, FileText, ChevronRight, Bookmark
} from 'lucide-react'
import { SEOHead } from '@components/ui'
import { SITE, PROGRAMS, EXPERTISE_AREAS, GET_INVOLVED_OPTIONS } from '@lib/content'

// Animations
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

export default function HomePage() {
  const [activeExpertise, setActiveExpertise] = useState(0)
  
  const featuredProjects = [
    {
      title: 'Bring Back to School Campaign',
      donor: 'Global Education Fund',
      budget: 'NGN 18,500,000',
      location: 'Ningi & Toro LGAs, Bauchi State',
      duration: '12 Months',
      outcomes: 'Reintegrated 2,400 out-of-school children, rebuilt 4 rural learning spaces, and provided education kits.',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Women Digital Entrepreneurship Initiative',
      donor: 'AU Agenda 2063 Innovation Grant',
      budget: 'NGN 12,000,000',
      location: 'Bauchi Metropolitan',
      duration: '8 Months',
      outcomes: 'Trained 450 young women in digital marketing, finance, and online business setup with seed grants.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
    }
  ]

  const successStories = [
    {
      name: 'Amina Bello',
      title: 'From Out-of-School Child to Class Representative',
      text: '“I was out of school for two years because my family couldn’t afford the books. MUMSA gave me a uniform, bags, and support. Today I am back in school and I want to be a doctor to help other girls in my village.”',
      location: 'Ningi Community Beneficiary',
      image: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=800&q=80',
      metric: 'Back to School 2024'
    }
  ]

  const partners = [
    { name: 'UNDP', type: 'UN Agencies' },
    { name: 'WHO', type: 'UN Agencies' },
    { name: 'UNCCD', type: 'UN Agencies' },
    { name: 'EU Initiatives', type: 'Foundations' },
    { name: 'Federal Ministry of Education', type: 'Government' },
    { name: 'Bauchi State Govt', type: 'Government' },
    { name: 'Plan International', type: 'NGOs' },
  ]

  const publications = [
    {
      title: 'MUMSA Annual Impact Report 2025',
      type: 'Annual Report',
      desc: 'An institutional overview of social investments, program milestones, and auditing transparency.',
      link: '/resources'
    },
    {
      title: 'Youth TVET & Employability Policy Brief',
      type: 'Policy Brief',
      desc: 'Research-backed roadmap for addressing youth unemployment through digital TVET pathways.',
      link: '/resources'
    }
  ]

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
              <Sparkles className="w-3.5 h-3.5 text-secondary-600" />
              Youth-Led Development Agency · Founded 2020
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
            {[
              {
                title: 'Women',
                desc: 'Unlocking economic independence, leadership potential, and access to financial systems for mothers and young girls.',
                image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
                border: 'card-green-top'
              },
              {
                title: 'Youth',
                desc: 'Equipping young minds with technical, vocational, digital, and entrepreneurship capabilities to tackle unemployment.',
                image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80',
                border: 'card-blue-top'
              },
              {
                title: 'Children',
                desc: 'Supporting basic education access, nutritional support, and safety guidelines for vulnerable and out-of-school kids.',
                image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80',
                border: 'card-black-top'
              },
              {
                title: 'Underserved Communities',
                desc: 'Strengthening health systems, environmental climate resilience, and infrastructure inside marginalized rural areas.',
                image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
                border: 'card-green-top'
              }
            ].map((target) => (
              <motion.div
                key={target.title}
                className={`card ${target.border} overflow-hidden flex flex-col`}
                {...fadeUp}
              >
                <div className="h-48 overflow-hidden border-b border-brand-border">
                  <img
                    src={target.image}
                    alt={target.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-2">{target.title}</h3>
                    <p className="text-xs text-slate-gray leading-relaxed">{target.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
                    className={`w-full text-left p-4 rounded border transition-all flex items-center justify-between group ${
                      activeExpertise === idx
                        ? 'bg-secondary-50 border-secondary-600 text-secondary-600 font-bold'
                        : 'bg-white border-brand-border text-slate-gray hover:bg-slate-50 hover:border-black'
                    }`}
                  >
                    <span className="text-sm font-semibold">{exp.title}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      activeExpertise === idx ? 'translate-x-1' : 'group-hover:translate-x-0.5'
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
            {featuredProjects.map((project, idx) => {
              const borderClass = idx % 2 === 0 ? 'card-green-top' : 'card-blue-top';
              return (
                <motion.div
                  key={project.title}
                  className={`card ${borderClass} flex flex-col justify-between`}
                  {...fadeUp}
                >
                  <div className="h-64 overflow-hidden border-b border-brand-border">
                    <img
                      src={project.image}
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
                          <p className="text-xs font-bold text-navy mt-0.5">{project.donor}</p>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded border border-brand-border">
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Location</p>
                          <p className="text-xs font-bold text-navy mt-0.5 truncate">{project.location}</p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-gray mb-4 leading-relaxed">
                        {project.outcomes}
                      </p>
                    </div>
                    
                    <Link to="/projects" className="btn btn-secondary btn-sm w-full flex items-center justify-center gap-1.5 mt-auto">
                      View Project Details <ArrowRight className="w-4 h-4 text-white" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
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

          {successStories.map((story) => (
            <motion.div
              key={story.name}
              className="card card-green-top p-8 lg:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              {...fadeUp}
            >
              <div className="lg:col-span-4">
                <div className="w-full h-72 rounded overflow-hidden border border-brand-border">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-8">
                <span className="badge badge-blue mb-4">{story.metric}</span>
                <blockquote className="text-h3 text-navy font-bold italic leading-relaxed mb-6">
                  {story.text}
                </blockquote>
                <div>
                  <p className="font-extrabold text-navy text-sm">{story.name}</p>
                  <p className="text-xs text-slate-gray mt-0.5">{story.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                className="bg-slate-50 p-6 rounded border border-brand-border text-center hover:bg-white transition-colors"
                {...fadeUp}
              >
                <p className="text-xs font-bold text-navy">{partner.name}</p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded bg-slate-200/50 text-[10px] text-slate-gray font-semibold uppercase tracking-wider">
                  {partner.type}
                </span>
              </motion.div>
            ))}
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
            {publications.map((pub, idx) => {
              const borderClass = idx % 2 === 0 ? 'card-blue-top' : 'card-black-top';
              return (
                <motion.div
                  key={pub.title}
                  className={`card ${borderClass} p-6 flex flex-col justify-between h-full`}
                  {...fadeUp}
                >
                  <div>
                    <span className="badge badge-blue mb-3">{pub.type}</span>
                    <h3 className="text-sm font-bold text-navy mb-2">{pub.title}</h3>
                    <p className="text-xs text-slate-gray leading-relaxed mb-4">
                      {pub.desc}
                    </p>
                  </div>
                  <Link to={pub.link} className="text-xs font-bold text-secondary-600 hover:underline flex items-center gap-1 mt-auto">
                    Download Document (PDF) <FileText className="w-4 h-4 text-primary-500" />
                  </Link>
                </motion.div>
              )
            })}
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
