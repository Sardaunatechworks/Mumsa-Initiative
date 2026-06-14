import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SEOHead, PageHero } from '@components/ui'
import { PROGRAMS } from '@lib/content'

export default function ProgramDetailPage() {
  const { slug } = useParams()
  const program = PROGRAMS.find((p) => p.id === slug)
  if (!program) return <Navigate to="/programs" replace />

  return (
    <>
      <SEOHead
        title={program.title}
        description={program.description}
      />
      <PageHero
        label="Program"
        title={program.title}
        subtitle={program.description}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Programs', href: '/programs' }, { label: program.title }]}
      />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="card p-8 md:p-12">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Focus Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {program.subprograms.map((sp) => (
                <div key={sp} className="flex items-center gap-3 p-4 rounded-xl bg-primary-50 border border-primary-100">
                  <span className="w-2 h-2 rounded-full bg-primary-600 flex-shrink-0" />
                  <span className="font-medium text-primary-800 text-sm">{sp}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-8">
              <p className="text-slate-500 text-sm italic mb-6">
                Detailed program objectives, activities, outcomes, and gallery will be available once content is added through the admin CMS.
              </p>
              <div className="flex gap-4">
                <Link to="/programs" className="btn-outline btn-sm">
                  <ArrowLeft className="w-4 h-4" />
                  All Programs
                </Link>
                <Link to="/contact" className="btn-primary btn-sm">
                  Inquire About This Program
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
