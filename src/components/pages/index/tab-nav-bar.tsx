import { useRef } from 'react';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import TabHome24 from '../../../foundation/svg/tab_home_24';
import TabContact24 from '../../../foundation/svg/tab_contact_24';
import Router, { useRouter } from 'next/router';
import { useMyRipple } from '../../../library/hooks/useMyRipple';

const TabNavBar = () => {
  const router = useRouter();
  const homeTab: boolean = router.pathname === '/' ? true : false;
  const contactTab: boolean = router.pathname === '/contact' ? true : false;

  const TabNavBarDisplay = () => {
    if (router.pathname === '/') {
      return true;
    } else if (router.pathname === '/contact') {
      return true;
    } else {
      return false;
    }
  };
  const isShow = TabNavBarDisplay();

  const setHomeTab = () => {
    router.pathname !== '/' && Router.push('/');
  };

  const setContactTab = () => {
    router.pathname !== '/contact' && Router.push('/contact');
  };

  // useRipple
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  useMyRipple(homeRef, 500, 2200);
  useMyRipple(contactRef, 500, 2200);

  return (
    <>
      <Nav isShow={isShow}>
        <Tab onClick={() => setHomeTab()} ref={homeRef}>
          <TabHome24 tab={homeTab} />
        </Tab>
        <Tab onClick={() => setContactTab()} ref={contactRef}>
          <TabContact24 tab={contactTab} />
        </Tab>
      </Nav>
      <FillEmptySpace isShow={isShow} />
    </>
  );
};

export default TabNavBar;

type isShowType = {
  isShow: boolean;
};

const Nav = styled.nav<isShowType>`
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  z-index: ${({ theme }) => theme.zIndex.Bar};
  position: fixed;

  // iOS bottom safe area
  margin-top: calc(env(safe-area-inset-top));
  margin-bottom: calc(env(safe-area-inset-bottom));

  // 바뀌는 속성
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
    right: 0;
    transform: translateX(0);

    // 추가 속성
    bottom: 0;
    align-items: center;
    border-top: solid 1px ${({ theme }) => theme.gray7};
    background-color: ${({ theme }) => theme.gray8};

    // iOS bottom safe area
    margin-bottom: calc(env(safe-area-inset-bottom));
  }
`;

const Tab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  // 바뀌는 속성
  margin-bottom: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.gray7};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-bottom: 0;
    border-radius: 0;
    width: 100%;
    height: 100%;
    background-color: unset;
  }
`;

// 아이폰 하단에 나타나는 빈 공간 채워주는 div
const FillEmptySpace = styled.div<isShowType>`
  // 바뀌는 속성
  /* height: 80px; // 72 + 8px */

  // iOS bottom safe area
  margin-bottom: calc(env(safe-area-inset-bottom));

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: ${({ isShow }) => (isShow ? 'block' : 'none')};
    position: fixed;
    z-index: ${({ theme }) => theme.zIndex.BarFillEmptySpace};
    /* bottom: -8px; */
    bottom: -42px; // -8 -34
    left: 0;
    width: 100%;
    // 48 + 8px
    /* height: 56px; */
    height: 90px; // 56 + 34
    background-color: ${({ theme }) => theme.gray8};

    // iOS bottom safe area
    padding-bottom: calc(env(safe-area-inset-bottom));
  }
`;
