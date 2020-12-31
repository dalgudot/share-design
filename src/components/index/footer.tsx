import styled from 'styled-components';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { mediaBreakPoint } from '../../styles/common';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Footer = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <FooterCopyright>
        <TextStyle
          type="p"
          text="ⓒ KyungHwan Kim. All rights reserved."
          textSize="small"
          weight={fontWeight[300]}
          opacity={0.8}
          lineHeight={1.2}
          color={themeContext.gray2}
        />
      </FooterCopyright>
    </>
  );
};

export default Footer;

const FooterCopyright = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 48px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-bottom: 72px;
  }
`;
