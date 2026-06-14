import { Link } from 'react-router-dom'
import { SEOHead, PageHero, SectionHeader } from '@components/ui'
import { motion } from 'framer-motion'
import { Heart, GraduationCap, Handshake, BookOpen, ArrowRight } from 'lucide-react'
import { GET_INVOLVED_OPTIONS } from '@lib/content'

const ICON_MAP = { Heart, GraduationCap, Handshake, BookOpen, DollarSign: Heart }

export default function GetInvolvedPage() {
  return (
    <>
      <SEOHead title="Get Involved" description="Join MUMSA Initiative as a volunteer, intern, partner, donor, or child sponsor. There is a place for everyone who wants to create lasting change." />
      <PageHero
        label="Get Involved"
        title="There Is a Place for You at MUMSA Initiative"
        subtitle="Whether you are a professional, volunteer, student, corporate organization, or passionate individual — your contribution creates real, lasting change."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Get Involved' }]}
      />

      <section className="section bg-white" aria-label="Ways to get involved">
        <div className="container">
          <SectionHeader label="How to Get Involved" title="Make Your Contribution Count" centered className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GET_INVOLVED_OPTIONS.map((opt, i) => {
              const Icon = ICON_MAP[opt.icon] || Heart
              return (
                <motion.div
                  key={opt.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card p-7 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 group-hover:bg-primary-600 text-primary-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{opt.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{opt.description}</p>
                  <Link to={opt.href} className="btn-outline btn-sm w-fit" id={`involved-${opt.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {opt.title}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteer form section */}
      <section id="volunteer" className="section bg-slate-50" aria-label="Volunteer application">
        <div className="container max-w-2xl">
          <SectionHeader label="Volunteer" title="Join Our Community of Changemakers" className="mb-8" />
          <div className="card p-8">
            <p className="text-slate-500 text-sm mb-6">
              Complete the form below to express interest in volunteering. Our team will be in touch with next steps.
            </p>
            <form className="space-y-4" aria-label="Volunteer application form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="vol-name" className="form-label">Full Name</label>
                  <input id="vol-name" type="text" className="form-input" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="vol-email" className="form-label">Email Address</label>
                  <input id="vol-email" type="email" className="form-input" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="vol-area" className="form-label">Area of Interest</label>
                <select id="vol-area" className="form-input">
                  <option value="">Select area…</option>
                  <option>Community Mobilization</option>
                  <option>Youth Mentorship</option>
                  <option>Health Outreach</option>
                  <option>Climate Action</option>
                  <option>Education</option>
                  <option>Digital Literacy</option>
                  <option>Research & Data</option>
                  <option>Advocacy & Campaigns</option>
                </select>
              </div>
              <div>
                <label htmlFor="vol-message" className="form-label">Why do you want to volunteer?</label>
                <textarea id="vol-message" rows={4} className="form-textarea" placeholder="Share your motivation and skills…" />
              </div>
              <button type="submit" className="btn-primary w-full" id="volunteer-submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
