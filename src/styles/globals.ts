import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  /* 드래그 방지 */
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
}

body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  /* iOS Safari Momentum Scroll, 버벅임 방지 */
  -webkit-overflow-scrolling: touch;
  /* (브라우저 오른쪽에 나타나는) 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* (브라우저 오른쪽에 나타나는) 스크롤바 숨기기 */
/* Chrome, Safari, Opera*/
body::-webkit-scrollbar {
  display: none;
}

* {
  outline: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Korean, Number is SpoqaHanSans & English is Roboto',
    -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Noto Sans Korean,
    sans-serif;
}

a {
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

button {
  /* all: unset -> 모든 속성 한번에 초기화 */
  all: unset;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

ul,
ol,
li {
  list-style: none;
  display: block;
}

img {
  pointer-events: none;
}

/* S of Spoqa Han Sans */
@font-face {
  font-family: 'Korean, Number is SpoqaHanSans & English is Roboto';
  font-weight: 700;
  font-style: normal;
  src: url('/fonts/Spoqa Han Sans Bold.woff2'),
    url('/fonts/Spoqa Han Sans Bold.woff'),
    url('/fonts/Spoqa Han Sans Bold.ttf');
}
@font-face {
  font-family: 'Korean, Number is SpoqaHanSans & English is Roboto';
  font-weight: 400;
  font-style: normal;
  src: url('/fonts/Spoqa Han Sans Regular.woff2'),
    url('/fonts/Spoqa Han Sans Regular.woff'),
    url('/fonts/Spoqa Han Sans Regular.ttf');
}
@font-face {
  font-family: 'Korean, Number is SpoqaHanSans & English is Roboto';
  font-weight: 300;
  font-style: normal;
  src: url('/fonts/Spoqa Han Sans Light.woff2'),
    url('/fonts/Spoqa Han Sans Light.woff'),
    url('/fonts/Spoqa Han Sans Light.ttf');
}
@font-face {
  font-family: 'Korean, Number is SpoqaHanSans & English is Roboto';
  font-weight: 100;
  font-style: normal;
  src: url('/fonts/Spoqa Han Sans Thin.woff2'),
    url('/fonts/Spoqa Han Sans Thin.woff'),
    url('/fonts/Spoqa Han Sans Thin.ttf');
}
/* E of Spoqa Han Sans */

/* S of Roboto */
@font-face {
  font-family: 'Korean, Number is SpoqaHanSans & English is Roboto';
  font-weight: 100;
  font-style: normal;
  src: url('/fonts/roboto-v20-latin-100.woff2') format('woff2'),
    url('/fonts/roboto-v20-latin-100.woff') format('woff'),
    url('/fonts/roboto-v20-latin-100.ttf') format('truetype');
  unicode-range: U+0041-005A, U+0061-007A;
}

@font-face {
  font-family: 'Korean, Number is SpoqaHanSans & English is Roboto';
  font-weight: 300;
  font-style: normal;
  src: url('/fonts/roboto-v20-latin-300.woff2') format('woff2'),
    url('/fonts/roboto-v20-latin-300.woff') format('woff'),
    url('/fonts/roboto-v20-latin-300.ttf') format('truetype');
  unicode-range: U+0041-005A, U+0061-007A;
}

@font-face {
  font-family: 'Korean, Number is SpoqaHanSans & English is Roboto';
  font-weight: 400;
  font-style: normal;
  src: url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'),
    url('/fonts/roboto-v20-latin-regular.woff') format('woff'),
    url('/fonts/roboto-v20-latin-regular.ttf') format('truetype');
  unicode-range: U+0041-005A, U+0061-007A;
}

@font-face {
  font-family: 'Korean, Number is SpoqaHanSans & English is Roboto';
  font-weight: 700;
  font-style: normal;
  src: url('/fonts/roboto-v20-latin-700.woff2') format('woff2'),
    url('/fonts/roboto-v20-latin-700.woff') format('woff'),
    url('/fonts/roboto-v20-latin-700.ttf') format('truetype');
  unicode-range: U+0041-005A, U+0061-007A;
}
/* E of Roboto */
`;

export default GlobalStyle;
