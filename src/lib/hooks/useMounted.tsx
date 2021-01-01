import { useEffect, useState } from 'react';

// mounted의 상탯값은 첫 번째 렌더링 결과가 실제 돔에 반영된 후에 항상 참을 반환한다.
// setMounted 함수는 한 번만 호출해도 충분하므로 의존성 배열에 빈 배열을 입력한다.
export const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};
