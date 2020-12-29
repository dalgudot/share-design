import styled from 'styled-components';
import P from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { mediaBreakPoint } from '../../styles/common';

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        <P
          text="ⓒ KyungHwan Kim. All rights reserved."
          mobileSize={fontSize.small.mobile}
          tabletSize={fontSize.small.tablet}
          desktopSize={fontSize.small.desktop}
          weight={fontWeight[300]}
          opacity={0.8}
          lineHeight={1.2}
        />
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  /* position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); */
  margin-bottom: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-bottom: 24px;
  }
`;

const Copyright = styled.section`
  text-align: center;
`;
