import { useEffect } from 'react';

export const scrollTop = () => {
  useEffect(() => {
    const bodyId = document.querySelector('body');
    if (typeof window !== 'undefined') {
      bodyId?.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);
};
