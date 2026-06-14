import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminNews() {
  return (
    <AdminCRUD
      table="news"
      title="News & Events"
      columns={[
        { key: 'title',      label: 'Title' },
        { key: 'type',       label: 'Type' },
        { key: 'published_at', label: 'Date', render: (v) => v ? new Date(v).toLocaleDateString() : '—' },
        { key: 'is_published', label: 'Live', render: (v) => v ? '✅ Yes' : '⬜ Draft' },
      ]}
      formFields={[
        { key: 'title',        label: 'Title',       type: 'text',     required: true },
        { key: 'type',         label: 'Type',        type: 'select',   required: true,
          options: ['News', 'Press Release', 'Event'] },
        { key: 'excerpt',      label: 'Excerpt',     type: 'textarea' },
        { key: 'content',      label: 'Full Content',type: 'textarea' },
        { key: 'published_at', label: 'Publish Date',type: 'date' },
        { key: 'cover_url',    label: 'Cover Image URL', type: 'url' },
        { key: 'location',     label: 'Event Location (if applicable)', type: 'text' },
        { key: 'is_published', label: 'Published',   type: 'checkbox' },
      ]}
    />
  )
}
