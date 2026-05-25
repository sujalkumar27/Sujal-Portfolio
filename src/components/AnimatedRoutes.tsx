import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Home } from '../pages/Home';

const Projects = lazy(() => import('../pages/Projects').then((m) => ({ default: m.Projects })));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })));
const About = lazy(() => import('../pages/About').then((m) => ({ default: m.About })));
const NotFound = lazy(() => import('../pages/NotFound').then((m) => ({ default: m.NotFound })));

const RouteFallback = () => (
  <div className="pt-32 px-6 min-h-[60vh] flex items-center justify-center">
    <div className="flex items-center gap-3 text-slate-400 text-sm">
      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      Loading…
    </div>
  </div>
);

const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteFallback />} key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/projects" element={<Page><Projects /></Page>} />
          <Route path="/projects/:id" element={<Page><ProjectDetail /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};
