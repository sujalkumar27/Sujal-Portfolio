import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, Filter, Home, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const q = query.trim().toLowerCase();
  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = filter === 'All' || p.category === filter;
    if (!matchesCategory) return false;
    if (!q) return true;
    const haystack = [
      p.title,
      p.category,
      p.description,
      ...(p.technicalSpecs?.software ?? []),
      ...(p.technicalSpecs?.stack ?? [])
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });

  return (
    <div className="pt-32 px-6 min-h-screen">
      <Helmet>
        <title>Projects | Sujal Kumar</title>
        <meta name="description" content="Explore a collection of software development projects, ranging from backend systems to automation tools." />
        <meta property="og:title" content="Projects | Sujal Kumar" />
        <meta property="og:description" content="Explore a collection of software development projects." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl mb-6">Project <span className="text-gradient">Archive</span></h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            A curated set of backend systems, AI-powered tools, and full-stack applications I've built. Each entry has the problem, the architecture, and the code.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-bold transition-all",
                  filter === cat 
                    ? "bg-primary text-bg" 
                    : "glass hover:bg-white/10 text-slate-400"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative max-w-xs w-full">
            <label htmlFor="project-search" className="sr-only">Search projects</label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden="true" />
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full glass rounded-full py-2 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="glass rounded-3xl p-12 text-center text-slate-400">
            No projects match <span className="text-primary font-bold">"{query}"</span> in <span className="text-secondary font-bold">{filter}</span>.
          </div>
        )}

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -2, 
                  scale: 1.02,
                  z: 20,
                  boxShadow: "0 20px 40px rgba(0, 219, 233, 0.1)"
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
                className="group"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 shadow-xl shadow-black/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div 
                      className="absolute inset-0 bg-linear-to-t from-bg/90 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <div className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">{project.category}</div>
                      <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                      <div className="btn-primary py-2 px-4 text-xs self-start">Explore Case Study</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
