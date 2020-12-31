import { useRef } from 'react';
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
  // 공통 속성
  display: flex;
  z-index: 10001;
  position: fixed;
  // 공통 속성

  justify-content: space-between;
  width: 124px;
  height: 44px;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);

  @media all and (max-width: ${mediaBreakPoint.first}) {
    justify-content: space-evenly;
    width: 100vw;
    height: 48px;
    top: unset; // 초기화
    left: 0;
    transform: translateX(0);

    // 추가 속성
    bottom: 0;
    align-items: center;
    border-top-left-radius: var(--border-radius-primary);
    border-top-right-radius: var(--border-radius-primary);
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
  // 공통 속성
  display: flex;
  justify-content: center;
  align-items: center;
  // 공통 속성

  margin-bottom: 24px;
  border-radius: var(--border-radius-primary);
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.gray6};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-bottom: 0;
    border-radius: 0;
    width: 100%;
    height: 100%;
    background-color: unset;
  }
`;
