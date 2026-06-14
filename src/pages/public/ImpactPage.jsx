import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Users, BarChart3, MapPin, GraduationCap, Handshake,
  Heart, CheckCircle2, Download, FileText, TrendingUp,
  Activity, Star
} from 'lucide-react'
import { SEOHead, PageHero } from '@components/ui'
import { IMPACT_STATS } from '@lib/content'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const growData = [
  { year: '2020', beneficiaries: 5000 },
  { year: '2021', beneficiaries: 12000 },
  { year: '2022', beneficiaries: 20000 },
  { year: '2023', beneficiaries: 28000 },
  { year: '2024', beneficiaries: 35000 },
]

const sectorData = [
  { name: 'Education & Skills', value: 45, color: '#1565C0' },
  { name: 'Health & Wellbeing', value: 25, color: '#08C84B' },
  { name: 'Youth Empowerment', value: 15, color: '#0F172A' },
  { name: 'Women Empowerment', value: 10, color: '#334155' },
  { name: 'Climate & Other', value: 5, color: '#94A3B8' },
]

const CASE_STUDIES = [
  {
    title: 'Bring Back to School Initiative — Bauchi State',
    category: 'Education & Skills',
    result: 'Over 5,000 out-of-school children re-enrolled in primary education',
    description: 'A targeted community mobilization campaign combined with direct school support materials reached thousands of children who had dropped out of the formal education system.',
  },
  {
    title: 'Youth Employability and Entrepreneurship Program',
    category: 'Youth Empowerment',
    result: '3,500+ youth and women trained; 60% secured employment or started businesses',
    description: 'Market-relevant vocational and entrepreneurship training delivered through the Fellow Learner Fellowship Programme (FLFP), equipping young people with the skills and tools for economic independence.',
  },
  {
    title: 'Community Health Outreach — Rural Communities',
    category: 'Health & Wellbeing',
    result: '10,000+ community members accessed free medical services',
    description: 'Multi-day medical outreach programs delivered primary care, maternal health services, hearing screening, and health education to underserved rural communities.',
  },
]

