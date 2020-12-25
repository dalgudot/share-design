import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalColors = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.gray1};
}

a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: ${({ theme }) => theme.gray1};
}
`;

export default GlobalColors;

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    gray1: string;
    gray2: string;
    gray4: string;
    gray5: string;
  }
}

export const darkTheme: DefaultTheme = {
  backgroundColor: '#121212',
  gray1: '#EBEBF5', // APPLE
  gray2: '#E0E0EA', // 95% of gray1
  gray4: '#94949B', // 60% of gray1
  gray5: '#232324', // 8%
};

export const lightTheme: DefaultTheme = {
  backgroundColor: '#eeeeee',
  gray1: '#191919',
  gray2: '#E0E0EA', // 추후 추가
  gray4: '#94949B', // 추후 추가
  gray5: '#232324', // 추후 추가
};
