import { useEffect, useState } from 'react';
import useScrollPosition from './useScrollPosition';

const useScrollPercentage = (): number => {
  //   const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollY = useScrollPosition();
  const innerHeight = window.innerHeight; //현재 viewport 높이
  const clientHeight = document.body.clientHeight; //현재 문서의 전체 높이
  const scrollPercentage = (scrollY / (clientHeight - innerHeight)) * 100;

  //   useEffect(() => {
  //     setScrollPercentage((scrollY / (clientHeight - innerHeight)) * 100);
  //   }, []);

  // scrollY + innerHeight = clientHeight
  //   console.log(`scrollY: ${scrollY}`);
  //   console.log(`innerHeight: ${innerHeight}`);
  //   console.log(`clientHeight: ${clientHeight}`);
  //   console.log(`percent: ${scrollPercentage}%`);

  return scrollPercentage;
};

export default useScrollPercentage;
