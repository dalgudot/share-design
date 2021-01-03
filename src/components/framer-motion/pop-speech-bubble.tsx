import { motion } from 'framer-motion';
import styled from 'styled-components';

const PopSpeechBubble = ({
  text,
  backgroundColor,
  delay,
}: {
  text: string;
  backgroundColor: string;
  delay: string;
}) => {
  // 텍스트 길이가 너무 길면 안 됨.

  return (
    <motion.div variants={disappearVariants(delay)} animate="disappear">
      <motion.div
        variants={popSpeechBubbleVariants}
        initial="start"
        animate="end"
      >
        <Container backgroundColor={backgroundColor}>
          <p>{text}</p>
          <svg width="10px" height="4px" viewBox="0 0 10 4" version="1.1">
            <g id="Home-Modal" stroke="none" fill="none" opacity="0.95">
              <g
                id="consignment-01-1"
                transform="translate(-183.000000, -543.000000)"
                fill={backgroundColor}
              >
                <g id="Group-3" transform="translate(86.000000, 507.000000)">
                  <polygon id="Triangle" points="102 40 107 36 97 36"></polygon>
                </g>
              </g>
            </g>
          </svg>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default PopSpeechBubble;

interface ContainerTypes {
  backgroundColor: string;
}

const Container = styled.div<ContainerTypes>`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 8px 16px;
    font-size: 14px;
    opacity: 0.95;
    border-radius: 2px;
  }
`;

const disappearVariants: Function = (delay: string) => {
  return {
    disappear: {
      scale: 0,
      opacity: 0,
      y: 12,
      transition: {
        delay,
        type: 'spring',
        mass: 0.5,
      },
    },
  };
};

const popSpeechBubbleVariants = {
  start: {
    scale: 0,
    opacity: 0,
    y: 36,
  },
  end: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
};
