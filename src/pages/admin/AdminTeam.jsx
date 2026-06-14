import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminTeam() {
  return (
    <AdminCRUD
      table="team_members"
      title="Team Members"
      columns={[
        {
          key: 'photo_url',
          label: 'Photo',
          render: (v, row) => (
            v ? (
              <img src={v} alt={row.name} className="w-8 h-8 rounded-lg object-cover border border-slate-200" />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold font-mono uppercase">
                {row.name ? row.name.split(' ').slice(-1)[0][0] : '—'}
              </div>
            )
          )
        },
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
        { key: 'photo_url',  label: 'Profile Picture (Upload/URL)', type: 'url' },
        { key: 'linkedin_url', label: 'LinkedIn URL', type: 'url' },
        { key: 'is_published', label: 'Published', type: 'checkbox' },
      ]}
    />
  )
}
