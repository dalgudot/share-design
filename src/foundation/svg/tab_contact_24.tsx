import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

const TabContact24 = ({ pathname }: any) => {
  const themeContext = useContext(ThemeContext);

  const TurnOnOff = () => {
    const on: boolean = pathname === '/contact';

    if (on) {
      return (
        <g
          id="000-Icon/icon_contact_24_on"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M2.99902969,6.63232389 L12,13.6334308 L20.9990297,6.63332389 L21,18 L3,18 L2.99902969,6.63232389 Z M20.1850297,5.99932389 L12,12.367 L3.81302969,5.99932389 L20.1850297,5.99932389 Z"
            id="Shape"
            fill={themeContext.gray0}
          ></path>
        </g>
      );
    } else {
      return (
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
            fill={themeContext.gray4}
            fillRule="nonzero"
          ></path>
        </g>
      );
    }
  };
  return (
    <SVG
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {TurnOnOff()}
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
