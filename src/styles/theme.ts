import { createGlobalStyle, DefaultTheme } from 'styled-components';
import 'styled-components';

const borderRadius = {
  R13: '13px',
  R26: '26px',
};

const maxWidth = {
  Paragraph: '740px',
};

const zIndex = {
  Toast: 99998,
  bar: 10000,
  barFillEmptySpace: 9999,
  background: -1,
};

const padding = {
  MobileWrap: '0 4.5vw',
  TabletWrap: '0 12vw',
  DesktopWrap: '0 16.6667%',
};

const margin = {
  MobileWrap: '72px auto 85px',
  MobileTop: '72px', // 57px + 1px + '24px'
  MobileBottom: '85px', // 48px + 1px + '36px'
  /////////////////////////////////////////////
  DesktopWrap: '109px auto 105px',
  DesktopTop: '109px', // 72px + 1px + '36px'
  DesktopBottom: '105px', // 56px + 1px + '48px' // Desktop은 Top, Bottom이 같은 높이
  DefaultMobileBottom: '36px',
  DefaultDesktopBottom: '96px',
};

export const darkTheme: DefaultTheme = {
  // Color
  gray1: '#E6E6F5',
  gray2: '#E0E0EA',
  gray3: '#BFBFC7',
  gray4: '#97979E',
  gray5: '#68686C', // 비활성화
  gray6: 'rgba(61, 61, 63)', // '#3D3D3F'
  gray7: '#1C1C1E',
  gray8: 'rgba(18, 18, 18)', //'#121212'
  // Gradient
  gradientPurple: '354deg, #4633d7, #7c62ed',
  gradientBurgundy: '170deg, #743657, #40192c',
  // BorderRadius
  borderRadius,
  // maxWidth
  maxWidth,
  // zIndex
  zIndex,
  // padding
  padding,
  // margin
  margin,
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
  // maxWidth
  maxWidth,
  // zIndex
  zIndex,
  // padding
  padding,
  // margin
  margin,
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
      R13: string;
      R26: string;
    };
    maxWidth: {
      Paragraph: string;
    };
    zIndex: {
      Toast: number;
      bar: number;
      barFillEmptySpace: number;
      background: number;
    };
    padding: {
      MobileWrap: string;
      TabletWrap: string;
      DesktopWrap: string;
    };
    margin: {
      MobileWrap: string;
      MobileTop: string;
      MobileBottom: string;
      DesktopWrap: string;
      DesktopTop: string;
      DesktopBottom: string;
      DefaultMobileBottom: string;
      DefaultDesktopBottom: string;
    };
  }
}
