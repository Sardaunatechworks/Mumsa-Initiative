import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminPrograms() {
  return (
    <AdminCRUD
      table="programs"
      title="Programs"
      orderBy={{ column: 'order_index', ascending: true }}
      columns={[
        { key: 'order_index', label: 'Order' },
        { key: 'title', label: 'Title' },
        { key: 'category', label: 'Category' },
        { key: 'is_published', label: 'Published', render: (v) => v ? '✅ Yes' : '⬜ Draft' },
        { key: 'subprograms', label: 'Sub-programs', render: (v) => Array.isArray(v) ? v.join(', ') : (v ?? '—') },
      ]}
      formFields={[
        { key: 'title',       label: 'Program Title',   type: 'text',     required: true },
        { key: 'slug',        label: 'URL Slug',        type: 'text',     required: true },
        { key: 'category',    label: 'Category',        type: 'select',   required: true,
          options: [
            'Education & Skills Development', 
            'Health & Wellbeing', 
            'Youth Economic Empowerment', 
            'Women Empowerment', 
            'Human Rights & Social Inclusion', 
            'Climate Action & Sustainability'
          ] 
        },
        { key: 'description', label: 'Description',     type: 'textarea', required: true },
        { key: 'subprograms', label: 'Sub-programs / Key Projects (comma-separated)', type: 'text' },
        { key: 'icon',        label: 'Lucide Icon Name', type: 'select', required: true,
          options: ['BookOpen', 'HeartPulse', 'TrendingUp', 'Star', 'Shield', 'Leaf', 'GraduationCap', 'Globe', 'Award'] 
        },
        { key: 'color',       label: 'Color Theme',     type: 'select',   required: true,
          options: [
            { label: 'Primary (Green)', value: 'primary' },
            { label: 'Secondary (Navy)', value: 'secondary' }
          ]
        },
        { key: 'objectives',  label: 'Objectives',      type: 'textarea' },
        { key: 'activities',  label: 'Activities',      type: 'textarea' },
        { key: 'outcomes',    label: 'Outcomes',        type: 'textarea' },
        { key: 'order_index', label: 'Order Index',     type: 'number',   default: 0 },
        { key: 'is_published',label: 'Published',       type: 'checkbox' },
      ]}
    />
  )
}
