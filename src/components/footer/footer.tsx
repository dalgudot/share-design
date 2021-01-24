import styled from 'styled-components';
import TextStyle from '../typography/atoms/text-style';
import { fontWeight } from '../typography/atoms/font';
import { mediaBreakPoint } from '../../styles/common';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Footer = ({ tabToggle }: any) => {
  const themeContext = useContext(ThemeContext);

  const footerDisplay = tabToggle === 'home' && (
    <FooterContainer>
      <TextStyle
        type="p"
        text="ⓒ KyungHwan Kim. All rights reserved."
        textSize="small"
        weight={fontWeight[300]}
        opacity={0.8}
        lineHeight={1.2}
        color={themeContext.gray3}
      />
    </FooterContainer>
  );

  return <>{footerDisplay}</>;
};

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  width: 100%;
  margin: 72px auto 48px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 48px auto 72px;
  }
`;
