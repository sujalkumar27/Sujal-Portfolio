import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-white/5 py-20 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-8 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <span className="font-display font-black text-bg text-xl tracking-tighter">SK</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter uppercase">SUJAL<span className="text-primary">KUMAR</span></span>
          </Link>
          <p className="text-slate-400 max-w-sm mb-8 text-lg leading-relaxed">
            Software Developer specializing in Core Java, Spring Boot, and workflow automation. Building reliable systems that reduce manual work.
          </p>
          <div className="flex gap-6">
            <motion.a 
              whileHover={{ y: -5, scale: 1.1, rotateZ: 5 }}
              href="https://linkedin.com/in/sujal-kumar" 
              className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:text-primary transition-colors shadow-lg shadow-black/50"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.1, rotateZ: -5 }}
              href="https://github.com/sujalkumar27" 
              className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:text-primary transition-colors shadow-lg shadow-black/50"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/about#contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Expertise</h4>
          <ul className="space-y-4 text-slate-400">
            <li>Backend Development</li>
            <li>Workflow Automation</li>
            <li>API Integrations</li>
            <li>Database Management</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Sujal Kumar. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
