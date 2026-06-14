import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Award, UserCheck, Heart } from 'lucide-react'
import { SEOHead, SectionHeader, PageHero } from '@components/ui'
import { VOLUNTEER_ROLES, BOARD_COMMITTEES, ADVISORY_AREAS } from '@lib/content'
import { cn } from '@lib/utils'
import { supabase } from '@lib/supabase'

function PersonCard({ name, role, bio, size = 'default' }) {
  return (
    <div className={cn('card p-6 flex flex-col gap-4 h-full', size === 'large' && 'p-8')}>
      {/* Avatar */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md">
          {name.split(' ').slice(-1)[0][0]}
        </div>
        <div>
          <h3 className={cn('font-bold text-slate-900 leading-tight', size === 'large' ? 'text-lg' : 'text-base')}>
            {name}
          </h3>
          <p className="text-xs font-semibold text-primary-600 mt-0.5 leading-snug">{role}</p>
        </div>
      </div>
      {bio && <p className="text-sm text-slate-500 leading-relaxed flex-1">{bio}</p>}
    </div>
  )
}

export default function TeamPage() {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .eq('is_published', true)
          .order('order_index', { ascending: true })
        
        if (!error && data) {
          setTeam(data)
        }
      } catch (err) {
        console.warn('Failed to fetch team members:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchTeam()
  }, [])

  const leadership = team.filter((m) => m.category === 'leadership')
  const board      = team.filter((m) => m.category === 'board')
  const advisory   = team.filter((m) => m.category === 'advisory')
  const staff      = team.filter((m) => m.category === 'staff')
  const volunteers = team.filter((m) => m.category === 'volunteer')

  return (
    <>
      <SEOHead
        title="Our Team"
        description="Meet the MUMSA Initiative leadership team, board of trustees, advisory board, staff, and volunteers — the people driving positive change across Nigerian communities."
      />

      <PageHero
        label="Our People"
        title="Meet the Team Driving Change"
        subtitle="At MUMSA Initiative, our strength lies in our people — visionary leaders, experienced professionals, dedicated volunteers, and passionate changemakers."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Our Team' }]}
      />

      {/* Intro */}
      <section className="section bg-white" aria-label="Team introduction">
        <div className="container max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Together, we bring expertise in education, healthcare, youth development, climate action, governance, digital innovation, research, and community engagement to create lasting impact across Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* ===== LEADERSHIP TEAM ===== */}
      <section id="leadership" className="section bg-slate-50" aria-label="Leadership team">
        <div className="container">
          <SectionHeader
            label="Leadership Team"
            title="Strategic Leadership for Sustainable Impact"
            subtitle="Our senior leadership brings together diverse expertise to guide MUMSA Initiative's strategy, programs, and partnerships."
            className="mb-12"
          />

          {loading ? (
            <div className="flex justify-center py-10"><span className="w-8 h-8 border-3 border-primary-600 border-t-transparent rounded-full animate-spin" /></div>
          ) : leadership.length === 0 ? (
            <div className="text-center py-10 bg-slate-100/50 rounded-2xl border border-dashed border-slate-200 max-w-2xl mx-auto shadow-sm">
              <p className="text-slate-500 font-medium text-sm">No leadership members listed at this time.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {leadership.map((person, i) => (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <PersonCard name={person.name} role={person.role} bio={person.bio} size="large" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== BOARD OF TRUSTEES ===== */}
      <section id="board" className="section bg-white" aria-label="Board of trustees">
        <div className="container">
          <SectionHeader
            label="Board of Trustees"
            title="Providing Governance, Oversight, and Strategic Direction"
            subtitle="The Board of Trustees serves as the highest governing body of MUMSA Initiative, providing strategic leadership, policy direction, fiduciary oversight, and accountability."
            className="mb-12"
          />

          {loading ? (
            <div className="flex justify-center py-10"><span className="w-8 h-8 border-3 border-primary-600 border-t-transparent rounded-full animate-spin" /></div>
          ) : board.length === 0 ? (
            <div className="text-center py-10 bg-slate-100/50 rounded-2xl border border-dashed border-slate-200 max-w-2xl mx-auto shadow-sm mb-10">
              <p className="text-slate-500 font-medium text-sm">No board members listed at this time.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
              {board.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <PersonCard name={member.name} role={member.role} bio={member.bio} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Board committees */}
          <div className="bg-secondary-900 rounded-2xl p-8 text-white">
            <h3 className="text-lg font-bold mb-2">Governance Committees</h3>
            <p className="text-slate-300 text-sm mb-5">
              The Board is supported by specialized committees providing strategic guidance, risk management, and governance oversight.
            </p>
            <div className="flex flex-wrap gap-3">
              {BOARD_COMMITTEES.map((c) => (
                <span key={c} className="glass rounded-lg px-4 py-2 text-sm font-medium text-white">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ADVISORY BOARD ===== */}
      <section id="advisory" className="section bg-primary-50" aria-label="Advisory board">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <SectionHeader
                label="Advisory Board"
                title="Expert Guidance for Innovation and Growth"
                subtitle="Our Advisory Board consists of experienced professionals, researchers, development practitioners, and sector experts who provide technical guidance and strategic advice across our thematic areas."
                className="mb-6"
              />
              <p className="text-slate-500 text-sm italic">
                As MUMSA Initiative continues to grow, we are expanding our Advisory Board to include national and international experts who share our vision for sustainable development.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-5">Areas of Advisory Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADVISORY_AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-primary-100 text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {advisory.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
              {advisory.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <PersonCard name={member.name} role={member.role} bio={member.bio} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== STAFF TEAM ===== */}
      <section id="staff" className="section bg-white" aria-label="Staff team">
        <div className="container">
          <SectionHeader
            label="Staff Team"
            title="Dedicated Professionals Delivering Impact"
            subtitle="Our multidisciplinary staff team combines expertise, innovation, and commitment to deliver high-quality programs and services across our focus areas."
            className="mb-12"
          />

          {loading ? (
            <div className="flex justify-center py-10"><span className="w-8 h-8 border-3 border-primary-600 border-t-transparent rounded-full animate-spin" /></div>
          ) : staff.length === 0 ? (
            <div className="text-center py-10 bg-slate-100/50 rounded-2xl border border-dashed border-slate-200 max-w-2xl mx-auto shadow-sm">
              <p className="text-slate-500 font-medium text-sm">No staff members listed at this time.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {staff.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="card p-5 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary text-white font-bold mx-auto mb-3 flex items-center justify-center">
                    {member.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{member.name}</h3>
                  <p className="text-xs text-primary-600 mt-1 leading-snug">{member.role}</p>
                </motion.div>
              ))}
            </div>
          )}
          <p className="text-sm text-slate-400 text-center mt-8 italic">
            Together with our technical consultants and specialists, our team works tirelessly to design, implement, monitor, and scale impactful solutions.
          </p>
        </div>
      </section>

      {/* ===== VOLUNTEERS ===== */}
      <section id="volunteers" className="section bg-slate-50" aria-label="Volunteers and fellows">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Volunteers & Fellows"
                title="A Community of Changemakers"
                subtitle="Volunteers and fellows are at the heart of MUMSA Initiative's success. Every year, hundreds of passionate individuals contribute their time, expertise, and energy to support our programs and outreach activities."
                className="mb-8"
              />
              <div className="bg-primary-600 rounded-2xl p-6 text-white text-center mb-6">
                <div className="text-4xl font-bold mb-1">350+</div>
                <div className="text-primary-100 font-medium">Volunteers & Fellows Engaged Annually</div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our volunteers support program implementation, awareness campaigns, community engagement, training activities, data collection, mentorship, and advocacy initiatives that directly improve lives and strengthen communities.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-5">Our Volunteers & Fellows</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VOLUNTEER_ROLES.map((role) => (
                  <div key={role} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-slate-100 text-sm text-slate-700">
                    <Heart className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {volunteers.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
              {volunteers.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="card p-5 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary text-white font-bold mx-auto mb-3 flex items-center justify-center">
                    {member.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{member.name}</h3>
                  <p className="text-xs text-primary-600 mt-1 leading-snug">{member.role}</p>
                  {member.bio && <p className="text-[11px] text-slate-500 mt-2 line-clamp-3">{member.bio}</p>}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join CTA */}
      <section className="section bg-gradient-primary" aria-label="Join our team">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            We believe lasting change is created by people who are passionate about making a difference. Whether you are a professional, volunteer, consultant, intern, fellow, or partner, there is a place for you at MUMSA Initiative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers" className="btn-white btn-lg" id="team-careers-btn">View Opportunities</Link>
            <Link to="/get-involved" className="btn-accent btn-lg" id="team-volunteer-btn">Volunteer With Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
