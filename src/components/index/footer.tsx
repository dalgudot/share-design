import styled from 'styled-components';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { mediaBreakPoint } from '../../styles/common';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowHeight } from '../../lib/hooks/useWindowHeight';

const Footer = ({ tabToggle }: any) => {
  const themeContext = useContext(ThemeContext);
  const height = useWindowHeight();

  const footerDisplay = tabToggle === 'home' && (
    <FooterContainer height={height}>
      <TextStyle
        type="p"
        text="ⓒ KyungHwan Kim. All rights reserved."
        textSize="small"
        weight={fontWeight[300]}
        opacity={0.8}
        lineHeight={1.2}
        color={themeContext.gray2}
      />
    </FooterContainer>
  );

  return <>{footerDisplay}</>;
};

export default Footer;

const FooterContainer = styled.footer<{ height: number }>`
  display: ${({ height }) => (height > 360 ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 48px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-bottom: 68px;
  }
`;
