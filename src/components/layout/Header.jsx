import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@lib/content'
import { cn } from '@lib/utils'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileOpen(false)
      setOpenDropdown(null)
    }, 0)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
        <nav className="container flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0" aria-label="MUMSA Initiative Home">
            <img src="/logo.png" alt="MUMSA Initiative Logo" style={{ height: '36px', width: 'auto', display: 'block' }} className="transition-transform group-hover:scale-[1.02]" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-2 2xl:px-3 py-2 rounded-lg text-xs 2xl:text-sm font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-colors"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label}
                    <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', openDropdown === link.label && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            role="menuitem"
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      'px-2 2xl:px-3 py-2 rounded-lg text-xs 2xl:text-sm font-medium transition-colors',
                      isActive ? 'text-primary-600 bg-primary-50' : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/donate"
              className="btn-accent btn-sm flex items-center gap-1.5 !px-4 !py-2"
              id="header-donate-btn"
            >
              <Heart className="w-3.5 h-3.5" />
              Donate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 xl:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 xl:hidden overflow-y-auto"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <Link to="/" className="flex items-center" aria-label="MUMSA Initiative Home">
                  <img src="/logo.png" alt="MUMSA Initiative Logo" style={{ height: '32px', width: 'auto', display: 'block' }} />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-4" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <div className="mb-1">
                        <button
                          className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-900 rounded-lg hover:bg-slate-50"
                          onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                          aria-expanded={openDropdown === link.label}
                        >
                          {link.label}
                          <ChevronDown className={cn('w-4 h-4 transition-transform', openDropdown === link.label && 'rotate-180')} />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="block pl-6 pr-3 py-2 text-sm text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                          cn(
                            'block px-3 py-2.5 text-sm font-medium rounded-lg mb-1 transition-colors',
                            isActive ? 'text-primary-600 bg-primary-50' : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link to="/donate" className="btn-accent w-full justify-center" id="mobile-donate-btn">
                    <Heart className="w-4 h-4" />
                    Donate Now
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
