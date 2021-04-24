import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconContactFacebook24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.gray3;

  return (
    <SVG width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="icon_contact_facebook"
          transform="translate(-176.000000, -1861.000000)"
        >
          <g transform="translate(176.000000, 1861.000000)">
            <rect x="0" y="0" width="24" height="24"></rect>
            <g transform="translate(8.000000, 4.000000)">
              <path
                d="M8.035625,9 L8.48,6.104375 L5.7015625,6.104375 L5.7015625,4.2253125 C5.7015625,3.433125 6.0896875,2.6609375 7.3340625,2.6609375 L8.5971875,2.6609375 L8.5971875,0.195625 C8.5971875,0.195625 7.4509375,0 6.355,0 C4.066875,0 2.57125,1.386875 2.57125,3.8975 L2.57125,6.104375 L0.0278125,6.104375 L0.0278125,9 L2.57125,9 L2.57125,16 L5.7015625,16 L5.7015625,9 L8.035625,9 Z"
                fill={color}
                fillRule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </SVG>
  );
};
export default IconContactFacebook24;

const SVG = styled.svg``;
