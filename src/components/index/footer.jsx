import styled from 'styled-components';
import PText from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';

const Footer = () => {
  return (
    <FooterContainer>
      {/* <SocialWrap>
        <a href="https://brunch.co.kr/@dalgudot" target="_blank">
          <u>
            <PText
              text="Brunch"
              mobileSize={fontSize[18]}
              tabletSize={fontSize[18]}
              desktopSize={fontSize[18]}
              weight={fontWeight[400]}
            />
          </u>
        </a>

        <a href="https://www.facebook.com/dalgudot" target="_blank">
          <u>
            <PText
              text="Facebook"
              mobileSize={fontSize[18]}
              tabletSize={fontSize[18]}
              desktopSize={fontSize[18]}
              weight={fontWeight[400]}
            />
          </u>
        </a>

        <a href="https://www.linkedin.com/in/khk-design/" target="_blank">
          <u>
            <PText
              text="LinkedIn"
              mobileSize={fontSize[18]}
              tabletSize={fontSize[18]}
              desktopSize={fontSize[18]}
              weight={fontWeight[400]}
            />
          </u>
        </a>
      </SocialWrap>

      <Copyright>
        <PText
          text="ⓒ KyungHwan Kim. All rights reserved."
          mobileSize={fontSize[14]}
          tabletSize={fontSize[14]}
          desktopSize={fontSize[14]}
          weight={fontWeight[400]}
          opacity={0.8}
        />
      </Copyright> */}
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin-bottom: 48px;
`;

const SocialWrap = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 4vh auto 0;
  max-width: 960px;

  a {
    color: ${({ theme }) => theme.gray1};
  }
`;

const Copyright = styled.section`
  text-align: center;
  margin-top: 96px;
`;
