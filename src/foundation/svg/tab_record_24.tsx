import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

const TabRecord24 = ({ pathname }: any) => {
  const themeContext = useContext(ThemeContext);
  const color: string =
    pathname === '/' ? themeContext.gray0 : themeContext.gray4;

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
        id="000-Icon/icon_record_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M18,3 L18,21 L6,21 L6,3 L18,3 Z M17,4 L7,4 L7,20 L17,20 L17,4 Z M12,12 L12,13 L9,13 L9,12 L12,12 Z M15,9 L15,10 L9,10 L9,9 L15,9 Z M15,6 L15,7 L9,7 L9,6 L15,6 Z"
          id="Shape"
          fill={color}
          fillRule="nonzero"
        ></path>
      </g>
    </SVG>
  );
};
export default TabRecord24;

const SVG = styled.svg`
  display: none;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: flex;
  }
`;
