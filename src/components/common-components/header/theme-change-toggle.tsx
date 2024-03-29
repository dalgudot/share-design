import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import IconThemeChange24 from '../../../foundation/svg/icon_theme_change_24';
import { mediaBreakPoint } from '../../../styles/common';
import { motion } from 'framer-motion';
import PMedium from '../../../foundation/typography/p-medium';
import { useWindowWidth } from '../../../lib/hooks/useWindowWidth';
import { useIsiOS } from '../../../lib/hooks/useIsiOS';
import { buttonVariants } from '../../../foundation/framer-motion/variants';

const ThemeChangeToggle = ({ setTheme, darkTheme, lightTheme }: any) => {
  const mode = useSelector((state: any) => state.themeMode);
  const dispatch = useDispatch();
  const themeChange = () => {
    dispatch({
      type: 'MODE_CHANGE',
    });
  };

  // 1)초기 mode  2)새로고침 mode 정의
  useEffect(() => {
    setTheme(mode === 'darkTheme' ? darkTheme : lightTheme);
  }, []);

  const setMode = () => {
    themeChange();
    setTheme(mode === 'darkTheme' ? lightTheme : darkTheme);
  };

  // S of JS -> Swfit
  // https://developer111.tistory.com/37
  const { is_iOS, is_iPadOS } = useIsiOS();
  const sendToNativeApp = () => {
    (is_iOS || is_iPadOS) &&
      window.webkit.messageHandlers.receiveModeFromJS.postMessage(mode);
  };

  useEffect(() => {
    sendToNativeApp();
  }, [mode]);
  // E of JS -> Swfit

  // for only mobile animation
  const width: number = useWindowWidth();
  const stringMediaBreakPoint = mediaBreakPoint.first.replace('px', '');
  const numberMediaBreakPoint = Number(stringMediaBreakPoint);
  const activeMobileAnimation: boolean = width <= numberMediaBreakPoint;

  return (
    <MotionButtonContainer
      onClick={setMode}
      variants={buttonVariants}
      whileHover="whileHover"
      whileTap={
        activeMobileAnimation ? { scale: 1.7, rotateY: 540 } : 'whileTap'
      }
    >
      <IconThemeChange24 />
      <motion.div //
        variants={darkVariants}
        initial={false}
        animate={mode === 'darkTheme' ? 'on' : 'off'}
        className="dark-width"
      >
        <PMedium
          text="Dark"
          color={mode === 'darkTheme' ? 'gray0' : 'gray4'}
          weight={700}
        />
      </motion.div>
      <Divider />
      <motion.div //
        variants={lightVariants}
        initial={false}
        animate={mode === 'lightTheme' ? 'on' : 'off'}
        className="light-width"
      >
        <PMedium
          text="Light"
          color={mode === 'lightTheme' ? 'gray0' : 'gray4'}
          weight={700}
        />
      </motion.div>
    </MotionButtonContainer>
  );
};

export default ThemeChangeToggle;

const MotionButtonContainer = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0; // touch area

  svg {
    margin-right: 6px;
  }

  p {
    @media all and (max-width: ${mediaBreakPoint.first}) {
      display: none;
    }
  }

  div {
    @media all and (max-width: ${mediaBreakPoint.first}) {
      display: none;
    }
  }

  .dark-width {
    width: 41px; // 38 + 3
  }

  .light-width {
    width: 41px;
  }
`;

const Divider = styled.div`
  height: 12px;
  width: 1px;
  background-color: ${({ theme }) => theme.gray5};
  margin: 3px 6px 0;
`;

// Framer Motion
const darkVariants = {
  on: { x: 2 },
  off: { x: 54 },
};

const lightVariants = {
  on: { x: -54 },
  off: { x: 0 },
};
