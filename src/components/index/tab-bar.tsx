import { useRef, useState } from 'react';
import { useRipple } from 'react-use-ripple';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';
import IcnHome24 from '../svg/icn_home_24';
import IcnMenu24 from '../svg/icn_menu_24';

const TabBar = ({ theme }: any) => {
  // Toggle
  const [homeToggle, setHomeToggle] = useState(true);
  const [menuToggle, setMenuToggle] = useState(false);

  const setHome = () => {
    setHomeToggle(true);
    setMenuToggle(false);
  };

  const setMenu = () => {
    setHomeToggle(false);
    setMenuToggle(true);
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
    <Container>
      <Tab onClick={() => setHome()} ref={homeRef}>
        <IcnHome24 toggle={homeToggle} theme={theme} />
      </Tab>
      <Tab onClick={() => setMenu()} ref={menuRef}>
        <IcnMenu24 toggle={menuToggle} theme={theme} />
      </Tab>
    </Container>
  );
};

export default TabBar;

const Container = styled.section`
  display: none;
  width: 100vw;
  height: 48px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  /* background-color: ${({ theme }) => theme.blackPrimary}; */
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

/* Grassmorphism */
/* opacity: 0.999;
  color: ${({ theme }) => theme.blackPrimary};
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(10deg);
  backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);

  -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out; */
