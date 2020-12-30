import styled from 'styled-components';

const IcnArrowRight24 = ({ color }: any) => {
  return (
    <SVG width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <g
        id="icn_arrow-right_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line
          x1="4"
          y1="12"
          x2="18"
          y2="12"
          id="Path-1"
          stroke={color}
          strokeWidth="2"
        ></line>
        <polyline
          id="Path-2"
          stroke={color}
          strokeWidth="2"
          points="13 4 20 12 14 20"
        ></polyline>
      </g>
    </SVG>
  );
};

export default IcnArrowRight24;

const SVG = styled.svg``;
