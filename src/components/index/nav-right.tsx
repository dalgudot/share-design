import styled from 'styled-components';
import P from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { mediaBreakPoint } from '../../styles/common';
import languageFunc from '../func/language-func';
import { t } from '../index/lang/t';

const NavRight = ({ theme }: { theme: any }) => {
  return (
    <Nav>
      <P
        text={languageFunc(t.navRight.greetings)}
        mobileSize={fontSize.small.mobile}
        tabletSize={fontSize.small.tablet}
        desktopSize={fontSize.small.desktop}
        weight={fontWeight[400]}
        lineHeight={1.2}
        marginTop="2px"
        color={theme.gray2}
      />

      <P
        text={languageFunc(t.navRight.contact)}
        mobileSize={fontSize.small.mobile}
        tabletSize={fontSize.small.tablet}
        desktopSize={fontSize.small.desktop}
        weight={fontWeight[400]}
        lineHeight={1.2}
        marginTop="24px"
        color={theme.gray2}
      />
    </Nav>
  );
};

export default NavRight;

const Nav = styled.nav`
  position: absolute;
  top: 144px;
  right: 48px;
  text-align: right;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    right: 4.5vw;
    top: 120px;
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    right: 12vw;
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    right: 16.6667%;
  }
`;
