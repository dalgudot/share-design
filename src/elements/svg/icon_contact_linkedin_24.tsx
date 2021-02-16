import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconContactLinkedIn24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.gray3;

  return (
    <SVG width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="icon_contact_linkedIn"
          transform="translate(-280.000000, -1861.000000)"
        >
          <g transform="translate(280.000000, 1861.000000)">
            <rect x="0" y="0" width="24" height="24"></rect>
            <g transform="translate(5.000000, 5.000000)">
              <path
                d="M3.13375,14 L0.23125,14 L0.23125,4.653125 L3.13375,4.653125 L3.13375,14 Z M1.6809375,3.378125 C0.7528125,3.378125 0,2.609375 0,1.68125 C0,0.752893863 0.752581363,0.000312525048 1.6809375,0.000312525048 C2.60929364,0.000312525048 3.361875,0.752893863 3.361875,1.68125 C3.361875,2.609375 2.60875,3.378125 1.6809375,3.378125 Z M13.996875,14 L11.100625,14 L11.100625,9.45 C11.100625,8.365625 11.07875,6.975 9.5915625,6.975 C8.0825,6.975 7.85125,8.153125 7.85125,9.371875 L7.85125,14 L4.951875,14 L4.951875,4.653125 L7.735625,4.653125 L7.735625,5.928125 L7.77625,5.928125 C8.16375,5.19375 9.1103125,4.41875 10.5225,4.41875 C13.46,4.41875 14,6.353125 14,8.865625 L14,14 L13.996875,14 Z"
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
export default IconContactLinkedIn24;

const SVG = styled.svg``;
