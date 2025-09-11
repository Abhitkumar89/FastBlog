import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    // Scroll to top on page refresh
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
};

export default useScrollToTop;
