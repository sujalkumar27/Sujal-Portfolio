import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="pt-32 px-6 min-h-[80vh] flex items-center justify-center">
      <Helmet>
        <title>404 — Page Not Found | Sujal Kumar</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <div className="font-display font-black text-[10rem] leading-none tracking-tighter text-gradient mb-4">
          404
        </div>
        <h1 className="text-3xl md:text-4xl mb-4">This route doesn't exist.</h1>
        <p className="text-slate-400 mb-10">
          The page you're looking for has either been moved, renamed, or never existed in this codebase.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="btn-primary flex items-center gap-2">
            <Home size={18} /> Go Home
          </Link>
          <Link to="/projects" className="btn-secondary flex items-center gap-2">
            <ArrowLeft size={18} /> Browse Projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
