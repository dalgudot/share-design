import styled from 'styled-components';

const IconHome24 = ({ toggle, theme }: any) => {
  const color: string = toggle === true ? theme.whitePrimary : theme.gray4;

  return (
    <SVG width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <g
        id="icn_home_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline
          id="Path-1"
          stroke={color}
          points="3 11 12 4 21 11"
        ></polyline>
        <path
          d="M6,11 C6,11 6,20 6,20 C6,20 10,20 18,20 L18,11"
          id="Path-2"
          stroke={color}
        ></path>
      </g>
    </SVG>
  );
};
export default IconHome24;

const SVG = styled.svg``;
