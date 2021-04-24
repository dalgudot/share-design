import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowWidth } from '../../library/hooks/useWindowWidth';

const IconHome24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.gray1;
  const width: number = useWindowWidth();
  const pxSize: string = width < 768 ? '22px' : '28px'; // 시각 보정

  return (
    <SVG width={pxSize} height={pxSize} viewBox="0 0 24 24" version="1.1">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline stroke={color} points="3 11 12 4 21 11"></polyline>
        <path
          d="M6,11 C6,11 6,20 6,20 C6,20 10,20 18,20 L18,11"
          stroke={color}
        ></path>
      </g>
    </SVG>
  );
};
export default IconHome24;

const SVG = styled.svg``;
