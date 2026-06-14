import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminResources() {
  return (
    <AdminCRUD
      table="publications"
      title="Resources"
      columns={[
        { key: 'title',  label: 'Title' },
        { key: 'type',   label: 'Type' },
        { key: 'year',   label: 'Year' },
        { key: 'is_published', label: 'Published', render: (v) => v ? '✅ Yes' : '⬜ Draft' },
      ]}
      formFields={[
        { key: 'title',       label: 'Title',         type: 'text',   required: true },
        { key: 'type',        label: 'Resource Type', type: 'select', required: true,
          options: ['Publication', 'Research Report', 'Policy Brief', 'Toolkit', 'Training Manual', 'Annual Report', 'Financial Report'] },
        { key: 'year',        label: 'Year',          type: 'number' },
        { key: 'description', label: 'Description',   type: 'textarea' },
        { key: 'file_url',    label: 'File URL (PDF/doc)', type: 'url' },
        { key: 'is_published',label: 'Published',     type: 'checkbox' },
      ]}
    />
  )
}
