import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@lib/supabase'
import { Plus, Pencil, Trash2, X, Save, AlertCircle, Upload } from 'lucide-react'
import { Spinner, EmptyState } from '@components/ui'

/**
 * Generic CRUD admin table component.
 * Props:
 *   - table: string (Supabase table name)
 *   - columns: Array<{ key, label, render? }>
 *   - formFields: Array<{ key, label, type, required, options? }>
 *   - title: string
 *   - orderBy: { column, ascending }
 */
export default function AdminCRUD({ table, columns, formFields, title, orderBy = { column: 'created_at', ascending: false } }) {
  const [rows, setRows]         = useState([])
  const [loading, setLoading]   = useState(true)
  const [modalOpen, setModal]   = useState(false)
  const [editing, setEditing]   = useState(null)
  const [form, setForm]         = useState({})
  const [saving, setSaving]     = useState(false)
  const [error, setError]       = useState(null)
  const [fieldUploading, setFieldUploading] = useState({})

  const emptyForm = formFields.reduce((acc, f) => {
    let defaultVal = ''
    if (f.default !== undefined) {
      defaultVal = f.default
    } else if (f.type === 'checkbox') {
      defaultVal = false
    }
    return { ...acc, [f.key]: defaultVal }
  }, {})

  const fetchRows = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .order(orderBy.column, { ascending: orderBy.ascending })
    if (!error) setRows(data || [])
    setLoading(false)
  }, [table, orderBy.column, orderBy.ascending])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchRows()
    }, 0)
    return () => clearTimeout(timer)
  }, [fetchRows])

  const openCreate = () => { setEditing(null); setForm(emptyForm); setError(null); setModal(true) }
  const openEdit   = (row) => { 
    const formatted = { ...row }
    Object.keys(formatted).forEach((key) => {
      if (Array.isArray(formatted[key])) {
        formatted[key] = formatted[key].join(', ')
      }
    })
    setEditing(row); 
    setForm(formatted); 
    setError(null); 
    setModal(true) 
  }

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    const payload = { ...form }
    if (table !== 'gallery') {
      payload.updated_at = new Date().toISOString()
    }

    // Parse array fields (like subprograms) if they are strings
    Object.keys(payload).forEach((key) => {
      if (key === 'subprograms' && typeof payload[key] === 'string') {
        payload[key] = payload[key]
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean)
      }
    })

    // Auto-derive name if table is partners and name is missing
    if (table === 'partners' && !payload.name) {
      if (payload.logo_url) {
        try {
          const urlParts = payload.logo_url.split('/')
          const fileName = urlParts[urlParts.length - 1]
          const decodedFileName = decodeURIComponent(fileName)
          const cleanName = decodedFileName
            .replace(/^\d+-/, '')
            .split('.')[0]
            .replace(/_/g, ' ')
            .replace(/-/g, ' ')
          payload.name = cleanName
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') || 'Partner'
        } catch (e) {
          payload.name = 'Partner'
        }
      } else {
        payload.name = 'Partner'
      }
    }

    let err
    if (editing) {
      ;({ error: err } = await supabase.from(table).update(payload).eq('id', editing.id))
    } else {
      ;({ error: err } = await supabase.from(table).insert([payload]))
    }
    if (err) { setError(err.message); setSaving(false); return }
    setModal(false)
    fetchRows()
    setSaving(false)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return
    await supabase.from(table).delete().eq('id', id)
    fetchRows()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="text-slate-500 text-sm mt-0.5">{rows.length} record{rows.length !== 1 ? 's' : ''}</p>
        </div>
        <button onClick={openCreate} className="btn-primary btn-sm" id={`${table}-create-btn`}>
          <Plus className="w-4 h-4" />
          Add New
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size="lg" /></div>
      ) : rows.length === 0 ? (
        <EmptyState
          icon={Plus}
          title={`No ${title.toLowerCase()} yet`}
          description="Click 'Add New' to create your first record."
        />
      ) : (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label={`${title} table`}>
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  {columns.map((col) => (
                    <th key={col.key} className="text-left px-5 py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {col.label}
                    </th>
                  ))}
                  <th className="px-5 py-3.5 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {rows.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                    {columns.map((col) => (
                      <td key={col.key} className="px-5 py-4 text-slate-700 max-w-xs truncate">
                        {col.render ? col.render(row[col.key], row) : (row[col.key] ?? '—')}
                      </td>
                    ))}
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEdit(row)}
                          className="p-2 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                          aria-label="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(row.id)}
                          className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          aria-label="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={editing ? 'Edit record' : 'Create record'}>
          <div className="absolute inset-0 bg-black/50" onClick={() => setModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border-t-4 border-secondary-600">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">{editing ? `Edit ${title.replace(/s$/, '')}` : `Add New ${title.replace(/s$/, '')}`}</h2>
              <button onClick={() => setModal(false)} className="p-2 rounded-lg text-slate-400 hover:bg-slate-100" aria-label="Close modal">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {error && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </div>
              )}

              {formFields.map((field) => (
                <div key={field.key}>
                  <label htmlFor={`modal-${field.key}`} className="form-label">
                    {field.label}{field.required && ' *'}
                  </label>

                  {field.type === 'textarea' ? (
                    <textarea
                      id={`modal-${field.key}`}
                      rows={4}
                      required={field.required}
                      value={form[field.key] || ''}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="form-textarea"
                    />
                  ) : field.type === 'select' ? (
                    <select
                      id={`modal-${field.key}`}
                      required={field.required}
                      value={form[field.key] || ''}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="form-input"
                    >
                      <option value="">Select…</option>
                      {field.options?.map((o) => (
                        <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
                      ))}
                    </select>
                  ) : field.type === 'checkbox' ? (
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        id={`modal-${field.key}`}
                        type="checkbox"
                        checked={!!form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.checked })}
                        className="w-4 h-4 text-primary-600 rounded"
                      />
                      <span className="text-sm text-slate-600">{field.label}</span>
                    </label>
                  ) : (field.type === 'url' || field.key.endsWith('_url') || field.key === 'file_url') ? (
                    <div className="space-y-2">
                      {form[field.key] ? (
                        /* Preview state */
                        <div className="relative rounded-xl border border-slate-200 bg-slate-50 p-4 flex items-center gap-4 group">
                          {/* Image preview check */}
                          {(field.key.endsWith('_url') && field.key !== 'file_url') ? (
                            <div className="w-20 h-20 rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center flex-shrink-0">
                              <img
                                src={form[field.key]}
                                alt="Uploaded preview"
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-20 h-20 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                              <Upload className="w-8 h-8" />
                            </div>
                          )}

                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-slate-900 truncate">Uploaded File</p>
                            <p className="text-2xs text-slate-400 truncate mt-0.5">{form[field.key]}</p>
                            <a
                              href={form[field.key]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-2xs font-semibold text-secondary-600 hover:underline inline-flex items-center gap-1 mt-1"
                            >
                              Open Link ↗
                            </a>
                          </div>

                          <button
                            type="button"
                            onClick={() => setForm(prev => ({ ...prev, [field.key]: '' }))}
                            className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors flex-shrink-0"
                            aria-label="Remove file"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        /* Upload state (Drop/Click zone) */
                        <label className="border-2 border-dashed border-slate-200 hover:border-primary-500 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-slate-50 min-h-[140px]">
                          <Upload className="w-8 h-8 text-slate-400 mb-2" />
                          <span className="text-sm font-bold text-navy">
                            {field.key === 'file_url' ? 'Upload Document' : 'Upload Image'}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-1">
                            {field.key === 'file_url' ? 'PDF, DOC, or image files' : 'PNG, JPG, or WEBP up to 5MB'}
                          </span>
                          <input
                            type="file"
                            accept={field.key === 'file_url' ? 'application/pdf,application/msword,image/*' : 'image/*'}
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files[0]
                              if (!file) return
                              
                              const filename = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`
                              
                              setFieldUploading(prev => ({ ...prev, [field.key]: true }))
                              
                              const { data, error: uploadErr } = await supabase.storage
                                .from('gallery')
                                .upload(filename, file, { cacheControl: '3600', upsert: false })
                                
                              if (!uploadErr) {
                                const { data: urlData } = supabase.storage.from('gallery').getPublicUrl(filename)
                                setForm(prev => ({ ...prev, [field.key]: urlData.publicUrl }))
                              } else {
                                alert(`Upload failed: ${uploadErr.message}`)
                              }
                              setFieldUploading(prev => ({ ...prev, [field.key]: false }))
                            }}
                          />
                        </label>
                      )}

                      {fieldUploading[field.key] && (
                        <p className="text-xs text-primary-600 animate-pulse flex items-center gap-1.5 font-medium">
                          <span className="w-3.5 h-3.5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin inline-block" />
                          Uploading to gallery storage...
                        </p>
                      )}
                    </div>
                  ) : (
                    <input
                      id={`modal-${field.key}`}
                      type={field.type || 'text'}
                      required={field.required}
                      value={form[field.key] || ''}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="form-input"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-100">
              <button onClick={() => setModal(false)} className="btn-ghost text-slate-600">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="btn-primary" id="modal-save-btn">
                {saving ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Saving…
                  </span>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    {editing ? 'Save Changes' : 'Create'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
