import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInOut } from '../../../foundation/framer-motion/variants';
import { useModal } from '../../../lib/hooks/useModal';
import ShareModal from './share-modal/share-modal';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Modal = () => {
  const { modalOn, closeModal } = useModal();
  const router = useRouter();
  const modalSwitch = () => {
    if (router.pathname.substring(1, 8) === 'article') {
      return <ShareModal />;
    }
  };

  // 모달 스크롤 막기
  // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
  useEffect(() => {
    // 리렌더 방지 위해 'style.csstext' 활용
    if (modalOn === true) {
      // document.body.style.cssText = `overflow: hidden; height: 100vh;`;
      // height 없이 overflow: hidden;만 해도 잘 동작.
      document.body.style.cssText = `overflow: hidden; touch-action: none; -ms-touch-action: none;`;

      // 사파리에서 스크롤되는 문제 해결: touch-action: none; -ms-touch-action: none;
      // https://stackoverflow.com/questions/3047337/does-overflowhidden-applied-to-body-work-on-iphone-safari

      return () => {
        document.body.style.cssText = ``;
      };
    }
  }, [modalOn]);

  // Modal 켜져 있는데 화면 이동하면 Modal 종료
  useEffect(() => {
    if (modalOn === true) {
      closeModal();
    }
  }, [router.pathname]);

  return (
    <>
      <AnimatePresence>
        {modalOn && (
          <>
            {modalSwitch()}
            <MotionBackgroundBlur
              onClick={() => closeModal()}
              variants={fadeInOut}
              initial="initial"
              animate="animate"
              exit="initial"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Modal);

const MotionBackgroundBlur = styled(motion.div)`
  z-index: ${({ theme }) => theme.zIndex.ModalBackgroundBlur};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.gray8};
  -webkit-backdrop-filter: blur(60px) saturate(120%) brightness(105%)
    hue-rotate(10deg);
  backdrop-filter: blur(60px) saturate(120%) brightness(105%) hue-rotate(10deg);
`;
