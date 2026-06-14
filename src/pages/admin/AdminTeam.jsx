import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminTeam() {
  return (
    <AdminCRUD
      table="team_members"
      title="Team Members"
      columns={[
        { key: 'name',     label: 'Name' },
        { key: 'role',     label: 'Role' },
        { key: 'category', label: 'Category' },
        { key: 'is_published', label: 'Published', render: (v) => v ? '✅ Yes' : '⬜ Draft' },
      ]}
      formFields={[
        { key: 'name',       label: 'Full Name',   type: 'text',     required: true },
        { key: 'role',       label: 'Position',    type: 'text',     required: true },
        { key: 'category',   label: 'Category',    type: 'select',   required: true,
          options: ['leadership', 'board', 'advisory', 'staff', 'volunteer'] },
        { key: 'bio',        label: 'Biography',   type: 'textarea' },
        { key: 'photo_url',  label: 'Photo URL',   type: 'url' },
        { key: 'linkedin_url', label: 'LinkedIn URL', type: 'url' },
        { key: 'is_published', label: 'Published', type: 'checkbox' },
      ]}
    />
  )
}
