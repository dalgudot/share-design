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
`;

export default GlobalStyles;
