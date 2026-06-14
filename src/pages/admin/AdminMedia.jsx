import { useState, useEffect, useRef, useCallback } from 'react'
import { supabase } from '@lib/supabase'
import { Upload, Trash2, Image, ExternalLink } from 'lucide-react'
import { Spinner } from '@components/ui'

export default function AdminMedia() {
  const [files, setFiles]       = useState([])
  const [loading, setLoading]   = useState(true)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef()

  const fetchFiles = useCallback(async () => {
    const { data } = await supabase.storage.from('gallery').list('', { limit: 100, sortBy: { column: 'created_at', order: 'desc' } })
    setFiles(data || [])
    setLoading(false)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchFiles()
  }, [fetchFiles])

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`
    const { error } = await supabase.storage.from('gallery').upload(filename, file, { cacheControl: '3600', upsert: false })
    if (!error) fetchFiles()
    setUploading(false)
  }

  const handleDelete = async (name) => {
    if (!window.confirm(`Delete "${name}"?`)) return
    await supabase.storage.from('gallery').remove([name])
    fetchFiles()
  }

  const getUrl = (name) => {
    const { data } = supabase.storage.from('gallery').getPublicUrl(name)
    return data.publicUrl
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Media Gallery</h1>
          <p className="text-slate-500 text-sm mt-0.5">{files.length} file{files.length !== 1 ? 's' : ''} in gallery bucket</p>
        </div>
        <div>
          <input type="file" ref={fileRef} onChange={handleUpload} accept="image/*,video/*,application/pdf" className="hidden" id="media-upload-input" />
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="btn-primary btn-sm"
            id="media-upload-btn"
          >
            {uploading ? <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Upload className="w-4 h-4" />}
            {uploading ? 'Uploading…' : 'Upload File'}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size="lg" /></div>
      ) : files.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-2xl bg-white shadow-card">
          <Image className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-600 mb-2">No files uploaded yet</h3>
          <p className="text-slate-400 text-sm mb-6">Upload images, videos, or documents to the gallery.</p>
          <button onClick={() => fileRef.current?.click()} className="btn-primary btn-sm">Upload First File</button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {files.map((file) => {
            const url = getUrl(file.name)
            const isImage = /\.(png|jpe?g|webp|gif|svg)$/i.test(file.name)
            return (
              <div key={file.id} className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 aspect-square">
                {isImage ? (
                  <img src={url} alt={file.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 flex-col gap-2 p-3">
                    <Image className="w-8 h-8" />
                    <span className="text-xs text-center truncate w-full">{file.name}</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-lg text-white hover:bg-white/30" aria-label="Open file">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button onClick={() => handleDelete(file.name)} className="p-2 bg-red-500/80 rounded-lg text-white hover:bg-red-600" aria-label="Delete file">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
