import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Newspaper, Calendar, FileText, Camera, Video,
  MapPin, Clock, ArrowRight, Play, ExternalLink
} from 'lucide-react'
import { SEOHead, PageHero } from '@components/ui'
import { supabase } from '@lib/supabase'

const TABS = [
  { id: 'news',    label: 'Articles',       icon: Newspaper },
  { id: 'press',   label: 'Press Releases', icon: FileText  },
  { id: 'events',  label: 'Upcoming Events',icon: Calendar  },
  { id: 'gallery', label: 'Photo Galleries',icon: Camera    },
  { id: 'video',   label: 'Videos',         icon: Video     },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

export default function MediaPage() {
  const [activeTab, setTab] = useState('news')
  const [mediaData, setMediaData] = useState({
    news: [],
    press: [],
    events: [],
    gallery: [],
    video: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMediaData() {
      try {
        const [newsRes, galleryRes] = await Promise.all([
          supabase.from('news').select('*').eq('is_published', true).order('published_at', { ascending: false }),
          supabase.from('gallery').select('*').eq('is_published', true).order('created_at', { ascending: false })
        ])
        
        const media = {
          news: [],
          press: [],
          events: [],
          gallery: [],
          video: []
        }
        
        if (!newsRes.error && newsRes.data) {
          media.news = newsRes.data.filter(item => item.type === 'News')
          media.press = newsRes.data.filter(item => item.type === 'Press Release' || item.type === 'Press')
          media.events = newsRes.data.filter(item => item.type === 'Event')
        }
        
        if (!galleryRes.error && galleryRes.data) {
          const videoRegex = /\.(mp4|webm|ogg|mov)$/i
          const youtubeRegex = /(youtube\.com|youtu\.be|vimeo\.com)/i
          
          galleryRes.data.forEach(item => {
            const isVideo = videoRegex.test(item.url) || youtubeRegex.test(item.url)
            if (isVideo) {
              media.video.push({
                id: item.id,
                title: item.title,
                video_url: item.url,
                cover_url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
                duration: 'Play Video'
              })
            } else {
              media.gallery.push({
                id: item.id,
                title: item.title,
                url: item.url
              })
            }
          })
        }
        
        setMediaData(media)
      } catch (err) {
        console.warn('Supabase media fetch failed:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchMediaData()
  }, [])

  return (
    <>
      <SEOHead
        title="Media Centre & Newsroom"
        description="Read latest announcements, upcoming community outreach schedules, watch documentaries, and review our photo evidence gallery."
      />

      <PageHero
        label="Newsroom"
        title="Media Centre"
        subtitle="Access the latest statements, updates, field photos, and upcoming community mobilization schedules."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Media' }
        ]}
      />

      {/* ===== TABS NAVIGATION ===== */}
      <section className="section bg-white text-navy">
        <div className="container">
          <div className="flex flex-wrap gap-2 border-b border-brand-border pb-6 mb-10 justify-center">
            {TABS.map((t) => {
              const Icon = t.icon
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`btn-sm btn flex items-center gap-2 ${activeTab === t.id ? 'btn-primary' : 'btn-ghost text-slate-gray hover:bg-slate-50'}`}
                  aria-pressed={activeTab === t.id}
                >
                  <Icon className="w-4 h-4" />
                  {t.label}
                </button>
              )
            })}
          </div>

          {/* ===== GRID ACCORDING TO TABS ===== */}
          <div className="min-h-[400px]">
            {loading ? (
              <div className="flex justify-center py-20">
                <span className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <>
                {activeTab === 'news' && (
                  mediaData.news.length === 0 ? (
                    <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 max-w-xl mx-auto shadow-sm">
                      <p className="text-slate-500 font-medium text-sm">No articles published at the moment.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {mediaData.news.map((item) => (
                        <motion.article key={item.id} className="bg-slate-50 rounded-xl border border-brand-border overflow-hidden shadow-card flex flex-col justify-between" {...fadeUp}>
                          <div className="h-56 overflow-hidden bg-white flex items-center justify-center border-b border-brand-border">
                            <img src={item.cover_url || 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80'} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                              <span className="text-[10px] text-slate-400 font-bold block mb-2">{item.date || new Date(item.created_at).toLocaleDateString()}</span>
                              <h3 className="text-xs font-bold text-navy mb-3 line-clamp-2">{item.title}</h3>
                              <p className="text-2xs text-slate-gray leading-relaxed mb-6 line-clamp-3">{item.excerpt}</p>
                            </div>
                            <Link to="/media" className="text-xs font-bold text-secondary-600 hover:underline flex items-center gap-1">
                              Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  )
                )}

                {activeTab === 'press' && (
                  mediaData.press.length === 0 ? (
                    <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 max-w-xl mx-auto shadow-sm">
                      <p className="text-slate-500 font-medium text-sm">No press releases published at the moment.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {mediaData.press.map((item) => (
                        <motion.div key={item.id} className="bg-slate-50 p-6 rounded-xl border border-brand-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-card" {...fadeUp}>
                          <div>
                            <span className="text-[10px] text-slate-400 font-bold block mb-1">{item.date || new Date(item.created_at).toLocaleDateString()}</span>
                            <h3 className="text-xs font-bold text-navy leading-snug">{item.title}</h3>
                            <p className="text-2xs text-slate-gray mt-2 leading-relaxed max-w-2xl">{item.excerpt}</p>
                          </div>
                          {item.file_url && (
                            <a href={item.file_url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm flex items-center gap-1 flex-shrink-0">
                              Read Statement <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )
                )}

                {activeTab === 'events' && (
                  mediaData.events.length === 0 ? (
                    <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 max-w-xl mx-auto shadow-sm">
                      <p className="text-slate-500 font-medium text-sm">No upcoming events scheduled at the moment.</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {mediaData.events.map((event) => (
                        <motion.div key={event.id} className="bg-slate-50 rounded-xl overflow-hidden border border-brand-border shadow-card grid grid-cols-1 md:grid-cols-12 gap-6 items-center" {...fadeUp}>
                          <div className="md:col-span-4 h-64 md:h-full bg-white flex items-center justify-center">
                            <img src={event.cover_url || 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80'} alt={event.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="md:col-span-8 p-6 space-y-4">
                            <span className="badge badge-green">Upcoming Outreach</span>
                            <h3 className="text-xs font-bold text-navy">{event.title}</h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-2xs text-slate-gray">
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-primary-500" />
                                <span>Date: {event.date || new Date(event.published_at).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-primary-500" />
                                <span>Time: {event.time || 'TBA'}</span>
                              </div>
                              <div className="flex items-center gap-1.5 col-span-1 sm:col-span-3 lg:col-span-1">
                                <MapPin className="w-4 h-4 text-primary-500" />
                                <span className="truncate">{event.location || 'Ningi, Bauchi State'}</span>
                              </div>
                            </div>

                            <p className="text-2xs text-slate-gray leading-relaxed">
                              {event.description || event.excerpt}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )
                )}

                {activeTab === 'gallery' && (
                  mediaData.gallery.length === 0 ? (
                    <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 max-w-xl mx-auto shadow-sm">
                      <p className="text-slate-500 font-medium text-sm">No photo galleries published at the moment.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mediaData.gallery.map((item) => (
                        <motion.div key={item.id} className="group rounded-xl overflow-hidden border border-brand-border shadow-card bg-slate-50 relative h-64" {...fadeUp}>
                          <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-transparent flex flex-col justify-end p-4">
                            <p className="text-2xs font-bold text-white">{item.title}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )
                )}

                {activeTab === 'video' && (
                  mediaData.video.length === 0 ? (
                    <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 max-w-xl mx-auto shadow-sm">
                      <p className="text-slate-500 font-medium text-sm">No videos published at the moment.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {mediaData.video.map((vid) => (
                        <motion.div key={vid.id} className="bg-slate-50 border border-brand-border rounded-xl overflow-hidden shadow-card" {...fadeUp}>
                          <div className="relative h-64 bg-navy flex items-center justify-center">
                            <img src={vid.cover_url} alt={vid.title} className="w-full h-full object-cover opacity-60 absolute inset-0" />
                            <a href={vid.video_url} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-primary-500 hover:bg-primary-600 text-navy flex items-center justify-center shadow-glow transition-all relative z-10 hover:scale-105" aria-label="Play Video">
                              <Play className="w-6 h-6 fill-current" />
                            </a>
                            <span className="absolute bottom-4 right-4 bg-navy/80 text-white text-[10px] px-2 py-0.5 rounded font-semibold">
                              Duration: {vid.duration}
                            </span>
                          </div>
                          <div className="p-6">
                            <h3 className="text-2xs font-bold text-navy">{vid.title}</h3>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
