import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  // Show the right modifier key in the ⌘K badge.
  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.userAgent));
  }, []);

  const fireCommandPalette = () => {
    const e = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, metaKey: true, bubbles: true });
    window.dispatchEvent(e);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500",
        scrolled ? "glass rounded-full py-3 shadow-2xl shadow-primary/10 border border-white/10" : "bg-transparent"
      )}>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/30">
            <span className="font-display font-black text-bg text-xl tracking-tighter">SK</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">SUJAL<span className="text-primary">KUMAR</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-slate-400"
              )}
            >
              {link.name}
            </Link>
          ))}

          <button
            type="button"
            onClick={fireCommandPalette}
            aria-label="Open command palette"
            className="hidden lg:inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 transition-colors text-xs font-mono"
          >
            <kbd className="font-sans text-[10px]">{isMac ? '⌘' : 'Ctrl'}</kbd>
            <kbd className="font-sans text-[10px]">K</kbd>
          </button>

          <Link to="/about#contact" className="btn-primary py-2 px-5 text-sm">
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-nav"
            className="absolute top-full left-0 right-0 glass border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    location.pathname === link.path ? "text-primary" : "text-slate-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/about#contact" onClick={() => setIsOpen(false)} className="btn-primary text-center">
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
