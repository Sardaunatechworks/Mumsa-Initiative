import AdminCRUD from '@components/admin/AdminCRUD'

export default function AdminImpact() {
  return (
    <AdminCRUD
      table="impact_stats"
      title="Impact Statistics"
      columns={[
        { key: 'label',  label: 'Metric Label' },
        { key: 'value',  label: 'Value' },
        { key: 'suffix', label: 'Suffix' },
        { key: 'icon',   label: 'Icon' },
      ]}
      formFields={[
        { key: 'label',       label: 'Metric Label', type: 'text',   required: true, placeholder: 'Beneficiaries Reached' },
        { key: 'value',       label: 'Value (number)', type: 'number', required: true },
        { key: 'suffix',      label: 'Suffix (e.g. +)', type: 'text' },
        { key: 'icon',        label: 'Icon Name (Lucide)', type: 'text', placeholder: 'Users' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'order_index', label: 'Display Order', type: 'number' },
      ]}
      orderBy={{ column: 'order_index', ascending: true }}
    />
  )
}
