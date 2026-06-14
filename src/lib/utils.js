/**
 * Format a number with commas
 */
export const formatNumber = (n) =>
  new Intl.NumberFormat('en-NG').format(n)

/**
 * Format currency in NGN
 */
export const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount)

/**
 * Truncate text to n chars
 */
export const truncate = (str, n = 120) =>
  str?.length > n ? str.slice(0, n).trimEnd() + '…' : str

/**
 * Generate slug from string
 */
export const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

/**
 * Format a date nicely
 */
export const formatDate = (dateStr, opts = {}) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...opts,
  })
}

/**
 * Class name helper
 */
export const cn = (...classes) => classes.filter(Boolean).join(' ')
