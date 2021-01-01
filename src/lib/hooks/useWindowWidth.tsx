import { useEffect, useState } from 'react';

// 창의 너비를 저장해두고 필요할 때마다 값을 제공
// 창의 너비가 변경되면 새로운 창의 너비로 다시 렌더링된다.
export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // 실전 리액트 프로그래밍 p126 ~ p128
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return width;
};
