import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import PLarge from '../../../foundation/typography/p-large';
import { mediaBreakPoint } from '../../../styles/common';
import { useToast } from '../../../lib/hooks/useToast';

const Toast = () => {
  const { toastOn, toastMessage } = useToast();
  return (
    <>
      <AnimatePresence>
        {toastOn && (
          <MotionToastPositionContainer
            key={toastMessage}
            variants={toastVariants}
            initial="hide"
            animate="show"
            exit="hide"
          >
            <ToastContainer>
              <PLarge text={toastMessage} color="gray1" />
            </ToastContainer>
          </MotionToastPositionContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Toast);

const MotionToastPositionContainer = styled(motion.div)`
  z-index: ${({ theme }) => theme.zIndex.Toast};
  position: fixed; // toast 위치의 핵심
  top: 28px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 480px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: ${({ theme }) => theme.padding.LeftRightPadding};
    // iOS top safe area
    padding-top: calc(env(safe-area-inset-top));
  }
`;

const ToastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  background-color: ${({ theme }) => theme.gray6};
  padding: 16px 24px;
`;

const toastVariants = {
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },

  hide: {
    y: -240,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.4,
    },
  },
};
