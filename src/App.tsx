import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToHash } from './components/ScrollToHash';
import { Home } from './pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy-load non-landing routes so the homepage ships ~zero of their JS.
const Projects = lazy(() => import('./pages/Projects').then((m) => ({ default: m.Projects })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

// Three.js + r3f weigh ~1MB — defer to after first paint so the homepage stays snappy.
const Background3D = lazy(() =>
  import('./components/Background3D').then((m) => ({ default: m.Background3D }))
);

const RouteFallback = () => (
  <div className="pt-32 px-6 min-h-[60vh] flex items-center justify-center">
    <div className="flex items-center gap-3 text-slate-400 text-sm">
      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      Loading…
    </div>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToHash />
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:btn-primary focus:py-2 focus:px-4 focus:text-sm"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col relative z-10">
          <Navbar />
          <main id="main-content" className="flex-grow">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
