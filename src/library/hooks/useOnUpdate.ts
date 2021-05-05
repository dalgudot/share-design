import { useEffect, useRef } from 'react';

// 실전 리액트 프로그래밍 p.243
// 업데이트 시점에 함수를 호출해주는 커스텀 훅
export const useOnUpdate = (func: Function) => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (isMountedRef.current) {
      func();
    } else {
      isMountedRef.current = true;
    }
  });
};
