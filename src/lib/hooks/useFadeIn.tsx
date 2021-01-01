import { useEffect, useRef } from 'react';

export const useFadeIn = (duration: number = 1, delay: number = 0) => {
  //   if (typeof duration !== 'number' || typeof delay !== 'number') {
  //     return;
  //   }
  const element = useRef(null);
  useEffect(() => {
    if (element.current) {
      const { current }: any = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  });

  return { ref: element, style: { opacity: 0 } };
};
