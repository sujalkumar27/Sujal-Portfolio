import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Home,
  Briefcase,
  User,
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Cpu,
  Phone,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
  X
} from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';

type Action =
  | { kind: 'navigate'; to: string; label: string; sub: string; Icon: React.ComponentType<{ size?: number }>; group: string }
  | { kind: 'external'; href: string; label: string; sub: string; Icon: React.ComponentType<{ size?: number }>; group: string }
  | { kind: 'callback'; fn: () => void; label: string; sub: string; Icon: React.ComponentType<{ size?: number }>; group: string };

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const actions = useMemo<Action[]>(() => {
    const pages: Action[] = [
      { kind: 'navigate', to: '/', label: 'Home', sub: 'Landing page', Icon: Home, group: 'Pages' },
      { kind: 'navigate', to: '/projects', label: 'Projects', sub: 'All case studies', Icon: Briefcase, group: 'Pages' },
      { kind: 'navigate', to: '/about', label: 'About', sub: 'Bio, experience, contact', Icon: User, group: 'Pages' }
    ];
    const projectActions: Action[] = PROJECTS.map((p) => ({
      kind: 'navigate' as const,
      to: `/projects/${p.id}`,
      label: p.title,
      sub: p.category,
      Icon: Cpu,
      group: 'Projects'
    }));
    const links: Action[] = [
      {
        kind: 'callback',
        fn: () => (window.location.href = 'mailto:sujal31122005@gmail.com'),
        label: 'Email Sujal',
        sub: 'sujal31122005@gmail.com',
        Icon: Mail,
        group: 'Actions'
      },
      {
        kind: 'callback',
        fn: () => (window.location.href = 'tel:+919625066840'),
        label: 'Call Sujal',
        sub: '+91 96250 66840',
        Icon: Phone,
        group: 'Actions'
      },
      {
        kind: 'external',
        href: '/resume.pdf',
        label: 'Download Resume',
        sub: 'PDF · current',
        Icon: Download,
        group: 'Actions'
      },
      { kind: 'external', href: 'https://github.com/sujalkumar27', label: 'GitHub', sub: '@sujalkumar27', Icon: Github, group: 'Profiles' },
      { kind: 'external', href: 'https://linkedin.com/in/sujal-kumar', label: 'LinkedIn', sub: 'sujal-kumar', Icon: Linkedin, group: 'Profiles' },
      { kind: 'external', href: 'https://leetcode.com/u/sujalkumar27', label: 'LeetCode', sub: 'DSA practice', Icon: ExternalLink, group: 'Profiles' },
      { kind: 'external', href: 'https://www.geeksforgeeks.org/user/sujalkumar27', label: 'GeeksforGeeks', sub: 'DSA practice', Icon: ExternalLink, group: 'Profiles' }
    ];
    return [...pages, ...projectActions, ...links];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) =>
      [a.label, a.sub, a.group].join(' ').toLowerCase().includes(q)
    );
  }, [actions, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const runAction = (a: Action) => {
    setOpen(false);
    if (a.kind === 'navigate') navigate(a.to);
    else if (a.kind === 'external') window.open(a.href, '_blank', 'noopener,noreferrer');
    else a.fn();
  };

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault();
      runAction(filtered[activeIndex]);
    }
  };

  // Group filtered results for the grouped UI.
  const grouped = useMemo(() => {
    const map = new Map<string, Action[]>();
    filtered.forEach((a) => {
      if (!map.has(a.group)) map.set(a.group, []);
      map.get(a.group)!.push(a);
    });
    return Array.from(map.entries());
  }, [filtered]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-start justify-center pt-[20vh] px-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ y: -10, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -10, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="w-full max-w-xl glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onListKey}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <Search size={18} className="text-slate-400 shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, projects, profiles…"
                className="flex-1 bg-transparent outline-none text-slate-100 placeholder:text-slate-500 text-sm"
                aria-label="Search commands"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-slate-500 hover:text-slate-200 transition-colors"
                aria-label="Close command palette"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-slate-500">
                  No results for <span className="text-slate-300 font-bold">"{query}"</span>
                </div>
              ) : (
                grouped.map(([group, items]) => (
                  <div key={group} className="py-1">
                    <div className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      {group}
                    </div>
                    {items.map((a) => {
                      const index = filtered.indexOf(a);
                      const isActive = index === activeIndex;
                      return (
                        <button
                          key={`${a.label}-${index}`}
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => runAction(a)}
                          className={cn(
                            'w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors',
                            isActive ? 'bg-primary/10 text-white' : 'text-slate-300 hover:bg-white/5'
                          )}
                        >
                          <a.Icon size={16} />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">{a.label}</div>
                            <div className="text-xs text-slate-500 truncate">{a.sub}</div>
                          </div>
                          {isActive && (
                            <CornerDownLeft size={14} className="text-primary shrink-0" aria-hidden="true" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 bg-black/30 text-[10px] text-slate-500 uppercase tracking-widest">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <ArrowUp size={10} /> <ArrowDown size={10} /> navigate
                </span>
                <span className="flex items-center gap-1">
                  <CornerDownLeft size={10} /> select
                </span>
                <span>esc close</span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[10px] font-mono">⌘K</kbd>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
