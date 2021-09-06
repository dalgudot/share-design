import { createGlobalStyle, DefaultTheme } from 'styled-components';
import 'styled-components';

const borderRadius = {
  R13: '13px',
  R26: '26px',
};

const maxWidth = {
  DesktopList: '640px',
  MobileList: '540px',
  Paragraph: '740px',
};

const zIndex = {
  Toast: 99998,
  Modal: 90001,
  ModalBackgroundBlur: 90000,
  Bar: 10000,
  BarSafeArea: 9999,
  Background: -1,
};

const padding = {
  LeftRightPadding: '0 4.5vw',
};

const margin = {
  DesktopTop: '64px', // 63px + 1px, Header만큼만
  MobileTop: '56px', // 55px + 1px, Header만큼만
  DesktopBottom: '144px', // Same Height as footer margin-bottom(48px) + 96px
  MobileBottom: '104px', // 56 + 48px
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
  borderRadius,
  maxWidth,
  zIndex,
  padding,
  margin,
};

export const lightTheme: DefaultTheme = {
  // https://yeun.github.io/open-color/
  gray0: '#212529',
  gray1: '#343a40',
  gray2: '#495057',
  gray3: '#454548',
  gray4: '#9FA6AC',
  gray5: '#B7BCC1',
  gray6: '#DEE2E6',
  gray7: '#E8ECF0',
  gray8: '#F1F3F5',
  gray9: '#F8F9FA',
  borderRadius,
  maxWidth,
  zIndex,
  padding,
  margin,
};

// 색과 관련된 GlobalStyle
export const GlobalColors = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.gray9};
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
    gray8: string;
    gray9: string;
    borderRadius: {
      R13: string;
      R26: string;
    };
    maxWidth: {
      DesktopList: string;
      MobileList: string;
      Paragraph: string;
    };
    zIndex: {
      Toast: number;
      Modal: number;
      ModalBackgroundBlur: number;
      Bar: number;
      BarSafeArea: number;
      Background: number;
    };
    padding: {
      LeftRightPadding: string;
    };
    margin: {
      DesktopTop: string;
      MobileTop: string;
      DesktopBottom: string;
      MobileBottom: string;
    };
  }
}
