import { Link } from 'react-router-dom'
import { SEOHead } from '@components/ui'
import { Home } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
        <div className="text-8xl font-bold text-primary-100 mb-4 select-none">404</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-500 max-w-sm mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary btn-lg" id="404-home-btn">
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </>
  )
}
