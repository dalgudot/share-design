import { useRef } from 'react';
import { useRipple } from 'react-use-ripple';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';
import TabHome24 from '../../elements/svg/tab_home_24';
import TabContact24 from '../../elements/svg/tab_contact_24';
import { motion } from 'framer-motion';
import { useWindowWidth } from '../../lib/hooks/useWindowWidth';
import Router, { useRouter } from 'next/router';

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

  const setHomeTab = () => {
    router.pathname !== '/' && Router.push('/');
  };

  const setContactTab = () => {
    router.pathname !== '/contact' && Router.push('/contact');
  };

  // useRipple
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  useRipple(homeRef, {
    rippleColor: 'rgba(0, 0, 0, 0.6)',
    animationLength: 500,
    rippleSize: 2000,
  });
  useRipple(contactRef, {
    rippleColor: 'rgba(0, 0, 0, 0.6)',
    animationLength: 500,
    rippleSize: 2000,
  });

  const width: number = useWindowWidth();

  return (
    <>
      <MotionNav
        key="TabNavBarContainer"
        variants={hideVariants(width)}
        initial={false}
        animate={TabNavBarDisplay() === true ? 'show' : 'hide'}
      >
        <Tab onClick={() => setHomeTab()} ref={homeRef}>
          <TabHome24 tab={homeTab} />
        </Tab>
        <Tab onClick={() => setContactTab()} ref={contactRef}>
          <TabContact24 tab={contactTab} />
        </Tab>
      </MotionNav>
      <MotionFillEmptySpace
        key="TabNavBarFillEmptySpace"
        variants={hideVariants(width)}
        initial={false}
        animate={TabNavBarDisplay() === true ? 'show' : 'hide'}
      />
    </>
  );
};

export default TabNavBar;

const hideVariants = (width: number) => {
  if (width < 768) {
    return {
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          ease: 'easeInOut',
          duration: 0.3,
          delay: 0.1,
        },
      },

      hide: {
        x: 0,
        y: 500,
        opacity: 0,
        transition: {
          ease: 'easeInOut',
        },
      },
    };
  } else {
    return {
      show: {
        // 초기화되는 transform 원래 자리로
        x: '-50%',
        y: 0,
        opacity: 1,
        transition: {
          ease: 'easeInOut',
          duration: 0.3,
          delay: 0.1,
        },
      },
      hide: {
        x: '-50%',
        y: -500,
        opacity: 0,
        transition: {
          ease: 'easeInOut',
        },
      },
    };
  }
};

const MotionNav = styled(motion.nav)`
  display: flex;
  z-index: 10001;
  position: fixed;

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
    transform: translateX(0);

    // 추가 속성
    bottom: 0;
    align-items: center;
    border-top: solid 1px ${({ theme }) => theme.gray7};
    background-color: ${({ theme }) => theme.gray8};
  }
`;

const Tab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  // 바뀌는 속성
  margin-bottom: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
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
const MotionFillEmptySpace = styled(motion.div)`
  @media all and (max-width: ${mediaBreakPoint.first}) {
    position: fixed;
    z-index: 9999;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 56px; // 48 + 8px
    background-color: ${({ theme }) => theme.gray8};
  }
`;
