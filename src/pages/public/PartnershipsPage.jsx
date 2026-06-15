import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEOHead, PageHero, SectionHeader } from '@components/ui'
import { ArrowRight } from 'lucide-react'
import { supabase } from '@lib/supabase'
import { cn } from '@lib/utils'

const FALLBACK_PARTNERS = [
  {
    id: 'p-1',
    name: 'UNDP',
    category: 'UN Agencies',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/UNDP_logo.svg/800px-UNDP_logo.svg.png',
    country: 'Global',
    description: 'United Nations Development Programme supporting sustainable community initiatives.',
    website: 'https://www.undp.org',
  },
  {
    id: 'p-2',
    name: 'WHO',
    category: 'UN Agencies',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1200px-WHO_logo.svg.png',
    country: 'Global',
    description: 'World Health Organization collaborating on local and national primary healthcare systems.',
    website: 'https://www.who.int',
  },
  {
    id: 'p-3',
    name: 'UNCCD',
    category: 'UN Agencies',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/UNCCD_Logo.png',
    country: 'Global',
    description: 'United Nations Convention to Combat Desertification partnering on climate action.',
    website: 'https://www.unccd.int',
  },
  {
    id: 'p-4',
    name: 'Plan International',
    category: 'NGOs',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Plan_International_Logo.svg',
    country: 'Nigeria',
    description: 'Global NGO empowering girls and child protection programs in Bauchi state.',
    website: 'https://plan-international.org/nigeria',
  },
  {
    id: 'p-5',
    name: 'Federal Ministry of Education',
    category: 'Government Agencies',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Coat_of_arms_of_Nigeria.svg',
    country: 'Nigeria',
    description: 'National education department defining policy and integrating Almajiri children.',
    website: 'https://education.gov.ng',
  },
  {
    id: 'p-6',
    name: 'Bauchi State Government',
    category: 'Government Agencies',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Coat_of_arms_of_Nigeria.svg',
    country: 'Nigeria',
    description: 'State government providing local resource and school infrastructure collaboration.',
    website: 'https://bauchistate.gov.ng',
  },
  {
    id: 'p-7',
    name: 'AU Agenda 2063 Innovation Grant',
    category: 'Foundations',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_the_African_Union.svg/1200px-Flag_of_the_African_Union.svg.png',
    country: 'Pan-African',
    description: 'Funding partner for women digital entrepreneurship and sustainable livelihoods.',
    website: 'https://au.int/agenda2063',
  },
]

