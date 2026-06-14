import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthStore } from '@stores/authStore'

// Layouts
import PublicLayout from '@components/layout/PublicLayout'
import AdminLayout  from '@components/layout/AdminLayout'
import AuthGuard    from '@components/layout/AuthGuard'

// Public pages
import HomePage         from '@pages/public/HomePage'
import AboutPage        from '@pages/public/AboutPage'
import ProgramsPage     from '@pages/public/ProgramsPage'
import ProgramDetailPage from '@pages/public/ProgramDetailPage'
import ProjectsPage     from '@pages/public/ProjectsPage'
import ProjectDetailPage from '@pages/public/ProjectDetailPage'
import ImpactPage       from '@pages/public/ImpactPage'
import PartnershipsPage from '@pages/public/PartnershipsPage'
import ResourcesPage    from '@pages/public/ResourcesPage'
import MediaPage        from '@pages/public/MediaPage'
import GetInvolvedPage  from '@pages/public/GetInvolvedPage'
import CareersPage      from '@pages/public/CareersPage'
import DonatePage       from '@pages/public/DonatePage'
import ContactPage      from '@pages/public/ContactPage'
import TeamPage         from '@pages/public/TeamPage'
import TransparencyPage from '@pages/public/TransparencyPage'
import NotFoundPage     from '@pages/public/NotFoundPage'

// Admin pages
import AdminLogin       from '@pages/admin/AdminLogin'
import AdminDashboard   from '@pages/admin/AdminDashboard'
import AdminPrograms    from '@pages/admin/AdminPrograms'
import AdminProjects    from '@pages/admin/AdminProjects'
import AdminTeam        from '@pages/admin/AdminTeam'
import AdminImpact      from '@pages/admin/AdminImpact'
import AdminPartners    from '@pages/admin/AdminPartners'
import AdminResources   from '@pages/admin/AdminResources'
import AdminMedia       from '@pages/admin/AdminMedia'
import AdminNews        from '@pages/admin/AdminNews'
import AdminMessages    from '@pages/admin/AdminMessages'
import AdminSettings    from '@pages/admin/AdminSettings'

export default function App() {
  const initialize = useAuthStore((s) => s.initialize)

  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/"              element={<HomePage />} />
          <Route path="/about"         element={<AboutPage />} />
          <Route path="/programs"      element={<ProgramsPage />} />
          <Route path="/programs/:slug" element={<ProgramDetailPage />} />
          <Route path="/projects"      element={<ProjectsPage />} />
          <Route path="/projects/:id"  element={<ProjectDetailPage />} />
          <Route path="/impact"        element={<ImpactPage />} />
          <Route path="/partnerships"  element={<PartnershipsPage />} />
          <Route path="/resources"     element={<ResourcesPage />} />
          <Route path="/media"         element={<MediaPage />} />
          <Route path="/get-involved"  element={<GetInvolvedPage />} />
          <Route path="/careers"       element={<CareersPage />} />
          <Route path="/donate"        element={<DonatePage />} />
          <Route path="/contact"       element={<ContactPage />} />
          <Route path="/team"          element={<TeamPage />} />
          <Route path="/transparency"  element={<TransparencyPage />} />
          <Route path="*"              element={<NotFoundPage />} />
        </Route>

        {/* Admin auth */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected admin routes */}
        <Route element={<AuthGuard />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin"                element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/admin/dashboard"      element={<AdminDashboard />} />
            <Route path="/admin/programs"       element={<AdminPrograms />} />
            <Route path="/admin/projects"       element={<AdminProjects />} />
            <Route path="/admin/team"           element={<AdminTeam />} />
            <Route path="/admin/impact"         element={<AdminImpact />} />
            <Route path="/admin/partners"       element={<AdminPartners />} />
            <Route path="/admin/resources"      element={<AdminResources />} />
            <Route path="/admin/media"          element={<AdminMedia />} />
            <Route path="/admin/news"           element={<AdminNews />} />
            <Route path="/admin/messages"       element={<AdminMessages />} />
            <Route path="/admin/settings"       element={<AdminSettings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
