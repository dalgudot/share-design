import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const TabContact24 = ({ tab }: any) => {
  const themeContext = useContext(ThemeContext);
  const color: string = tab === true ? themeContext.gray1 : themeContext.gray5;

  return (
    <SVG width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round"
      >
        <polygon stroke={color} points="3 7 21 7 21 19 3 19"></polygon>
        <path
          d="M3,7 C9,11.6666667 12,14 12,14 C12,14 15,11.6666667 21,7"
          stroke={color}
          strokeLinecap="round"
        ></path>
      </g>
    </SVG>
  );
};
export default TabContact24;

const SVG = styled.svg``;
