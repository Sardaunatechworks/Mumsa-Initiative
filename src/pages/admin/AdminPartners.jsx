import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminPartners() {
  return (
    <AdminCRUD
      table="partners"
      title="Partners"
      columns={[
        { key: 'logo_url', label: 'Logo', render: (v) => v ? <img src={v} alt="logo" className="h-10 max-w-[120px] object-contain bg-slate-50 p-1.5 rounded border border-slate-100" /> : '—' },
        { key: 'name',     label: 'Derived Name' },
        { key: 'is_published', label: 'Published', render: (v) => v ? '✅ Yes' : '⬜ Draft' },
      ]}
      formFields={[
        { key: 'logo_url',    label: 'Logo File',     type: 'url',    required: true },
        { key: 'is_published',label: 'Published',     type: 'checkbox', default: true },
      ]}
    />
  )
}
