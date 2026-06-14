import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SEOHead, PageHero } from '@components/ui'
import { CORE_VALUES, STRATEGIC_GOALS, EXPERTISE_AREAS, THEORY_OF_CHANGE } from '@lib/content'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="Our Story & Governance"
        description="Learn about the MUMSA Initiative story, vision, mission, core values, theory of change, strategic goals, and areas of expertise as an international development partner."
      />

      <PageHero
        label="Institutional Profile"
        title="Building Inclusive Communities Through Innovation, Opportunity, and Sustainable Development"
        subtitle="MUMSA Initiative is a youth-led nonprofit organization founded in 2020 to empower women, youth, children, and underserved communities through inclusive education, technical and vocational skills development, healthcare, climate action, digital innovation, and social protection. We design and implement community-driven solutions that address local challenges while contributing to national development priorities, the Sustainable Development Goals (SDGs), the African Union Agenda 2063, and other global development frameworks."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      {/* ===== OUR STORY & TIMELINE ===== */}
      <section id="story" className="section bg-white text-navy">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div className="lg:col-span-5" {...fadeUp}>
              <div className="section-label mb-3">Our History</div>
              <h2 className="text-h2 mb-6">From Grassroots Action to National Impact</h2>
              <p className="text-body-large text-slate-gray mb-6 leading-relaxed">
                MUMSA Initiative was established by passionate young leaders who recognized the persistent barriers preventing women, children, and young people from accessing quality education, healthcare, economic opportunities, and sustainable livelihoods. <br /> <b r />
                What began as a community-driven effort to support vulnerable populations has evolved into a growing nonprofit organization implementing innovative programs across education, youth employment, health, climate action, digital literacy, and women’s empowerment. <br /> <br />
                Through strategic partnerships and community ownership, we have reached over 35,000 beneficiaries, supported 23,000 children to access education, trained thousands of youth and women in employability and entrepreneurship skills, and contributed to national and global conversations on climate action, health, and sustainable development.
              </p>

            </motion.div>

            {/* Vertical timeline */}
            <div className="lg:col-span-7 space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {[
                { year: '2020', title: 'Founding Year', desc: 'MUMSA Initiative founded in Bauchi State, Nigeria, by Sulaiman Ashiru and young leaders.' },
                { year: '2021', title: 'Grassroots Launch', desc: 'First community education and health outreach programs started in Ningi LGA.' },
                { year: '2022', title: 'Scaling Operations', desc: 'Reached 10,000+ beneficiaries; established strategic partnerships with local development platforms.' },
                { year: '2023', title: 'Expanding Pillars', desc: 'Incorporated climate action, digital literacy, and specialized vocational training programs.' },
                { year: '2024', title: 'National Recognition', desc: 'Over 35,000 beneficiaries reached; recognized by UNCCD, WHO, and international entities.' }
              ].map((item) => (
                <motion.div key={item.year} className="flex gap-6 relative" {...fadeUp}>
                  <div className="w-10 h-10 rounded-full bg-secondary-600 text-white flex items-center justify-center font-bold text-xs z-10 flex-shrink-0">
                    {item.year.slice(2)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wide">{item.year}</span>
                    <h3 className="text-h4 text-navy text-sm font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-gray leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION, MISSION, & VALUES ===== */}
      <section id="vision" className="section bg-light-bg text-navy">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div className="bg-white p-8 rounded-xl border border-brand-border shadow-card" {...fadeUp}>
              <div className="section-label mb-3">Vision Statement</div>
              <h3 className="text-h3 text-navy mb-4">A Future Where Everyone Has the Opportunity to Thrive</h3>
              <p className="text-small text-slate-gray leading-relaxed">
                To create an inclusive society where every woman, youth, and child thrives through access to education, healthcare, economic empowerment, and sustainable livelihoods.
              </p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-xl border border-brand-border shadow-card" {...fadeUp}>
              <div className="section-label mb-3">Mission Statement</div>
              <h3 className="text-h3 text-navy mb-4">Empowering Communities for Sustainable Change</h3>
              <p className="text-small text-slate-gray leading-relaxed">
                To empower vulnerable and marginalized communities with knowledge, opportunities, and support systems that build resilience, dignity, and socio-economic independence.
              </p>
            </motion.div>
          </div>

          {/* Core Values grid */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label mb-3">Operating Principles</div>
            <h2 className="text-h2">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((val) => (
              <motion.div
                key={val.title}
                className="bg-white p-6 rounded-xl border border-brand-border text-center shadow-card flex flex-col items-center justify-between"
                {...fadeUp}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary-100 text-secondary-600 flex items-center justify-center mb-4 font-bold text-sm">
                  {val.title.charAt(0)}
                </div>
                <h3 className="text-xs font-bold text-navy mb-2">{val.title}</h3>
                <p className="text-2xs text-slate-gray leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY WE EXIST ===== */}
      <section id="why" className="section bg-white text-navy">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div className="lg:col-span-6" {...fadeUp}>
              <div className="section-label mb-3">The Problem Matrix</div>
              <h2 className="text-h2 mb-6">Creating Opportunities Where They Are Needed Most</h2>
              <p className="text-body-large text-slate-gray mb-6">
                Across Nigeria, millions of women, children, and young people continue to face barriers to quality education, employment, healthcare, digital access, and climate resilience.
              </p>
              <p className="text-small text-slate-gray mb-6 leading-relaxed">
                Poverty, unemployment, social exclusion, gender inequality, limited access to skills training, and environmental challenges continue to hinder development outcomes for many communities.
              </p>
              <p className="text-small text-slate-gray leading-relaxed">
                MUMSA Initiative exists to bridge these gaps by empowering people with the knowledge, skills, resources, and opportunities needed to build resilient lives and sustainable communities. We believe every person deserves the opportunity to learn, grow, earn, and contribute meaningfully to society.
              </p>
            </motion.div>

            <motion.div className="lg:col-span-6 bg-slate-50 p-8 rounded-2xl border border-brand-border" {...fadeUp}>
              <h3 className="text-h4 text-navy mb-6">Our Response Architecture</h3>
              <div className="space-y-4">
                {[
                  'Bridging basic education accessibility for girls and children',
                  'Equipping marginalized youth with market-driven TVET skills',
                  'Strengthening local maternal and community health systems',
                  'Promoting environmental climate-smart farming models',
                  'Creating pathways to digital inclusion and literacy'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-navy leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== THEORY OF CHANGE DIAGRAM ===== */}
      <section id="theory" className="section bg-navy text-white relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-label text-primary-400 mb-3 justify-center">
              <span className="w-6 h-px bg-current inline-block" />
              Theory of Change
            </div>
            <h2 className="text-h2 text-white">Empowering People. Strengthening Systems.</h2>
            <p className="text-body-large text-slate-300 mt-4">
              "We believe that when women, youth, children, and vulnerable populations gain access to quality education, healthcare, skills development, economic opportunities, and supportive systems, they become empowered to improve their lives and contribute to sustainable community development."

            </p>
          </div>

          {/* Interactive/Editorial Flow Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative before:absolute before:hidden before:lg:block before:top-1/2 before:-translate-y-1/2 before:left-0 before:right-0 before:h-0.5 before:bg-white/10">
            {/* Box 1 */}
            <motion.div className="bg-white/5 border border-white/10 rounded-xl p-6 relative z-10 hover:bg-white/10 transition-colors" {...fadeUp}>
              <span className="badge badge-blue mb-4">Investments</span>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">What We Invest In</h3>
              <ul className="space-y-2.5">
                {THEORY_OF_CHANGE.investments.map((item) => (
                  <li key={item} className="text-2xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 2 */}
            <motion.div className="bg-white/5 border border-white/10 rounded-xl p-6 relative z-10 hover:bg-white/10 transition-colors" {...fadeUp}>
              <span className="badge badge-green mb-4">Activities</span>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">What We Do</h3>
              <ul className="space-y-2.5">
                {THEORY_OF_CHANGE.activities.map((item) => (
                  <li key={item} className="text-2xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 3 */}
            <motion.div className="bg-white/5 border border-white/10 rounded-xl p-6 relative z-10 hover:bg-white/10 transition-colors" {...fadeUp}>
              <span className="badge badge-slate mb-4">Changes</span>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">What Changes</h3>
              <ul className="space-y-2.5">
                {THEORY_OF_CHANGE.changes.map((item) => (
                  <li key={item} className="text-2xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Box 4 */}
            <motion.div className="bg-primary-500 rounded-xl p-6 relative z-10 text-navy" {...fadeUp}>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-navy text-white text-[10px] font-bold uppercase tracking-wider mb-4">Goal</span>
              <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-4">Long-Term Impact</h3>
              <p className="text-xs font-semibold leading-relaxed">
                {THEORY_OF_CHANGE.impact}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STRATEGIC GOALS ===== */}
      <section id="goals" className="section bg-white text-navy">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3">Our Roadmap</div>
            <h2 className="text-h2">Strategic Goals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {STRATEGIC_GOALS.map((goal) => (
              <motion.div
                key={goal.number}
                className="bg-slate-50 p-6 rounded-xl border border-brand-border shadow-card flex flex-col justify-between"
                {...fadeUp}
              >
                <div>
                  <span className="text-3xl font-extrabold text-slate-200 block mb-2">{goal.number}</span>
                  <h3 className="text-xs font-bold text-navy mb-2">{goal.title}</h3>
                  <p className="text-2xs text-slate-gray leading-relaxed">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AREAS OF EXPERTISE ===== */}
      <section id="expertise" className="section bg-light-bg text-navy">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3">Capabilities</div>
            <h2 className="text-h2">Areas of Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_AREAS.map((area) => (
              <motion.div
                key={area.title}
                className="bg-white p-8 rounded-xl border border-brand-border shadow-card"
                {...fadeUp}
              >
                <h3 className="text-xs font-bold text-navy mb-3">{area.title}</h3>
                <p className="text-2xs text-slate-gray leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
