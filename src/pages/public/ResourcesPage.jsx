import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { SEOHead, PageHero } from '@components/ui'

export default function ResourcesPage() {
  return (
    <>
      <SEOHead
        title="Resource Library & Publications"
        description="Access research studies, policy briefs, training toolkits, and audited financial statements from the MUMSA Initiative library."
      />

      <PageHero
        label="Knowledge Hub"
        title="Publications & Research Centre"
        subtitle="Access reports, toolkits, training manuals, and legal audits that document our development models and impact metrics."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Resources' }
        ]}
      />

      {/* ===== LIBRARY SECTION: COMING SOON ===== */}
      <section className="section bg-white text-navy" aria-label="Coming Soon">
        <div className="container max-w-2xl text-center">
          <div className="card p-12 md:p-16 border-brand-border bg-slate-50 flex flex-col items-center justify-center shadow-card relative overflow-hidden">
            {/* Background decorative glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary-100/40 rounded-full blur-3xl pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 mb-6 shadow-sm relative z-10">
              <BookOpen className="w-8 h-8" />
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4 relative z-10">
              Resource Centre Coming Soon
            </h2>

            <p className="text-sm text-slate-gray leading-relaxed max-w-md mb-8 relative z-10">
              Our publication library, including annual reports, research frameworks, policy briefs, and educational toolkits, is currently being curated and will be available soon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 w-full max-w-sm">
              <Link to="/contact" className="btn btn-primary btn-sm flex-1">
                Request Documents
              </Link>
              <Link to="/" className="btn btn-outline btn-sm flex-1">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
