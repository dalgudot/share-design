import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocialWrap>
        <FooterSocial>
          <u>Brunch</u>
        </FooterSocial>
        <FooterSocial>
          <u>Facebook</u>
        </FooterSocial>
        <FooterSocial>
          <u>LinkedIn</u>
        </FooterSocial>
      </FooterSocialWrap>

      <FooterCopyright>ⓒ KyungHwan Kim. All rights reserved.</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin: 5vh auto 2vh;
  max-width: 1024px;
  display: flex;
  flex-direction: column;

  .social {
    margin-left: 2vw;
  }
`;

const FooterSocialWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterSocial = styled.a`
  font-size: 18rem;
`;

const FooterCopyright = styled.p`
  min-width: 300px;
  font-size: 14rem;
  opacity: 0.7;
  margin-top: 12vh;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.5px;
`;
