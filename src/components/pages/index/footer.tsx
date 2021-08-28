import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import PSmall from '../../../foundation/typography/p-small';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Left></Left>

        <Right>
          <Link href="/contact">
            <a>
              <PSmall
                text="ⓒ KyungHwan Kim. All rights reserved."
                color="gray4"
              />
            </a>
          </Link>
        </Right>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;

  @media all and (max-width: ${mediaBreakPoint.first}) {
  }

  // iOS bottom safe area
  padding-bottom: calc(env(safe-area-inset-bottom));
`;

const Left = styled.div``;

const Right = styled.div``;
