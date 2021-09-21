import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

const TabProduct24 = ({ pathname }: any) => {
  const themeContext = useContext(ThemeContext);

  const TurnOnOff = () => {
    // 임시 pathname
    const on: boolean = pathname === '/product/share-palette';

    if (on) {
      return (
        <g
          id="000-Icon/icon_product_24_on"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <path
            d="M18,3 L18,21 L6,21 L6,3 L18,3 Z M12,15 C10.8954305,15 10,15.8954305 10,17 C10,18.1045695 10.8954305,19 12,19 C13.1045695,19 14,18.1045695 14,17 C14,15.8954305 13.1045695,15 12,15 Z M12,16 C12.5522847,16 13,16.4477153 13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 C11,16.4477153 11.4477153,16 12,16 Z"
            id="Combined-Shape"
            fill={themeContext.gray0}
          ></path>
        </g>
      );
    } else {
      return (
        <path
          d="M18 3V21H6V3H18ZM17 4H7V20H17V4ZM12 15C13.1046 15 14 15.8954 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
          fill={themeContext.gray4}
        />
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
export default TabProduct24;

const SVG = styled.svg`
  display: none;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: flex;
  }
`;