export default function ImpactPage() {
  return (
    <>
      <SEOHead
        title="Impact Report & Results"
        description="Explore the annual impact report of MUMSA Initiative. Analyze beneficiary metrics, growth charts, case studies, and global development alignment."
      />

      <PageHero
        label="Annual Monitoring & Evaluation"
        title="Real Change, Measurable Results"
        subtitle="We monitor and report outcomes transparently, ensuring that social investments yield direct improvements in vulnerable lives."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Impact' }
        ]}
      />

      {/* ===== METRICS SUMMARY ===== */}
      <section className="section bg-white text-navy">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3">Core Metrics</div>
            <h2 className="text-h2">MUMSA Initiative Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {IMPACT_STATS.map((stat) => (
              <motion.div
                key={stat.id}
                className="bg-slate-50 p-6 rounded-xl border border-brand-border text-center shadow-card"
                {...fadeUp}
              >
                <span className="text-3xl font-extrabold text-secondary-600 block mb-1">
                  {stat.value.toLocaleString()}{stat.suffix}
                </span>
                <span className="text-xs font-bold text-navy tracking-tight leading-snug">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DATA VISUALIZATION DASHBOARD ===== */}
      <section className="section bg-light-bg text-navy">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3">M&E Dashboard</div>
            <h2 className="text-h2">Data Visualizations</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Chart 1: Growth */}
            <motion.div className="lg:col-span-7 bg-white p-6 rounded-xl border border-brand-border shadow-card" {...fadeUp}>
              <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-6 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-primary-500" /> Beneficiary Growth Trajectory
              </h3>
              
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBens" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1565C0" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#1565C0" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="year" stroke="#94A3B8" fontSize={12} tickLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} />
                    <Tooltip cursor={{ stroke: '#E2E8F0' }} />
                    <Area type="monotone" dataKey="beneficiaries" stroke="#1565C0" strokeWidth={2.5} fillOpacity={1} fill="url(#colorBens)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Chart 2: Sector Share */}
            <motion.div className="lg:col-span-5 bg-white p-6 rounded-xl border border-brand-border shadow-card flex flex-col justify-between" {...fadeUp}>
              <div>
                <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-6 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-primary-500" /> Program Resource Share (%)
                </h3>

                <div className="h-48 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sectorData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {sectorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-2">
                {sectorData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-2xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-semibold text-navy">{item.name}</span>
                    </div>
                    <span className="font-bold text-slate-gray">{item.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="section bg-white text-navy">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3">Evidence Map</div>
            <h2 className="text-h2">Outcome Case Studies</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <motion.div
                key={cs.title}
                className="bg-slate-50 p-6 rounded-xl border border-brand-border shadow-card flex flex-col justify-between"
                {...fadeUp}
              >
                <div>
                  <span className="badge badge-green mb-3">{cs.category}</span>
                  <h3 className="text-sm font-bold text-navy mb-2 leading-snug">{cs.title}</h3>
                  <div className="bg-white p-2.5 rounded-lg border border-brand-border mb-3">
                    <p className="text-[11px] font-bold text-secondary-700">{cs.result}</p>
                  </div>
                  <p className="text-xs text-slate-gray leading-relaxed">{cs.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SDG ALIGNMENT ===== */}
      <section className="section bg-navy text-white relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-label text-primary-400 mb-3 justify-center">
              <span className="w-6 h-px bg-current inline-block" />
              Strategic Alignment
            </div>
            <h2 className="text-h2 text-white">Supporting Global Goals</h2>
            <p className="text-body-large text-slate-300 mt-4">
              Interventions map directly to United Nations Sustainable Development Goals (SDGs) and the AU Agenda 2063.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { num: 'SDG 1',  label: 'No Poverty' },
              { num: 'SDG 3',  label: 'Good Health' },
              { num: 'SDG 4',  label: 'Quality Education' },
              { num: 'SDG 5',  label: 'Gender Equality' },
              { num: 'SDG 8',  label: 'Decent Work' },
              { num: 'SDG 10', label: 'Reduced Inequalities' },
              { num: 'SDG 13', label: 'Climate Action' },
              { num: 'SDG 16', label: 'Peace, Justice' },
              { num: 'SDG 17', label: 'Partnerships' },
              { num: 'AU 2063', label: 'Agenda 2063' },
              { num: 'NDPIII',  label: 'National Plan' },
              { num: 'ECOWAS', label: 'Regional Framework' },
            ].map((item) => (
              <div key={item.num} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-xs font-bold text-primary-400 mb-1">{item.num}</div>
                <div className="text-2xs text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOWNLOAD REPORTS ===== */}
      <section className="section bg-white text-navy">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3">Transparency</div>
            <h2 className="text-h2">Annual Reports & Audits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Annual Impact Report 2025', type: 'Annual Report', size: '2.4 MB' },
              { title: 'Monitoring & Evaluation Report 2024', type: 'M&E Report', size: '1.8 MB' },
              { title: 'Audited Financial Statements 2024', type: 'Financial Audit', size: '1.2 MB' },
            ].map((report) => (
              <motion.div
                key={report.title}
                className="bg-slate-50 p-6 rounded-xl border border-brand-border shadow-card flex flex-col justify-between"
                {...fadeUp}
              >
                <div>
                  <span className="badge badge-blue mb-4">{report.type}</span>
                  <h3 className="text-xs font-bold text-navy mb-2">{report.title}</h3>
                  <p className="text-2xs text-slate-gray">File Size: {report.size}</p>
                </div>
                <Link to="/resources" className="btn btn-secondary btn-sm mt-6 flex items-center gap-1 justify-center">
                  <Download className="w-4 h-4" /> Download PDF
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
