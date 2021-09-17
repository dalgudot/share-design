import { motion } from 'framer-motion';
import styled from 'styled-components';
import { buttonVariants } from '../../../foundation/framer-motion/variants';
import PLarge from '../../../foundation/typography/p-large';

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
      variants={buttonVariants}
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

  border-radius: ${({ theme }) => theme.borderRadius.R26};
  padding: 18px 32px;
`;
