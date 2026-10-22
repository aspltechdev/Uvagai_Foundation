import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, state } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Scroll to top only on forward navigation (PUSH), not on back (POP)
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
    // On back navigation (POP), let the browser restore the previous scroll position
  }, [pathname, navigationType]);

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