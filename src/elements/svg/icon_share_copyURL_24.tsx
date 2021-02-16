import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const IconShareCopyURL24 = () => {
  const themeContext = useContext(ThemeContext);
  const backgroundColor = themeContext.gray1;
  const contentsColor = themeContext.gray8;

  return (
    <SVG width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <g
        id="icon_share_copyURL_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          fill={backgroundColor}
          x="0"
          y="0"
          width="24"
          height="24"
          rx="2"
        ></rect>
        <rect
          fill={contentsColor}
          x="6"
          y="6"
          width="10"
          height="15"
          rx="1"
        ></rect>
        <rect
          fill={contentsColor}
          x="8"
          y="3"
          width="11"
          height="2"
          rx="1"
        ></rect>
        <rect
          fill={contentsColor}
          x="17"
          y="3"
          width="2"
          height="16"
          rx="1"
        ></rect>
      </g>
    </SVG>
  );
};

export default IconShareCopyURL24;

const SVG = styled.svg``;
