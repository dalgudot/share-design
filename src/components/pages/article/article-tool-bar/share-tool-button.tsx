import styled from 'styled-components';
import { motion } from 'framer-motion';
import IconShare24 from '../../../../foundation/svg/icon_share_24';
import { useDispatch, useSelector } from 'react-redux';
import { btnHoverTap } from '../../../../foundation/framer-motion/variants';
import { useTapAmplitude } from '../../../../library/hooks/Amplitude/useTapAmplitude';

const ShareToolButton = () => {
  const openModalForAmplitude = useSelector((state: any) => state.openModal);

  const dispatch = useDispatch();
  const OPEN_MODAL = () =>
    dispatch({
      type: 'OPEN_MODAL',
    });
  const MODAL_Z_INDEX_HANDLER = () =>
    dispatch({
      type: 'MODAL_Z_INDEX_HANDLER',
    });

  const openModal = () => {
    !openModalForAmplitude && useTapAmplitude('tap_open_share_modal');
    OPEN_MODAL(); // to ture
    MODAL_Z_INDEX_HANDLER();
  };

  return (
    <>
      <ShareButtonMotion
        onClick={openModal}
        variants={btnHoverTap}
        whileHover="whileHover"
        whileTap="whileTap"
      >
        <IconShare24 />
      </ShareButtonMotion>
    </>
  );
};

export default ShareToolButton;

const ShareButtonMotion = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
