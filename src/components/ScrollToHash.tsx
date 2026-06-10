import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Scroll to top on route change if no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // The target may not exist yet: routes are lazy-loaded and mount after
    // the previous page's exit animation. Retry briefly until it appears.
    const id = hash.replace('#', '');
    let attempts = 0;
    const intervalId = setInterval(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        clearInterval(intervalId);
      } else if (++attempts >= 20) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [hash, pathname]);

  return null;
};
