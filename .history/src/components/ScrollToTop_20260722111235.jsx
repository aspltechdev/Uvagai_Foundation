import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Additional scroll if navigation state indicates it
    if (state?.scrollToTop) {
      window.scrollTo(0, 0);
      // Clear the state to avoid scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [state]);

  return null;
}