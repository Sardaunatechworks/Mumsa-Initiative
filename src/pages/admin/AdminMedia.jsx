import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminMedia() {
  return (
    <AdminCRUD
      table="gallery"
      title="Media Gallery"
      columns={[
        { key: 'url', label: 'Preview', render: (v) => {
          const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(v) || /(youtube\.com|youtu\.be|vimeo\.com)/i.test(v)
          return v ? (
            isVideo ? (
              <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-bold">🎬 Video</span>
            ) : (
              <img src={v} alt="preview" className="h-10 max-w-[120px] object-contain bg-slate-50 p-1.5 rounded border border-slate-100" />
            )
          ) : '—'
        }},
        { key: 'title', label: 'Title' },
        { key: 'is_published', label: 'Published', render: (v) => v ? '✅ Yes' : '⬜ Draft' },
      ]}
      formFields={[
        { key: 'title',        label: 'Media Title',  type: 'text',     required: true },
        { key: 'url',          label: 'Media File',   type: 'url',      required: true },
        { key: 'is_published', label: 'Published',    type: 'checkbox', default: true },
      ]}
    />
  )
}
