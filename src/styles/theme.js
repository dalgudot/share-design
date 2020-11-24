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
  gray1: '#EBEBF5', // APPLE
  gray5: '#232324', // 8%
};

export const lightTheme = {
  backgroundColor: '#eeeeee',
  gray1: '#191919',
  gray5: '#232324', // 추후 추가
};
