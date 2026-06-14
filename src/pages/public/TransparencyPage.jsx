import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEOHead, PageHero, SectionHeader } from '@components/ui'
import { Shield, FileText, Download, CheckCircle2 } from 'lucide-react'
import { supabase } from '@lib/supabase'

export default function TransparencyPage() {
  const [publications, setPublications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPublications() {
      try {
        const { data, error } = await supabase
          .from('publications')
          .select('*')
          .eq('is_published', true)
          .order('year', { ascending: false })
          .order('created_at', { ascending: false })

        if (!error && data) {
          setPublications(data)
        }
      } catch (err) {
        console.warn('Error fetching publications:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPublications()
  }, [])

  // Segment policies and financial reports
  const policies = publications.filter(pub => 
    pub.type === 'Policy Brief' || 
    pub.title.toLowerCase().includes('policy') ||
    pub.title.toLowerCase().includes('constitution') ||
    pub.title.toLowerCase().includes('registration') ||
    pub.title.toLowerCase().includes('charter')
  )

  const financialReports = publications.filter(pub => 
    pub.type === 'Financial Report' || 
    pub.type === 'Annual Report' ||
    pub.title.toLowerCase().includes('financial') ||
    pub.title.toLowerCase().includes('audit')
  )

  return (
    <>
      <SEOHead title="Transparency & Accountability" description="MUMSA Initiative's governance structure, policies, audited financial statements, annual reports, and registration documents." />
      <PageHero
        label="Transparency & Accountability"
        title="Accountable to Our Communities, Donors, and Partners"
        subtitle="We are committed to the highest standards of transparency, ethical governance, and responsible stewardship of all resources entrusted to us."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Transparency' }]}
      />

      <section className="section bg-white" aria-label="Governance structure">
        <div className="container">
          <SectionHeader label="Governance" title="Our Governance Structure" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: 'Board of Trustees', desc: 'Supreme governing body providing strategic leadership, fiduciary oversight, and accountability.' },
              { title: 'Board Committees', desc: 'Specialized committees covering Finance & Audit, M&E, Legal & Compliance, Technology, and Operations.' },
              { title: 'Executive Management', desc: 'Senior leadership team responsible for day-to-day operations, program delivery, and organizational performance.' },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Policies */}
          <SectionHeader label="Policies" title="Our Organizational Policies" className="mb-8" />
          {loading ? (
            <div className="flex justify-center py-10">
              <span className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : policies.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200 max-w-xl mx-auto mb-16">
              <p className="text-slate-500 font-medium text-sm">No policy documents are published at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16" id="safeguarding">
              {policies.map((policy) => (
                <div key={policy.id} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium truncate" title={policy.title}>{policy.title}</span>
                  {policy.file_url ? (
                    <a 
                      href={policy.file_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ml-auto text-slate-400 hover:text-primary-600 transition-colors" 
                      aria-label={`Download ${policy.title}`}
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="ml-auto text-slate-300 text-xs italic">N/A</span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Financial statements */}
          <SectionHeader label="Financial Accountability" title="Audited Financial Statements" className="mb-8" />
          {loading ? (
            <div className="flex justify-center py-10">
              <span className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : financialReports.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200 max-w-xl mx-auto mb-16">
              <p className="text-slate-500 font-medium text-sm">No audited financial statements are published at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {financialReports.map((report) => (
                <div key={report.id} className="card p-6 flex flex-col gap-4">
                  <FileText className="w-8 h-8 text-primary-600" />
                  <div>
                    <h3 className="font-bold text-slate-900 line-clamp-2" title={report.title}>{report.title}</h3>
                    <p className="text-sm text-slate-400 mt-1">{report.year ? `Year: ${report.year}` : 'Available via Resource Centre'}</p>
                  </div>
                  {report.file_url ? (
                    <a href={report.file_url} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm mt-auto text-center">
                      Download Statement
                    </a>
                  ) : (
                    <Link to="/resources" className="btn-outline btn-sm mt-auto text-center">View in Resources</Link>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Registration */}
          <SectionHeader label="Registration" title="Registration Documents" className="mb-8" id="registration" />
          <div className="card p-8">
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              MUMSA Initiative is a registered nonprofit organization operating in Bauchi State, Nigeria. Registration documents are available on request. Contact us at mumsainitiative@gmail.com for verification purposes.
            </p>
            <div className="flex gap-4">
              <a href="mailto:mumsainitiative@gmail.com" className="btn-primary btn-sm">Request Documents</a>
              <Link to="/contact" className="btn-outline btn-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
