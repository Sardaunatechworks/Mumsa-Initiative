import { useState } from 'react'
import { motion } from 'framer-motion'
import { Landmark, Globe, Users, Copy, Check } from 'lucide-react'
import { SEOHead, PageHero } from '@components/ui'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

export default function DonatePage() {
  const [copiedText, setCopiedText] = useState('')

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedText(key)
    setTimeout(() => setCopiedText(''), 2000)
  }

  return (
    <>
      <SEOHead
        title="Donate & Sponsor"
        description="Make a secure contribution to MUMSA Initiative. Support out-of-school children, vocational TVET programs, maternal healthcare, and climate adaptation."
      />

      <PageHero
        label="Support Our Work"
        title="Your Gift Creates Lasting Change"
        subtitle="100% of public donations directly fund field programs, tracking school reintegration, and community health outreaches."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Donate' }
        ]}
      />

      <section className="section bg-white text-navy">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3">Direct Bank Transfer</div>
            <h2 className="text-h2">MUMSA Official Bank Accounts</h2>
            <p className="text-body-large text-slate-500 mt-4">
              Please use the official bank details below to process your local or international transfers. All funds are received directly under institutional governance audits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Local Naira Donations */}
            <motion.div 
              className="bg-slate-50 p-8 rounded-2xl border border-brand-border shadow-card flex flex-col justify-between relative overflow-hidden"
              {...fadeUp}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100/30 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">Local Naira Donations (NGN)</h3>
                <p className="text-xs text-slate-500 mb-6 font-medium">For local transfers within Nigeria</p>

                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-slate-400 text-2xs block uppercase tracking-wider">Account Name</span>
                    <span className="text-sm font-bold text-navy">MUMSA INITIATIVE LTD/GTE</span>
                  </div>
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-slate-400 text-2xs block uppercase tracking-wider">Bank Name</span>
                    <span className="text-sm font-bold text-navy">United Bank for Africa (UBA)</span>
                  </div>
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-slate-400 text-2xs block uppercase tracking-wider">Account Number</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-lg font-extrabold text-primary-600 tracking-wider">1028378245</span>
                      <button
                        onClick={() => handleCopy('1028378245', 'local-acct')}
                        className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-navy transition-all flex items-center gap-1.5 text-2xs font-bold shadow-sm"
                        title="Copy Account Number"
                      >
                        {copiedText === 'local-acct' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 text-2xs block uppercase tracking-wider">Currency</span>
                    <span className="text-sm font-bold text-navy">Nigerian Naira (NGN)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: International USD/Foreign Donations */}
            <motion.div 
              className="bg-slate-50 p-8 rounded-2xl border border-brand-border shadow-card flex flex-col justify-between relative overflow-hidden"
              {...fadeUp}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-100/30 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">International Donations (USD, EUR, GBP)</h3>
                <p className="text-xs text-slate-500 mb-6 font-medium">For domiciliary transfers and foreign currencies</p>

                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-slate-400 text-2xs block uppercase tracking-wider">Account Name</span>
                    <span className="text-sm font-bold text-navy">MUMSA INITIATIVE LTD/GTE</span>
                  </div>
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-slate-400 text-2xs block uppercase tracking-wider">Bank Name</span>
                    <span className="text-sm font-bold text-navy">United Bank for Africa (UBA)</span>
                  </div>
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-slate-400 text-2xs block uppercase tracking-wider">Domiciliary Account Number</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-lg font-extrabold text-primary-600 tracking-wider">3004850785</span>
                      <button
                        onClick={() => handleCopy('3004850785', 'intl-acct')}
                        className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-navy transition-all flex items-center gap-1.5 text-2xs font-bold shadow-sm"
                        title="Copy Account Number"
                      >
                        {copiedText === 'intl-acct' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-slate-400 text-2xs block uppercase tracking-wider">SWIFT/BIC Code</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm font-bold text-navy font-mono">UNAFNGLAXXX</span>
                      <button
                        onClick={() => handleCopy('UNAFNGLAXXX', 'swift')}
                        className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-navy transition-all flex items-center gap-1.5 text-2xs font-bold shadow-sm"
                        title="Copy SWIFT Code"
                      >
                        {copiedText === 'swift' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 text-2xs block uppercase tracking-wider">Bank Head Office Address</span>
                    <span className="text-xs font-semibold text-slate-700 leading-relaxed block mt-1">
                      United Bank for Africa (UBA)<br />
                      UBA House, Floor 8<br />
                      57 Marina, Lagos Island, Lagos, Nigeria
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sponsoring Modalities and What Your Gift Achieves */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16 pt-12 border-t border-slate-100">
            {/* Left: Modalities */}
            <div className="bg-slate-50 p-8 rounded-xl border border-brand-border">
              <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-6 flex items-center gap-1.5">
                <Users className="w-5 h-5 text-primary-500" /> Sponsoring Modalities
              </h4>
              
              <div className="space-y-6 text-xs leading-relaxed">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-secondary-100 text-secondary-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-bold text-navy text-sm">One-Time Giving</p>
                    <p className="text-slate-500 mt-1">Flexible funds to support immediate medical outreaches or school materials purchase.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-secondary-100 text-secondary-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-bold text-navy text-sm">Monthly Sustaining Partner</p>
                    <p className="text-slate-500 mt-1">Provides predictive monthly budgeting for school reintegration campaigns.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-secondary-100 text-secondary-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-bold text-navy text-sm">Sponsor a Child</p>
                    <p className="text-slate-500 mt-1">Directly pays tuition fees and academic materials for vulnerable out-of-school children.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: What Gift Achieves */}
            <div className="bg-slate-50 p-8 rounded-xl border border-brand-border space-y-6">
              <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">What Your Gift Achieves</h4>
              
              {[
                { amt: '₦5,000', text: 'Provides school supplies (bag, writing tools) for one child for a full term.' },
                { amt: '₦25,000', text: 'Funds one month of practical TVET classes for a young person.' },
                { amt: '₦100,000', text: 'Sponsors a complete medical outreach desk providing hearing/health exams.' }
              ].map((item) => (
                <div key={item.amt} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm font-bold text-primary-600 block">{item.amt}</span>
                  <span className="text-xs text-slate-500 leading-relaxed mt-1 block">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

