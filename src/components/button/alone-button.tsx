import { motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import { btnHoverTap } from '../../elements/framer-motion/variants';
import PMedium400 from '../../elements/typography/p-medium-400';
import { useMyRipple } from '../../lib/hooks/useMyRipple';

const AloneButton = ({
  btnText,
  marginTop,
}: {
  btnText: object;
  marginTop?: string;
}) => {
  const btnRef = useRef(null);
  useMyRipple(btnRef);

  return (
    <MotionButton //
      ref={btnRef}
      marginTop={marginTop}
      variants={btnHoverTap}
      whileHover="whileHover"
      whileTap="whileTap"
    >
      <PMedium400 text={btnText} color="gray2" />
    </MotionButton>
  );
};

export default AloneButton;

const MotionButton = styled(motion.button)<{ marginTop?: string }>`
  margin-top: ${({ marginTop }) => marginTop};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.R26};
  background-color: ${({ theme }) => theme.gray7};
  color: ${({ theme }) => theme.gray1};
  padding: 18px 32px;
`;
