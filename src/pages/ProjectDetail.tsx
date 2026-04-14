import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Box, Cpu, Zap, Layers, ChevronRight, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';
import { ModelViewer } from '../components/ModelViewer';

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 px-6 text-center">
        <h1 className="text-4xl mb-6 font-display">Project Not Found</h1>
        <Link to="/projects" className="btn-primary">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <Helmet>
        <title>{`${project.title} | Sujal Kumar`}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} | Sujal Kumar`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Sujal Kumar`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={project.image} />
      </Helmet>
      {/* Hero Header */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link to="/projects" className="inline-flex items-center gap-2 text-primary mb-6 hover:gap-3 transition-all font-bold text-sm">
                <ArrowLeft size={16} /> Back to Archive
              </Link>
              <div className="text-sm font-bold text-secondary mb-2 uppercase tracking-widest">{project.category}</div>
              <h1 className="text-5xl md:text-7xl mb-4 font-display">{project.title}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-16">
              <ModelViewer type={project.category.toLowerCase() as any} />
            </div>

            <div className="mb-12">
              <h2 className="text-3xl mb-6 font-display">Project Overview</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.process && (
              <div className="mb-12">
                <h2 className="text-3xl mb-8 font-display">Development Process</h2>
                <div className="space-y-6">
                  {project.process.map((step, i) => (
                    <motion.div 
                      key={i} 
                      className="flex gap-6 group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary font-bold border-primary/30 group-hover:bg-primary group-hover:text-bg transition-colors">
                          {i + 1}
                        </div>
                        {i < project.process!.length - 1 && <div className="w-px h-full bg-white/10 my-2"></div>}
                      </div>
                      <div className="pt-2">
                        <p className="text-slate-300">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Mockup */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <motion.div 
                whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-3xl overflow-hidden glass aspect-square shadow-2xl shadow-black/50"
                style={{ perspective: 1000 }}
              >
                <img src={`https://picsum.photos/seed/${project.id}-1/800/800`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-3xl overflow-hidden glass aspect-square shadow-2xl shadow-black/50"
                style={{ perspective: 1000 }}
              >
                <img src={`https://picsum.photos/seed/${project.id}-2/800/800`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>

          {/* Sidebar Specs */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ rotateY: -5, rotateX: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass p-8 rounded-3xl sticky top-32 shadow-2xl shadow-primary/5"
              style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-xl mb-8 flex items-center gap-2 font-display" style={{ transform: 'translateZ(20px)' }}>
                <Cpu size={20} className="text-primary" /> Technical Specs
              </h3>
              
              <div className="space-y-8" style={{ transform: 'translateZ(10px)' }}>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technicalSpecs?.software.map(s => (
                      <span key={s} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  {project.githubUrl ? (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      View Source Code <Layers size={18} />
                    </a>
                  ) : (
                    <button disabled className="w-full btn-secondary opacity-50 cursor-not-allowed flex items-center justify-center gap-2">
                      Source Code Private <Layers size={18} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 mb-4 uppercase tracking-widest text-sm">Next Project</p>
          <Link to={`/projects/${PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].id}`} className="group inline-block">
            <h2 className="text-4xl md:text-6xl mb-8 group-hover:text-primary transition-colors flex items-center justify-center gap-4 font-display">
              {PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length].title} <ChevronRight size={48} className="text-primary group-hover:translate-x-2 transition-transform" />
            </h2>
          </Link>
        </div>
      </section>
    </div>
  );
};
