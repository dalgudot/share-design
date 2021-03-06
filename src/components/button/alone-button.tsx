import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { btnHoverTap } from '../../foundation/framer-motion/variants';
import PMedium400 from '../../foundation/typography/p-medium-400';
import PSmall700 from '../../foundation/typography/p-small-700';

const AloneButton = ({
  size, // small or medium
  btnText,
  color,
  marginTop,
}: {
  size: string;
  btnText: object;
  color?: string;
  marginTop?: string;
}) => {
  return (
    <MotionDiv //
      size={size}
      bgColor={color}
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
  bgColor?: string;
};

const MotionDiv = styled(motion.div)<MotionDivType>`
  margin-top: ${({ marginTop }) => marginTop};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ size, theme }) =>
    size === 'small' ? theme.borderRadius.R13 : theme.borderRadius.R26};
  background-color: ${({ bgColor, theme }) =>
    bgColor !== 'gray6__30' ? theme.gray7 : theme.gray6__30};
  padding: ${({ size }) => (size === 'small' ? '12px 26px' : '18px 32px')};
`;
