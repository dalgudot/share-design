import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import PSmall400 from '../../../elements/typography/p-small-400';
import Router from 'next/router';

const Footer = () => {
  const goToContact = () => {
    Router.push('/contact');
  };

  return (
    <>
      <FooterContainer onClick={goToContact}>
        <PSmall400
          text={{
            // k: 'ⓒ KyungHwan Kim. All rights reserved.',
            // e: 'ⓒ KyungHwan Kim. All rights reserved.',
            k: 'ⓒ Designed and Developed by KyungHwan Kim',
            e: 'ⓒ Designed and Developed by KyungHwan Kim',
          }}
          color="gray4"
          opacity={0.8}
        />
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  cursor: pointer;
  text-align: center;
  width: 100%;
  margin: 72px auto 105px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 72px auto 73px; // Bottom: 48px + 1px + '24px'
  }
`;
