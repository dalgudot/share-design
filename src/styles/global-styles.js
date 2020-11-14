import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
  width: 100%; 
  height: 100%;
  font-size: 10px;
  /* overflow: hidden; */
  overflow-x: hidden;
  overflow-y: auto;
  /* 드래그 방지 */
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
}
/* 
@media all and (max-width: 480px) {
    html {
      font-size: 8px;
    }
  }

  @media all and (min-width: 481px) {
    html {
      font-size: 10px;
    }
  } */

body {
  width: 100%; 
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.gray1};
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

h1 {
  font-size: 5.9rem;
}

h2 {
  font-size: 3.7rem;
}

h3 {
  font-size: 2.9rem;
}

h4 {
  font-size: 2.5rem;
}

h5 {
  font-size: 2.1rem;
}

h6 {
  font-size: 1.7rem;
}

p {
  font-size: 1.8rem;
}

* {
  outline: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Korean, Number is SpoqaHanSans & English is Roboto", sans-serif;
}

a {
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

button {
  // all: unset -> 모든 속성 한번에 초기화
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
`;

export default GlobalStyles;
