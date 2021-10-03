import styled from 'styled-components';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { t } from '../../../data/index/t-index';
import { mediaBreakPoint } from '../../../styles/common';
import PMedium from '../../../foundation/typography/p-medium';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { textButtonVariants } from '../../../foundation/framer-motion/variants';

const ArticleProfile = ({ marginTop }: { marginTop: string }) => {
  return (
    <Link href="/contact">
      <MotionA
        variants={textButtonVariants}
        whileHover="whileHover"
        whileTap="whileTap"
        marginTop={marginTop}
      >
        <img
          src="/images/profile-photo@3x.jpg"
          alt={useSetLanguage(t.contact.profileAlt)}
        />
        <PMedium text={t.myName} color="gray2" />
        <Dot />
        <PMedium text={t.myJob} color="gray2" />
      </MotionA>
    </Link>
  );
};

export default ArticleProfile;

const MotionA = styled(motion.a)<{ marginTop: string }>`
  display: inline-flex;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: 1px;

  img {
    border-radius: 50%;

    border: solid 1px ${({ theme }) => theme.gray2};

    // 바뀌는 속성
    width: 32px;
    height: 32px;
    margin-right: 8px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      width: 28px;
      height: 28px;
      margin-right: 6px;
    }
  }

  p {
    padding-bottom: 1px; // 시각 보정
  }
`;

const Dot = styled.span`
  height: 2px;
  width: 2px;
  background-color: ${({ theme }) => theme.gray2};
  border-radius: 50%;
  margin-top: 3px;
  margin-bottom: 2px; // 시각 보정
  margin-left: 5px;
  margin-right: 3px;
`;
