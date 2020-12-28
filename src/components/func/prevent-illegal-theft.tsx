import { useEffect } from 'react';

export function PreventIllegalTheft() {
  useEffect(() => {
    //마우스 오른쪽 클릭만 막기
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event

    let contextmenu: Function = () => {
      return document.oncontextmenu;
    };

    let dragstart: Function = () => {
      return document.ondragstart;
    };

    let selectstart: Function = () => {
      return document.onselectstart;
    };

    let keydown: Function = () => {
      return document.onkeydown;
    };

    contextmenu = dragstart = selectstart = keydown = new Function(
      'return false'
    );

    // contextmenu = document.ondragstart = document.onselectstart = document.onkeydown = new Function(
    //   'return false'
    // );
  }, []);
}

// document.oncontextmenu = document.ondragstart = document.onselectstart = document.onkeydown = new Function(
//   "return false"
// );

// document.addEventListener('contextmenu', (e) => {
//   e.preventDefault();
// });

// document.addEventListener('dragstart', (e) => {
//   e.preventDefault();
// });

// document.addEventListener('selectstart', (e) => {
//   e.preventDefault();
// });

// document.addEventListener('keydown', (e) => {
//   e.preventDefault();
// });

// 마우스 오른쪽 클릭(oncontextmenu), 왼쪽 마우스 이미지 드래그(ondragstart), 왼쪽 마우스 문자 드래그(onselectstart), 키보드 단축키 복사(onkeydown) 막기