export default function PartnershipsPage() {
  const [partners, setPartners] = useState(FALLBACK_PARTNERS)

  useEffect(() => {
    async function fetchPartners() {
      try {
        const { data, error } = await supabase
          .from('partners')
          .select('*')
          .eq('is_published', true)
          .order('order_index', { ascending: true })
        
        if (!error && data && data.length > 0) {
          setPartners(data)
        }
      } catch (err) {
        console.warn('Supabase partners fetch failed, using fallback data.', err)
      }
    }
    fetchPartners()
  }, [])

  return (
    <>
      <SEOHead title="Partnerships" description="Explore MUMSA Initiative's strategic partnerships with government agencies, NGOs, UN agencies, foundations, academic institutions, and the private sector." />
      <PageHero
        label="Partnerships"
        title="Building Alliances for Greater Impact"
        subtitle="Strategic partnerships are at the core of everything we do. We collaborate with governments, development agencies, NGOs, foundations, academia, and the private sector to scale impact and create lasting change."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Partnerships' }]}
      />

      <section className="section bg-white" aria-label="Partnership directory">
        <div className="container">
          <SectionHeader label="Our Partners" title="Partnering Across Sectors" className="mb-14" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-16">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="card bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-400 hover:-translate-y-1 hover:scale-[1.03] transition-all aspect-square flex items-center justify-center p-4"
              >
                {partner.website ? (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                    title={partner.name}
                  >
                    {partner.logo_url ? (
                      <img
                        src={partner.logo_url}
                        alt={`${partner.name} logo`}
                        className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-sm font-bold text-slate-700 text-center">{partner.name}</span>
                    )}
                  </a>
                ) : (
                  <div className="w-full h-full flex items-center justify-center" title={partner.name}>
                    {partner.logo_url ? (
                      <img
                        src={partner.logo_url}
                        alt={`${partner.name} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-sm font-bold text-slate-700 text-center">{partner.name}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Strategic Recognitions & Affiliations */}
          <div className="mt-20">
            <SectionHeader 
              label="Accreditations & Honors" 
              title="Strategic Recognitions & Affiliations" 
              subtitle="MUMSA Initiative is recognized and affiliated with prominent national and international development platforms."
              className="mb-10"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Provisional Observer Organization Status',
                  desc: 'Granted observer status with the United Nations Convention to Combat Desertification (UNCCD).',
                  org: 'UNCCD',
                  color: 'card-green-top'
                },
                {
                  title: 'Verified Host Organization',
                  desc: 'Verified under the Nigeria Jubilee Fellows Programme (NJFP) implemented by the UNDP and the Federal Government of Nigeria.',
                  org: 'UNDP & FGN',
                  color: 'card-blue-top'
                },
                {
                  title: 'World Hearing Day Small Grant Recipient',
                  desc: 'Recipient of hearing health advocacy and action funding supported through WHO-related initiatives.',
                  org: 'World Health Organization',
                  color: 'card-black-top'
                },
                {
                  title: 'YouthADAPT Climate Innovation Finalist',
                  desc: 'Recognized for pioneering local adaptation solutions integrating renewable energy and community access.',
                  org: 'Global Center on Adaptation',
                  color: 'card-green-top'
                },
                {
                  title: 'G20 Global Land Initiative Restoration Return Grant Finalist',
                  desc: 'Selected as a finalist for drought resilience, community land restoration, and environmental ecosystem works.',
                  org: 'G20 Land Initiative',
                  color: 'card-blue-top'
                },
                {
                  title: 'NiYA Start-Up Grant Award Recipient',
                  desc: 'Awarded for youth leadership, enterprise incubation, and technical employment development models.',
                  org: 'Federal Ministry of Youth',
                  color: 'card-black-top'
                }
              ].map((item) => (
                <div key={item.title} className={cn("card p-6 flex flex-col justify-between bg-slate-50 border border-slate-200/60 shadow-sm hover:shadow-md transition-all", item.color)}>
                  <div>
                    <span className="text-2xs font-extrabold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full inline-block mb-3">
                      {item.org}
                    </span>
                    <h3 className="font-bold text-navy text-sm leading-snug mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborator Ecosystem */}
          <div className="mt-20">
            <SectionHeader 
              label="Ecosystem" 
              title="Supporters & Collaborators Across Sectors" 
              subtitle="Our work is made possible through the collaboration of dedicated institutions, networks, and communities."
              className="mb-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {/* Column 1: International & Government */}
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50">
                  <h3 className="font-extrabold text-navy text-xs uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                    International & Development
                  </h3>
                  <ul className="space-y-2 text-xs font-semibold text-slate-600">
                    <li>• United Nations Convention to Combat Desertification (UNCCD)</li>
                    <li>• World Health Organization (WHO)</li>
                    <li>• International Human Rights Commission</li>
                    <li>• Open Knowledge Foundation</li>
                    <li>• Global Center on Adaptation</li>
                    <li>• G20 Global Land Initiative</li>
                    <li>• European Union</li>
                  </ul>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50">
                  <h3 className="font-extrabold text-navy text-xs uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                    Government Institutions
                  </h3>
                  <ul className="space-y-2 text-xs font-semibold text-slate-600">
                    <li>• Federal Ministry of Education</li>
                    <li>• National Board for Technical Education</li>
                    <li>• Federal Government of Nigeria</li>
                    <li>• Nigeria Jubilee Fellows Programme (NJFP)</li>
                  </ul>
                </div>
              </div>

              {/* Column 2: Academic & Private Sector */}
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50">
                  <h3 className="font-extrabold text-navy text-xs uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                    Academic & Training
                  </h3>
                  <ul className="space-y-2 text-xs font-semibold text-slate-600">
                    <li>• Bill and Melinda Gates College of Health Technology</li>
                    <li>• Psychosocial Rehabilitation Dept, BMG College</li>
                    <li>• Secondary Schools across Bauchi State</li>
                    <li>• Community Learning Centres</li>
                    <li>• Technical & Vocational Training Centres</li>
                  </ul>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50">
                  <h3 className="font-extrabold text-navy text-xs uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                    Private Sector & Employability
                  </h3>
                  <ul className="space-y-2 text-xs font-semibold text-slate-600">
                    <li>• Host Companies under FLFP Fellowship</li>
                    <li>• Small and Medium Enterprises (SMEs)</li>
                    <li>• Entrepreneurship and Innovation Hubs</li>
                    <li>• Industry Mentors and Trainers</li>
                    <li>• Internship Placement Partners</li>
                    <li>• Renewable Energy & Solar Industry Partners</li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Civil Society & Grassroots */}
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50">
                  <h3 className="font-extrabold text-navy text-xs uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                    Civil Society & Nonprofits
                  </h3>
                  <ul className="space-y-2 text-xs font-semibold text-slate-600">
                    <li>• TEDA Foundation</li>
                    <li>• Jobberman PLC</li>
                    <li>• BudgIT Foundation</li>
                    <li>• World Youth Movement of the IHRC</li>
                  </ul>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50">
                  <h3 className="font-extrabold text-navy text-xs uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                    Community & Grassroots
                  </h3>
                  <ul className="space-y-2 text-xs font-semibold text-slate-600">
                    <li>• Traditional & Community Leaders</li>
                    <li>• Religious Leaders & Groups</li>
                    <li>• Parent Associations</li>
                    <li>• School Management Committees</li>
                    <li>• Youth & Women Groups</li>
                    <li>• Community Development Associations (CDAs)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 mt-16">
            <p className="text-slate-500 text-sm mb-6 max-w-xl mx-auto">
              We are always open to new partnerships that align with our mission to empower communities and advance sustainable development. If your organization shares our vision, we would love to connect.
            </p>
            <Link to="/contact" className="btn-primary" id="partnerships-contact-btn">
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
