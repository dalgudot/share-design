import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC } from 'react';
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
        <NoticeContents
          url='https://blog.dalgu.app/'
          text1={`🔔 \u00A0`}
          text2="새 글은 '경험의 기록' 블로그에서 확인하실 수 있습니다."
        />
      )}
      <NoticeContents
        url='https://apps.apple.com/app/reminder-to-do-list/id6444939279'
        text1={`✅ \u00A0`}
        text2={
          isKo
            ? '할 일을 정리할 앱이 필요하신가요?'
            : 'Need an app to organize your to-dos?'
        }
      />
    </>
  );
};

export default NewBlogNotice;

type Props = {
  url: string;
  text1: string;
  text2: string;
};

const NoticeContents: FC<Props> = ({ url, text1, text2 }) => {
  return (
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
          <PMedium text={text1} color='gray1' className='first__p' />
          <PMedium text={text2} color='gray1' className='second__p' />
        </div>
        <PLarge text='>' color='gray3' className='chevron__p' />
      </Layout>
    </MotionA>
  );
};

const MotionA = styled(motion.a)`
  max-width: ${({ theme }) => theme.maxWidth.Paragraph};
  /* margin: 112px auto 0; */
  margin-top: 24px;
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
    /* margin: 96px auto 0; */
    padding: 0 20px;
    /* max-width: ${({ theme }) => theme.maxWidth.MobileList}; */
  }
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
`;
