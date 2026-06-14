import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SEOHead, PageHero } from '@components/ui'
import { supabase } from '@lib/supabase'

export default function ProgramDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [program, setProgram] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProgram() {
      try {
        const { data, error } = await supabase
          .from('programs')
          .select('*')
          .eq('id', slug)
          .single()
        
        if (error || !data) {
          console.warn('Program not found or error:', error)
          navigate('/programs', { replace: true })
        } else {
          setProgram(data)
        }
      } catch (err) {
        console.warn('Failed to load program details:', err)
        navigate('/programs', { replace: true })
      } finally {
        setLoading(false)
      }
    }
    fetchProgram()
  }, [slug, navigate])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <span className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!program) return null

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
            
            {program.subprograms && program.subprograms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {program.subprograms.map((sp) => (
                  <div key={sp} className="flex items-center gap-3 p-4 rounded-xl bg-primary-50 border border-primary-100">
                    <span className="w-2 h-2 rounded-full bg-primary-600 flex-shrink-0" />
                    <span className="font-medium text-primary-800 text-sm">{sp}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-sm italic mb-10">No specific focus areas listed for this program.</p>
            )}

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
