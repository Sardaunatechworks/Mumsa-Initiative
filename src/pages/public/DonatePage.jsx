import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Heart, Users, Building, Star, CheckCircle2,
  ShieldAlert, CreditCard, Landmark, PhoneCall, Gift
} from 'lucide-react'
import { SEOHead, PageHero } from '@components/ui'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

export default function DonatePage() {
  const [method, setMethod] = useState('card') // card, bank, transfer
  const [selectedAmt, setSelectedAmt] = useState(25000)
  const [customAmt, setCustomAmt] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const presetAmounts = [5000, 10000, 25000, 50000, 100000]

  const handlePresetSelect = (amt) => {
    setSelectedAmt(amt)
    setCustomAmt('')
  }

  const handleCustomChange = (e) => {
    setCustomAmt(e.target.value)
    setSelectedAmt(null)
  }

  const getActiveAmount = () => {
    if (customAmt) return parseFloat(customAmt) || 0
    return selectedAmt
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
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

      {/* ===== GIVING FORM SECTION ===== */}
      <section className="section bg-white text-navy">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Securing Form */}
            <motion.div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border border-brand-border shadow-card" {...fadeUp}>
              <h3 className="text-h3 text-navy mb-6 flex items-center gap-2">
                <Gift className="w-6 h-6 text-primary-500" /> Secure Donation Terminal
              </h3>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Select Amount */}
                  <div>
                    <label className="form-label text-xs">Select Contribution Amount (NGN)</label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 mb-3">
                      {presetAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => handlePresetSelect(amt)}
                          className={`py-2 px-3 text-xs font-bold rounded border transition-colors ${
                            selectedAmt === amt
                              ? 'bg-secondary-600 border-secondary-600 text-white'
                              : 'bg-white border-brand-border text-navy hover:bg-slate-100'
                          }`}
                        >
                          ₦{amt.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    
                    <input
                      type="number"
                      placeholder="Or enter custom amount in NGN..."
                      value={customAmt}
                      onChange={handleCustomChange}
                      className="form-input text-xs"
                      min="100"
                    />
                  </div>

                  {/* Payment Method Select */}
                  <div className="border-t border-brand-border pt-6">
                    <label className="form-label text-xs">Choose Payment Pathway</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'card', label: 'Credit Card', icon: CreditCard },
                        { id: 'bank', label: 'Bank Transfer', icon: Landmark },
                        { id: 'intl', label: 'Mobile Money', icon: PhoneCall },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setMethod(item.id)}
                            className={`p-3 text-2xs font-bold rounded border flex flex-col items-center justify-center gap-1.5 transition-colors ${
                              method === item.id
                                ? 'bg-secondary-600 border-secondary-600 text-white'
                                : 'bg-white border-brand-border text-slate-gray hover:bg-slate-100'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            {item.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Fields */}
                  {method === 'card' && (
                    <div className="space-y-4 border-t border-slate-200 pt-4">
                      <div>
                        <label className="form-label text-2xs">Donor Full Name</label>
                        <input type="text" className="form-input text-xs" required placeholder="Amina Bello" />
                      </div>
                      <div>
                        <label className="form-label text-2xs">Email Address (for Receipt)</label>
                        <input type="email" className="form-input text-xs" required placeholder="amina@example.com" />
                      </div>
                      <div className="bg-slate-100/50 p-4 rounded border border-brand-border text-2xs text-slate-gray flex items-start gap-2.5">
                        <ShieldAlert className="w-4 h-4 text-secondary-600 flex-shrink-0" />
                        <span>Future Payment gateway (Paystack / Flutterwave integration placeholder). Secure SSL verification is configured in sandbox.</span>
                      </div>
                    </div>
                  )}

                  {method === 'bank' && (
                    <div className="space-y-4 border-t border-slate-200 pt-4">
                      <div className="bg-white p-6 rounded-lg border border-brand-border space-y-3">
                        <p className="text-2xs text-slate-gray uppercase tracking-widest font-bold">MUMSA Institutional Account details</p>
                        <div>
                          <span className="text-slate-400 text-2xs block">Bank Name</span>
                          <span className="text-xs font-bold text-navy">First Bank of Nigeria</span>
                        </div>
                        <div>
                          <span className="text-slate-400 text-2xs block">Account Number</span>
                          <span className="text-xs font-bold text-navy">2043813890 (Mock Account)</span>
                        </div>
                        <div>
                          <span className="text-slate-400 text-2xs block">Account Name</span>
                          <span className="text-xs font-bold text-navy">MUMSA Initiative for Development</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {method === 'intl' && (
                    <div className="space-y-4 border-t border-slate-200 pt-4">
                      <div className="bg-white p-6 rounded-lg border border-brand-border text-center space-y-2">
                        <p className="text-2xs font-bold text-navy">Mobile Money Transfers</p>
                        <p className="text-xs text-slate-gray">Please call our operations desk directly to process mobile money donations:</p>
                        <p className="text-sm font-bold text-secondary-600">+234 906 131 3202</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-full flex items-center justify-center gap-2"
                  >
                    Authorize Donation of ₦{getActiveAmount().toLocaleString()}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-h4 text-navy mb-2">Secure Transfer Initialized</h3>
                  <p className="text-xs text-slate-gray max-w-sm mx-auto mb-6">
                    Thank you! A secure mock transfer has been logged. In the live platform, this connects dynamically to Flutterwave/Paystack checkout scripts.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline btn-sm">
                    Back to Terminal
                  </button>
                </div>
              )}
            </motion.div>

            {/* Sidebar Impact Context */}
            <motion.div className="lg:col-span-5 space-y-6" {...fadeUp}>
              <div className="bg-slate-50 p-6 rounded-xl border border-brand-border">
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary-500" /> Sponsoring Modalities
                </h4>
                
                <div className="space-y-4 text-2xs">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded bg-secondary-100 text-secondary-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-bold text-navy">One-Time Giving</p>
                      <p className="text-slate-gray mt-0.5">Flexible funds to support immediate medical outreaches or materials purchase.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded bg-secondary-100 text-secondary-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-bold text-navy">Monthly Sustaining Partner</p>
                      <p className="text-slate-gray mt-0.5">Provides predictive monthly budgeting for school reintegration campaigns.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded bg-secondary-100 text-secondary-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <p className="font-bold text-navy">Sponsor a Child</p>
                      <p className="text-slate-gray mt-0.5">Directly pays tuition fees and academic materials for vulnerable out-of-school children.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Indicators */}
              <div className="bg-slate-50 p-6 rounded-xl border border-brand-border space-y-4">
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">What Your Gift Achieves</h4>
                
                {[
                  { amt: '₦5,000', text: 'Provides school supplies (bag, writing tools) for one child for a full term.' },
                  { amt: '₦25,000', text: 'Funds one month of practical TVET classes for a young person.' },
                  { amt: '₦100,000', text: 'Sponsors a complete medical outreach desk providing hearing/health exams.' }
                ].map((item) => (
                  <div key={item.amt} className="border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs font-bold text-primary-600 block">{item.amt}</span>
                    <span className="text-2xs text-slate-gray leading-relaxed mt-0.5 block">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
