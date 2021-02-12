import { createGlobalStyle, DefaultTheme } from 'styled-components';
import 'styled-components';

const borderRadius = {
  PrimaryBorderRadius: '13px',
};

const maxWidth = {
  maxWidth: '680px',
};

export const darkTheme: DefaultTheme = {
  // Color
  gray1: '#E6E6F5',
  gray2: '#E0E0EA',
  gray3: '#BFBFC7',
  gray4: '#97979E',
  gray5: '#68686C', // 비활성화
  gray6: '#3D3D3F',
  gray7: '#1C1C1E',
  gray8: '#121212',
  // Gradient
  gradientPurple: '354deg, #4633d7, #7c62ed',
  gradientBurgundy: '170deg, #743657, #40192c',
  // BorderRadius
  borderRadius,
  // maxWidth
  maxWidth,
};

export const lightTheme: DefaultTheme = {
  // Color
  gray1: '#121212',
  gray2: '#232324',
  gray3: '#3D3D3F',
  gray4: '#68686C',
  gray5: '#94949B',
  gray6: '#BFBFC7',
  gray7: '#E0E0EA',
  gray8: '#EBEBF5',
  // Gradient
  gradientPurple: '354deg, #4633d7, #7c62ed',
  gradientBurgundy: '170deg, #743657, #40192c',
  // BorderRadius
  borderRadius,
  maxWidth,
};

// 색과 관련된 GlobalStyle
const GlobalColors = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.gray8};
}
`;

export default GlobalColors;

declare module 'styled-components' {
  export interface DefaultTheme {
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    gray8: string;
    // Gradient
    gradientPurple: string;
    gradientBurgundy: string;
    // BorderRadius
    borderRadius: {
      PrimaryBorderRadius: string;
    };
    maxWidth: {
      maxWidth: string;
    };
  }
}
