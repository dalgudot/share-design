import { useEffect, useRef } from 'react';
import { useRipple } from 'react-use-ripple';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';
import IconHome24 from '../svg/icon_home_24';
import IconMenu24 from '../svg/icon_menu_24';
import { useDispatch } from 'react-redux';

const TabBarMobileOnly = ({ theme, tabToggle }: any) => {
  const dispatch = useDispatch();
  const tabChange = () =>
    dispatch({
      type: 'TABCHANGE',
    });

  // Toggle Graphic on off
  const homeToggle = tabToggle === 'home' ? true : false;
  const menuToggle = tabToggle === 'menu' ? true : false;

  // useRipple
  const homeRef = useRef(null);
  const menuRef = useRef(null);

  useRipple(homeRef, {
    rippleColor: 'rgba(0, 0, 0, 0.6)',
    animationLength: 500,
    rippleSize: 2000,
  });

  useRipple(menuRef, {
    rippleColor: 'rgba(0, 0, 0, 0.6)',
    animationLength: 500,
    rippleSize: 2000,
  });

  return (
    <>
      <Container>
        <Tab onClick={() => tabChange()} ref={homeRef}>
          <IconHome24 toggle={homeToggle} theme={theme} />
        </Tab>
        <Tab onClick={() => tabChange()} ref={menuRef}>
          <IconMenu24 toggle={menuToggle} theme={theme} />
        </Tab>
      </Container>
    </>
  );
};

export default TabBarMobileOnly;

const Container = styled.footer`
  display: none;
  width: 100vw;
  height: 48px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  border-radius: 13px;
  border-top: solid 1px ${({ theme }) => theme.gray6};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

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

const Tab = styled.button`
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 13px;
`;
