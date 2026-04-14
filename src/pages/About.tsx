import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Send, Mail, MapPin, Globe, Box, Cpu, Zap, Palette, Layers, Sun, Home, Linkedin, Github, ChevronDown, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const About = () => {
  const tools = [
    { name: 'Java', icon: Zap, color: 'text-primary' },
    { name: 'Spring Boot', icon: Cpu, color: 'text-secondary' },
    { name: 'Python', icon: Box, color: 'text-primary' },
    { name: 'MySQL', icon: Palette, color: 'text-secondary' },
    { name: 'Hibernate', icon: Layers, color: 'text-primary' },
    { name: 'Git', icon: Sun, color: 'text-secondary' },
  ];

  return (
    <div className="pt-32 px-6">
      <Helmet>
        <title>About Me | Sujal Kumar</title>
        <meta name="description" content="Learn more about Sujal Kumar, a Software Developer specializing in Core Java and Spring Boot." />
        <meta property="og:title" content="About Me | Sujal Kumar" />
        <meta property="og:description" content="Learn more about Sujal Kumar, a Software Developer." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl mb-8">The <span className="text-gradient">Engineer</span> Behind the Code</h1>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I am a Software Developer with strong expertise in Core Java (Java 8+), OOP, collections, multithreading, and SQL. I specialize in backend logic development, workflow automation, and API integrations.
              </p>
              <p>
                As an Oracle-certified Java developer, I focus on building reliable systems that reduce manual work and improve business efficiency. My experience ranges from customizing CRM workflows to developing full-scale management systems.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={18} className="text-primary" />
                  <span>Greater Noida, India</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={18} className="text-secondary" />
                  <span>sujal31122005@gmail.com</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1, rotateZ: 5 }}
                  href="https://linkedin.com/in/sujal-kumar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-primary transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1, rotateZ: -5 }}
                  href="https://github.com/sujalkumar27" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-primary transition-colors"
                  title="GitHub"
                >
                  <Github size={18} />
                </motion.a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary py-2 px-4 text-xs flex items-center gap-2"
                >
                  Download CV <Download size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div 
              whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="aspect-square rounded-3xl overflow-hidden glass p-2 shadow-2xl shadow-secondary/20"
            >
              <img 
                src="/api/attachments/7179477e-2f54-4722-a9f1-32219717515c" 
                alt="Sujal Kumar" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block z-20"
            >
              <div className="text-xs text-slate-400 mb-1">Current Focus</div>
              <div className="font-display font-bold text-primary">Backend & Automation</div>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience & Education Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div>
            <h2 className="text-4xl mb-8">Experience</h2>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-8 rounded-3xl shadow-xl shadow-black/50"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <div className="flex justify-between items-start mb-4" style={{ transform: 'translateZ(20px)' }}>
                  <div>
                    <h3 className="text-xl font-bold text-primary">SIFTAI TECHNOLOGIES LLP</h3>
                    <p className="text-slate-400">Software Developer</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Aug 2025 - Present</span>
                </div>
                <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm" style={{ transform: 'translateZ(10px)' }}>
                  <li>Automated business workflows and customized Zoho CRM</li>
                  <li>Integrated Zoho apps with Google Sheets for real-time data synchronization</li>
                  <li>Designed workflow automation systems used across 500+ customer accounts</li>
                  <li>Reduced manual follow-ups by 85% through automation logic</li>
                </ul>
              </motion.div>
            </div>

            <h2 className="text-4xl mt-12 mb-8">Achievements</h2>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-6 rounded-2xl border-l-4 border-primary shadow-lg shadow-primary/5"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <p className="text-slate-300 font-bold" style={{ transform: 'translateZ(10px)' }}>CodeTantra Coding Competition</p>
                <p className="text-sm text-slate-400" style={{ transform: 'translateZ(5px)' }}>Achieved Top 20 rank among 300+ participants and won prize money.</p>
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-6 rounded-2xl border-l-4 border-secondary shadow-lg shadow-secondary/5"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <p className="text-slate-300 font-bold" style={{ transform: 'translateZ(10px)' }}>Oracle Certified Foundations Associate</p>
                <p className="text-sm text-slate-400" style={{ transform: 'translateZ(5px)' }}>Demonstrated proficiency in core Java, OOP, and data structures by scoring 90 percentile.</p>
              </motion.div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl mb-8">Education & Certs</h2>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-8 rounded-3xl shadow-xl shadow-black/50"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <div className="flex justify-between items-start mb-4" style={{ transform: 'translateZ(20px)' }}>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">Noida Institute of Engineering and Technology</h3>
                    <p className="text-slate-400">B.Tech in Computer Science and Engineering</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">2021 - 2025</span>
                </div>
                <p className="text-sm text-slate-400" style={{ transform: 'translateZ(10px)' }}>CGPA: 8.2/10</p>
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass p-8 rounded-3xl shadow-xl shadow-black/50"
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
              >
                <div className="flex justify-between items-start mb-4" style={{ transform: 'translateZ(20px)' }}>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Oracle Certified Foundations Associate</h3>
                    <p className="text-slate-400">Java Certification</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">2022</span>
                </div>
                <p className="text-sm text-slate-400" style={{ transform: 'translateZ(10px)' }}>Scored 90 percentile in core Java, OOP, and data structures.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Arsenal (Bento Grid) */}
        <section className="mb-32">
          <h2 className="text-4xl mb-12 text-center">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" style={{ perspective: 1000 }}>
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ 
                  y: [0, -5, 0],
                  rotateZ: [0, 1, 0]
                }}
                transition={{ 
                  y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                  rotateZ: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                  default: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileHover={{ 
                  y: -15, 
                  rotateX: 15, 
                  rotateY: -15,
                  scale: 1.15,
                  boxShadow: "0 25px 50px rgba(0, 219, 233, 0.25)",
                  z: 50
                }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors group cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <tool.icon 
                  className={cn("w-8 h-8 group-hover:scale-110 transition-transform", tool.color)} 
                  style={{ transform: 'translateZ(20px)' }}
                />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ transform: 'translateZ(10px)' }}>{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Let's build something impossible</h2>
            <p className="text-slate-400">Have a vision that needs a dimension? Let's talk.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Name</label>
                <input type="text" className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Email</label>
                <input type="email" className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2 relative">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Inquiry Type</label>
              <div className="relative">
                <select className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none bg-slate-900 cursor-pointer">
                  <option className="bg-slate-900 text-white">Web Application</option>
                  <option className="bg-slate-900 text-white">Backend Development</option>
                  <option className="bg-slate-900 text-white">Workflow Automation</option>
                  <option className="bg-slate-900 text-white">Mentorship Request</option>
                  <option className="bg-slate-900 text-white">Other</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Message</label>
              <textarea rows={5} className="w-full glass rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Tell me about your vision..."></textarea>
            </div>
            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-5 text-lg">
              Send Transmission <Send size={20} />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
