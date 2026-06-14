import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminProjects() {
  return (
    <AdminCRUD
      table="projects"
      title="Projects"
      columns={[
        { key: 'title',    label: 'Title' },
        { key: 'donor',    label: 'Donor' },
        { key: 'location', label: 'Location' },
        { key: 'status',   label: 'Status' },
        { key: 'is_published', label: 'Published', render: (v) => v ? '✅ Yes' : '⬜ Draft' },
      ]}
      formFields={[
        { key: 'title',       label: 'Project Title',  type: 'text',     required: true },
        { key: 'donor',       label: 'Donor',          type: 'text' },
        { key: 'budget',      label: 'Budget',         type: 'text' },
        { key: 'location',    label: 'Location',       type: 'text' },
        { key: 'duration',    label: 'Duration',       type: 'text' },
        { key: 'status',      label: 'Status',         type: 'select',
          options: ['Ongoing', 'Completed', 'Planned'] },
        { key: 'description', label: 'Description',    type: 'textarea', required: true },
        { key: 'objectives',  label: 'Objectives',     type: 'textarea' },
        { key: 'activities',  label: 'Activities',     type: 'textarea' },
        { key: 'results',     label: 'Results',        type: 'textarea' },
        { key: 'is_published',label: 'Published',      type: 'checkbox' },
      ]}
    />
  )
}
