import styled from 'styled-components';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { mediaBreakPoint } from '../../styles/common';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const FooterTabletDesktopOnly = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Footer>
      <TextStyle
        type="p"
        text="ⓒ KyungHwan Kim. All rights reserved."
        textSize="small"
        weight={fontWeight[300]}
        opacity={0.8}
        lineHeight={1.2}
        color={themeContext.gray1}
      />
    </Footer>
  );
};

export default FooterTabletDesktopOnly;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: none;
  }
`;
