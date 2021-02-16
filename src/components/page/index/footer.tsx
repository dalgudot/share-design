import styled from 'styled-components';
import TextStyle from '../../../elements/typography/atoms/text-style';
import { fontWeight } from '../../../elements/typography/atoms/font';
import { mediaBreakPoint } from '../../../styles/common';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  const footerDisplay = router.pathname === '/' && (
    <FooterContainer>
      <TextStyle
        type="p"
        text="ⓒ KyungHwan Kim. All rights reserved."
        textSize="small"
        weight={fontWeight[300]}
        opacity={0.8}
        lineHeight={1.2}
        color="gray3"
      />
    </FooterContainer>
  );

  return <>{footerDisplay}</>;
};

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  width: 100%;
  margin: 48px auto 48px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 36px auto 72px;
  }
`;
