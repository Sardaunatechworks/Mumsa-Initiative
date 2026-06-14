import { Link } from 'react-router-dom'
import { SEOHead, PageHero, SectionHeader } from '@components/ui'
import { Shield, FileText, Download, CheckCircle2 } from 'lucide-react'
import { POLICIES } from '@lib/content'

export default function TransparencyPage() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16" id="safeguarding">
            {POLICIES.map((policy) => (
              <div key={policy} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span className="text-sm text-slate-700 font-medium">{policy}</span>
                <button className="ml-auto text-slate-400 hover:text-primary-600 transition-colors" aria-label={`Download ${policy}`}>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Financial statements */}
          <SectionHeader label="Financial Accountability" title="Audited Financial Statements" className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {['2021', '2022', '2023'].map((year) => (
              <div key={year} className="card p-6 flex flex-col gap-4">
                <FileText className="w-8 h-8 text-primary-600" />
                <div>
                  <h3 className="font-bold text-slate-900">Audited Financial Statements {year}</h3>
                  <p className="text-sm text-slate-400 mt-1">Available via Resource Centre</p>
                </div>
                <Link to="/resources" className="btn-outline btn-sm mt-auto">View in Resources</Link>
              </div>
            ))}
          </div>

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
