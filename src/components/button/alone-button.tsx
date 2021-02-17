import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import { btnHoverTap } from '../../elements/framer-motion/variants';
import PSmall400 from '../../elements/typography/p-small-400';
import PMedium400 from '../../elements/typography/p-medium-400';
import { useMyRipple } from '../../lib/hooks/useMyRipple';
import PSmall700 from '../../elements/typography/p-small-700';

const AloneButton = ({
  size, // small or medium
  btnText,
  marginTop,
}: {
  size: string;
  btnText: object;
  marginTop?: string;
}) => {
  const btnRef = useRef(null);
  useMyRipple(btnRef);

  return (
    <MotionDiv //
      size={size}
      ref={btnRef}
      marginTop={marginTop}
      variants={btnHoverTap}
      whileHover="whileHover"
      whileTap="whileTap"
    >
      {size === 'small' ? (
        <PSmall700 text={btnText} color="gray2" />
      ) : (
        <PMedium400 text={btnText} color="gray2" />
      )}
    </MotionDiv>
  );
};

export default AloneButton;

type MotionDivType = {
  marginTop?: string;
  size: string;
};

const MotionDiv = styled(motion.div)<MotionDivType>`
  margin-top: ${({ marginTop }) => marginTop};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ size, theme }) =>
    size === 'small' ? theme.borderRadius.R13 : theme.borderRadius.R26};
  background-color: ${({ theme }) => theme.gray7};
  color: ${({ theme }) => theme.gray1};
  padding: ${({ size }) => (size === 'small' ? '12px 26px' : '18px 32px')};
  /* max-width: 200px; */
`;
