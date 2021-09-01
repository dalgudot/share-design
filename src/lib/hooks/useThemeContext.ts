import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const useThemeContext = (value: string) => {
  const themeContext = useContext(ThemeContext);

  // https://github.com/microsoft/TypeScript/issues/35859
  const getKeyValue = <T extends object, U extends keyof T>(value: U) => (
    themeContext: T
  ) => themeContext[value];
  const color = getKeyValue(value as never)(themeContext);
  // console.log(getKeyValue(value as never)(themeContext));

  // const colorFunc = () => {
  //   if (value === 'gray1') {
  //     return themeContext['gray1'];
  //   } else if (value === 'gray2') {
  //     return themeContext['gray2'];
  //   } else if (value === 'gray3') {
  //     return themeContext['gray3'];
  //   } else if (value === 'gray4') {
  //     return themeContext['gray4'];
  //   } else if (value === 'gray5') {
  //     return themeContext['gray5'];
  //   } else if (value === 'gray6') {
  //     return themeContext['gray6'];
  //   } else if (value === 'gray7') {
  //     return themeContext['gray7'];
  //   } else if (value === 'gray8') {
  //     return themeContext['gray8'];
  //   }
  // };
  // const color = colorFunc();

  return color;
};
