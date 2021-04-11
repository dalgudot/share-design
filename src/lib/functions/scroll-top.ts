import { useEffect } from 'react';

export const scrollTop = (): void => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
};
