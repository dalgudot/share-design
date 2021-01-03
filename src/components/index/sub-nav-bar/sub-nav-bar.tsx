import TextStyle from '../../typography/atoms/text-style';
import styled from 'styled-components';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { fontWeight } from '../../typography/atoms/font';
import { t } from '../../../components/index/lang/t';
import { useContext, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { useRipple } from 'react-use-ripple';
import { useDispatch } from 'react-redux';

const SubNavBar = ({ subNavToggle }: any) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();
  const SUB_NAV_CHANGE = () =>
    dispatch({
      type: 'SUB_NAV_CHANGE',
    });

  // Toggle State
  const welcomeToggle = subNavToggle === 'welcome' ? true : false;
  const contactToggle = subNavToggle === 'contact' ? true : false;

  const welcomeToggleColor = welcomeToggle
    ? themeContext.whitePrimary
    : themeContext.gray4;

  const contactToggleColor = contactToggle
    ? themeContext.whitePrimary
    : themeContext.gray4;

  const welcomeToggleBottomBarColor: string = welcomeToggle
    ? themeContext.whitePrimary
    : themeContext.gray6;

  const contactToggleBottomBarColor: string = contactToggle
    ? themeContext.whitePrimary
    : themeContext.gray6;

  const welcomeToggleBottomBarBorder: string = welcomeToggle ? '4px' : '1px';

  const contactToggleBottomBarBorder: string = contactToggle ? '4px' : '1px';

  const setWelcomeToggle = () => {
    subNavToggle === 'contact' && SUB_NAV_CHANGE();
  };

  const setContactToggle = () => {
    subNavToggle === 'welcome' && SUB_NAV_CHANGE();
  };

  // useRipple
  const welcomeRef = useRef(null);
  const contactRef = useRef(null);

  useRipple(welcomeRef, {
    rippleColor: 'rgba(0, 0, 0, 0.6)',
    animationLength: 500,
    rippleSize: 2000,
  });
  useRipple(contactRef, {
    rippleColor: 'rgba(0, 0, 0, 0.6)',
    animationLength: 500,
    rippleSize: 2000,
  });

  return (
    <Nav>
      <LeftTab
        onClick={() => setWelcomeToggle()}
        welcomeToggleBottomBarColor={welcomeToggleBottomBarColor}
        welcomeToggleBottomBarBorder={welcomeToggleBottomBarBorder}
        ref={welcomeRef}
      >
        <TextStyle
          type="p"
          text={useSetLanguage(t.subNavBar.welcome)}
          textSize="body"
          weight={fontWeight[700]}
          color={welcomeToggleColor}
        />
      </LeftTab>
      <RightTab
        onClick={() => setContactToggle()}
        contactToggleBottomBarColor={contactToggleBottomBarColor}
        contactToggleBottomBarBorder={contactToggleBottomBarBorder}
        ref={contactRef}
      >
        <TextStyle
          type="p"
          text={useSetLanguage(t.subNavBar.contact)}
          textSize="body"
          weight={fontWeight[700]}
          color={contactToggleColor}
        />
      </RightTab>
    </Nav>
  );
};

export default SubNavBar;

const Nav = styled.nav`
  position: fixed;
  z-index: 10000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.blackPrimary};

  // 변경 요소
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  width: 740px;
  height: 53px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    top: 57px;
    left: 0;
    transform: unset;
    width: 100%;
    height: 49px;
  }
`;

const Tab = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10001;
`;

const LeftTab = styled(Tab)<LeftTabDataTypes>`
  border-bottom: solid
    ${({ welcomeToggleBottomBarBorder }) => welcomeToggleBottomBarBorder};
  border-bottom-color: ${({ welcomeToggleBottomBarColor }) =>
    welcomeToggleBottomBarColor};
  z-index: 10001;
`;

const RightTab = styled(Tab)<RightTabDataTypes>`
  border-bottom: solid
    ${({ contactToggleBottomBarBorder }) => contactToggleBottomBarBorder};
  border-bottom-color: ${({ contactToggleBottomBarColor }) =>
    contactToggleBottomBarColor};
  z-index: 10001;
`;

// type
interface LeftTabDataTypes {
  welcomeToggleBottomBarColor: string;
  welcomeToggleBottomBarBorder: string;
}

interface RightTabDataTypes {
  contactToggleBottomBarColor: string;
  contactToggleBottomBarBorder: string;
}
