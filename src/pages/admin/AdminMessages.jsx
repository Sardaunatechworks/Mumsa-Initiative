import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@lib/supabase'
import { Spinner, EmptyState } from '@components/ui'
import { MessageSquare, Eye, Trash2, CheckCircle2, Clock } from 'lucide-react'

export default function AdminMessages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading]   = useState(true)
  const [selected, setSelected] = useState(null)

  const fetchMessages = useCallback(async () => {
    const { data } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })
    setMessages(data || [])
    setLoading(false)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMessages()
  }, [fetchMessages])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message?')) return
    await supabase.from('contacts').delete().eq('id', id)
    fetchMessages()
    setSelected(null)
  }

  const markRead = async (id) => {
    await supabase.from('contacts').update({ is_read: true }).eq('id', id)
    fetchMessages()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
        <p className="text-slate-500 text-sm mt-0.5">{messages.length} contact submissions</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size="lg" /></div>
      ) : messages.length === 0 ? (
        <EmptyState icon={MessageSquare} title="No messages yet" description="Contact form submissions will appear here." />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* List */}
          <div className="lg:col-span-2 space-y-2">
            {messages.map((msg) => (
              <button
                key={msg.id}
                onClick={() => { setSelected(msg); markRead(msg.id) }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${selected?.id === msg.id ? 'border-primary-500 bg-primary-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="font-semibold text-slate-900 text-sm truncate">{msg.name}</span>
                  {!msg.is_read && <span className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-1" aria-label="Unread" />}
                </div>
                <p className="text-xs text-slate-500 truncate mb-1">{msg.subject}</p>
                <p className="text-2xs text-slate-400">{msg.created_at ? new Date(msg.created_at).toLocaleDateString() : ''}</p>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:col-span-3">
            {selected ? (
              <div className="card card-blue-top p-7 h-full">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{selected.subject}</h2>
                    <p className="text-sm text-slate-500 mt-0.5">From {selected.name} · {selected.email}</p>
                    {selected.phone && <p className="text-xs text-slate-400">{selected.phone}</p>}
                  </div>
                  <button onClick={() => handleDelete(selected.id)} className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors" aria-label="Delete message">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap mb-6">
                  {selected.message}
                </div>
                <a href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`} className="btn-primary btn-sm" id="messages-reply-btn">
                  Reply via Email
                </a>
              </div>
            ) : (
              <div className="card p-8 flex items-center justify-center h-full text-slate-400">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 mx-auto mb-3 text-slate-200" />
                  <p className="text-sm">Select a message to view</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
