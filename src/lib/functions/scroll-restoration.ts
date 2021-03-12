import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';

export const scrollRestoration = () => {
  const router = useRouter();
  const scroll = useScrollPosition();

  useEffect(() => {
    const previousScroll = sessionStorage.getItem(`${router.asPath}`);
    const goToScroll: number = Number(previousScroll);
    // console.log('goToScroll');

    // if (typeof window !== 'undefined') {
    window.scrollTo({
      top: goToScroll,
      behavior: 'smooth',
    });
    // }
  }, []);

  useEffect(() => {
    const setScroll = () => {
      sessionStorage.setItem(`${router.asPath}`, String(scroll));
    };

    return () => setScroll();
  }, []);
};
