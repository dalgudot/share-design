import { createGlobalStyle, DefaultTheme } from 'styled-components';
import 'styled-components';

const borderRadius = {
  R13: '13px',
  R26: '26px',
};

const maxWidth = {
  List: '640px',
  Paragraph: '740px',
};

const zIndex = {
  Toast: 99998,
  Modal: 90001,
  ModalBackgroundBlur: 90000,
  Bar: 10000,
  BarFillEmptySpace: 9999,
  Background: -1,
};

const padding = {
  LeftRightPadding: '0 4.5vw',

  // 아래 3개는 추후 삭제
  MobileWrap: '0 4.5vw',
  TabletWrap: '0 12vw',
  DesktopWrap: '0 16.6667%',
};

const margin = {
  DesktopTop: '73px', // 72px + 1px, Header만큼만
  MobileTop: '57px', // 56px + 1px, Header만큼만

  // 아래는 교체하거나 삭제할 속성
  MobileWrap: '72px auto 85px',
  MobileBottom: '85px', // 48px + 1px + '36px'
  /////////////////////////////////////////////
  DesktopWrap: '109px auto 105px',
  DesktopBottom: '105px', // 56px + 1px + '48px' // Desktop은 Top, Bottom이 같은 높이
  DefaultMobileBottom: '36px',
  DefaultDesktopBottom: '96px',
};

export const darkTheme: DefaultTheme = {
  gray0: '#E7E7F0',
  gray1: '#DBDBE4',
  gray2: '#D0D0D8',
  gray3: '#ADADB4',
  gray4: '#8A8A90',
  gray5: '#68686C',
  gray6: '#454548',
  gray7: '#29292B',
  gray8: '#171718',
  gray9: '#121213',

  gray6__30: 'rgba(61, 61, 63, 0.3)',
  gray7__40: 'rgba(28, 28, 30, 0.4)',

  gradientPurple: '354deg, #4633d7, #7c62ed',
  gradientBurgundy: '170deg, #743657, #40192c',
  gradientNightFade: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
  borderRadius,
  maxWidth,
  zIndex,
  padding,
  margin,
};

export const lightTheme: DefaultTheme = {
  gray0: '#E7E7F0',
  gray1: '#DBDBE4',
  gray2: '#D0D0D8',
  gray3: '#ADADB4',
  gray4: '#8A8A90',
  gray5: '#68686C',
  gray6: '#454548',
  gray7: '#29292B',
  gray8: '#171718',
  gray9: '#121213',

  gray6__30: 'rgba(61, 61, 63, 0.3)',
  gray7__40: 'rgba(28, 28, 30, 0.4)',

  gradientPurple: '354deg, #4633d7, #7c62ed',
  gradientBurgundy: '170deg, #743657, #40192c',
  gradientNightFade: 'linear-gradient(to top, #a18cd1, #fbc2eb)',
  borderRadius,
  maxWidth,
  zIndex,
  padding,
  margin,
};

// 색과 관련된 GlobalStyle
const GlobalColors = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.gray9};
}
`;

export default GlobalColors;

// export const darkTheme: DefaultTheme = {
//   gray1: '#E6E6F5',
//   gray2: '#E0E0EA',
//   gray3: '#BFBFC7',
//   gray4: '#97979E',
//   gray5: '#68686C', // 비활성화
//   gray6: 'rgba(61, 61, 63)', // #3D3D3F
//   gray7: 'rgba(28, 28, 30)', // #1C1C1E
//   gray8: 'rgba(18, 18, 18)', //#121212

//   gray6__30: 'rgba(61, 61, 63, 0.3)',
//   gray7__40: 'rgba(28, 28, 30, 0.4)',
//   gradientPurple: '354deg, #4633d7, #7c62ed',
//   gradientBurgundy: '170deg, #743657, #40192c',
//   gradientNightFade: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
//   borderRadius,
//   maxWidth,
//   zIndex,
//   padding,
//   margin,
// };

// export const lightTheme: DefaultTheme = {
//   gray1: '#121212',
//   gray2: '#232324',
//   gray3: '#3D3D3F',
//   gray4: '#68686C',
//   gray5: '#94949B',
//   gray6: '#BFBFC7',
//   gray7: '#E0E0EA',
//   gray8: '#EBEBF5',

//   gray6__30: 'rgba(61, 61, 63, 0.3)',
//   gray7__40: 'rgba(28, 28, 30, 0.4)',
//   gradientPurple: '354deg, #4633d7, #7c62ed',
//   gradientBurgundy: '170deg, #743657, #40192c',
//   gradientNightFade: 'linear-gradient(to top, #a18cd1, #fbc2eb)',
//   borderRadius,
//   maxWidth,
//   zIndex,
//   padding,
//   margin,
// };

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
    gray8: string;
    gray9: string;

    gray6__30: string;
    gray7__40: string;
    // Gradient
    gradientPurple: string;
    gradientBurgundy: string;
    gradientNightFade: string;
    // BorderRadius
    borderRadius: {
      R13: string;
      R26: string;
    };
    maxWidth: {
      List: string;
      Paragraph: string;
    };
    zIndex: {
      Toast: number;
      Modal: number;
      ModalBackgroundBlur: number;
      Bar: number;
      BarFillEmptySpace: number;
      Background: number;
    };
    padding: {
      LeftRightPadding: string;
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
