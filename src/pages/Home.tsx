import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Cpu, Box, Palette, Layers, Sun, Download, Code2, Trophy, Flame, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, SKILLS } from '../constants';
import { cn } from '../lib/utils';
import { AnimatedCounter } from '../components/AnimatedCounter';

const iconMap: Record<string, any> = {
  Zap, Cpu, Box, Palette, Layers, Sun
};

export const Home = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Sujal Kumar — Software Engineer & GenAI Developer</title>
        <meta name="description" content="Software Engineer specializing in Java, Spring Boot, Python, and Generative AI. Oracle-certified Java developer building reliable backend systems and LLM-powered applications." />
        <meta property="og:title" content="Sujal Kumar — Software Engineer & GenAI Developer" />
        <meta property="og:description" content="Oracle-certified Java developer building backend systems and Generative AI applications. 300+ DSA problems solved. Currently engineering workflow automation used across 500+ accounts." />
        <meta property="og:image" content="/sujal-kumar.jpg" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-green-400 mb-6 uppercase tracking-widest border border-green-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Open to Software Engineer roles · Available now
            </div>
            <h1 className="text-6xl md:text-8xl mb-6 leading-none">
              Building <span className="text-gradient">Reliable</span> <br /> Backend Systems
            </h1>
            <p className="text-xl text-slate-300 max-w-lg mb-10">
              Software Engineer with <span className="text-primary font-semibold">Oracle-certified Java</span> expertise and hands-on <span className="text-secondary font-semibold">Generative AI</span> experience. Currently engineering workflow automation used across <span className="text-primary font-semibold">500+ accounts</span> at SIFTAI — and shipping LLM-powered tools (RAG, FastAPI, LangChain) on the side.
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
              whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full aspect-[3/4] max-w-sm mx-auto group"
              style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
            >
              {/* Rotating conic-gradient halo */}
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-[2.25rem] opacity-50 group-hover:opacity-90 transition-opacity duration-700"
                style={{
                  background:
                    'conic-gradient(from 0deg, #00dbe9 0%, transparent 25%, #d0bcff 50%, transparent 75%, #00dbe9 100%)',
                  filter: 'blur(28px)'
                }}
              />

              {/* Soft pulsing orb */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse pointer-events-none"
              />

              {/* Photo frame */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-linear-to-b from-white/5 via-transparent to-white/[0.02] backdrop-blur-sm">
                <img
                  src="/sujal-kumar.jpg"
                  alt="Sujal Kumar — Software Engineer"
                  className="absolute inset-0 w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                  style={{ filter: 'drop-shadow(0 30px 40px rgba(0, 219, 233, 0.35))' }}
                />

                {/* Bottom fade so the figure emerges from the dark page */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"
                />
                {/* Top fade */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/6 bg-linear-to-b from-[#050505]/50 to-transparent pointer-events-none"
                />

                {/* HUD corner brackets */}
                <div aria-hidden="true" className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary/60 group-hover:border-primary transition-colors rounded-tl-lg" />
                <div aria-hidden="true" className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-secondary/60 group-hover:border-secondary transition-colors rounded-tr-lg" />
                <div aria-hidden="true" className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-secondary/60 group-hover:border-secondary transition-colors rounded-bl-lg" />
                <div aria-hidden="true" className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary/60 group-hover:border-primary transition-colors rounded-br-lg" />
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
                <div className="text-xs text-slate-400 mb-1">Certified</div>
                <div className="font-display font-bold text-primary">Oracle Java</div>
              </motion.div>
              
              <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  rotateZ: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl hidden md:block z-20"
              >
                <div className="text-xs text-slate-400 mb-1">DSA Solved</div>
                <div className="font-display font-bold text-secondary">300+ Problems</div>
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

      {/* Problem Solving / Coding Signals */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-primary mb-4 uppercase tracking-widest">
                <Code2 size={14} /> Problem Solving
              </div>
              <h2 className="text-4xl md:text-5xl mb-4">Built on <span className="text-gradient">Strong Fundamentals</span></h2>
              <p className="text-slate-400 max-w-md">Daily DSA practice, OOP discipline, and a habit of solving hard problems end-to-end.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://leetcode.com/u/sujalkumar27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
                className="btn-secondary text-sm flex items-center gap-2 py-2"
              >
                LeetCode <ExternalLink size={14} />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/sujalkumar27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks profile"
                className="btn-secondary text-sm flex items-center gap-2 py-2"
              >
                GeeksforGeeks <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: 300, suffix: '+', label: 'DSA Problems Solved', sub: 'LeetCode · GeeksforGeeks', Icon: Code2, color: 'text-primary' },
              { to: 200, suffix: '-day', label: 'GFG Coding Streak', sub: 'Daily problem solving', Icon: Flame, color: 'text-secondary' },
              { to: 20, prefix: 'Top ', label: 'CodeTantra Competition', sub: 'Out of 300+ participants', Icon: Trophy, color: 'text-primary' },
              { to: 90, suffix: '%ile', label: 'Oracle Java Certified', sub: 'Foundations Associate', Icon: Award, color: 'text-secondary' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 300, damping: 22 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <stat.Icon size={28} className={cn(stat.color, 'mb-4')} />
                <div className="font-display font-black text-4xl md:text-5xl mb-2 tracking-tighter">
                  <AnimatedCounter to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="font-bold text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.sub}</div>
              </motion.div>
            ))}
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
                      loading="lazy"
                      decoding="async"
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
