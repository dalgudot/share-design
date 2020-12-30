import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  whitePrimary: '#EBEBF5', // APPLE
  gray1: '#E0E0EA', // 95% of whitePrimary
  gray2: '#BFBFC7', // 80% of whitePrimary
  gray3: '#94949B', // 60% of whitePrimary
  gray4: '#68686C', // 40% of whitePrimary
  gray5: '#3D3D3F', // 20% of whitePrimary
  gray6: '#232324', // 8%
  blackPrimary: '#121212',
};

export const lightTheme: DefaultTheme = {
  whitePrimary: '#EBEBF5', // APPLE
  gray1: '#E0E0EA', // 95% of whitePrimary
  gray2: '#BFBFC7', // 80% of whitePrimary
  gray3: '#94949B', // 60% of whitePrimary
  gray4: '#68686C', // 40% of whitePrimary
  gray5: '#3D3D3F', // 20% of whitePrimary
  gray6: '#232324', // 8%
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
    gray5: string;
    gray6: string;
    blackPrimary: string;
  }
}
