import styled from 'styled-components';
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
  return (
    <>
      <ToastWrapMotion
        variants={toastVariants}
        initial="hide"
        animate={toastOn === true ? 'show' : 'hide'}
      >
        <Div>
          <PMedium400 text={toastMessage} color="gray1" />
        </Div>
      </ToastWrapMotion>
    </>
  );
};

export default React.memo(MyToast);

const ToastWrapMotion = styled(motion.div)`
  z-index: ${({ theme }) => theme.zIndex.Toast};
  position: fixed; // toast 위치의 핵심
  top: 28px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 480px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }
`;

const Div = styled.div`
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
