import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Users, BarChart3, MapPin, GraduationCap, Handshake,
  Heart, CheckCircle2, Download, FileText, TrendingUp,
  Activity, Star
} from 'lucide-react'
import { SEOHead, PageHero } from '@components/ui'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts'
import { supabase } from '@lib/supabase'

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

export default function ImpactPage() {
  const [stats, setStats] = useState([])
  const [caseStudies, setCaseStudies] = useState([])
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [statsRes, csRes, reportsRes] = await Promise.all([
          supabase
            .from('impact_stats')
            .select('*')
            .order('order_index', { ascending: true }),
          supabase
            .from('success_stories')
            .select('*')
            .eq('is_published', true)
            .order('order_index', { ascending: true })
            .order('created_at', { ascending: false }),
          supabase
            .from('publications')
            .select('*')
            .eq('is_published', true)
            .order('year', { ascending: false })
        ])

        if (statsRes.data) setStats(statsRes.data)
        if (csRes.data) setCaseStudies(csRes.data)
        if (reportsRes.data) {
          // Filter publications to display only reports/audits
          const filteredReports = reportsRes.data.filter(pub =>
            ['Annual Report', 'Financial Report', 'Research Report', 'Policy Brief'].includes(pub.type)
          )
          setReports(filteredReports)
        }
      } catch (err) {
        console.warn('Error loading impact data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

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

          {loading ? (
            <div className="flex justify-center py-10">
              <span className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : stats.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200 max-w-xl mx-auto">
              <p className="text-slate-500 font-medium text-sm">No impact statistics available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-slate-50 p-6 rounded-xl border border-brand-border text-center shadow-card"
                >
                  <span className="text-3xl font-extrabold text-secondary-600 block mb-1">
                    {stat.value ? stat.value.toLocaleString() : '0'}{stat.suffix || ''}
                  </span>
                  <span className="text-xs font-bold text-navy tracking-tight leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
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
            <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-brand-border shadow-card">
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
            </div>

            {/* Chart 2: Sector Share */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-brand-border shadow-card flex flex-col justify-between">
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
            </div>
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

          {loading ? (
            <div className="flex justify-center py-10">
              <span className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : caseStudies.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200 max-w-xl mx-auto">
              <p className="text-slate-500 font-medium text-sm">No case studies available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {caseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="bg-slate-50 p-6 rounded-xl border border-brand-border shadow-card flex flex-col justify-between"
                >
                  <div>
                    {cs.category && <span className="badge badge-green mb-3">{cs.category}</span>}
                    <h3 className="text-sm font-bold text-navy mb-2 leading-snug">{cs.title}</h3>
                    {cs.metrics && (
                      <div className="bg-white p-2.5 rounded-lg border border-brand-border mb-3">
                        <p className="text-[11px] font-bold text-secondary-700">{cs.metrics}</p>
                      </div>
                    )}
                    <p className="text-xs text-slate-gray leading-relaxed">{cs.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
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

          {loading ? (
            <div className="flex justify-center py-10">
              <span className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : reports.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200 max-w-xl mx-auto">
              <p className="text-slate-500 font-medium text-sm">No annual reports or financial audits available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="bg-slate-50 p-6 rounded-xl border border-brand-border shadow-card flex flex-col justify-between"
                >
                  <div>
                    <span className="badge badge-blue mb-4">{report.type}</span>
                    <h3 className="text-xs font-bold text-navy mb-2">{report.title}</h3>
                    {report.description && <p className="text-2xs text-slate-500 mb-2 leading-relaxed">{report.description}</p>}
                    <p className="text-2xs text-slate-gray">Year: {report.year || 'N/A'}</p>
                  </div>
                  {report.file_url ? (
                    <a
                      href={report.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm mt-6 flex items-center gap-1 justify-center"
                    >
                      <Download className="w-4 h-4" /> Download PDF
                    </a>
                  ) : (
                    <span className="text-2xs text-slate-400 italic mt-6 text-center">No PDF attachment</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
