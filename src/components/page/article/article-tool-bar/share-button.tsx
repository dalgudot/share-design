import styled from 'styled-components';
import { motion } from 'framer-motion';
import IconShare24 from '../../../../elements/svg/icon_share_24';

const ShareToolButton = () => {
  return (
    <>
      <ShareButtonMotion>
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
