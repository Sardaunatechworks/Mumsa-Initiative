import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminPrograms() {
  return (
    <AdminCRUD
      table="programs"
      title="Programs"
      columns={[
        { key: 'title', label: 'Title' },
        { key: 'category', label: 'Category' },
        { key: 'is_published', label: 'Published', render: (v) => v ? '✅ Yes' : '⬜ Draft' },
        { key: 'created_at', label: 'Created', render: (v) => v ? new Date(v).toLocaleDateString() : '—' },
      ]}
      formFields={[
        { key: 'title',       label: 'Program Title',   type: 'text',     required: true },
        { key: 'category',    label: 'Category',        type: 'select',   required: true,
          options: ['Education & Skills Development', 'Health & Wellbeing', 'Youth Economic Empowerment', 'Women Empowerment', 'Human Rights & Social Inclusion', 'Climate Action & Sustainability'] },
        { key: 'description', label: 'Description',     type: 'textarea', required: true },
        { key: 'objectives',  label: 'Objectives',      type: 'textarea' },
        { key: 'activities',  label: 'Activities',      type: 'textarea' },
        { key: 'outcomes',    label: 'Outcomes',        type: 'textarea' },
        { key: 'is_published',label: 'Published',       type: 'checkbox' },
      ]}
    />
  )
}
