import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { listVariants } from '../../../foundation/framer-motion/variants';
import IconYoonSeulLogo24 from '../../../foundation/svg/icon-yoonseul-logo-24';
import PLarge from '../../../foundation/typography/p-large';
import PMedium from '../../../foundation/typography/p-medium';
import { mediaBreakPoint } from '../../../styles/common';

// 2022.04.22 추가
const YoonSeulNotice = () => {
  const router = useRouter();
  const locale = router.locale;

  const url =
    locale === 'ko'
      ? 'https://apps.apple.com/kr/app/%EC%9C%A4%EC%8A%AC/id1618657913'
      : 'https://apps.apple.com/app/yoonseul/id1618657913';

  const text =
    locale === 'ko'
      ? '순간의 감정과 생각을 기록하는 일기장, 윤슬을 디자인하고 개발하고 있습니다.'
      : 'I design and develop YoonSeul, a diary to record momentary emotions and thoughts.';

  return (
    <>
      <MotionA
        href={url}
        target='_blank'
        rel='noreferrer'
        variants={listVariants}
        whileHover='whileHover'
        whileTap='whileTap'
      >
        <Layout className='layout'>
          <div>
            <IconYoonSeulLogo24 />
            <PMedium text={text} color='gray1' className='text__p' />
          </div>
          <PLarge text='>' color='gray3' />
        </Layout>
      </MotionA>
    </>
  );
};

export default YoonSeulNotice;

const MotionA = styled(motion.a)`
  max-width: ${({ theme }) => theme.maxWidth.Paragraph};
  margin-top: 36px;
  border: 1px solid ${({ theme }) => theme.gray1};
  padding: 48px 36px;
  display: flex;
  align-items: center;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 36px 24px;
  }

  .layout {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      /* margin-right: -2px; */
      min-width: 70px;

      svg {
        width: 100%;
        max-width: 62px;
        height: 62px;
        border-radius: 12px;

        @media all and (max-width: ${mediaBreakPoint.first}) {
          max-width: 48px;
          height: 48px;
        }
      }
    }
  }

  .text__p {
    margin-left: 16px;
    margin-right: 36px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin-left: 12px;
      margin-right: 24px;
    }
  }
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
`;
