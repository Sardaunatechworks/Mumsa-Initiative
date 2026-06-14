import { SEOHead, PageHero, SectionHeader } from '@components/ui'
import { Link } from 'react-router-dom'
import { Briefcase, Users, GraduationCap, FileText } from 'lucide-react'

const VACANCY_TYPES = [
  { title: 'Current Vacancies',        icon: Briefcase,      desc: 'Open full-time and part-time staff positions.' },
  { title: 'Volunteer Opportunities',  icon: Users,          desc: 'Community and field volunteer opportunities.' },
  { title: 'Fellowship Opportunities', icon: GraduationCap,  desc: 'Structured fellowship and internship programs.' },
  { title: 'Consultancy Opportunities',icon: FileText,       desc: 'Technical consultancy assignments.' },
]

export default function CareersPage() {
  return (
    <>
      <SEOHead title="Careers" description="Join MUMSA Initiative. Explore current vacancies, volunteer opportunities, fellowship programs, and consultancy assignments." />
      <PageHero
        label="Careers"
        title="Join a Team Making a Real Difference"
        subtitle="We are always looking for talented, passionate people who share our commitment to empowering communities and advancing sustainable development."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />

      <section className="section bg-white" aria-label="Career opportunities">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {VACANCY_TYPES.map(({ title, icon: Icon, desc }) => (
              <div key={title} className="card p-7 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{desc}</p>
                  <p className="text-xs text-slate-400 italic">No current openings. Check back or send a speculative application.</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 text-center border border-primary-100">
            <h3 className="font-bold text-slate-900 mb-2">Interested in Working With Us?</h3>
            <p className="text-slate-500 text-sm mb-6 max-w-lg mx-auto">
              Send a speculative application to mumsainitiative@gmail.com with your CV and a cover letter explaining how you can contribute to our mission.
            </p>
            <a href="mailto:mumsainitiative@gmail.com" className="btn-primary" id="careers-email-btn">
              Send Application
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
