import { useState, useEffect } from 'react'
import { supabase } from '@lib/supabase'
import { Save } from 'lucide-react'

export default function AdminSettings() {
  const [settings, setSettings] = useState({ site_name: 'MUMSA Initiative', tagline: '', contact_email: '', contact_phone: '', address: '', facebook: '', linkedin: '', instagram: '', twitter: '' })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved]   = useState(false)

  useEffect(() => {
    supabase.from('settings').select('*').single().then(({ data }) => {
      if (data) setSettings({ ...settings, ...data })
    })
  }, [])

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    await supabase.from('settings').upsert([{ id: 1, ...settings, updated_at: new Date().toISOString() }])
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 text-sm mt-0.5">Manage site-wide configuration and contact information.</p>
      </div>

      <form onSubmit={handleSave} className="card card-blue-top p-8 space-y-5" aria-label="Site settings form">
        <h2 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-3">Site Information</h2>
        {[
          { key: 'site_name', label: 'Site Name' },
          { key: 'tagline',   label: 'Tagline' },
        ].map(({ key, label }) => (
          <div key={key}>
            <label htmlFor={`setting-${key}`} className="form-label">{label}</label>
            <input id={`setting-${key}`} className="form-input" value={settings[key] || ''} onChange={(e) => setSettings({ ...settings, [key]: e.target.value })} />
          </div>
        ))}

        <h2 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-3 pt-2">Contact Information</h2>
        {[
          { key: 'contact_email', label: 'Email', type: 'email' },
          { key: 'contact_phone', label: 'Phone' },
          { key: 'address',       label: 'Office Address' },
        ].map(({ key, label, type = 'text' }) => (
          <div key={key}>
            <label htmlFor={`setting-${key}`} className="form-label">{label}</label>
            <input id={`setting-${key}`} type={type} className="form-input" value={settings[key] || ''} onChange={(e) => setSettings({ ...settings, [key]: e.target.value })} />
          </div>
        ))}

        <h2 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-3 pt-2">Social Media Links</h2>
        {['facebook', 'linkedin', 'instagram', 'twitter'].map((platform) => (
          <div key={platform}>
            <label htmlFor={`setting-${platform}`} className="form-label capitalize">{platform}</label>
            <input id={`setting-${platform}`} type="url" className="form-input" value={settings[platform] || ''} onChange={(e) => setSettings({ ...settings, [platform]: e.target.value })} placeholder={`https://…`} />
          </div>
        ))}

        <div className="flex items-center gap-4 pt-2">
          <button type="submit" disabled={saving} className="btn-primary" id="settings-save-btn">
            <Save className="w-4 h-4" />
            {saving ? 'Saving…' : 'Save Settings'}
          </button>
          {saved && <span className="text-sm text-primary-600 font-medium">✓ Saved successfully</span>}
        </div>
      </form>
    </div>
  )
}
