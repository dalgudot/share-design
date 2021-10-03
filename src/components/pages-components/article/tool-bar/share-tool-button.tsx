import styled from 'styled-components';
import { motion } from 'framer-motion';
import IconShare24 from '../../../../foundation/svg/icon_share_24';
import { buttonVariants } from '../../../../foundation/framer-motion/variants';
import { useModal } from '../../../common-components/modal/useModal';
import PSmall from '../../../../foundation/typography/p-small';

const ShareToolButton = () => {
  const { openModal } = useModal();

  return (
    <>
      <MotionShareButton
        onClick={() => openModal()}
        variants={buttonVariants}
        whileHover="whileHover"
        whileTap="whileTap"
      >
        <IconShare24 />
        <PSmall text={{ k: '공유하기', e: 'Share' }} color="gray2" />
      </MotionShareButton>
    </>
  );
};

export default ShareToolButton;

const MotionShareButton = styled(motion.button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    text-align: center;
    font-size: 10px;
    margin-top: 1px;
  }
`;
