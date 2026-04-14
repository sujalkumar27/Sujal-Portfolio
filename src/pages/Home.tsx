import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Cpu, Box, Palette, Layers, Sun, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, SKILLS } from '../constants';
import { cn } from '../lib/utils';

const iconMap: Record<string, any> = {
  Zap, Cpu, Box, Palette, Layers, Sun
};

export const Home = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Sujal Kumar | Software Developer Portfolio</title>
        <meta name="description" content="Software Developer specializing in Core Java, Spring Boot, and workflow automation. Oracle-certified Java developer with a passion for building reliable backend systems." />
        <meta property="og:title" content="Sujal Kumar | Software Developer Portfolio" />
        <meta property="og:description" content="Software Developer specializing in Core Java, Spring Boot, and workflow automation." />
        <meta property="og:image" content="/api/attachments/7179477e-2f54-4722-a9f1-32219717515c" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ rotateY: 5, rotateX: -2 }}
            className="z-10"
            style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-primary mb-6 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Sujal Kumar • Software Developer
            </div>
            <h1 className="text-6xl md:text-8xl mb-6 leading-none">
              Building <span className="text-gradient">Robust</span> <br /> Systems
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mb-10">
              Software Developer specializing in Core Java, Spring Boot, and workflow automation. Oracle-certified Java developer with a passion for building reliable backend systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary flex items-center gap-2">
                View Projects <ArrowRight size={20} />
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                Download Resume <Download size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative z-10 w-full h-full glass rounded-3xl overflow-hidden p-2 shadow-2xl shadow-primary/20">
                <img 
                  src="/api/attachments/7179477e-2f54-4722-a9f1-32219717515c" 
                  alt="Sujal Kumar" 
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotateZ: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 glass p-4 rounded-2xl hidden md:block z-20"
              >
                <div className="text-xs text-slate-400 mb-1">Expertise</div>
                <div className="font-display font-bold text-primary">Core Java</div>
              </motion.div>
              
              <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  rotateZ: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl hidden md:block z-20"
              >
                <div className="text-xs text-slate-400 mb-1">Framework</div>
                <div className="font-display font-bold text-secondary">Spring Boot</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* Technical Edge Section */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">Technical Edge</h2>
              <p className="text-slate-400 max-w-md">The tools and nodes behind every digital masterpiece.</p>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <div className="w-4 h-1 bg-white/10 rounded-full"></div>
              <div className="w-4 h-1 bg-white/10 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Box;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -15, 
                    rotateX: 15, 
                    rotateY: -15,
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0, 219, 233, 0.25)",
                    z: 50
                  }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-default"
                  style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl mb-2" style={{ transform: 'translateZ(10px)' }}>{skill.name}</h3>
                  <div className="flex items-center justify-between" style={{ transform: 'translateZ(5px)' }}>
                    <span className="text-sm text-slate-400">{skill.level}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={cn("w-1.5 h-1.5 rounded-full", i <= 4 ? "bg-primary" : "bg-white/10")}></div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl">Featured Works</h2>
            <Link to="/projects" className="text-primary hover:underline flex items-center gap-2 font-bold">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  rotateY: 8, 
                  rotateX: -4, 
                  scale: 1.05,
                  z: 30,
                  boxShadow: "0 30px 60px rgba(0, 219, 233, 0.2)"
                }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 300, damping: 20 }}
                viewport={{ once: true }}
                className="group"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <div className="btn-primary py-2 px-4 text-sm">View Project</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-slate-400 text-sm">{project.category}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-bg transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
