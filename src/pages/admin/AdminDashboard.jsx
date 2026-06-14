import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Users, FolderOpen, FileText, BarChart3, MessageSquare, Image, Newspaper, ArrowRight } from 'lucide-react'
import { supabase } from '@lib/supabase'
import { IMPACT_STATS } from '@lib/content'

export default function AdminDashboard() {
  const [counts, setCounts] = useState({})

  useEffect(() => {
    const fetchCounts = async () => {
      const tables = ['programs', 'projects', 'team_members', 'partners', 'news', 'contacts']
      const results = await Promise.all(
        tables.map((t) =>
          supabase.from(t).select('id', { count: 'exact', head: true }).then(({ count }) => [t, count ?? 0])
        )
      )
      setCounts(Object.fromEntries(results))
    }
    fetchCounts()
  }, [])

  const STAT_CARDS = [
    { label: 'Programs',      value: counts.programs      ?? '—', icon: FolderOpen,     href: '/admin/programs',      border: 'card-blue-top',  iconColor: 'text-secondary-600' },
    { label: 'Projects',      value: counts.projects      ?? '—', icon: FileText,       href: '/admin/projects',      border: 'card-green-top', iconColor: 'text-primary-600' },
    { label: 'Team Members',  value: counts.team_members  ?? '—', icon: Users,          href: '/admin/team',          border: 'card-black-top', iconColor: 'text-navy' },
    { label: 'Partners',      value: counts.partners      ?? '—', icon: BarChart3,      href: '/admin/partners',      border: 'card-blue-top',  iconColor: 'text-secondary-600' },
    { label: 'News Articles', value: counts.news          ?? '—', icon: Newspaper,      href: '/admin/news',          border: 'card-green-top', iconColor: 'text-primary-600' },
    { label: 'Messages',      value: counts.contacts      ?? '—', icon: MessageSquare,  href: '/admin/messages',      border: 'card-black-top', iconColor: 'text-navy' },
  ]

  const QUICK_LINKS = [
    { label: 'Add Program',     href: '/admin/programs',  icon: FolderOpen,     border: 'card-blue-top',  iconBg: 'bg-secondary-50',  iconColor: 'text-secondary-600' },
    { label: 'Add Project',     href: '/admin/projects',  icon: FileText,       border: 'card-green-top', iconBg: 'bg-primary-50',    iconColor: 'text-primary-600' },
    { label: 'Add Team Member',  href: '/admin/team',      icon: Users,          border: 'card-black-top', iconBg: 'bg-slate-100',      iconColor: 'text-navy' },
    { label: 'View Messages',   href: '/admin/messages',  icon: MessageSquare,  border: 'card-blue-top',  iconBg: 'bg-secondary-50',  iconColor: 'text-secondary-600' },
    { label: 'Upload Media',    href: '/admin/media',     icon: Image,          border: 'card-green-top', iconBg: 'bg-primary-50',    iconColor: 'text-primary-600' },
    { label: 'Add News',        href: '/admin/news',      icon: Newspaper,      border: 'card-black-top', iconBg: 'bg-slate-100',      iconColor: 'text-navy' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Welcome back. Here's an overview of MUMSA Initiative's content and CMS controls.</p>
      </div>

      {/* CMS Stats */}
      <div>
        <h2 className="text-base font-bold text-slate-800 mb-4">CMS Content Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {STAT_CARDS.map(({ label, value, icon: Icon, href, border, iconColor }) => (
            <Link
              key={label}
              to={href}
              className={`card ${border} p-5 text-center group hover:-translate-y-1 transition-transform duration-200`}
            >
              <Icon className={`w-6 h-6 ${iconColor} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-slate-900">{value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-base font-bold text-slate-800 mb-4">Quick Management Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {QUICK_LINKS.map(({ label, href, icon: Icon, border, iconBg, iconColor }) => (
            <Link
              key={label}
              to={href}
              className={`card ${border} p-5 text-center flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-200`}
              id={`dashboard-quick-${label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-10 h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-navy">{label}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Site impact snapshot */}
      <div>
        <h2 className="text-base font-bold text-slate-800 mb-4">Public Impact Stats (Live)</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.id} className="card card-blue-top p-5 text-center bg-white">
              <div className="text-xl font-bold text-primary-600">{stat.value.toLocaleString()}{stat.suffix}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-3">Update these metrics via the <Link to="/admin/impact" className="text-primary-600 hover:underline">Impact Stats editor →</Link></p>
      </div>
    </div>
  )
}
