import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';
import PMedium400 from '../../elements/typography/p-medium-400';
import { mediaBreakPoint } from '../../styles/common';

const MyToast = ({
  toastOn,
  toastMessage,
}: {
  toastOn: boolean;
  toastMessage: string;
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <ToastDivMotion
        key={toastMessage}
        variants={toastVariants}
        initial="hide"
        animate={toastOn === true ? 'show' : 'hide'}
      >
        <PMedium400 text={toastMessage} color={themeContext.gray1} />
      </ToastDivMotion>
    </>
  );
};

export default React.memo(MyToast);

const ToastDivMotion = styled(motion.div)`
  z-index: ${({ theme }) => theme.zIndex.Toast};
  background-color: ${({ theme }) => theme.gray6};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  position: absolute;
  top: 28px; // 상단 위치
  left: 0;
  right: 0;
  margin: 0 auto !important;
  padding: 16px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.Primary};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 0 4.5vw;
  }
`;

const toastVariants = {
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      // ease: 'easeInOut',
      duration: 0.3,
    },
  },

  hide: {
    y: -240,
    opacity: 0,
    scale: 0.8,
    transition: {
      // ease: 'easeInOut',
      duration: 0.4,
    },
  },
};
