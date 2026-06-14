import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminSuccessStories() {
  return (
    <AdminCRUD
      table="success_stories"
      title="Success Stories"
      columns={[
        { key: 'title',       label: 'Title' },
        { key: 'category',    label: 'Category' },
        { key: 'metrics',     label: 'Key Metric' },
        { key: 'is_published',label: 'Published', render: (v) => v ? '✅ Yes' : '⬜ Draft' },
      ]}
      formFields={[
        { key: 'title',        label: 'Story Title',   type: 'text',     required: true },
        { key: 'category',     label: 'Category',      type: 'text' },
        { key: 'metrics',      label: 'Key Metric (e.g. 2,400+ Girls Reintegrated)', type: 'text' },
        { key: 'content',      label: 'Story Content', type: 'textarea', required: true },
        { key: 'author',       label: 'Author/Source', type: 'text' },
        { key: 'image_url',    label: 'Feature Image', type: 'url' },
        { key: 'is_published', label: 'Published',     type: 'checkbox' },
      ]}
    />
  )
}
