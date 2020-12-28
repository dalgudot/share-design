import styled from 'styled-components';
import P from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { mediaBreakPoint } from '../../styles/common';

const Footer = () => {
  return (
    <FooterContainer>
      {/* <SocialWrap>
        <a href="https://brunch.co.kr/@dalgudot" target="_blank">
        <a href="/" target="_blank">
          <u>
            <P
              text="Brunch"
              mobileSize={fontSize.body.mobile}
              tabletSize={fontSize.body.tablet}
              desktopSize={fontSize.body.desktop}
              weight={fontWeight[400]}
            />
          </u>
        </a>

        <a href="https://www.facebook.com/dalgudot" target="_blank">
        <a href="/" target="_blank">
          <u>
            <P
              text="Facebook"
              mobileSize={fontSize.body.mobile}
              tabletSize={fontSize.body.tablet}
              desktopSize={fontSize.body.desktop}
              weight={fontWeight[400]}
            />
          </u>
        </a>

        <a href="https://www.linkedin.com/in/share-design/" target="_blank">
        <a href="/" target="_blank">
          <u>
            <P
              text="LinkedIn"
              mobileSize={fontSize.body.mobile}
              tabletSize={fontSize.body.tablet}
              desktopSize={fontSize.body.desktop}
              weight={fontWeight[400]}
            />
          </u>
        </a>
      </SocialWrap> */}

      <Copyright>
        <P
          text="ⓒ KyungHwan Kim. All rights reserved."
          mobileSize={fontSize.small.mobile}
          tabletSize={fontSize.small.tablet}
          desktopSize={fontSize.small.desktop}
          weight={fontWeight[300]}
          opacity={0.8}
        />
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  /* position: absolute;
  bottom: 0;
  left: 50%; */
  /* transform: translateX(-50%); */
  margin-bottom: 36px;
  /* text-align: center; */

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-bottom: 24px;
  }
`;

const SocialWrap = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  min-width: 100%;
`;

const Copyright = styled.section`
  /* min-width: 100%; */
  text-align: center;
  /* margin-top: 48px; */
`;
