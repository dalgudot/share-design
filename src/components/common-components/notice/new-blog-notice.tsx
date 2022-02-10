import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { listVariants } from '../../../foundation/framer-motion/variants';
import PLarge from '../../../foundation/typography/p-large';
import PMedium from '../../../foundation/typography/p-medium';
import { mediaBreakPoint } from '../../../styles/common';

const NewBlogNotice = () => {
  const router = useRouter();
  const locale = router.locale;
  const isKo = locale === 'ko';

  return (
    <>
      {isKo && (
        <MotionA
          href='https://blog.dalgu.app/'
          target='_blank'
          rel='noreferrer'
          variants={listVariants}
          whileHover='whileHover'
          whileTap='whileTap'
        >
          <Layout className='layout'>
            <div>
              <PMedium text={`🔔 \u00A0`} color='gray1' className='first__p' />
              <PMedium
                text="새 글은 '경험의 기록' 블로그에서 확인하실 수 있습니다."
                color='gray1'
                className='second__p'
              />
            </div>
            <PLarge text='>' color='gray3' className='chevron__p' />
          </Layout>
        </MotionA>
      )}
    </>
  );
};

export default NewBlogNotice;

const MotionA = styled(motion.a)`
  max-width: ${({ theme }) => theme.maxWidth.DesktopList};
  margin: 112px auto 0;
  /* margin-top: 112px; */
  height: 108px;
  border: 1px solid ${({ theme }) => theme.gray1};
  padding: 0 32px;
  display: flex;
  align-items: center;

  .layout {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      margin-right: -2px;
      min-width: 70px;
    }
  }

  .first__p {
    margin-right: 4px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      display: none;
    }
  }

  .second__p {
    margin-right: 42px;
  }

  .chevron__p {
    margin-left: 5px;
  }

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 96px;
    margin: 96px auto 0;
    padding: 0 20px;
    max-width: ${({ theme }) => theme.maxWidth.MobileList};
  }
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
`;
