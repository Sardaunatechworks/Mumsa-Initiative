import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react'
import { FacebookIcon, LinkedinIcon, InstagramIcon, TwitterXIcon } from '@components/ui/SocialIcons'
import { SITE, NAV_LINKS } from '@lib/content'

const FOOTER_LINKS = [
  {
    heading: 'Organization',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Programs', href: '/programs' },
      { label: 'Projects', href: '/projects' },
      { label: 'Impact', href: '/impact' },
      { label: 'Partnerships', href: '/partnerships' },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'Donate', href: '/donate' },
      { label: 'Volunteer', href: '/get-involved#volunteer' },
      { label: 'Internships', href: '/careers' },
      { label: 'Become a Partner', href: '/get-involved#partner' },
      { label: 'Sponsor a Child', href: '/donate#sponsor' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Publications', href: '/resources' },
      { label: 'Annual Reports', href: '/resources?type=annual-report' },
      { label: 'Media Centre', href: '/media' },
      { label: 'News', href: '/media?tab=news' },
      { label: 'Transparency', href: '/transparency' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white" aria-label="Site footer">

      {/* CTA Banner */}
      <div className="bg-gradient-primary">
        <div className="container py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Together, We Can Build Stronger Communities
            </h2>
            <p className="text-primary-100 mt-2 text-base">
              Your support creates real, lasting change for women, youth, and children across Nigeria.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link to="/donate" className="btn-accent btn-lg whitespace-nowrap" id="footer-donate-cta">
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
            <Link to="/get-involved" className="btn-white btn-lg whitespace-nowrap" id="footer-volunteer-cta">
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-block bg-white p-2.5 rounded-xl mb-6 hover:opacity-90 transition-opacity" aria-label="MUMSA Initiative home">
            <img src="/logo.png" alt="MUMSA Initiative Logo" style={{ height: '44px', width: 'auto', display: 'block' }} className="object-contain" />
          </Link>

          <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-sm">
            A youth-led nonprofit empowering women, youth, and children through education, skills development, healthcare, climate action, and digital innovation since 2020.
          </p>

          {/* Socials */}
          <div className="flex gap-3 mb-8">
            {[
              { href: SITE.social.facebook,  icon: FacebookIcon,  label: 'Facebook'  },
              { href: SITE.social.linkedin,  icon: LinkedinIcon,  label: 'LinkedIn'  },
              { href: SITE.social.instagram, icon: InstagramIcon, label: 'Instagram' },
              { href: SITE.social.twitter,   icon: TwitterXIcon,  label: 'X/Twitter' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary-600 flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Contact info */}
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
              <span>{SITE.address}</span>
            </div>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
              {SITE.phone}
            </a>
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_LINKS.map((col) => (
          <div key={col.heading}>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {col.heading}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-300 hover:text-primary-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} MUMSA Initiative. All rights reserved. Registered nonprofit organization, Bauchi State, Nigeria.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/transparency" className="hover:text-white transition-colors">Transparency</Link>
            <span className="w-px h-3 bg-white/20" />
            <Link to="/transparency#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-px h-3 bg-white/20" />
            <Link to="/transparency#safeguarding" className="hover:text-white transition-colors">Safeguarding</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
