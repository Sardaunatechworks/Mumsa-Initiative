import { cn } from '@lib/utils'
import { Helmet } from 'react-helmet-async'

// ============================
// SectionHeader
// ============================
export function SectionHeader({ label, title, subtitle, centered = false, dark = false, className }) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {label && (
        <div className={cn('section-label mb-3', dark && 'text-primary-300')}>
          <span className="w-6 h-px bg-current inline-block" />
          {label}
        </div>
      )}
      <h2 className={cn('section-title', dark && 'text-white')}>{title}</h2>
      {subtitle && (
        <p className={cn(
          'section-subtitle mt-4',
          dark && 'text-slate-300',
          centered && 'mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ============================
// PageHero
// ============================
export function PageHero({ title, subtitle, label, breadcrumb, children }) {
  return (
    <section className="bg-white border-b border-brand-border pt-32 pb-16 relative noise-overlay" aria-label="Page hero">
      <div className="container relative z-10">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider">
              {breadcrumb.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span>/</span>}
                  {item.href ? (
                    <a href={item.href} className="hover:text-black transition-colors">{item.label}</a>
                  ) : (
                    <span className="text-slate-505">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {label && (
          <div className="section-label text-secondary-600 mb-4">
            <span className="w-6 h-px bg-current inline-block" />
            {label}
          </div>
        )}
        <h1 className="text-display text-navy max-w-4xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-body-large text-slate-gray max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  )
}

// ============================
// Card
// ============================
export function Card({ className, children, ...props }) {
  return (
    <div className={cn('card', className)} {...props}>
      {children}
    </div>
  )
}

// ============================
// Badge
// ============================
export function Badge({ variant = 'green', children, className }) {
  return (
    <span className={cn(`badge-${variant}`, className)}>
      {children}
    </span>
  )
}

// ============================
// Button
// ============================
export function Button({ variant = 'primary', size, children, className, ...props }) {
  return (
    <button
      className={cn(
        `btn-${variant}`,
        size && `btn-${size}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

// ============================
// Spinner
// ============================
export function Spinner({ size = 'md', className }) {
  const sizes = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' }
  return (
    <div
      className={cn(
        'border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin',
        sizes[size],
        className
      )}
      role="status"
      aria-label="Loading"
    />
  )
}

// ============================
// Divider
// ============================
export function Divider({ className }) {
  return <div className={cn('divider', className)} />
}

// ============================
// SEOHead
// ============================
export function SEOHead({ title, description, image, url }) {
  const fullTitle = title
    ? `${title} | MUMSA Initiative`
    : 'MUMSA Initiative — Empowering Communities for Sustainable Change'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="MUMSA Initiative" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:site" content="@MumsaInitiative" />
    </Helmet>
  )
}

// ============================
// Stat Counter Card
// ============================
export function StatCard({ value, suffix = '', label, icon: Icon, dark = false }) {
  return (
    <div className={cn('stat-card', dark && 'bg-white/10 border-white/20')}>
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div className={cn('text-4xl font-bold mb-1', dark ? 'text-white' : 'text-primary-600')}>
        {value.toLocaleString()}{suffix}
      </div>
      <div className={cn('text-sm font-medium', dark ? 'text-white/70' : 'text-slate-500')}>
        {label}
      </div>
    </div>
  )
}

// ============================
// Empty State
// ============================
export function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="text-center py-20">
      {Icon && (
        <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-slate-400" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-700 mb-2">{title}</h3>
      {description && <p className="text-slate-400 text-sm max-w-sm mx-auto">{description}</p>}
    </div>
  )
}
