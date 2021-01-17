import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  gray0: '#EBEBF5', // APPLE
  gray1: '#E0E0EA', // 95% of gray0
  gray2: '#BFBFC7', // 80% of gray0
  gray3: '#94949B', // 60% of gray0
  gray4: '#68686C', // 40% of gray0 // 비활성화
  gray5: '#3D3D3F', // 20% of gray0
  gray6: '#232324', // 8%
  gray7: '#121212',
};

export const lightTheme: DefaultTheme = {
  gray0: '#121212', // APPLE
  gray1: '#232324', // 95% of gray0
  gray2: '#3D3D3F', // 80% of gray0
  gray3: '#68686C', // 60% of gray0
  gray4: '#94949B', // 40% of gray0
  gray5: '#BFBFC7', // 20% of gray0
  gray6: '#E0E0EA', // 8%
  gray7: '#EBEBF5',
};

// 색과 관련된 GlobalStyle
const GlobalColors = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.gray7};
}

a:link,
a:visited,
a:hover,                  
a:active {
  color: transparent;
}
`;

export default GlobalColors;

declare module 'styled-components' {
  export interface DefaultTheme {
    gray0: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
  }
}
