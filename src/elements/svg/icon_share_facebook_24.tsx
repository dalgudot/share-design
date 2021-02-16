import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const IconShareFacebook24 = () => {
  const themeContext = useContext(ThemeContext);
  const backgroundColor = themeContext.gray1;
  const contentsColor = themeContext.gray8;

  return (
    <SVG
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="icon_share_facebook_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect fill={contentsColor} x="4" y="2" width="16" height="22"></rect>
        <g>
          <path
            d="M21.4285714,-3.80647894e-16 L2.57142857,-3.80647894e-16 C1.15126779,-3.80647894e-16 0,1.15126779 0,2.57142857 L0,21.4285714 C0,22.8487322 1.15126779,24 2.57142857,24 L9.92410714,24 L9.92410714,15.8405357 L6.54910714,15.8405357 L6.54910714,12 L9.92410714,12 L9.92410714,9.07285714 C9.92410714,5.74339286 11.90625,3.90428571 14.9421429,3.90428571 C16.3960714,3.90428571 17.9164286,4.16357143 17.9164286,4.16357143 L17.9164286,7.43142857 L16.24125,7.43142857 C14.5907143,7.43142857 14.0758929,8.45571429 14.0758929,9.50625 L14.0758929,12 L17.7605357,12 L17.17125,15.8405357 L14.0758929,15.8405357 L14.0758929,24 L21.4285714,24 C22.8487322,24 24,22.8487322 24,21.4285714 L24,2.57142857 C24,1.15126779 22.8487322,-3.80647894e-16 21.4285714,-3.80647894e-16 L21.4285714,-3.80647894e-16 Z"
            fill={backgroundColor}
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </SVG>
  );
};

export default IconShareFacebook24;

const SVG = styled.svg``;
