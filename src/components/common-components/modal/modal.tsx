import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInOut } from '../../../foundation/framer-motion/variants';
import { useModal } from '../../../lib/hooks/useModal';
import ShareModal from './share-modal/share-modal';
import { useRouter } from 'next/router';

const Modal = () => {
  const { modalOn, closeModal } = useModal();
  const router = useRouter();
  const modalSwitch = () => {
    if (router.pathname.substring(1, 8) === 'article') {
      return <ShareModal />;
    }
  };

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
