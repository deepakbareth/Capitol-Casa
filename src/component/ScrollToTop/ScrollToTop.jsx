import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current URL path
  const { pathname } = useLocation();

  // Every time the path changes, scroll to the top left (0, 0)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't show anything on the screen
  return null;
};

export default ScrollToTop;