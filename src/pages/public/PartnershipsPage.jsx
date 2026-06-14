import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SEOHead, PageHero, SectionHeader } from '@components/ui'
import { ArrowRight } from 'lucide-react'
import { supabase } from '@lib/supabase'

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

          <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
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
