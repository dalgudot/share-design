import { useEffect, useState } from 'react';

// 창의 높이를 저장해두고 필요할 때마다 값을 제공
// 창의 높이가 변경되면 새로운 창의 높이로 다시 렌더링된다.
export function useWindowHeight() {
  const [height, setHeight] = useState(window.innerHeight);

  // 실전 리액트 프로그래밍 p126 ~ p128
  useEffect(() => {
    const onResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return height;
}
