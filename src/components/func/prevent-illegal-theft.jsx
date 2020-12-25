import { useEffect } from 'react';

export function PreventIllegalTheft() {
  useEffect(() => {
    //마우스 오른쪽 클릭만 막기
    document.oncontextmenu = new Function('return false');

    // document.oncontextmenu = document.ondragstart = document.onselectstart = document.onkeydown = new Function(
    //   "return false"
    // );
  }, []);
}

// 마우스 오른쪽 클릭(oncontextmenu), 왼쪽 마우스 이미지 드래그(ondragstart), 왼쪽 마우스 문자 드래그(onselectstart), 키보드 단축키 복사(onkeydown) 막기
