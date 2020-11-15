import styled from 'styled-components';
import PText from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialWrap>
        {/* <a href="https://brunch.co.kr/@dalgudot" target="_blank"> */}
        <u>
          <PText
            text="Brunch"
            mobileSize={fontSize.font18}
            tabletSize={fontSize.font18}
            desktopSize={fontSize.font18}
            weight={fontWeight.regular}
          />
        </u>
        {/* </a> */}

        {/* <a href="https://www.facebook.com/dalgudot" target="_blank"> */}
        <u>
          <PText
            text="Facebook"
            mobileSize={fontSize.font18}
            tabletSize={fontSize.font18}
            desktopSize={fontSize.font18}
            weight={fontWeight.regular}
          />
        </u>
        {/* </a> */}

        {/* <a href="https://www.linkedin.com/in/khk-design/" target="_blank"> */}
        <u>
          <PText
            text="LinkedIn"
            mobileSize={fontSize.font18}
            tabletSize={fontSize.font18}
            desktopSize={fontSize.font18}
            weight={fontWeight.regular}
          />
        </u>
        {/* </a> */}
      </SocialWrap>

      <Copyright>
        <PText
          text="ⓒ KyungHwan Kim. All rights reserved."
          mobileSize={fontSize.font14}
          tabletSize={fontSize.font14}
          desktopSize={fontSize.font14}
          weight={fontWeight.regular}
          opacity={0.8}
        />
      </Copyright>
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
