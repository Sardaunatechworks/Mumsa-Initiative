import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, FileText, FolderOpen, BarChart3, Users,
  Handshake, BookOpen, Image, Newspaper, MessageSquare,
  Settings, LogOut, Menu, X, ChevronRight, Award
} from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { useAuthStore } from '@stores/authStore'
import { cn } from '@lib/utils'

const ADMIN_NAV = [
  { label: 'Dashboard',       href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Programs',        href: '/admin/programs',  icon: FolderOpen },
  { label: 'Projects',        href: '/admin/projects',  icon: FileText },
  { label: 'Impact Stats',    href: '/admin/impact',    icon: BarChart3 },
  { label: 'Team',            href: '/admin/team',      icon: Users },
  { label: 'Partners',        href: '/admin/partners',  icon: Handshake },
  { label: 'Resources',       href: '/admin/resources', icon: BookOpen },
  { label: 'Media Gallery',   href: '/admin/media',     icon: Image },
  { label: 'News & Events',   href: '/admin/news',      icon: Newspaper },
  { label: 'Success Stories', href: '/admin/success-stories', icon: Award },
  { label: 'Messages',        href: '/admin/messages',  icon: MessageSquare },
  { label: 'Settings',        href: '/admin/settings',  icon: Settings },
]

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileSidebar, setMobileSidebar] = useState(false)
  const { user, signOut } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSignOut = async () => {
    await signOut()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile overlay */}
      {mobileSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full z-50 bg-secondary-900 text-white flex flex-col transition-all duration-300',
          'lg:relative lg:translate-x-0',
          sidebarOpen ? 'w-64' : 'w-16',
          mobileSidebar ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'
        )}
        aria-label="Admin navigation"
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10 flex-shrink-0">
          {(sidebarOpen || mobileSidebar) && (
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                M
              </div>
              <span className="font-bold text-sm whitespace-nowrap text-white">MUMSA Admin</span>
            </div>
          )}
          <button
            onClick={() => sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true)}
            className="hidden lg:flex w-8 h-8 rounded-lg hover:bg-white/10 items-center justify-center text-slate-300 hover:text-white transition-colors ml-auto"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <ChevronRight className="w-4 h-4 rotate-180" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileSidebar(false)}
            className="lg:hidden w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          {ADMIN_NAV.map(({ label, href, icon: Icon }) => (
            <NavLink
              key={href}
              to={href}
              title={!sidebarOpen ? label : undefined}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-600 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                )
              }
            >
              <Icon className="w-4.5 h-4.5 flex-shrink-0" size={18} />
              {(sidebarOpen || mobileSidebar) && <span className="truncate">{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* User section */}
        <div className="border-t border-white/10 p-3 flex-shrink-0">
          {(sidebarOpen || mobileSidebar) && (
            <div className="px-2 py-2 mb-2">
              <p className="text-xs font-semibold text-white truncate">{user?.email}</p>
              <p className="text-2xs text-slate-400">Administrator</p>
            </div>
          )}
          <button
            onClick={handleSignOut}
            title="Sign out"
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-red-500/20 transition-colors"
          >
            <LogOut size={18} className="flex-shrink-0" />
            {(sidebarOpen || mobileSidebar) && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center px-4 gap-4 flex-shrink-0">
          <button
            className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
            onClick={() => setMobileSidebar(true)}
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-base font-bold text-slate-900">
              {ADMIN_NAV.find(n => location.pathname.startsWith(n.href))?.label || 'Admin Panel'}
            </h1>
          </div>
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary-600 hover:underline font-medium"
          >
            View Site ↗
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
