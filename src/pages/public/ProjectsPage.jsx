import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, Clock, DollarSign, User,
  ArrowRight, X, Image as ImageIcon,
  Award, Compass, MessageSquare, Layers
} from 'lucide-react'
import { SEOHead, PageHero } from '@components/ui'
import { supabase } from '@lib/supabase'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('is_published', true)
        
        if (!error && data) {
          setProjects(data)
        }
      } catch (err) {
        console.warn('Supabase projects fetch failed:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <>
      <SEOHead
        title="Project Portfolio"
        description="Browse the premium portfolio of MUMSA Initiative. Analyze budgets, locations, objectives, outcomes, and testimonials for all active and completed projects."
      />

      <PageHero
        label="Project Portfolio"
        title="A Legacy of Community Interventions"
        subtitle="Each project is designed with clear objectives, measurable budgets, and community ownership to ensure sustainability."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Projects' }
        ]}
      />

      {/* ===== PROJECT LIST SECTION ===== */}
      <section className="section bg-white text-navy">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3">Interventions</div>
            <h2 className="text-h2">Active & Completed Projects</h2>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <span className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 max-w-xl mx-auto shadow-sm">
              <p className="text-slate-500 font-medium text-sm">No projects published at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-slate-50 rounded-xl overflow-hidden border border-brand-border shadow-card flex flex-col justify-between"
                  {...fadeUp}
                >
                  <div className="h-64 overflow-hidden relative border-b border-brand-border">
                    <img
                      src={project.cover_url || project.image_url || 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80'}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-navy/80 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                      {project.duration || 'Ongoing'}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-h4 text-navy mb-3">{project.title}</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Donor</p>
                            <p className="text-xs font-bold text-navy truncate max-w-[150px]">{project.donor || 'MUMSA Partners'}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Budget</p>
                            <p className="text-xs font-bold text-navy">{project.budget || 'NGN --'}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Location</p>
                            <p className="text-xs font-bold text-navy truncate max-w-[150px]">{project.location || 'Bauchi State'}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <div>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Status</p>
                            <p className="text-xs font-bold text-navy">{project.status || 'Active'}</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-gray mb-4 leading-relaxed line-clamp-3">
                        {project.objectives || project.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-secondary btn-sm w-full flex items-center justify-center gap-1.5"
                    >
                      View Project Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== DETAIL MODAL LAYER ===== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-glow border border-brand-border"
            >
              {/* Header */}
              <div className="relative h-64 border-b border-brand-border">
                <img
                  src={selectedProject.cover_url || selectedProject.image_url || 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80'}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-navy/80 hover:bg-navy text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 bg-navy/80 text-white text-xs font-bold px-3 py-1.5 rounded">
                  {selectedProject.location}
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <h2 className="text-h3 text-navy mb-6">{selectedProject.title}</h2>
                
                {/* Meta details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-50 p-6 rounded-lg border border-brand-border mb-8">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Donor / Partner</span>
                    <span className="text-xs font-bold text-navy mt-0.5 block">{selectedProject.donor}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Project Budget</span>
                    <span className="text-xs font-bold text-navy mt-0.5 block">{selectedProject.budget}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Duration</span>
                    <span className="text-xs font-bold text-navy mt-0.5 block">{selectedProject.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Location LGA</span>
                    <span className="text-xs font-bold text-navy mt-0.5 block">{selectedProject.location}</span>
                  </div>
                </div>

                {/* Left/Right Sections */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-8 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Compass className="w-4 h-4 text-primary-500" /> Objectives
                      </h4>
                      <p className="text-xs text-slate-gray leading-relaxed">
                        {selectedProject.objectives}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Layers className="w-4 h-4 text-primary-500" /> Key Activities
                      </h4>
                      <p className="text-xs text-slate-gray leading-relaxed">
                        {selectedProject.activities}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Award className="w-4 h-4 text-primary-500" /> Outcomes & Results
                      </h4>
                      <p className="text-xs text-slate-gray leading-relaxed">
                        {selectedProject.results || selectedProject.outcomes}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-4 space-y-6">
                    {/* Testimonial */}
                    {selectedProject.testimonial && (
                      <div className="bg-slate-50 p-6 rounded-lg border border-brand-border">
                        <h4 className="text-[10px] font-bold text-navy uppercase tracking-wider mb-3 flex items-center gap-1">
                          <MessageSquare className="w-3.5 h-3.5 text-secondary-600" /> Beneficiary Story
                        </h4>
                        <blockquote className="text-2xs italic text-slate-gray leading-relaxed">
                          {selectedProject.testimonial}
                        </blockquote>
                      </div>
                    )}

                    {/* Miniature Gallery */}
                    {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-3 flex items-center gap-1">
                          <ImageIcon className="w-4 h-4 text-primary-500" /> Photo Evidence
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedProject.gallery.map((imgUrl, i) => (
                            <div key={i} className="h-16 rounded overflow-hidden border border-brand-border">
                              <img src={imgUrl} alt="gallery-item" className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
