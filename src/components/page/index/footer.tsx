import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import PSmall400 from '../../../elements/typography/p-small-400';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <PSmall400
          text={{
            // k: 'ⓒ KyungHwan Kim. All rights reserved.',
            // e: 'ⓒ KyungHwan Kim. All rights reserved.',
            k: 'ⓒ Desinged and Developed by KyungHwan Kim',
            e: 'ⓒ Desinged and Developed by KyungHwan Kim',
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
  text-align: center;
  width: 100%;
  margin: 72px auto 105px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 72px auto 73px; // Bottom: 48px + 1px + '24px'
  }
`;
