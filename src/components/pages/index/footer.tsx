import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import PSmall400 from '../../../foundation/typography/p-small-400';
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

  // iOS bottom safe area
  padding-bottom: calc(env(safe-area-inset-bottom));

  @media all and (max-width: ${mediaBreakPoint.first}) {
    // Bottom: 48px + 1px + '24px'
    margin: 72px auto 73px;
    // Bottom: 48px + 1px + '36px'
    // 아이폰 하단 Home indicator 대응 위해 하단 마진 높게
    /* margin: 72px auto 109px; */

    // iOS bottom safe area
    padding-bottom: calc(env(safe-area-inset-bottom));
  }
`;
