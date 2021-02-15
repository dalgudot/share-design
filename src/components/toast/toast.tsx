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
      <ToastWrapMotion
        key={toastMessage}
        variants={toastVariants}
        initial="hide"
        animate={toastOn === true ? 'show' : 'hide'}
      >
        <Div>
          <PMedium400 text={toastMessage} color={themeContext.gray1} />
        </Div>
      </ToastWrapMotion>
    </>
  );
};

export default React.memo(MyToast);

const ToastWrapMotion = styled(motion.div)`
  z-index: ${({ theme }) => theme.zIndex.Toast};
  max-width: 480px;
  position: absolute;
  top: 28px; // 상단 위치
  left: 0; // 좌우 길이 100% 및 가운데 정렬
  right: 0; // 좌우 길이 100% 및 가운데 정렬
  border-radius: ${({ theme }) => theme.borderRadius.Primary};
  background-color: ${({ theme }) => theme.gray6};
  padding: 16px 24px;

  // 바뀌는 속성
  margin: 0 auto; // 좌우 길이 100% 및 가운데 정렬

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: ${({ theme }) => theme.padding.MobileWrap};
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
