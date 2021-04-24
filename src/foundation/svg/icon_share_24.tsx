import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowWidth } from '../../library/hooks/useWindowWidth';

const IconShare24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.gray1;
  const width: number = useWindowWidth();
  const pxSize: string = width < 768 ? '24px' : '30px';

  return (
    <SVG width={pxSize} height={pxSize} viewBox="0 0 24 24" version="1.1">
      <g
        id="000-Icon/icon_share-iOS_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline id="Path-7" stroke={color} points="9 7 12 4 15 7"></polyline>
        <line x1="12" y1="14" x2="12" y2="5" id="Path" stroke={color}></line>
        <polyline
          id="Path-6"
          stroke={color}
          points="9 11 6 11 6 20 18 20 18 11 15 11"
        ></polyline>
      </g>
    </SVG>
  );
};
export default IconShare24;

const SVG = styled.svg``;
