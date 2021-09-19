import { useRouter } from 'next/router';
import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/common/t-article-common';
import IconAppleLogo24 from '../../../foundation/svg/icon_logo_apple_24';
import PLarge from '../../../foundation/typography/p-large';
import { mediaBreakPoint } from '../../../styles/common';
import { useUserAgent, withUserAgent } from 'next-useragent';
import { GetServerSideProps } from 'next';
import { motion } from 'framer-motion';
import { listVariants } from '../../../foundation/framer-motion/variants';

// https://stackoverflow.com/questions/56457935/typescript-error-property-x-does-not-exist-on-type-window
// webkit 에러 해결
declare global {
  interface Window {
    webkit: any;
  }
}

const ArticleNotice = ({ ua }: { ua?: any }) => {
  const router = useRouter();
  const locale = router.locale;
  const appStoreURL: string =
    locale === 'ko'
      ? 'https://apps.apple.com/kr/app/%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0/id1557230065'
      : 'https://apps.apple.com/kr/app/share-design/id1557230065?l=en';

  const { isAndroid } = ua;

  return (
    <>
      {/* 안드로이드 폰인 경우 앱 다운로드 빼기, 추후 iOS 앱인 경우도 빼기  */}
      {isAndroid === false && (
        <MotionContainer
          variants={listVariants}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <A href={appStoreURL} target="_blank">
            <Title>
              <Left>
                <IconAppleLogo24 />
                <PLarge
                  text={tArticleCommon().iOSAPPDownload}
                  color="gray1"
                  weight={700}
                />
              </Left>
              <PLarge
                text={tArticleCommon().chevronRight}
                color="gray1"
                weight={700}
              />
            </Title>
          </A>
        </MotionContainer>
      )}
    </>
  );
};

export default withUserAgent(ArticleNotice);

const MotionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.gray6};

  // 바뀌는 속성
  margin-top: 144px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 120px;
  }
`;

const A = styled.a`
  padding: 32px 0;
  border-top: solid 1px ${({ theme }) => theme.gray6};
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px; // 시각 보정
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 8px;
  }
`;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const ua = useUserAgent(context.req.headers['user-agent']);

  return {
    props: { ua },
  };
};
