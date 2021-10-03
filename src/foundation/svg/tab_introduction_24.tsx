import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

const TabIntroduction24 = ({ pathname }: any) => {
  const themeContext = useContext(ThemeContext);

  const TurnOnOff = () => {
    const on: boolean = pathname === '/introduction';

    if (on) {
      return (
        <g
          id="000-Icon/icon_introduction_24_on"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M21,6 L21,18 L3,18 L3,6 L21,6 Z M11,9 L6,9 L6,13 L11,13 L11,9 Z M10,10 L10,12 L7,12 L7,10 L10,10 Z"
            id="Shape"
            fill={themeContext.gray0}
          ></path>
        </g>
      );
    } else {
      return (
        <g
          id="000-Icon/icon_introduction_24"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M21,6 L21,18 L3,18 L3,6 L21,6 Z M20,7 L4,7 L4,17 L20,17 L20,7 Z M11,9 L11,13 L6,13 L6,9 L11,9 Z M10,10 L7,10 L7,12 L10,12 L10,10 Z"
            id="Shape"
            fill={themeContext.gray4}
            fillRule="nonzero"
          ></path>
        </g>
      );
    }
  };

  return (
    <SVG
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {TurnOnOff()}
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
