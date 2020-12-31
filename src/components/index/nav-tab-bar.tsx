import { useEffect, useRef } from 'react';
import { useRipple } from 'react-use-ripple';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';
import IconHome24 from '../svg/icon_home_24';
import IconMenu24 from '../svg/icon_menu_24';
import { useDispatch } from 'react-redux';

const NavTabBar = ({ tabToggle }: any) => {
  const dispatch = useDispatch();
  const TAB_CHANGE = () =>
    dispatch({
      type: 'TAB_CHANGE',
    });

  // Toggle Graphic on off
  const homeToggle = tabToggle === 'home' ? true : false;
  const menuToggle = tabToggle === 'menu' ? true : false;

  const setHomeToggle = () => {
    tabToggle === 'menu' && TAB_CHANGE();
  };

  const setMenuToggle = () => {
    tabToggle === 'home' && TAB_CHANGE();
  };

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
      <Nav>
        <Tab onClick={() => setHomeToggle()} ref={homeRef}>
          <IconHome24 toggle={homeToggle} />
        </Tab>
        <Tab onClick={() => setMenuToggle()} ref={menuRef}>
          <IconMenu24 toggle={menuToggle} />
        </Tab>
      </Nav>
    </>
  );
};

export default NavTabBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 124px;
  height: 44px;
  z-index: 10001;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 14px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 48px;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    border-top: solid 1px ${({ theme }) => theme.gray6};

    /* Grassmorphism */
    opacity: 0.999;
    color: ${({ theme }) => theme.blackPrimary};
    -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
      hue-rotate(10deg);
    backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);

    -webkit-transition: color 0.11s ease-in-out,
      -webkit-backdrop-filter 0.11s ease-in-out;
    transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out;
  }
`;

const Tab = styled.button`
  margin-bottom: 24px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.gray6};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
