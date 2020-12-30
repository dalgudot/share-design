import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  whitePrimary: '#EBEBF5', // APPLE
  gray1: '#E0E0EA', // 95% of whitePrimary
  gray2: '#E0E0EA', // 미정
  gray3: '#94949B', // 60% of whitePrimary
  gray4: '#232324', // 8%
  blackPrimary: '#121212',
};

export const lightTheme: DefaultTheme = {
  whitePrimary: '#EBEBF5',
  gray1: '#E0E0EA',
  gray2: '#E0E0EA',
  gray3: '#94949B',
  gray4: '#232324',
  blackPrimary: '#121212',
};

// 색과 관련된 GlobalStyle
const GlobalColors = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.blackPrimary};
  /* color: ${({ theme }) => theme.whitePrimary}; */
}

a:link,
a:visited,
a:hover,
a:active {
  color: ${({ theme }) => theme.whitePrimary};
}
`;

export default GlobalColors;

declare module 'styled-components' {
  export interface DefaultTheme {
    whitePrimary: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    blackPrimary: string;
  }
}
