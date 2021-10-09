import { useEffect, useRef } from 'react';

// 실전 리액트 프로그래밍 p.242
// 이전 상탯값이나 이전 속성값이 필요할 때 유용한 커스텀 훅
export const usePrevious = <T>(value: T) => {
  // 매개변수 value로 현재 값을 입력받음.
  const valueRef = useRef<T>(); // 이전 값 기억하기 위해 useRef 훅 이용
  useEffect(() => {
    // 렌더링 후에는 현재값을 이전 값으로 만든다.
    valueRef.current = value;
  }, [value]);

  // 이전 값을 반환
  return valueRef.current;
};
