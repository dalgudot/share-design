import TextStyle from '../../typography/text-style';
import styled from 'styled-components';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { fontWeight } from '../../../components/typography/font';
import { t } from '../../../components/index/lang/t';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { useRipple } from 'react-use-ripple';

const SubNavBar = ({ subNavToggle, setSubNavToggle }: any) => {
  const themeContext = useContext(ThemeContext);

  // Toggle State
  const welcomeToggle = subNavToggle === 'welcome' ? true : false;
  const contactToggle = subNavToggle === 'contact' ? true : false;

  const welcomeToggleColor = welcomeToggle
    ? themeContext.whitePrimary
    : themeContext.gray4;

  const contactToggleColor = contactToggle
    ? themeContext.whitePrimary
    : themeContext.gray4;

  const setWelcomeToggle = () => {
    subNavToggle === 'contact' && setSubNavToggle('welcome');
  };

  const setContactToggle = () => {
    subNavToggle === 'welcome' && setSubNavToggle('contact');
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
      <Tab onClick={() => setWelcomeToggle()} ref={welcomeRef}>
        <TextStyle
          type="p"
          text={useSetLanguage(t.subNavBar.welcome)}
          textSize="body"
          weight={fontWeight[700]}
          color={welcomeToggleColor}
        />
      </Tab>
      <Tab onClick={() => setContactToggle()} ref={contactRef}>
        <TextStyle
          type="p"
          text={useSetLanguage(t.subNavBar.contact)}
          textSize="body"
          weight={fontWeight[700]}
          color={contactToggleColor}
        />
      </Tab>
    </Nav>
  );
};

export default SubNavBar;

const Nav = styled.nav`
  position: fixed;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  width: 740px;
  border-bottom: solid 1px ${({ theme }) => theme.gray6};
  z-index: 10000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  // 변경 요소
  height: 53px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 49px;
    padding: 0 4.5vw;
  }
`;

const Tab = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Grassmorphism */
  opacity: 0.999;
  color: ${({ theme }) => theme.blackPrimary};
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(10deg);
  backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);

  -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out;
`;
