import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  font-size: 10px; /* rem을 위한 Setting */
  /* 드래그 방지 */
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
}

@media all and (max-width: 768px) {
  html {
    font-size: 8px;
  }
}

body {
    background-color: ${({ theme }) => theme.backgroundColor};
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
button {
  color: ${({ theme }) => theme.textPrimary};
}

* {
  outline: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Korean, Number is SpoqaHanSans & English is Roboto", sans-serif;
}

body {
  /* background-color: var(--dark-background-color); */
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* iOS Safari Momentum Scroll, 버벅임 방지 */
  /* (브라우저 오른쪽에 나타나는) 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* (브라우저 오른쪽에 나타나는) 스크롤바 숨기기 */
body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}

a {
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

button {
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

ul,
ol,
li {
  list-style: none;
}

img {
  pointer-events: none;
}

/* S of Spoqa Han Sans */
@font-face {
  font-family: "Korean, Number is SpoqaHanSans & English is Roboto";
  font-weight: 700;
  font-style: normal;
  src: url("/fonts/Spoqa Han Sans Bold.woff2"),
    url("/fonts/Spoqa Han Sans Bold.woff"),
    url("/fonts/Spoqa Han Sans Bold.ttf");
}
@font-face {
  font-family: "Korean, Number is SpoqaHanSans & English is Roboto";
  font-weight: 400;
  font-style: normal;
  src: url("/fonts/Spoqa Han Sans Regular.woff2"),
    url("/fonts/Spoqa Han Sans Regular.woff"),
    url("/fonts/Spoqa Han Sans Regular.ttf");
}
@font-face {
  font-family: "Korean, Number is SpoqaHanSans & English is Roboto";
  font-weight: 300;
  font-style: normal;
  src: url("/fonts/Spoqa Han Sans Light.woff2"),
    url("/fonts/Spoqa Han Sans Light.woff"),
    url("/fonts/Spoqa Han Sans Light.ttf");
}
@font-face {
  font-family: "Korean, Number is SpoqaHanSans & English is Roboto";
  font-weight: 100;
  font-style: normal;
  src: url("/fonts/Spoqa Han Sans Thin.woff2"),
    url("/fonts/Spoqa Han Sans Thin.woff"),
    url("/fonts/Spoqa Han Sans Thin.ttf");
}
/* E of Spoqa Han Sans */

/* S of Roboto */
@font-face {
  font-family: "Korean, Number is SpoqaHanSans & English is Roboto";
  font-weight: 100;
  font-style: normal;
  src: url("/fonts/roboto-v20-latin-100.woff2") format("woff2"),
    url("/fonts/roboto-v20-latin-100.woff") format("woff"),
    url("/fonts/roboto-v20-latin-100.ttf") format("truetype");
  unicode-range: U+0041-005A, U+0061-007A;
}

@font-face {
  font-family: "Korean, Number is SpoqaHanSans & English is Roboto";
  font-weight: 300;
  font-style: normal;
  src: url("/fonts/roboto-v20-latin-300.woff2") format("woff2"),
    url("/fonts/roboto-v20-latin-300.woff") format("woff"),
    url("/fonts/roboto-v20-latin-300.ttf") format("truetype");
  unicode-range: U+0041-005A, U+0061-007A;
}

@font-face {
  font-family: "Korean, Number is SpoqaHanSans & English is Roboto";
  font-weight: 400;
  font-style: normal;
  src: url("/fonts/roboto-v20-latin-regular.woff2") format("woff2"),
    url("/fonts/roboto-v20-latin-regular.woff") format("woff"),
    url("/fonts/roboto-v20-latin-regular.ttf") format("truetype");
  unicode-range: U+0041-005A, U+0061-007A;
}

@font-face {
  font-family: "Korean, Number is SpoqaHanSans & English is Roboto";
  font-weight: 700;
  font-style: normal;
  src: url("/fonts/roboto-v20-latin-700.woff2") format("woff2"),
    url("/fonts/roboto-v20-latin-700.woff") format("woff"),
    url("/fonts/roboto-v20-latin-700.ttf") format("truetype");
  unicode-range: U+0041-005A, U+0061-007A;
}
/* E of Roboto */
`;

export default GlobalStyles;
