import { motion } from 'framer-motion';
import styled from 'styled-components';
import { btnHoverTap } from '../../foundation/framer-motion/variants';
import PLarge from '../../foundation/typography/p-large';
import { mediaBreakPoint } from '../../styles/common';

const AloneButton = ({
  btnText,
  marginTop,
}: {
  btnText:
    | {
        k: string;
        e: string;
      }
    | string;
  marginTop?: string;
}) => {
  return (
    <MotionDiv //
      marginTop={marginTop}
      variants={btnHoverTap}
      whileHover="whileHover"
      whileTap="whileTap"
    >
      <PLarge text={btnText} color="gray1" />
    </MotionDiv>
  );
};

export default AloneButton;

const MotionDiv = styled(motion.div)<{ marginTop?: string }>`
  margin-top: ${({ marginTop }) => marginTop};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray6};

  // properties that change
  border-radius: ${({ theme }) => theme.borderRadius.R26};
  padding: 20px 32px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    border-radius: ${({ theme }) => theme.borderRadius.R13};
    padding: 16px 28px;
  }
`;
