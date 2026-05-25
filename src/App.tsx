import { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToHash } from './components/ScrollToHash';
import { ScrollProgress } from './components/ScrollProgress';
import { CommandPalette } from './components/CommandPalette';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { ErrorBoundary } from './components/ErrorBoundary';

// Three.js + r3f weigh ~1MB — defer to after first paint so the homepage stays snappy.
const Background3D = lazy(() =>
  import('./components/Background3D').then((m) => ({ default: m.Background3D }))
);

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToHash />
        <ScrollProgress />
        <CommandPalette />
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
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
