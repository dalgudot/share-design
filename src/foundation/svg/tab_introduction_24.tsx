import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

const TabIntroduction24 = ({ pathname }: any) => {
  const themeContext = useContext(ThemeContext);
  const color: string =
    pathname === '/introduction' ? themeContext.gray0 : themeContext.gray4;

  return (
    <SVG
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="000-Icon/icon_introduction_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M21,6 L21,18 L3,18 L3,6 L21,6 Z M20,7 L4,7 L4,17 L20,17 L20,7 Z M10.5,8.5 L10.5,12.5 L5.5,12.5 L5.5,8.5 L10.5,8.5 Z M9.5,9.5 L6.5,9.5 L6.5,11.5 L9.5,11.5 L9.5,9.5 Z"
          id="Shape"
          fill={color}
          fillRule="nonzero"
        ></path>
      </g>
    </SVG>
  );
};
export default TabIntroduction24;

const SVG = styled.svg`
  display: none;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: flex;
  }
`;
