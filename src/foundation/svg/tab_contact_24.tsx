import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

const TabContact24 = ({ pathname }: any) => {
  const themeContext = useContext(ThemeContext);
  const color: string =
    pathname === '/contact' ? themeContext.gray0 : themeContext.gray4;

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
        id="000-Icon/icon_contact_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M21,6 L21,18 L3,18 L3,6 L21,6 Z M20,7.625 L12,13.625 L4,7.626 L4,17 L20,17 L20,7.625 Z M19.167,7 L4.832,7 L12,12.375 L19.167,7 Z"
          id="Shape"
          fill={color}
          fillRule="nonzero"
        ></path>
      </g>
    </SVG>
  );
};
export default TabContact24;

const SVG = styled.svg`
  display: none;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: flex;
  }
`;
