import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const TabHome24 = ({ tab }: any) => {
  const themeContext = useContext(ThemeContext);
  const color: string = tab === true ? themeContext.gray1 : themeContext.gray5;

  return (
    <SVG width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
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
export default TabHome24;

const SVG = styled.svg``;
