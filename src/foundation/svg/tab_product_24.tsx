import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

const TabProduct24 = ({ pathname }: any) => {
  const themeContext = useContext(ThemeContext);
  // 임시 pathname
  const color: string =
    pathname === '/product/share-palette'
      ? themeContext.gray0
      : themeContext.gray4;

  return (
    <SVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 3V21H6V3H18ZM17 4H7V20H17V4ZM12 15C13.1046 15 14 15.8954 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
        fill={color}
      />
    </SVG>
  );
};
export default TabProduct24;

const SVG = styled.svg`
  display: none;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: flex;
  }
`;
