import styled from 'styled-components';

const IconMenu24 = ({ toggle, theme }: any) => {
  const color: string = toggle === true ? theme.whitePrimary : theme.gray4;

  return (
    <SVG width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <g
        id="icn_menu_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <line x1="5" y1="6" x2="19" y2="6" id="Path-1" stroke={color}></line>
        <line x1="5" y1="12" x2="19" y2="12" id="Path-2" stroke={color}></line>
        <line x1="5" y1="18" x2="19" y2="18" id="Path-3" stroke={color}></line>
      </g>
    </SVG>
  );
};
export default IconMenu24;

const SVG = styled.svg``;
