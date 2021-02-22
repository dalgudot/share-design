import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { projectIntroduction } from '../../../data/article/introduction';
import { btnHoverTap } from '../../../elements/framer-motion/variants';
import PMedium400 from '../../../elements/typography/p-medium-400';
import { mediaBreakPoint } from '../../../styles/common';

const GotoIntroduction = () => {
  const goToIntroductionText = projectIntroduction().goToIntroduction;

  return (
    <LiMotion //
      variants={btnHoverTap}
      whileHover="whileHover"
      whileTap="whileTap"
    >
      <Link href="article/introduction/1">
        <a>
          <PMedium400 text={goToIntroductionText} color="gray2" />
        </a>
      </Link>
    </LiMotion>
  );
};

export default GotoIntroduction;

const LiMotion = styled(motion.li)`
  margin-top: 48px;
  display: flex;
  justify-content: center;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 36px;
  }
`;
