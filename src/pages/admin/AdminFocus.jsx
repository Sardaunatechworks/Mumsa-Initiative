import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminFocus() {
  return (
    <AdminCRUD
      table="focus_areas"
      title="Focus Areas"
      orderBy={{ column: 'order_index', ascending: true }}
      columns={[
        {
          key: 'image_url',
          label: 'Image',
          render: (v, row) => (
            v ? (
              <img src={v} alt={row.title} className="w-10 h-8 rounded object-cover border border-slate-200" />
            ) : (
              <div className="w-10 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 font-bold text-2xs">
                N/A
              </div>
            )
          )
        },
        { key: 'title',        label: 'Title' },
        { key: 'description',  label: 'Description' },
        { key: 'border',       label: 'Card Border' },
        { key: 'is_published', label: 'Published', render: (v) => v ? '✅ Yes' : '⬜ Draft' },
      ]}
      formFields={[
        { key: 'title',        label: 'Title',       type: 'text',     required: true },
        { key: 'description',  label: 'Description', type: 'textarea', required: true },
        { key: 'image_url',    label: 'Feature Image (Upload/URL)', type: 'url', required: true },
        { key: 'border',       label: 'Card Theme Border Style', type: 'select', required: true,
          options: [
            { label: 'Green Top Border (card-green-top)', value: 'card-green-top' },
            { label: 'Blue Top Border (card-blue-top)', value: 'card-blue-top' },
            { label: 'Black Top Border (card-black-top)', value: 'card-black-top' }
          ],
          default: 'card-green-top'
        },
        { key: 'order_index',  label: 'Order Index', type: 'number',   default: 0 },
        { key: 'is_published', label: 'Published',   type: 'checkbox', default: true },
      ]}
    />
  )
}
