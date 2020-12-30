import styled from 'styled-components';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { mediaBreakPoint } from '../../styles/common';
import languageFunc from '../func/language-func';
import { t } from '../index/lang/t';

const NavRight = ({ theme }: any) => {
  return (
    <Nav>
      <TextStyle
        type="p"
        text={languageFunc(t.navRight.greetings)}
        textSize="small"
        weight={fontWeight[400]}
        lineHeight={1.2}
        marginTop="2px"
        color={theme.gray1}
      />

      <TextStyle
        type="p"
        text={languageFunc(t.navRight.contact)}
        textSize="small"
        weight={fontWeight[400]}
        lineHeight={1.2}
        marginTop="24px"
        color={theme.gray1}
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
