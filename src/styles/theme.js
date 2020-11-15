import { createGlobalStyle } from 'styled-components';

const GlobalColors = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.gray1};
}
`;

export default GlobalColors;

export const darkTheme = {
  backgroundColor: '#121212',
  gray1: '#eeeeee',
  gray2: '#808080',
  gray3: '#212121',
};

export const lightTheme = {
  backgroundColor: '#eeeeee',
  gray1: '#191919',
  gray2: '#808080',
  gray3: '#212121',
};
