import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, state } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Always disable browser scroll restoration for full control
    window.history.scrollRestoration = 'manual';

    if (navigationType === 'PUSH') {
      // New navigation - scroll to top
      window.scrollTo(0, 0);
    } else if (navigationType === 'POP') {
      // Back button - don't scroll, let browser restore position
      // Do nothing - browser will restore automatically
    }
  }, [pathname, navigationType]);

  return null;
}