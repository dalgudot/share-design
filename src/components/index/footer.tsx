import styled from 'styled-components';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { mediaBreakPoint } from '../../styles/common';

const Footer = ({ theme }: any) => {
  return (
    <FooterContainer>
      <Copyright>
        <TextStyle
          type="p"
          text="ⓒ KyungHwan Kim. All rights reserved."
          textSize="small"
          weight={fontWeight[300]}
          opacity={0.8}
          lineHeight={1.2}
          color={theme.gray1}
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
