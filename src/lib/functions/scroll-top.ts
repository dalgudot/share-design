import { useEffect } from 'react';

export const scrollTop = () => {
  useEffect(() => {
    // const bodyId = document.body;
    // if (typeof window !== 'undefined') {
    //   bodyId?.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
    // }
    window.scrollTo({
      top: 0,
    });
  }, []);
};
